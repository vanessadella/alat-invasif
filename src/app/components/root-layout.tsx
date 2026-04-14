import { useState, useCallback, useMemo, useRef, createContext, useContext } from "react";
import { Outlet } from "react-router";
import {
  InvasiveDevice,
  FormDraft,
  calculateDayCount,
  countPendingIntervensi,
  IntervensiTask,
  generateIntervensiTasks,
  computeAutoChecks,
  getInterventionConfig,
  hasPendingIntervensi,
} from "./invasive-data";
import { FilterState, DEFAULT_FILTER, getActiveFilterCount, FilterModal } from "./filter-modal";
import { CombinedIntervensiModal } from "./combined-intervensi-modal";
import { MedicationHistoryModal } from "./medication-history-modal";
import { Toaster } from "./ui/sonner";

// Shared filter logic
function applyFilter(devices: InvasiveDevice[], filter: FilterState): InvasiveDevice[] {
  const anyAlatChecked = filter.alat.dilepas || filter.alat.prolong;
  const anyStatusChecked = filter.status.berhasil || filter.status.tidakBerhasil;
  const anyIntervensiChecked = filter.intervensi.belumSelesai || filter.intervensi.selesai;

  if (!anyAlatChecked && !anyStatusChecked && !anyIntervensiChecked) return devices;

  return devices.filter((d) => {
    const hasRemoval = !!d.waktuPelepasan;
    const isProlong = !hasRemoval && d.waktuPemasangan && calculateDayCount(d.waktuPemasangan) > 3;

    const alatMatch =
      !anyAlatChecked || (filter.alat.dilepas && hasRemoval) || (filter.alat.prolong && isProlong);

    const statusMatch =
      !anyStatusChecked ||
      (filter.status.berhasil && d.status === "berhasil") ||
      (filter.status.tidakBerhasil && d.status === "tidak_berhasil");

    const hasTasks = d.intervensiTasks && d.intervensiTasks.length > 0;
    const isPending = hasPendingIntervensi(d);
    const isDone = hasTasks && !isPending;
    const intervensiMatch =
      !anyIntervensiChecked ||
      (filter.intervensi.belumSelesai && isPending) ||
      (filter.intervensi.selesai && isDone);

    return alatMatch && statusMatch && intervensiMatch;
  });
}

export interface AppContextType {
  devices: InvasiveDevice[];
  filteredDevices: InvasiveDevice[];
  filter: FilterState;
  activeFilterCount: number;
  currentPage: number;
  showForm: boolean;
  editingDevice: InvasiveDevice | null;
  highlightedDeviceId: string | null;
  pendingCount: number;
  draftCount: number;
  formDraftRef: React.MutableRefObject<FormDraft | null>;
  activeTab: string;

  setActiveTab: (tab: string) => void;
  setCurrentPage: (page: number) => void;
  handleSave: (device: InvasiveDevice) => void;
  handleSaveDraft: (device: InvasiveDevice) => void;
  handleEdit: (device: InvasiveDevice) => void;
  handleCancel: () => void;
  handleStartAdd: () => void;
  handleApplyFilter: (filter: FilterState) => void;
  setShowFilter: (v: boolean) => void;
  handleReminderClick: () => void;
  handleOpenIntervensiModal: (device?: InvasiveDevice) => void;
  handleOpenMedicationHistory: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within RootLayout");
  return ctx;
}

const CARDS_PER_PAGE = 10;

export function RootLayout() {
  const [devices, setDevices] = useState<InvasiveDevice[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingDevice, setEditingDevice] = useState<InvasiveDevice | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState<FilterState>(DEFAULT_FILTER);
  const [showCombinedIntervensi, setShowCombinedIntervensi] = useState(false);
  const [highlightedDeviceId, setHighlightedDeviceId] = useState<string | null>(null);
  const [reminderCursor, setReminderCursor] = useState(0);
  const [activeTab, setActiveTab] = useState("SUMMARY");
  const [showMedicationModal, setShowMedicationModal] = useState(false);

  const formDraftRef = useRef<FormDraft | null>(null);

  const filteredDevices = useMemo(() => applyFilter(devices, filter), [devices, filter]);
  const activeFilterCount = getActiveFilterCount(filter);
  const pendingCount = useMemo(() => countPendingIntervensi(devices), [devices]);
  const draftCount = useMemo(() => devices.filter((d) => d.isDraft).length, [devices]);

  const pendingDeviceIds = useMemo(
    () => filteredDevices.filter((d) => hasPendingIntervensi(d)).map((d) => d.id),
    [filteredDevices]
  );

  const handleSave = useCallback(
    (device: InvasiveDevice) => {
      formDraftRef.current = null;
      let updatedDevice = { ...device };
      const interventionConfig = getInterventionConfig(updatedDevice);
      if (interventionConfig) {
        const scoreValue = interventionConfig.getScoreValue(updatedDevice);
        if (scoreValue) {
          const existingDevice = devices.find((d) => d.id === updatedDevice.id);
          const previousScore = existingDevice
            ? interventionConfig.getScoreValue(existingDevice)
            : "";
          const scoreChanged = scoreValue !== previousScore;
          if (scoreChanged) {
            // The incoming device.pivasLog already has the new score entry appended by the table.
            // Snapshot old intervention tasks into the second-to-last entry (the old score's entry).
            if (
              existingDevice?.intervensiTasks &&
              existingDevice.intervensiTasks.length > 0 &&
              previousScore &&
              updatedDevice.pivasLog.length >= 2
            ) {
              const allDone = existingDevice.intervensiTasks.every((t) => t.checked);
              const oldEntryIdx = updatedDevice.pivasLog.length - 2;
              const updatedLog = [...updatedDevice.pivasLog];
              updatedLog[oldEntryIdx] = {
                ...updatedLog[oldEntryIdx],
                intervensiTasks: [...existingDevice.intervensiTasks],
                intervensiStatus: allDone ? "completed" : "not_done",
              };
              updatedDevice.pivasLog = updatedLog;
            }

            // Generate fresh tasks for the new score
            const tasks = generateIntervensiTasks(scoreValue, undefined, interventionConfig);
            updatedDevice.intervensiTasks = computeAutoChecks(tasks, updatedDevice);
          } else if (
            updatedDevice.intervensiTasks &&
            updatedDevice.intervensiTasks.length > 0
          ) {
            updatedDevice.intervensiTasks = computeAutoChecks(
              updatedDevice.intervensiTasks,
              updatedDevice
            );
          } else {
            const tasks = generateIntervensiTasks(
              scoreValue,
              existingDevice?.intervensiTasks,
              interventionConfig
            );
            updatedDevice.intervensiTasks = computeAutoChecks(tasks, updatedDevice);
          }
        } else {
          updatedDevice.intervensiTasks = [];
        }
      } else {
        updatedDevice.intervensiTasks = [];
      }

      setDevices((prev) => {
        const idx = prev.findIndex((d) => d.id === updatedDevice.id);
        if (idx >= 0) {
          const updated = [...prev];
          updated[idx] = updatedDevice;
          return updated;
        }
        return [updatedDevice, ...prev];
      });
      setShowForm(false);
      setEditingDevice(null);
      setCurrentPage(1);
    },
    [devices]
  );

  const handleSaveDraft = useCallback(
    (device: InvasiveDevice) => {
      formDraftRef.current = null;
      const draftDevice: InvasiveDevice = {
        ...device,
        isDraft: true,
        displayName: device.displayName || device.deviceType || "Draft",
      };
      setDevices((prev) => {
        const idx = prev.findIndex((d) => d.id === draftDevice.id);
        if (idx >= 0) {
          const updated = [...prev];
          updated[idx] = draftDevice;
          return updated;
        }
        return [draftDevice, ...prev];
      });
      setShowForm(false);
      setEditingDevice(null);
      setCurrentPage(1);
    },
    []
  );

  const handleEdit = useCallback((device: InvasiveDevice) => {
    formDraftRef.current = null;
    setEditingDevice(device);
    setShowForm(true);
  }, []);

  const handleCancel = useCallback(() => {
    formDraftRef.current = null;
    setShowForm(false);
    setEditingDevice(null);
  }, []);

  const handleStartAdd = useCallback(() => {
    formDraftRef.current = null;
    setEditingDevice(null);
    setShowForm(true);
  }, []);

  const handleApplyFilter = (newFilter: FilterState) => {
    setFilter(newFilter);
    setCurrentPage(1);
    setShowFilter(false);
  };

  const handleOpenIntervensiModal = (_device?: InvasiveDevice) => {
    setShowCombinedIntervensi(true);
  };

  const handleCloseCombinedIntervensi = () => {
    setShowCombinedIntervensi(false);
  };

  const handleOpenMedicationHistory = () => {
    setShowMedicationModal(true);
  };

  const handleSaveCombinedIntervensi = (updates: { deviceId: string; tasks: IntervensiTask[] }[]) => {
    setDevices((prev) => {
      const updated = [...prev];
      updates.forEach(({ deviceId, tasks }) => {
        const idx = updated.findIndex((d) => d.id === deviceId);
        if (idx >= 0) {
          const device = updated[idx];
          const allChecked = tasks.length > 0 && tasks.every(t => t.checked);
          
          if (allChecked) {
            // Move to history
            const currentTime = new Date().toISOString();
            const config = getInterventionConfig(device) || PIVAS_INTERVENTION_CONFIG;
            const scoreValue = config.getScoreValue(device);
            const historyEntry: PivasLogEntry = {
              timestamp: currentTime,
              score: scoreValue,
              nurse: "Nurse Sarah", // Mock active user
              intervensiTasks: tasks,
            };
            updated[idx] = {
              ...device,
              intervensiTasks: [], // Clear active
              pivasLog: [...(device.pivasLog || []), historyEntry]
            };
          } else {
            // Unfinished, strictly save checklist state
            updated[idx] = { ...device, intervensiTasks: tasks };
          }
        }
      });
      return updated;
    });
  };

  const handleReminderClick = useCallback(() => {
    if (pendingDeviceIds.length === 0) return;
    // Switch to INVASIF tab so user can see the highlighted device
    setActiveTab("INVASIF");
    const nextCursor = highlightedDeviceId
      ? (pendingDeviceIds.indexOf(highlightedDeviceId) + 1) % pendingDeviceIds.length
      : reminderCursor % pendingDeviceIds.length;
    const targetId = pendingDeviceIds[nextCursor];
    const deviceIndex = filteredDevices.findIndex((d) => d.id === targetId);
    if (deviceIndex < 0) return;
    const targetPage = Math.floor(deviceIndex / CARDS_PER_PAGE) + 1;
    setHighlightedDeviceId(null);
    setTimeout(() => {
      setCurrentPage(targetPage);
      setHighlightedDeviceId(targetId);
      setReminderCursor(nextCursor + 1);
    }, 50);
    setTimeout(() => {
      setHighlightedDeviceId(null);
    }, 2000);
  }, [pendingDeviceIds, filteredDevices, highlightedDeviceId, reminderCursor]);

  const contextValue: AppContextType = {
    devices,
    filteredDevices,
    filter,
    activeFilterCount,
    currentPage,
    showForm,
    editingDevice,
    highlightedDeviceId,
    pendingCount,
    draftCount,
    formDraftRef,
    activeTab,
    setActiveTab,
    setCurrentPage,
    handleSave,
    handleSaveDraft,
    handleEdit,
    handleCancel,
    handleStartAdd,
    handleApplyFilter,
    setShowFilter,
    handleReminderClick,
    handleOpenIntervensiModal,
    handleOpenMedicationHistory,
  };

  // Compute whether any devices have tasks at all (even if all done)
  const hasAnyIntervensiTasks = devices.some(d => d.intervensiTasks && d.intervensiTasks.length > 0);

  return (
    <AppContext.Provider value={contextValue}>
      {/* Global modals */}
      {showFilter && (
        <FilterModal filter={filter} onApply={handleApplyFilter} onClose={() => setShowFilter(false)} />
      )}
      {showCombinedIntervensi && (
        <CombinedIntervensiModal
          devices={devices}
          onSave={handleSaveCombinedIntervensi}
          onClose={handleCloseCombinedIntervensi}
        />
      )}
      {showMedicationModal && (
        <MedicationHistoryModal onClose={() => setShowMedicationModal(false)} />
      )}
      <div className="w-full h-[100dvh] bg-background font-sans overflow-hidden text-foreground">
        <Outlet />
      </div>
      <Toaster />
    </AppContext.Provider>
  );
}
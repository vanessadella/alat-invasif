import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Filter, Plus, Pencil, X, Check, Clock, AlertCircle, CheckCircle2, BookmarkPlus, Save, FileText, FileCheck2, Trash2 } from "lucide-react";
import {
  InvasiveDevice,
  InvasiveDeviceConfig,
  INVASIVE_DEVICES,
  DEVICE_NAMES,
  ALASAN_PELEPASAN,
  PEMASANG_OPTIONS,
  PivasLogEntry,
  FormDraft,
  formatDateDisplay,
  calculateDayCount,
  hasPendingIntervensi,
} from "./invasive-data";
import { FilterState, getActiveFilterCount } from "./filter-modal";
import { InlineCellDropdown } from "./inline-cell-dropdown";
import { DateTimePicker } from "./date-time-picker";
import { PivasModal } from "./pivas-modal";
import { DivaModal } from "./diva-modal";
import { StatusModal } from "./status-modal";
import { EkstravasasiModal } from "./ekstravasasi-modal";
import { EmptyStateNodata } from "./empty-state-nodata";

const ITEMS_PER_PAGE = 10;

interface InvasiveTableProps {
  devices: InvasiveDevice[];
  allDevices: InvasiveDevice[];
  currentPage: number;
  onPageChange: (page: number) => void;
  onSave: (device: InvasiveDevice) => void;
  onOpenFilter: () => void;
  filter: FilterState;
  isAddingRow: boolean;
  onSetAddingRow: (v: boolean) => void;
  onEdit?: (device: InvasiveDevice) => void;
  editingDevice?: InvasiveDevice | null;
  onCancelEdit?: () => void;
  onOpenIntervensi?: (device: InvasiveDevice) => void;
  onSaveDraft?: (device: InvasiveDevice) => void;
  highlightedDeviceId?: string | null;
  formDraftRef?: React.MutableRefObject<FormDraft | null>;
}

function getRekomendasi(device: InvasiveDevice): string {
  if (!device.waktuPemasangan) return "-";
  if (device.deviceType === "IV Perifer") {
    const r = new Date(device.waktuPemasangan);
    r.setDate(r.getDate() + 3);
    return formatDateDisplay(r.toISOString());
  }
  if (device.deviceType === "CVC" || device.deviceType === "PICC") {
    const r = new Date(device.waktuPemasangan);
    r.setDate(r.getDate() + 7);
    return formatDateDisplay(r.toISOString());
  }
  return "Sesuai Indikasi Klinis";
}

function StatusBadge({ status }: { status: string }) {
  if (!status) return <span style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}>-</span>;
  const isFailed = status === "tidak_berhasil";
  return (
    <span
      className={`px-2 py-0.5 rounded-full whitespace-nowrap ${isFailed ? "bg-[#fff1f2] text-[#be123c]" : "bg-[#ecfdf5] text-[#047857]"
        }`}
      style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
    >
      {isFailed ? "Tidak Berhasil" : "Berhasil"}
    </span>
  );
}

function RekomendasiBadge({ text }: { text: string }) {
  if (text === "-") return <span style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}>-</span>;
  return (
    <span
      className="px-2 py-0.5 rounded-full whitespace-nowrap bg-[#f0f9ff] text-[#0369a1]"
      style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
    >
      {text}
    </span>
  );
}

function getDefaultDateTime(): string {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 16);
}

// Cell styles matching Figma exactly
const cellBase = "relative border border-border bg-card";
const stickyFirstTh = "text-left px-4 py-2 border border-border text-foreground whitespace-nowrap sticky left-0 bg-[#f8fafc] z-10";
const stickyFirstTd = "px-4 py-2 border border-border text-foreground whitespace-nowrap sticky left-0 bg-card z-10";
const stickyFirstTdEdit = "relative border border-border bg-card sticky left-0 z-10";
const stickyActionTh = "text-left px-4 py-2 border border-border text-foreground whitespace-nowrap w-16 sticky right-0 bg-[#f8fafc] z-10";
const stickyActionTd = "px-4 py-2 border border-border sticky right-0 bg-card z-10";
const stickyActionTdEdit = "relative border border-border bg-card sticky right-0 z-10";
const leftShadow: React.CSSProperties = { boxShadow: "4px 0 8px -2px rgba(0,0,0,0.08)" };
const rightShadow: React.CSSProperties = { boxShadow: "-4px 0 8px -2px rgba(0,0,0,0.08)" };
const noShadow: React.CSSProperties = { boxShadow: "none" };
const thStyle: React.CSSProperties = { fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" };
const tdStyle: React.CSSProperties = { fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", fontFamily: "'Inter', sans-serif" };

// -------------- PIVAS Cell ----------------
function PivasCell({ score }: { score: string; kategoriPhlebitis?: string }) {
  if (!score) return null;

  const scoreNum = parseInt(score.charAt(0), 10);
  const scoreColor =
    scoreNum >= 4 ? "text-[#be123c]" :
      scoreNum >= 2 ? "text-[#b45309]" :
        "text-foreground";

  return (
    <div className="flex items-center gap-1 flex-wrap">
      <span className={scoreColor} style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}>
        {score || "-"}
      </span>
    </div>
  );
}

// -------------- Inline Editable Row (shared for Add & Edit) ----------------
function InlineEditableRow({
  allDevices,
  initialDevice,
  onSave,
  onSaveDraft,
  onCancel,
  scrolledLeft,
  scrolledRight,
  formDraftRef,
}: {
  allDevices: InvasiveDevice[];
  initialDevice?: InvasiveDevice;
  onSave: (device: InvasiveDevice) => void;
  onSaveDraft?: (device: InvasiveDevice) => void;
  onCancel: () => void;
  scrolledLeft?: boolean;
  scrolledRight?: boolean;
  formDraftRef?: React.MutableRefObject<FormDraft | null>;
}) {
  const isEditing = !!initialDevice;
  const draft = formDraftRef?.current;
  const hasDraft = !!draft;

  // Parse initial values for IV Perifer posisi/lokasi split
  const initialPosisi = initialDevice?.deviceType === "IV Perifer"
    ? initialDevice.location?.split(",")[0]?.trim() || ""
    : "";
  const initialLokasi = initialDevice?.deviceType === "IV Perifer"
    ? initialDevice.location?.split(",")[1]?.trim() || ""
    : initialDevice?.location || "";

  // Handle mobile→desktop conversion: if draft.posisi is empty but draft.location
  // contains a comma (came from mobile's combined format), split it
  const resolvedDraftPosisi = (() => {
    if (!draft) return undefined;
    if (draft.posisi) return draft.posisi;
    // Mobile stores full combined location; split for IV Perifer
    if (draft.deviceType === "IV Perifer" && draft.location?.includes(",")) {
      return draft.location.split(",")[0]?.trim() || "";
    }
    return "";
  })();
  const resolvedDraftLocation = (() => {
    if (!draft) return undefined;
    if (draft.posisi) return draft.location; // Desktop format, already split
    // Mobile stores full combined location; split for IV Perifer
    if (draft.deviceType === "IV Perifer" && draft.location?.includes(",")) {
      return draft.location.split(",")[1]?.trim() || "";
    }
    return draft.location;
  })();

  // Resolve initial values: draft first, then initialDevice, then defaults
  const [deviceType, setDeviceType] = useState(draft?.deviceType ?? initialDevice?.deviceType ?? "");
  const [jenis, setJenis] = useState(draft?.jenis ?? initialDevice?.jenis ?? "");
  const [location, setLocation] = useState(resolvedDraftLocation ?? initialLokasi);
  const [posisi, setPosisi] = useState(resolvedDraftPosisi ?? initialPosisi);
  const [size, setSize] = useState(draft?.size ?? initialDevice?.size ?? "");
  const [sizeHuber, setSizeHuber] = useState(draft?.sizeHuber ?? initialDevice?.sizeHuber ?? "");
  const [divaScore, setDivaScore] = useState(draft?.divaScore ?? initialDevice?.divaScore ?? "");
  const [divaType, setDivaType] = useState<"dewasa" | "anak">((draft?.divaType as "dewasa" | "anak") ?? initialDevice?.divaType ?? "dewasa");
  const [waktuPemasangan, setWaktuPemasangan] = useState(draft?.waktuPemasangan ?? initialDevice?.waktuPemasangan ?? getDefaultDateTime());
  const [waktuPelepasan, setWaktuPelepasan] = useState(draft?.waktuPelepasan ?? initialDevice?.waktuPelepasan ?? "");
  const [alasanPelepasan, setAlasanPelepasan] = useState(draft?.alasanPelepasan ?? initialDevice?.alasanPelepasan ?? "");
  const [ekstravasasiScore, setEkstravasasiScore] = useState(draft?.ekstravasasiScore ?? initialDevice?.ekstravasasiScore ?? "");
  const [pivasScore, setPivasScore] = useState(draft?.pivasScore ?? initialDevice?.pivasScore ?? "");
  const [status, setStatus] = useState(
    draft?.status
      ? draft.status
      : initialDevice?.status === "tidak_berhasil" ? "Tidak Berhasil"
        : initialDevice?.status === "berhasil" ? "Berhasil" : ""
  );
  const [statusKriteria, setStatusKriteria] = useState<string[]>(draft?.statusKriteria ?? initialDevice?.statusKriteria ?? []);
  const [komen, setKomen] = useState(draft?.komen ?? initialDevice?.komen ?? "");
  const [pemasang, setPemasang] = useState(draft?.pemasang ?? initialDevice?.pemasang ?? "");
  const [pelepas, setPelepas] = useState(draft?.pelepas ?? initialDevice?.pelepas ?? "");
  const [showPivasModal, setShowPivasModal] = useState(false);
  const [showDivaModal, setShowDivaModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showEkstravasasiModal, setShowEkstravasasiModal] = useState(false);
  const [kategoriPhlebitis, setKategoriPhlebitis] = useState(draft?.kategoriPhlebitis ?? initialDevice?.kategoriPhlebitis ?? "");

  // Track whether we should skip the deviceType reset effect on first render with draft
  const isInitialMount = useRef(hasDraft);

  const config: InvasiveDeviceConfig | undefined = INVASIVE_DEVICES.find((d) => d.name === deviceType);

  const isIvPerifer = deviceType === "IV Perifer";
  const needsEkstravasasi = (deviceType === "Chemoport" || deviceType === "PICC") && alasanPelepasan === "Ekstravasasi";

  // Sync form state to draft ref on every change
  useEffect(() => {
    if (formDraftRef) {
      formDraftRef.current = {
        deviceType, jenis, location, posisi, size, sizeHuber,
        divaScore, divaType,
        waktuPemasangan, waktuPelepasan, alasanPelepasan,
        ekstravasasiScore,
        pivasScore, kategoriPhlebitis,
        status, statusKriteria,
        pemasang, pelepas, komen,
      };
    }
  }, [deviceType, jenis, location, posisi, size, sizeHuber, divaScore, divaType, waktuPemasangan, waktuPelepasan, alasanPelepasan, ekstravasasiScore, pivasScore, kategoriPhlebitis, status, statusKriteria, pemasang, pelepas, komen, formDraftRef]);

  // Reset dependent fields when device type changes (skip on initial mount with draft)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!isEditing || deviceType !== initialDevice?.deviceType) {
      setLocation("");
      setPosisi("");
      setSize("");
      setSizeHuber("");
      setPivasScore("");
      setAlasanPelepasan("");
      setJenis("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceType]);

  const getDisplayName = (): string => {
    if (isEditing) return initialDevice!.displayName;
    if (!deviceType) return "";
    const existingCount = allDevices.filter((d) => d.deviceType === deviceType).length;
    const prefix = deviceType === "IV Perifer" ? "IV" : deviceType;
    return `${prefix} ${existingCount + 1}`;
  };

  // Build location options based on device type
  const locationOptions = config?.locations || [];
  const posisiOptions = deviceType === "IV Perifer"
    ? [...new Set(locationOptions.map((l) => l.split(",")[0]?.trim()).filter(Boolean))]
    : [];
  const lokasiOptions = deviceType === "IV Perifer"
    ? [...new Set(locationOptions.map((l) => l.split(",")[1]?.trim()).filter(Boolean))]
    : locationOptions;

  const handleSave = () => {
    if (!deviceType || !waktuPemasangan) return;
    const fullLocation = deviceType === "IV Perifer" && posisi ? `${posisi}, ${location}` : location;

    // Build PIVAS log - append new entry if score changed
    let pivasLog: PivasLogEntry[] = initialDevice?.pivasLog || [];
    if (pivasScore && pivasScore !== (initialDevice?.pivasScore || "")) {
      const now = new Date();
      const offset = now.getTimezoneOffset();
      const local = new Date(now.getTime() - offset * 60 * 1000);
      pivasLog = [
        ...pivasLog,
        {
          score: pivasScore,
          timestamp: local.toISOString().slice(0, 16),
          nurse: pemasang || "Nurse",
          kategoriPhlebitis: kategoriPhlebitis || undefined,
        },
      ];
    }

    const device: InvasiveDevice = {
      id: initialDevice?.id || `inv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      deviceType,
      displayName: getDisplayName(),
      jenis,
      location: fullLocation,
      size,
      sizeHuber,
      divaScore: isIvPerifer ? divaScore : undefined,
      divaType: isIvPerifer ? divaType : undefined,
      waktuPemasangan,
      waktuPelepasan,
      alasanPelepasan,
      ekstravasasiScore: needsEkstravasasi ? ekstravasasiScore : undefined,
      pivasScore,
      pivasLog,
      kategoriPhlebitis,
      status: (status === "Tidak Berhasil" ? "tidak_berhasil" : status === "Berhasil" ? "berhasil" : "") as InvasiveDevice["status"],
      statusKriteria,
      pemasang,
      pelepas,
      komen,
      intervensiTasks: initialDevice?.intervensiTasks,
    };
    onSave(device);
  };

  const handleSaveDraft = () => {
    const fullLocation = deviceType === "IV Perifer" && posisi ? `${posisi}, ${location}` : location;
    const device: InvasiveDevice = {
      id: initialDevice?.id || `inv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      deviceType,
      displayName: initialDevice?.displayName || getDisplayName() || deviceType || "Draft",
      jenis,
      location: fullLocation,
      size,
      sizeHuber,
      divaScore: isIvPerifer ? divaScore : undefined,
      divaType: isIvPerifer ? divaType : undefined,
      waktuPemasangan,
      waktuPelepasan,
      alasanPelepasan,
      ekstravasasiScore: needsEkstravasasi ? ekstravasasiScore : undefined,
      pivasScore,
      pivasLog: initialDevice?.pivasLog || [],
      kategoriPhlebitis,
      status: (status === "Tidak Berhasil" ? "tidak_berhasil" : status === "Berhasil" ? "berhasil" : "") as InvasiveDevice["status"],
      statusKriteria,
      pemasang,
      pelepas,
      komen,
      intervensiTasks: initialDevice?.intervensiTasks,
      isDraft: true,
    };
    if (onSaveDraft) onSaveDraft(device);
  };

  // Rekomendasi preview
  const rekPreview = (() => {
    if (!waktuPemasangan || !deviceType) return "Sesuai Indikasi Klinis";
    if (deviceType === "IV Perifer") {
      const r = new Date(waktuPemasangan);
      r.setDate(r.getDate() + 3);
      return formatDateDisplay(r.toISOString());
    }
    if (deviceType === "CVC" || deviceType === "PICC") {
      const r = new Date(waktuPemasangan);
      r.setDate(r.getDate() + 7);
      return formatDateDisplay(r.toISOString());
    }
    return "Sesuai Indikasi Klinis";
  })();

  const statusOptions = ["Berhasil", "Tidak Berhasil"];

  // Device change confirmation
  const [pendingDeviceType, setPendingDeviceType] = useState<string | null>(null);
  const hasFilledData = !!(jenis || location || size || sizeHuber || divaScore || pivasScore || alasanPelepasan || status || pemasang || pelepas || komen);
  const handleDeviceTypeChange = (newType: string) => {
    if (deviceType && hasFilledData && newType !== deviceType) {
      setPendingDeviceType(newType);
    } else {
      setDeviceType(newType);
    }
  };
  const confirmDeviceChange = () => {
    if (pendingDeviceType !== null) {
      setJenis(""); setLocation(""); setPosisi(""); setSize(""); setSizeHuber("");
      setDivaScore(""); setPivasScore(""); setAlasanPelepasan("");
      setEkstravasasiScore(""); setStatus(""); setStatusKriteria([]);
      setPemasang(""); setPelepas(""); setKomen(""); setKategoriPhlebitis("");
      setDeviceType(pendingDeviceType);
      setPendingDeviceType(null);
    }
  };

  // Waktu pelepasan mandatory when alasan filled, except "Dibawa Pulang"
  const needsWaktuPelepasan = !!alasanPelepasan && alasanPelepasan !== "Dibawa Pulang";

  // Format DIVA display
  const formatDivaDisplay = (score: string, type: "dewasa" | "anak"): string => {
    if (!score) return "";
    if (type === "anak") {
      const n = parseInt(score, 10);
      return `Anak: ${n <= 3 ? "Risiko Rendah" : "Risiko Tinggi"}`;
    }
    const n = parseInt(score, 10);
    return `Dewasa: ${score}-${n === 0 ? "Risiko Rendah" : n <= 3 ? "Risiko Sedang" : "Risiko Tinggi"}`;
  };

  return (
    <tr className="bg-card">
      {/* Alat Invasif */}
      <td className={stickyFirstTdEdit} style={scrolledLeft ? leftShadow : noShadow}>
        {isEditing ? (
          <div className="h-10 flex items-center pl-4">
            <span className="text-foreground" style={tdStyle}>{initialDevice!.displayName}</span>
          </div>
        ) : (
          <InlineCellDropdown
            options={DEVICE_NAMES}
            value={deviceType}
            onChange={handleDeviceTypeChange}
            placeholder="Pilih Alat"
          />
        )}
      </td>
      {/* Jenis */}
      <td className={cellBase}>
        {config?.jenisOptions && config.jenisOptions.length > 0 ? (
          <InlineCellDropdown
            options={config.jenisOptions}
            value={jenis}
            onChange={setJenis}
            placeholder="Pilih Jenis"
            allowFreeText
          />
        ) : (
          <InlineCellDropdown
            options={[]}
            value={jenis}
            onChange={setJenis}
            placeholder="Pilih Jenis"
            allowFreeText
          />
        )}
      </td>
      {/* Posisi */}
      <td className={cellBase}>
        {deviceType === "IV Perifer" ? (
          <InlineCellDropdown
            options={posisiOptions}
            value={posisi}
            onChange={setPosisi}
            placeholder="Pilih Posisi"
          />
        ) : (
          <div className="h-10 flex items-center pl-4">
            <span className="text-muted-foreground" style={tdStyle}>&nbsp;</span>
          </div>
        )}
      </td>
      {/* Lokasi */}
      <td className={cellBase}>
        <InlineCellDropdown
          options={lokasiOptions}
          value={location}
          onChange={setLocation}
          placeholder="Pilih Lokasi"
          allowFreeText
        />
      </td>
      {/* Size */}
      <td className={cellBase}>
        <InlineCellDropdown
          options={config?.sizes || []}
          value={size}
          onChange={setSize}
          placeholder="Size"
          allowFreeText
        />
      </td>
      {/* Size Huber Needle */}
      <td className={cellBase}>
        {config?.sizeHuberOptions && config.sizeHuberOptions.length > 0 ? (
          <InlineCellDropdown
            options={config.sizeHuberOptions}
            value={sizeHuber}
            onChange={setSizeHuber}
            placeholder="Size Huber"
            allowFreeText
          />
        ) : (
          <div className="h-10 flex items-center pl-4">
            <span className="text-muted-foreground" style={tdStyle}>&nbsp;</span>
          </div>
        )}
      </td>
      {/* Waktu Pemasangan */}
      <td className={cellBase}>
        <DateTimePicker
          value={waktuPemasangan}
          onChange={setWaktuPemasangan}
          placeholder="Pilih Waktu Pemasangan"
        />
      </td>
      {/* Rekomendasi */}
      <td className={cellBase}>
        <div className="h-10 flex items-center pl-4">
          <RekomendasiBadge text={rekPreview} />
        </div>
      </td>
      {/* Alasan Pelepasan */}
      <td className={cellBase}>
        <div className="flex flex-col">
          <InlineCellDropdown
            options={ALASAN_PELEPASAN}
            value={alasanPelepasan}
            onChange={(v) => {
              setAlasanPelepasan(v);
              if (v !== "Ekstravasasi") setEkstravasasiScore("");
              if (v === "Ekstravasasi" && (deviceType === "Chemoport" || deviceType === "PICC") && !ekstravasasiScore) {
                setShowEkstravasasiModal(true);
              }
            }}
            placeholder="Pilih Alasan"
            allowFreeText
          />
          {needsEkstravasasi && ekstravasasiScore && (
            <div className="flex items-center gap-1.5 px-4 pb-1">
              <span className="text-[10px] font-bold text-[#c2410c] bg-[#fff7ed] px-1.5 py-0.5 rounded border border-[#fed7aa]">
                Grade {ekstravasasiScore}
              </span>
              <button onClick={() => setShowEkstravasasiModal(true)} className="text-[10px] text-[#00277f] font-bold hover:underline">Ubah</button>
            </div>
          )}
          {needsEkstravasasi && !ekstravasasiScore && (
            <button onClick={() => setShowEkstravasasiModal(true)} className="text-[10px] text-destructive font-bold px-4 pb-1 text-left hover:underline">
              ⚠ Input skor
            </button>
          )}
        </div>
        {showEkstravasasiModal && (
          <EkstravasasiModal
            currentScore={ekstravasasiScore}
            onSave={(score) => { setEkstravasasiScore(score); setShowEkstravasasiModal(false); }}
            onClose={() => setShowEkstravasasiModal(false)}
          />
        )}
      </td>
      {/* Waktu Pelepasan */}
      <td className={cellBase}>
        <DateTimePicker
          value={waktuPelepasan}
          onChange={setWaktuPelepasan}
          placeholder="Pilih Waktu Pelepasan"
        />
      </td>
      {/* Skor PIVAS */}
      <td className={cellBase}>
        {config?.hasPivas ? (
          <div
            className="flex items-center h-10 pl-4 pr-4 cursor-pointer hover:bg-secondary/30 transition-colors"
            onClick={() => setShowPivasModal(true)}
          >
            <span
              className={pivasScore ? "text-foreground" : "text-muted-foreground"}
              style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
            >
              {pivasScore ? pivasScore.split(" - ")[0] : "Skor"}
            </span>
          </div>
        ) : (
          <div className="h-10 flex items-center pl-4">
            <span className="text-muted-foreground" style={tdStyle}>&nbsp;</span>
          </div>
        )}
        {showPivasModal && config?.hasPivas && (
          <PivasModal
            currentScore={pivasScore}
            onSave={(score, kat) => { setPivasScore(score); setKategoriPhlebitis(kat); setShowPivasModal(false); }}
            onClose={() => setShowPivasModal(false)}
          />
        )}
      </td>
      {/* Status - opens modal instead of inline dropdown */}
      <td className={cellBase}>
        <div
          className="flex items-center h-10 pl-4 pr-4 cursor-pointer hover:bg-secondary/30 transition-colors gap-2"
          onClick={() => setShowStatusModal(true)}
        >
          <span
            className={status ? "text-foreground" : "text-muted-foreground"}
            style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
          >
            {status || "Pilih Status"}
          </span>
          {statusKriteria.length > 0 && (
            <span className="text-xs font-bold text-[#00277f] bg-[#f0f4ff] px-1 py-0.5 rounded border border-[#00277f]/20">
              {statusKriteria.length}
            </span>
          )}
        </div>
        {showStatusModal && (
          <StatusModal
            deviceType={deviceType || "Alat Invasif"}
            currentStatus={(status === "Tidak Berhasil" ? "tidak_berhasil" : status === "Berhasil" ? "berhasil" : "") as "berhasil" | "tidak_berhasil" | ""}
            currentKriteria={statusKriteria}
            onSave={(s, k) => {
              setStatus(s === "berhasil" ? "Berhasil" : "Tidak Berhasil");
              setStatusKriteria(k);
              setShowStatusModal(false);
            }}
            onClose={() => setShowStatusModal(false)}
          />
        )}
      </td>
      {/* Komen */}
      <td className={cellBase}>
        <div className="flex items-center h-10 pl-4 pr-4">
          <input
            type="text"
            className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
            placeholder="Tambah komen..."
            value={komen}
            onChange={(e) => setKomen(e.target.value)}
          />
        </div>
      </td>
      {/* Pemasang */}
      <td className={cellBase}>
        <InlineCellDropdown
          options={PEMASANG_OPTIONS}
          value={pemasang}
          onChange={setPemasang}
          placeholder="Pilih Pemasang"
          allowFreeText
        />
      </td>
      {/* Pelepas */}
      <td className={cellBase}>
        <InlineCellDropdown
          options={PEMASANG_OPTIONS}
          value={pelepas}
          onChange={setPelepas}
          placeholder="Pilih Pelepas"
          allowFreeText
        />
      </td>
      {/* Actions */}
      <td className={stickyActionTdEdit} style={scrolledRight ? rightShadow : noShadow}>
        <div className="flex items-center justify-center gap-1 h-10">
          {onSaveDraft && (
            <button
              onClick={handleSaveDraft}
              disabled={!deviceType}
              className="p-1.5 hover:opacity-70 transition-opacity disabled:opacity-30"
              title="Simpan Draft"
            >
              <Save className="w-5 h-5 text-[#0369a1]" />
            </button>
          )}
          <button
            onClick={handleSave}
            disabled={!deviceType || !waktuPemasangan || (needsWaktuPelepasan && !waktuPelepasan)}
            className="flex items-center justify-center size-[24px] hover:opacity-70 transition-opacity disabled:opacity-30 rounded-full border border-[#047857] bg-white"
            title="Simpan"
          >
            <Check className="w-4 h-4 text-[#047857]" />
          </button>
          <button
            onClick={onCancel}
            className="flex items-center justify-center size-[24px] hover:opacity-70 transition-opacity rounded-full border border-[#be123c] bg-white"
            title="Batal"
          >
            <X className="w-4 h-4 text-[#be123c]" />
          </button>
        </div>
        {/* Device change confirmation */}
        {pendingDeviceType !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(55, 55, 55, 0.65)' }} onClick={() => setPendingDeviceType(null)}>
            <div className="bg-white rounded-xl w-full max-w-[380px] overflow-hidden shadow-xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="text-foreground text-base font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>Ganti Alat Invasif?</h3>
                <button onClick={() => setPendingDeviceType(null)} className="text-muted-foreground text-lg">×</button>
              </div>
              <p className="px-4 py-4 text-sm text-foreground">Data yang sudah Anda isi belum disimpan dan akan hilang. Yakin ingin lanjut ganti?</p>
              <div className="flex items-center justify-end gap-3 px-4 py-3 border-t border-border">
                <button onClick={() => setPendingDeviceType(null)} className="px-5 py-2 border border-border rounded-lg text-sm font-bold text-foreground hover:bg-secondary transition-colors">BATAL</button>
                <button onClick={confirmDeviceChange} className="px-5 py-2 bg-[#be123c] text-white rounded-lg text-sm font-bold hover:bg-[#9f1239] transition-colors">YA, GANTI</button>
              </div>
            </div>
          </div>
        )}
      </td>
    </tr>
  );
}

// -------------- Main Table ----------------
export function InvasiveTable({
  devices,
  allDevices,
  currentPage,
  onPageChange,
  onSave,
  onOpenFilter,
  filter,
  isAddingRow,
  onSetAddingRow,
  onEdit,
  editingDevice,
  onCancelEdit,
  onOpenIntervensi,
  onSaveDraft,
  highlightedDeviceId,
  formDraftRef,
}: InvasiveTableProps) {
  const [scrolledLeft, setScrolledLeft] = useState(false);
  const [scrolledRight, setScrolledRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Derive editingRowId from the prop
  const editingRowId = editingDevice?.id ?? null;

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft: sl, scrollWidth, clientWidth } = el;
    setScrolledLeft(sl > 2);
    setScrolledRight(sl + clientWidth < scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  // Re-check scroll when data changes (rows added/removed may change table width)
  useEffect(() => {
    checkScroll();
  }, [devices.length, isAddingRow, editingRowId, checkScroll]);

  // Scroll highlighted row into view
  useEffect(() => {
    if (!highlightedDeviceId) return;
    requestAnimationFrame(() => {
      const row = document.querySelector(`tr[data-device-id="${highlightedDeviceId}"]`);
      if (row) {
        row.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }, [highlightedDeviceId]);

  const totalPages = Math.max(1, Math.ceil(devices.length / ITEMS_PER_PAGE));
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedDevices = devices.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const activeFilters = getActiveFilterCount(filter);

  const terpasang = devices.filter((d) => !d.waktuPelepasan && d.status === "berhasil").length;
  const dilepas = devices.filter((d) => !!d.waktuPelepasan).length;
  const prolong = devices.filter((d) => {
    if (!d.waktuPemasangan || d.waktuPelepasan) return false;
    return calculateDayCount(d.waktuPemasangan) > 3;
  }).length;
  const berhasil = devices.filter((d) => d.status === "berhasil").length;
  const tidakBerhasil = devices.filter((d) => d.status === "tidak_berhasil").length;
  const draftDevices = devices.filter((d) => d.isDraft).length;

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Header with badges and buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex gap-2 flex-1 flex-wrap">
          <span className="bg-[#d7e3ea] text-[#166886] px-2 py-0.5 rounded-full" style={thStyle}>
            <span style={{ fontWeight: "var(--font-weight-bold)" }}>{terpasang} </span>
            <span style={{ fontWeight: "var(--font-weight-normal)" }}>Terpasang</span>
          </span>
          <span className="bg-muted text-foreground px-2 py-0.5 rounded-full" style={thStyle}>
            <span style={{ fontWeight: "var(--font-weight-bold)" }}>{dilepas} </span>
            <span style={{ fontWeight: "var(--font-weight-normal)" }}>Dilepas</span>
          </span>
          <span className="bg-[#fffbeb] text-[#b45309] px-2 py-0.5 rounded-full" style={thStyle}>
            <span style={{ fontWeight: "var(--font-weight-bold)" }}>{prolong} </span>
            <span style={{ fontWeight: "var(--font-weight-normal)" }}>Prolong</span>
          </span>
          <span className="bg-[#ecfdf5] text-[#047857] px-2 py-0.5 rounded-full" style={thStyle}>
            <span style={{ fontWeight: "var(--font-weight-bold)" }}>{berhasil} </span>
            <span style={{ fontWeight: "var(--font-weight-normal)" }}>Berhasil</span>
          </span>
          <span className="bg-[#fff1f2] text-[#be123c] px-2 py-0.5 rounded-full" style={thStyle}>
            <span style={{ fontWeight: "var(--font-weight-bold)" }}>{tidakBerhasil} </span>
            <span style={{ fontWeight: "var(--font-weight-normal)" }}>Tidak Berhasil</span>
          </span>
          {draftDevices > 0 && (
            <span className="bg-[#FFF7ED] text-[#c2410c] px-2 py-0.5 rounded-full" style={thStyle}>
              <span style={{ fontWeight: "var(--font-weight-bold)" }}>{draftDevices} </span>
              <span style={{ fontWeight: "var(--font-weight-normal)" }}>Draft</span>
            </span>
          )}
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={onOpenFilter}
            className="relative flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-card hover:bg-secondary transition-colors"
            style={thStyle}
          >
            <Filter className="w-5 h-5" />
            Filter
            {activeFilters > 0 && (
              <span
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
              >
                {activeFilters}
              </span>
            )}
          </button>
          <button
            onClick={() => onSetAddingRow(true)}
            disabled={isAddingRow || editingRowId !== null}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
            style={thStyle}
          >
            <Plus className="w-5 h-5" />
            Tambah Invasif
          </button>
        </div>
      </div>

      {/* Table */}
      {(paginatedDevices.length > 0 || isAddingRow || editingRowId !== null) ? (
        <div ref={scrollContainerRef} className="bg-card rounded-lg overflow-x-auto border border-border">
          <table className="w-full min-w-[1600px] border-collapse">
            <thead>
              <tr className="bg-[#f8fafc]">
                <th className={stickyFirstTh} style={scrolledLeft ? { ...thStyle, ...leftShadow } : thStyle}>Alat Invasif<span className="text-destructive">*</span></th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap w-[120px]" style={thStyle}>Jenis</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap w-[124px]" style={thStyle}>Posisi</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap" style={thStyle}>Lokasi</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap w-[80px]" style={thStyle}>Size</th>
                <th className="text-left px-4 py-2 border border-border text-foreground w-[112px]" style={thStyle}>Size Huber Needle</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap" style={thStyle}>
                  Waktu Pemasangan<span className="text-destructive">*</span>
                </th>
                <th className="text-left px-4 py-2 border border-border text-foreground" style={thStyle}>Rekomendasi Pelepasan Alat</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap" style={thStyle}>Alasan Pelepasan</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap" style={thStyle}>Waktu Pelepasan</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap" style={thStyle}>Skor PIVAS</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap w-[152px]" style={thStyle}>Status</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap" style={thStyle}>Komen</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap" style={thStyle}>Pemasang</th>
                <th className="text-left px-4 py-2 border border-border text-foreground whitespace-nowrap" style={thStyle}>Pelepas</th>
                <th className={stickyActionTh} style={scrolledRight ? { ...thStyle, ...rightShadow } : thStyle}>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {/* Inline add row at top */}
              {isAddingRow && (
                <InlineEditableRow
                  allDevices={allDevices}
                  onSave={(device) => {
                    onSave(device);
                    onSetAddingRow(false);
                  }}
                  onCancel={() => onSetAddingRow(false)}
                  scrolledLeft={scrolledLeft}
                  scrolledRight={scrolledRight}
                  formDraftRef={formDraftRef}
                  onSaveDraft={onSaveDraft ? (device) => {
                    onSaveDraft(device);
                    onSetAddingRow(false);
                  } : undefined}
                />
              )}

              {paginatedDevices.map((device) => {
                // If this row is being edited (driven by editingDevice from App.tsx), show editable row
                if (editingRowId === device.id) {
                  return (
                    <InlineEditableRow
                      key={device.id}
                      allDevices={allDevices}
                      initialDevice={device}
                      onSave={(updated) => {
                        onSave(updated);
                        if (onCancelEdit) onCancelEdit();
                      }}
                      onCancel={() => {
                        if (onCancelEdit) onCancelEdit();
                      }}
                      scrolledLeft={scrolledLeft}
                      scrolledRight={scrolledRight}
                      formDraftRef={formDraftRef}
                      onSaveDraft={onSaveDraft ? (device) => {
                        onSaveDraft(device);
                        if (onCancelEdit) onCancelEdit();
                      } : undefined}
                    />
                  );
                }

                const posisi = device.deviceType === "IV Perifer" ? device.location?.split(",")[0]?.trim() : "";
                const lokasi = device.deviceType === "IV Perifer" ? device.location?.split(",")[1]?.trim() : device.location;
                const rek = getRekomendasi(device);
                const hasTasks = device.intervensiTasks && device.intervensiTasks.length > 0;
                const pendingTasks = hasPendingIntervensi(device);
                const tasksDone = hasTasks && !pendingTasks;
                const completedCount = hasTasks ? device.intervensiTasks!.filter((t) => t.checked).length : 0;
                const totalTaskCount = hasTasks ? device.intervensiTasks!.length : 0;
                const historyCount = (device.pivasLog || []).filter(e => e.intervensiTasks && e.intervensiTasks.length > 0).length;

                return (
                  <tr key={device.id} data-device-id={device.id} className={`hover:bg-secondary/30 transition-colors ${highlightedDeviceId === device.id ? "reminder-flash" : ""}`}>
                    <td className={stickyFirstTd} style={scrolledLeft ? leftShadow : noShadow}>
                      <div className="flex items-center gap-1.5">
                        <span>{device.displayName}</span>
                        {device.isDraft && (
                          <span
                            className="px-1.5 py-0.5 rounded border border-[#c2410c] text-[#c2410c] shrink-0 flex items-center gap-1 bg-[#fff7ed]"
                            style={{ fontSize: "10px", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
                          >
                            Draft
                          </span>
                        )}
                        {pendingTasks && (
                          <button
                            onClick={() => onOpenIntervensi && onOpenIntervensi(device)}
                            className="px-1.5 py-0.5 rounded-full border border-[#b45309] text-[#b45309] hover:bg-[#fffbeb] transition-colors shrink-0 flex items-center gap-1"
                            style={{ fontSize: "10px", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
                            title="Lakukan Intervensi"
                          >
                            <FileText className="w-[14px] h-[14px]" />
                            {completedCount}/{totalTaskCount}
                          </button>
                        )}
                        {tasksDone && (
                          <button
                            onClick={() => onOpenIntervensi && onOpenIntervensi(device)}
                            className="px-1.5 py-0.5 rounded-full border border-[#047857] text-[#047857] hover:bg-[#ecfdf5] transition-colors shrink-0 flex items-center gap-1 bg-[#ecfdf5]"
                            style={{ fontSize: "10px", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
                            title="Lihat Intervensi"
                          >
                            <FileCheck2 className="w-[14px] h-[14px]" />
                            {completedCount}/{totalTaskCount}
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>{device.jenis || ""}</td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>{posisi || ""}</td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>{lokasi || ""}</td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>{device.size || ""}</td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>
                      {device.sizeHuber || ""}
                    </td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>
                      {device.waktuPemasangan ? formatDateDisplay(device.waktuPemasangan) : ""}
                    </td>
                    <td className="px-4 py-2 border border-border whitespace-nowrap">
                      <RekomendasiBadge text={rek} />
                    </td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>{device.alasanPelepasan || ""}</td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>
                      {device.waktuPelepasan ? formatDateDisplay(device.waktuPelepasan) : ""}
                    </td>
                    <td className="px-4 py-2 border border-border text-foreground" style={tdStyle}>
                      <PivasCell score={device.pivasScore} kategoriPhlebitis={device.kategoriPhlebitis} />
                    </td>
                    <td className="px-4 py-2 border border-border whitespace-nowrap"><StatusBadge status={device.status} /></td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>{device.komen || ""}</td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>{device.pemasang || ""}</td>
                    <td className="px-4 py-2 border border-border text-foreground whitespace-nowrap" style={tdStyle}>{device.pelepas || ""}</td>
                    <td className={stickyActionTd} style={scrolledRight ? rightShadow : noShadow}>
                      <div className="flex items-center gap-1.5">
                        {device.isDraft ? (
                          <button
                            onClick={() => { if (onEdit) onEdit(device); }}
                            disabled={editingRowId !== null || isAddingRow}
                            className="flex items-center justify-center p-1 hover:opacity-70 transition-opacity disabled:opacity-30"
                            title="Edit Draft"
                          >
                            <Pencil className="w-[18px] h-[18px] text-[#0369a1]" />
                          </button>
                        ) : (
                          <>
                            <button
                              onClick={() => { if (onEdit) onEdit(device); }}
                              disabled={editingRowId !== null || isAddingRow}
                              className="flex items-center justify-center p-1 hover:opacity-70 transition-opacity disabled:opacity-30"
                              title="Edit"
                            >
                              <Pencil className="w-[18px] h-[18px] text-[#0369a1]" />
                            </button>
                            {onOpenIntervensi && pendingTasks && (
                              <button
                                onClick={() => onOpenIntervensi(device)}
                                className="flex items-center justify-center p-1 hover:opacity-70 transition-opacity"
                                title="Intervensi - belum selesai"
                              >
                                <FileText className="w-[18px] h-[18px] text-[#b45309]" />
                              </button>
                            )}
                            {onOpenIntervensi && tasksDone && (
                              <button
                                onClick={() => onOpenIntervensi(device)}
                                className="flex items-center justify-center p-1 hover:opacity-70 transition-opacity"
                                title="Intervensi - selesai"
                              >
                                <FileCheck2 className="w-[18px] h-[18px] text-[#047857]" />
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-card rounded-lg border border-border">
          <EmptyStateNodata
            message={allDevices.length > 0 ? "Tidak ada alat invasif yang cocok" : "Belum ada alat invasif yang terpasang"}
          />
        </div>
      )}

      {/* Pagination */}
      {devices.length > ITEMS_PER_PAGE && (
        <div className="flex items-center gap-6">
          <p className="text-foreground whitespace-nowrap" style={tdStyle}>
            Menampilkan {startIdx + 1}-{Math.min(startIdx + ITEMS_PER_PAGE, devices.length)} dari {devices.length} item
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center rounded disabled:opacity-30 hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-9 h-9 flex items-center justify-center rounded transition-colors ${page === currentPage ? "bg-muted text-foreground" : "text-foreground hover:bg-secondary"
                  }`}
                style={tdStyle}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded disabled:opacity-30 hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
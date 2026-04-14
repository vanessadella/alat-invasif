import { useState, useEffect } from "react";
import {
  IntervensiTask,
  InvasiveDevice,
  PivasLogEntry,
  computeAutoChecks,
  generateIntervensiTasks,
  getInterventionConfig,
  PIVAS_INTERVENTION_CONFIG,
  hasPendingIntervensi,
} from "./invasive-data";
import { X, Clock, CheckCircle2, AlertCircle, ChevronDown, Lock, FileText } from "lucide-react";

// ── Shared styles ───────────────────────────────────────────────

const getScoreBadgeStyle = (scoreText: string) => {
  const s = scoreText?.charAt(0) || "";
  if (s === "0") return "bg-[#ecfdf5] text-[#047857] border-[#a7f3d0]";
  if (s === "1") return "bg-[#fefce8] text-[#a16207] border-[#fde047]";
  if (s === "2") return "bg-[#fff7ed] text-[#c2410c] border-[#fed7aa]";
  if (s === "3") return "bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]";
  if (s === "4") return "bg-[#7f1d1d] text-white border-[#450a0a]";
  if (s === "5") return "bg-[#450a0a] text-white border-[#450a0a]";
  return "bg-secondary text-muted-foreground border-border";
};

// ── Checkbox ────────────────────────────────────────────────────

function CheckboxIcon({ checked, disabled }: { checked: boolean; disabled?: boolean }) {
  if (checked) {
    return (
      <div className={`relative shrink-0 size-5 rounded-[4px] flex items-center justify-center ${disabled ? "bg-[#047857]" : "bg-[#00277f]"}`}>
        <svg fill="none" viewBox="0 0 24 24" stroke="white" className="w-3.5 h-3.5 stroke-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  return (
    <div className={`relative shrink-0 size-5 rounded-[4px] border-2 bg-transparent ${disabled ? "border-muted-foreground/15" : "border-muted-foreground/30"}`} />
  );
}

// ── Single Device Accordion (Berlangsung tab) ──────────────────

interface DeviceAccordionProps {
  device: InvasiveDevice;
  tasks: IntervensiTask[];
  onToggleTask: (deviceId: string, taskId: string) => void;
  defaultExpanded?: boolean;
}

function DeviceAccordion({ device, tasks, onToggleTask, defaultExpanded = false }: DeviceAccordionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const config = getInterventionConfig(device) || PIVAS_INTERVENTION_CONFIG;
  const scoreValue = config.getScoreValue(device);

  const completedCount = tasks.filter(t => t.checked).length;
  const totalCount = tasks.length;
  const allDone = totalCount > 0 && completedCount === totalCount;

  const scoreLabel = scoreValue || "";
  const scorePrefix = scoreLabel?.split(" - ")[0] || "—";
  const scoreSuffix = scoreLabel?.split(" - ").slice(1).join(" - ") || "";

  const time = device.pivasLog?.length
    ? new Date(device.pivasLog[device.pivasLog.length - 1].timestamp).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
    : "—";
  const nurse = device.pivasLog?.length
    ? device.pivasLog[device.pivasLog.length - 1].nurse
    : "";

  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden shadow-sm">
      {/* Header */}
      <button
        className="w-full flex items-center gap-3 p-3 text-left hover:bg-muted/30 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[11px] font-bold ${getScoreBadgeStyle(scoreLabel)}`}>
              {scorePrefix}
            </span>
            <span className="text-xs text-foreground font-medium truncate">
              {scoreSuffix} | {device.displayName}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Clock className="w-3 h-3 shrink-0" />
            <span>{time}</span>
            {nurse && (
              <>
                <span className="mx-0.5">·</span>
                <span>{nurse}</span>
              </>
            )}
          </div>
        </div>

        {/* Status badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${
              allDone
                ? "border-[#047857] text-[#047857] bg-[#ecfdf5]"
                : "border-[#b45309] text-[#b45309] bg-[#fffbeb]"
            }`}
          >
            {allDone ? <CheckCircle2 className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
            {completedCount}/{totalCount}
          </span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`} />
        </div>
      </button>

      {/* Expanded tasks */}
      {expanded && tasks.length > 0 && (
        <div className="border-t border-border bg-white px-3 py-2.5">
          <div className="flex flex-col gap-0.5">
            {tasks.map((task) => (
              <button
                key={task.id}
                className={`flex gap-3 items-start text-left p-2.5 rounded-lg transition-colors ${
                  task.checked
                    ? "bg-[#ecfdf5]/50 hover:bg-[#ecfdf5]"
                    : "hover:bg-secondary/60"
                }`}
                onClick={() => onToggleTask(device.id, task.id)}
              >
                <CheckboxIcon checked={task.checked} />
                <span
                  className={`text-sm transition-colors ${task.checked ? "text-[#047857] line-through opacity-70" : "text-foreground"}`}
                  style={{ lineHeight: "1.4" }}
                >
                  {task.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── History Entry (view-only) ───────────────────────────────────

function CompletedEntry({ entry, deviceName }: { entry: PivasLogEntry; deviceName?: string }) {
  const [expanded, setExpanded] = useState(false);
  const tasks = entry.intervensiTasks || [];
  const completedCount = tasks.filter((t) => t.checked).length;
  const totalCount = tasks.length;
  const allDone = totalCount > 0 && completedCount === totalCount;
  
  const time = entry.timestamp
    ? new Date(entry.timestamp).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
    : "00:00";

  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden shadow-sm">
      <button
        className="w-full flex items-center gap-3 p-3 text-left hover:bg-muted/30 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[11px] font-bold ${getScoreBadgeStyle(entry.score)}`}>
              {entry.score?.split(" - ")[0] || "—"}
            </span>
            <span className="text-xs text-foreground font-medium truncate">
              {deviceName && <>{deviceName} · </>}
              {entry.score?.split(" - ").slice(1).join(" - ") || ""}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Clock className="w-3 h-3 shrink-0" />
            <span>{time}</span>
            <span className="mx-0.5">·</span>
            <span>{entry.nurse}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {totalCount > 0 && (
            <span
              className={`flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${
                allDone
                  ? "border-[#047857] text-[#047857] bg-[#ecfdf5]"
                  : "border-[#b45309] text-[#b45309] bg-[#fffbeb]"
              }`}
            >
              {allDone ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
              {completedCount}/{totalCount}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`} />
        </div>
      </button>

      {expanded && tasks.length > 0 && (
        <div className="border-t border-border bg-muted/10 px-3 py-2.5">
          <div className="flex items-center gap-1.5 mb-2.5">
            <Lock className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Riwayat — Hanya Lihat</span>
          </div>
          <div className="flex flex-col gap-2">
            {tasks.map((task) => (
              <div key={task.id} className="flex gap-2.5 items-start opacity-70">
                <CheckboxIcon checked={task.checked} disabled />
                <span className={`text-sm ${task.checked ? "line-through text-muted-foreground" : "text-foreground"}`} style={{ lineHeight: "1.4" }}>
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Empty State ─────────────────────────────────────────────────

function EmptyIntervensi() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="w-24 h-24 mb-4 bg-[#ecfdf5] rounded-full flex items-center justify-center">
        <CheckCircle2 className="w-12 h-12 text-[#047857]" />
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Belum ada intervensi
      </p>
    </div>
  );
}

// ── Combined Intervensi Modal ───────────────────────────────────

interface CombinedIntervensiModalProps {
  devices: InvasiveDevice[];
  onSave: (updates: { deviceId: string; tasks: IntervensiTask[] }[]) => void;
  onClose: () => void;
}

export function CombinedIntervensiModal({ devices, onSave, onClose }: CombinedIntervensiModalProps) {
  const [activeTab, setActiveTab] = useState<"berlangsung" | "riwayat">("berlangsung");
  
  // Build task state for ALL devices that have intervention tasks
  const devicesWithTasks = devices.filter(d => d.intervensiTasks && d.intervensiTasks.length > 0);
  
  const [allTasks, setAllTasks] = useState<Record<string, IntervensiTask[]>>(() => {
    const map: Record<string, IntervensiTask[]> = {};
    devicesWithTasks.forEach(d => {
      const config = getInterventionConfig(d) || PIVAS_INTERVENTION_CONFIG;
      const scoreValue = config.getScoreValue(d);
      const initialTasks = generateIntervensiTasks(scoreValue, d.intervensiTasks, config);
      map[d.id] = computeAutoChecks(initialTasks, d);
    });
    return map;
  });

  const handleToggleTask = (deviceId: string, taskId: string) => {
    setAllTasks(prev => ({
      ...prev,
      [deviceId]: (prev[deviceId] || []).map(t =>
        t.id === taskId ? { ...t, checked: !t.checked } : t
      ),
    }));
  };

  const handleSave = () => {
    const updates = Object.entries(allTasks).map(([deviceId, tasks]) => ({
      deviceId,
      tasks,
    }));
    onSave(updates);
    onClose();
  };

  // Build riwayat grouped by date across ALL devices
  const allHistory: { entry: PivasLogEntry; deviceName: string; timestamp: string }[] = [];
  devices.forEach(d => {
    (d.pivasLog || []).forEach(entry => {
      if (entry.intervensiTasks && entry.intervensiTasks.length > 0) {
        allHistory.push({ entry, deviceName: d.displayName, timestamp: entry.timestamp });
      }
    });
  });
  allHistory.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const groupedHistory: Record<string, { entry: PivasLogEntry; deviceName: string }[]> = {};
  allHistory.forEach(({ entry, deviceName, timestamp }) => {
    const dateStr = timestamp.slice(0, 10);
    const d = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
    let formattedDate = d.toLocaleDateString("id-ID", options);
    if (formattedDate === "Invalid Date") formattedDate = timestamp;
    if (!groupedHistory[formattedDate]) groupedHistory[formattedDate] = [];
    groupedHistory[formattedDate].push({ entry, deviceName });
  });

  const hasActiveInterventions = devicesWithTasks.length > 0;
  const hasHistory = Object.keys(groupedHistory).length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(23, 23, 23, 0.6)" }}
      onClick={onClose}
    >
      <div
        className="bg-[#f8fafc] flex flex-col w-full max-w-[540px] max-h-[90vh] overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-white">
          <h2 className="text-foreground text-base font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
            Intervensi
          </h2>
          <button onClick={onClose} className="p-1.5 hover:bg-secondary rounded-lg transition-colors" title="Tutup">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-white border-b border-border">
          <button
            className={`flex-1 py-3 text-sm font-bold text-center transition-colors relative ${
              activeTab === "berlangsung" ? "text-foreground" : "text-muted-foreground"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
            onClick={() => setActiveTab("berlangsung")}
          >
            Berlangsung
            {activeTab === "berlangsung" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />}
          </button>
          <button
            className={`flex-1 py-3 text-sm font-bold text-center transition-colors relative ${
              activeTab === "riwayat" ? "text-foreground" : "text-muted-foreground"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
            onClick={() => setActiveTab("riwayat")}
          >
            Riwayat Intervensi
            {activeTab === "riwayat" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "berlangsung" && (
            <div className="p-4">
              {hasActiveInterventions ? (
                <div className="flex flex-col gap-3">
                  {devicesWithTasks.map((device, index) => (
                    <DeviceAccordion
                      key={device.id}
                      device={device}
                      tasks={allTasks[device.id] || []}
                      onToggleTask={handleToggleTask}
                      defaultExpanded={index === 0}
                    />
                  ))}
                </div>
              ) : (
                <EmptyIntervensi />
              )}
            </div>
          )}

          {activeTab === "riwayat" && (
            <div className="p-4">
              {hasHistory ? (
                <div className="flex flex-col gap-4">
                  {Object.entries(groupedHistory).map(([date, entries]) => (
                    <div key={date} className="flex flex-col gap-2">
                      <p className="text-xs font-bold text-foreground">{date}</p>
                      {entries.map((item, i) => (
                        <CompletedEntry key={i} entry={item.entry} deviceName={item.deviceName} />
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyIntervensi />
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 flex items-center justify-end gap-3 border-t border-border bg-white shadow-[0_-4px_12px_-4px_rgba(0,0,0,0.05)]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-border rounded-lg text-sm font-bold text-foreground hover:bg-secondary transition-colors"
          >
            BATAL
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2.5 bg-[#00277f] text-white rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-sm"
          >
            SIMPAN
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Intervention Toast Banner ───────────────────────────────────
// Sticky bottom entry point showing pending intervention count

interface InterventionToastProps {
  pendingCount: number;
  allDone: boolean;
  onOpen: () => void;
}

export function InterventionToast({ pendingCount, allDone, onOpen }: InterventionToastProps) {
  if (pendingCount === 0 && !allDone) return null;

  return (
    <div className="w-full mb-3">
      {/* Warning toast for pending interventions */}
      {pendingCount > 0 && (
        <button
          onClick={onOpen}
          className="w-full flex items-center gap-3 px-4 py-3 bg-[#FFFBEB] border border-[#FFD98F] rounded-xl shadow-sm hover:shadow-md transition-all group"
        >
            <AlertCircle className="w-5 h-5 text-[#b45309] shrink-0" />
            <span className="text-[#92400e] flex-1 text-left text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span className="font-bold">{pendingCount} tugas intervensi alat invasif</span> memiliki belum selesai
            </span>
            <span
              className="px-3 py-1.5 bg-white border border-border rounded-lg text-sm font-bold text-foreground group-hover:bg-secondary transition-colors shrink-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Lihat
            </span>
          </button>
        )}

        {/* Green toast when all interventions complete */}
        {pendingCount === 0 && allDone && (
          <button
            onClick={onOpen}
            className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-border rounded-xl shadow-sm hover:shadow-md transition-all group"
          >
            <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0" />
            <span className="text-foreground flex-1 text-left text-sm font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
              Tugas Intervensi
            </span>
            <span
              className="px-3 py-1.5 bg-white border border-border rounded-lg text-sm font-bold text-foreground group-hover:bg-secondary transition-colors shrink-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Lihat
            </span>
          </button>
        )}
    </div>
  );
}

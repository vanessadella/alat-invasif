import { useState, useEffect } from "react";
import {
  IntervensiTask,
  InvasiveDevice,
  PivasLogEntry,
  computeAutoChecks,
  generateIntervensiTasks,
  getInterventionConfig,
  PIVAS_INTERVENTION_CONFIG,
} from "./invasive-data";
import { X, Clock, CheckCircle2, AlertCircle, ChevronDown, Lock } from "lucide-react";

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

// ── Completed History Entry (view-only) ─────────────────────────

function CompletedEntry({ entry }: { entry: PivasLogEntry }) {
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
      {/* Header — always visible */}
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

        {/* Status badge */}
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

      {/* Expanded tasks — view only */}
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

// ── Main Intervensi Modal ───────────────────────────────────────

interface IntervensiModalProps {
  device: InvasiveDevice;
  onSave: (tasks: IntervensiTask[]) => void;
  onClose: () => void;
}

export function IntervensiModal({ device, onSave, onClose }: IntervensiModalProps) {
  const config = getInterventionConfig(device) || PIVAS_INTERVENTION_CONFIG;
  const scoreValue = config.getScoreValue(device);

  const initialTasks = generateIntervensiTasks(scoreValue, device.intervensiTasks, config);
  const withAutoChecks = computeAutoChecks(initialTasks, device);
  const [tasks, setTasks] = useState<IntervensiTask[]>(withAutoChecks);

  useEffect(() => {
    setTasks((prev) => computeAutoChecks(prev, device));
  }, [device.alasanPelepasan, device.waktuPemasangan, device.pivasLog]);

  const scoreLabel = scoreValue || "Skor Belum Diisi";
  const completedCount = tasks.filter((t) => t.checked).length;
  const totalCount = tasks.length;
  const allDone = totalCount > 0 && completedCount === totalCount;
  const progressPct = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const handleToggle = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, checked: !t.checked } : t))
    );
  };

  const handleSave = () => {
    onSave(tasks);
    onClose();
  };

  // Build history from pivasLog (excluding the current active entry)
  const pivasLog = device.pivasLog || [];
  const historyEntries = pivasLog.filter((e) => e.intervensiTasks && e.intervensiTasks.length > 0);
  const sortedHistory = [...historyEntries].reverse();

  // Group by date
  const groupedHistory: Record<string, PivasLogEntry[]> = {};
  sortedHistory.forEach((entry) => {
    const dateStr = entry.timestamp.slice(0, 10);
    const d = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
    let formattedDate = d.toLocaleDateString("id-ID", options);
    if (formattedDate === "Invalid Date") formattedDate = entry.timestamp;
    if (!groupedHistory[formattedDate]) groupedHistory[formattedDate] = [];
    groupedHistory[formattedDate].push(entry);
  });

  const hasHistory = Object.keys(groupedHistory).length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(23, 23, 23, 0.6)" }}
      onClick={onClose}
    >
      <div
        className="bg-[#f8fafc] flex flex-col w-full max-w-[500px] max-h-[90vh] overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-white">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-foreground text-base font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
              Intervensi {config.scoreType}
            </h2>
            <p className="text-xs text-muted-foreground">{device.displayName}</p>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-secondary rounded-lg transition-colors" title="Tutup">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">

          {/* ── Active Intervention Section ── */}
          {totalCount > 0 && (
            <div className="p-4 pb-5 bg-white">

              {/* Score badge + progress */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-bold ${getScoreBadgeStyle(scoreLabel)}`}>
                  {scoreLabel?.split(" - ")[0] || "—"}
                </span>
                <span className="text-sm text-foreground font-medium flex-1 truncate">
                  {scoreLabel?.split(" - ").slice(1).join(" - ") || ""}
                </span>
              </div>

              {/* Progress bar */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${allDone ? "bg-[#047857]" : "bg-[#00277f]"}`}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <span className={`text-xs font-bold shrink-0 ${allDone ? "text-[#047857]" : "text-muted-foreground"}`}>
                  {completedCount}/{totalCount}
                </span>
                {allDone && <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />}
              </div>

              {/* Task checklist */}
              <div className="flex flex-col gap-0.5">
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-2">Checklist Intervensi</p>
                {tasks.map((task) => (
                  <button
                    key={task.id}
                    className={`flex gap-3 items-start text-left p-2.5 rounded-lg transition-colors ${
                      task.checked
                        ? "bg-[#ecfdf5]/50 hover:bg-[#ecfdf5]"
                        : "hover:bg-secondary/60"
                    }`}
                    onClick={() => handleToggle(task.id)}
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

          {totalCount === 0 && (
            <div className="p-6 bg-white flex flex-col items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-[#047857] mb-1" />
              <p className="text-sm text-foreground font-bold">Tidak ada intervensi saat ini</p>
              <p className="text-xs text-muted-foreground text-center">
                Skor PIVAS saat ini tidak memerlukan checklist intervensi.
              </p>
            </div>
          )}

          {/* ── History Section (view-only) ── */}
          {hasHistory && (
            <div className="border-t border-border bg-[#f1f5f9]/50 p-4">
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-3">
                Riwayat Intervensi
              </p>
              <div className="flex flex-col gap-4">
                {Object.entries(groupedHistory).map(([date, entries]) => (
                  <div key={date} className="flex flex-col gap-2">
                    <p className="text-xs font-bold text-foreground">{date}</p>
                    {entries.map((entry, i) => (
                      <CompletedEntry key={i} entry={entry} />
                    ))}
                  </div>
                ))}
              </div>
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
            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
              allDone
                ? "bg-[#047857] text-white hover:bg-[#065f46] shadow-sm"
                : "bg-[#00277f] text-white hover:opacity-90"
            }`}
          >
            SIMPAN
          </button>
        </div>
      </div>
    </div>
  );
}

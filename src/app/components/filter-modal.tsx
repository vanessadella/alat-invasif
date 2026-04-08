import { useState } from "react";
import { X, Check } from "lucide-react";

export interface FilterState {
  alat: {
    dilepas: boolean;
    prolong: boolean;
  };
  status: {
    tidakBerhasil: boolean;
    berhasil: boolean;
  };
  intervensi: {
    belumSelesai: boolean;
    selesai: boolean;
  };
}

export const DEFAULT_FILTER: FilterState = {
  alat: { dilepas: false, prolong: false },
  status: { tidakBerhasil: false, berhasil: false },
  intervensi: { belumSelesai: false, selesai: false },
};

export function getActiveFilterCount(filter: FilterState): number {
  let count = 0;
  if (filter.alat.dilepas) count++;
  if (filter.alat.prolong) count++;
  if (filter.status.tidakBerhasil) count++;
  if (filter.status.berhasil) count++;
  if (filter.intervensi.belumSelesai) count++;
  if (filter.intervensi.selesai) count++;
  return count;
}

interface FilterModalProps {
  filter: FilterState;
  onApply: (filter: FilterState) => void;
  onClose: () => void;
}

function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <button className="flex gap-2 items-center" onClick={onChange}>
      <div
        className={`relative rounded shrink-0 w-5 h-5 flex items-center justify-center ${
          checked ? "bg-primary" : "bg-card"
        }`}
        style={{ border: checked ? "1px solid var(--primary)" : "1px solid var(--border)" }}
      >
        {checked && <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />}
      </div>
      <span
        className="text-foreground whitespace-nowrap"
        style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </span>
    </button>
  );
}

export function FilterModal({ filter, onApply, onClose }: FilterModalProps) {
  const [local, setLocal] = useState<FilterState>({ ...filter, alat: { ...filter.alat }, status: { ...filter.status }, intervensi: { ...filter.intervensi } });

  const toggle = (group: "alat" | "status" | "intervensi", key: string) => {
    setLocal((prev) => ({
      ...prev,
      [group]: { ...prev[group], [key]: !(prev[group] as Record<string, boolean>)[key] },
    }));
  };

  const handleReset = () => setLocal(DEFAULT_FILTER);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4" onClick={onClose}>
      <div
        className="bg-card rounded-xl w-full max-w-[420px] flex flex-col overflow-hidden"
        style={{ boxShadow: "var(--elevation-sm)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-2 p-4 border-b border-border">
          <p
            className="flex-1 text-foreground"
            style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
          >
            Filter
          </p>
          <button onClick={onClose} className="shrink-0">
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Body */}
        <div className="flex gap-8 p-4">
          {/* Alat group */}
          <div className="flex flex-col gap-4">
            <p
              className="text-foreground"
              style={{ fontSize: "var(--text-sm)", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}
            >
              Alat
            </p>
            <Checkbox checked={local.alat.dilepas} onChange={() => toggle("alat", "dilepas")} label="Dilepas" />
            <Checkbox checked={local.alat.prolong} onChange={() => toggle("alat", "prolong")} label="Prolong" />
          </div>
          {/* Status group */}
          <div className="flex flex-col gap-4">
            <p
              className="text-foreground"
              style={{ fontSize: "var(--text-sm)", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}
            >
              Status
            </p>
            <Checkbox checked={local.status.tidakBerhasil} onChange={() => toggle("status", "tidakBerhasil")} label="Tidak Berhasil" />
            <Checkbox checked={local.status.berhasil} onChange={() => toggle("status", "berhasil")} label="Berhasil" />
          </div>
          {/* Intervensi group */}
          <div className="flex flex-col gap-4">
            <p
              className="text-foreground"
              style={{ fontSize: "var(--text-sm)", fontWeight: 500, fontFamily: "'Inter', sans-serif" }}
            >
              Intervensi
            </p>
            <Checkbox checked={local.intervensi.belumSelesai} onChange={() => toggle("intervensi", "belumSelesai")} label="Belum Selesai" />
            <Checkbox checked={local.intervensi.selesai} onChange={() => toggle("intervensi", "selesai")} label="Selesai" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 p-4 border-t border-border">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-full hover:bg-secondary transition-colors text-foreground"
            style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
          >
            Reset
          </button>
          <button
            onClick={() => onApply(local)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
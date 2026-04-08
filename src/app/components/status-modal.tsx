import { useState } from "react";
import { X } from "lucide-react";

interface StatusModalProps {
  deviceType: string;
  currentStatus: "berhasil" | "tidak_berhasil" | "";
  currentKriteria: string[];
  onSave: (status: "berhasil" | "tidak_berhasil", kriteria: string[]) => void;
  onClose: () => void;
}

const BERHASIL_CRITERIA = [
  "Flush lancar tanpa bengkak/nyeri",
  "Tidak ada tanda infiltrasi",
];

const TIDAK_BERHASIL_CRITERIA = [
  "Pembuluh darah lebih rapuh dan kurang elastis",
  "Riwayat sulit pemasangan IV sebelumnya",
  "Vena tidak terlihat jelas (poor vein visibility)",
  "Vena sulit dipalpasi",
  "Vena kecil atau tipis",
  "Vena rapuh atau mudah kolaps",
  "Vena berkelok",
  "Vena dengan banyak katup",
  "Pemilihan ukuran kanul yang tidak sesuai",
  "Teknik aseptik yang tidak optimal",
];

function CheckboxIcon({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <div className="shrink-0 w-5 h-5 rounded-[4px] bg-[#00277f] flex items-center justify-center shadow-sm">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }
  return <div className="shrink-0 w-5 h-5 rounded-[4px] border-2 border-muted-foreground/30 bg-transparent" />;
}

function RadioIcon({ selected }: { selected: boolean }) {
  return (
    <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selected ? "border-[#00277f]" : "border-muted-foreground/30"}`}>
      {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#00277f]" />}
    </div>
  );
}

export function StatusModal({ deviceType, currentStatus, currentKriteria, onSave, onClose }: StatusModalProps) {
  const [status, setStatus] = useState<"berhasil" | "tidak_berhasil" | "">(currentStatus || "");
  const [selectedKriteria, setSelectedKriteria] = useState<Set<string>>(new Set(currentKriteria || []));

  const criteriaList = status === "berhasil" ? BERHASIL_CRITERIA : status === "tidak_berhasil" ? TIDAK_BERHASIL_CRITERIA : [];
  const canSave = status !== "" && selectedKriteria.size >= 1;

  const handleStatusChange = (newStatus: "berhasil" | "tidak_berhasil") => {
    setStatus(newStatus);
    setSelectedKriteria(new Set()); // Reset criteria when status changes
  };

  const toggleKriteria = (text: string) => {
    setSelectedKriteria((prev) => {
      const next = new Set(prev);
      if (next.has(text)) next.delete(text);
      else next.add(text);
      return next;
    });
  };

  const handleSave = () => {
    if (status && selectedKriteria.size >= 1) {
      onSave(status, Array.from(selectedKriteria));
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-[2px]"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.4)" }}
      onClick={onClose}
    >
      <div
        className="bg-[#f8fafc] flex flex-col w-full max-w-[420px] max-h-[90vh] overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-white">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-foreground text-base font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
              Status Alat Invasif
            </h2>
            <p className="text-xs text-muted-foreground">{deviceType}</p>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-secondary rounded-lg transition-colors" title="Tutup">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Status selection */}
          <div className="flex flex-col gap-2 mb-5">
            <label className="text-sm font-bold text-foreground">
              Status <span className="text-destructive">*</span>
            </label>
            <div className="flex gap-6">
              <label
                className="flex items-center gap-2 cursor-pointer"
                onClick={(e) => { e.preventDefault(); handleStatusChange("berhasil"); }}
              >
                <RadioIcon selected={status === "berhasil"} />
                <span className={`text-sm ${status === "berhasil" ? "text-foreground font-medium" : "text-muted-foreground"}`}>Berhasil</span>
              </label>
              <label
                className="flex items-center gap-2 cursor-pointer"
                onClick={(e) => { e.preventDefault(); handleStatusChange("tidak_berhasil"); }}
              >
                <RadioIcon selected={status === "tidak_berhasil"} />
                <span className={`text-sm ${status === "tidak_berhasil" ? "text-foreground font-medium" : "text-muted-foreground"}`}>Tidak Berhasil</span>
              </label>
            </div>
          </div>

          {/* Criteria */}
          {status && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-foreground">
                Kriteria <span className="text-destructive">*</span>
              </label>
              <div className="flex flex-col gap-1">
                {criteriaList.map((text) => {
                  const checked = selectedKriteria.has(text);
                  return (
                    <label
                      key={text}
                      className={`flex items-start gap-3 cursor-pointer p-2.5 rounded-lg transition-colors border ${
                        checked ? "bg-[#f0f4ff] border-[#00277f]/30" : "bg-card border-transparent hover:bg-secondary/60"
                      }`}
                      onClick={(e) => { e.preventDefault(); toggleKriteria(text); }}
                    >
                      <CheckboxIcon checked={checked} />
                      <span className={`text-sm flex-1 ${checked ? "text-[#001b63] font-medium" : "text-foreground"}`} style={{ lineHeight: "1.4" }}>
                        {text}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 flex items-center justify-end gap-3 border-t border-border bg-white shadow-[0_-4px_12px_-4px_rgba(0,0,0,0.05)]">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-border rounded-lg text-sm font-bold text-foreground hover:bg-secondary transition-colors"
          >
            BATAL
          </button>
          <button
            onClick={handleSave}
            disabled={!canSave}
            className="px-6 py-2.5 bg-[#00277f] text-white rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-[#001b63] transition-colors shadow-sm"
          >
            SIMPAN
          </button>
        </div>
      </div>
    </div>
  );
}

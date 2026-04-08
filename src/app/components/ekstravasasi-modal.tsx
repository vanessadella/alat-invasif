import { useState } from "react";
import { X, AlertCircle, CheckCircle2 } from "lucide-react";

interface EkstravasasiModalProps {
  currentScore: string;
  onSave: (score: string) => void;
  onClose: () => void;
}

const GRADES = [
  { value: "0", label: "Grade 0", desc: "Tidak ada gejala ekstravasasi" },
  { value: "1", label: "Grade 1", desc: "Nyeri ringan, kemerahan minimal, tanpa bengkak" },
  { value: "2", label: "Grade 2", desc: "Nyeri sedang, kemerahan, bengkak ringan < 2.5 cm" },
  { value: "3", label: "Grade 3", desc: "Nyeri berat, kemerahan luas, bengkak 2.5-5 cm, indurasi" },
  { value: "4", label: "Grade 4", desc: "Nekrosis jaringan, ulserasi, bengkak > 5 cm" },
];

function getGradeStyle(grade: string) {
  switch (grade) {
    case "0": return "bg-[#ecfdf5] text-[#047857] border-[#a7f3d0]";
    case "1": return "bg-[#fefce8] text-[#a16207] border-[#fde047]";
    case "2": return "bg-[#fff7ed] text-[#c2410c] border-[#fed7aa]";
    case "3": return "bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]";
    case "4": return "bg-[#7f1d1d] text-white border-[#450a0a]";
    default: return "bg-secondary text-muted-foreground border-border";
  }
}

function RadioIcon({ selected }: { selected: boolean }) {
  return (
    <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selected ? "border-[#00277f]" : "border-muted-foreground/30"}`}>
      {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#00277f]" />}
    </div>
  );
}

export function EkstravasasiModal({ currentScore, onSave, onClose }: EkstravasasiModalProps) {
  const [selected, setSelected] = useState<string>(currentScore || "");

  const selectedGrade = GRADES.find((g) => g.value === selected);
  const scoreColorClass = selected ? getGradeStyle(selected) : "bg-secondary text-muted-foreground border-border";

  const handleSave = () => {
    if (selected) {
      onSave(selected);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-[2px]"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.4)" }}
      onClick={onClose}
    >
      <div
        className="bg-[#f8fafc] flex flex-col w-full max-w-[460px] max-h-[90vh] overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-white">
          <h2 className="text-foreground text-lg font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
            Skor Ekstravasasi
          </h2>
          <button onClick={onClose} className="p-1.5 hover:bg-secondary rounded-lg transition-colors" title="Tutup">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-3">Pilih Grade Ekstravasasi</p>
          <div className="flex flex-col gap-2">
            {GRADES.map((grade) => {
              const isSelected = selected === grade.value;
              return (
                <label
                  key={grade.value}
                  className={`flex items-start gap-3 cursor-pointer p-3 rounded-lg transition-colors border ${
                    isSelected ? "bg-[#f0f4ff] border-[#00277f]/30" : "bg-card border-transparent hover:bg-secondary/60 hover:border-border/50"
                  }`}
                  onClick={(e) => { e.preventDefault(); setSelected(grade.value); }}
                >
                  <RadioIcon selected={isSelected} />
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span className={`text-sm font-bold ${isSelected ? "text-[#001b63]" : "text-foreground"}`}>
                      {grade.label}
                    </span>
                    <span className={`text-xs ${isSelected ? "text-[#001b63]/80" : "text-muted-foreground"}`}>
                      {grade.desc}
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Score Result + Actions */}
        <div className="px-5 pb-5 pt-2 bg-white flex flex-col gap-4 border-t border-border shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-foreground">Hasil Evaluasi</label>
            <div className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg border transition-all ${scoreColorClass}`}>
              {selected ? (
                <>
                  {parseInt(selected) >= 3 ? (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  )}
                  <span className="text-sm font-bold">{selectedGrade?.label} — {selectedGrade?.desc}</span>
                </>
              ) : (
                <span className="text-sm text-muted-foreground">Pilih grade untuk melihat hasil</span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-border rounded-lg text-sm font-bold text-foreground hover:bg-secondary transition-colors"
            >
              BATAL
            </button>
            <button
              onClick={handleSave}
              disabled={!selected}
              className="px-6 py-2.5 bg-[#00277f] text-white rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-[#001b63] transition-colors shadow-sm"
            >
              SIMPAN SKOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useMemo } from "react";
import { X, Info } from "lucide-react";

interface DivaModalProps {
  currentScore: string;
  currentType: "dewasa" | "anak";
  onSave: (score: string, type: "dewasa" | "anak") => void;
  onClose: () => void;
}

// ── Dewasa: checkbox-based, each = 1 point ──

const DEWASA_CRITERIA = [
  { id: "d1", text: "Riwayat kegagalan pemasangan IV sebelumnya" },
  { id: "d2", text: "Vena tidak terlihat" },
  { id: "d3", text: "Vena tidak teraba" },
  { id: "d4", text: "Obesitas" },
  { id: "d5", text: "Edema" },
  { id: "d6", text: "Riwayat penyalahgunaan narkoba" },
  { id: "d7", text: "Kondisi kulit (kering, robek, luka)" },
];

function getDewasaInterpretation(score: number): { label: string; color: string; recommendation: string } {
  if (score === 0) return {
    label: "0 - Risiko Rendah",
    color: "bg-[#ecfdf5] text-[#047857] border-[#a7f3d0]",
    recommendation: "Lakukan pemasangan IV dengan prosedur standar",
  };
  if (score <= 3) return {
    label: `${score} - Risiko Sedang`,
    color: "bg-[#fefce8] text-[#a16207] border-[#fde047]",
    recommendation: "Pertimbangkan penggunaan teknologi bantu (ultrasound/near-infrared)",
  };
  return {
    label: `${score} - Risiko Tinggi`,
    color: "bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]",
    recommendation: "Segera konsultasikan pemasangan akses dengan tim yang terlatih",
  };
}

// ── Anak: radio-button categories ──

interface AnakCategory {
  id: string;
  label: string;
  options: { label: string; value: number }[];
}

const ANAK_CATEGORIES: AnakCategory[] = [
  {
    id: "vena_visible",
    label: "Vena terlihat setelah torniket",
    options: [
      { label: "Bisa dilihat", value: 0 },
      { label: "Tidak Terlihat", value: 2 },
    ],
  },
  {
    id: "vena_palpable",
    label: "Vena teraba setelah torniket",
    options: [
      { label: "Jelas", value: 0 },
      { label: "Tidak Teraba", value: 2 },
    ],
  },
  {
    id: "usia",
    label: "Usia",
    options: [
      { label: "≥ 3 tahun", value: 0 },
      { label: "1-2 tahun", value: 1 },
      { label: "< 1 tahun", value: 3 },
    ],
  },
  {
    id: "prematuritas",
    label: "Sejarah prematuritas",
    options: [
      { label: "Jangkah penuh", value: 0 },
      { label: "Prematur", value: 3 },
    ],
  },
];

function getAnakInterpretation(score: number): { label: string; color: string; recommendation: string } {
  if (score <= 3) return {
    label: `${score} - Risiko Rendah`,
    color: "bg-[#ecfdf5] text-[#047857] border-[#a7f3d0]",
    recommendation: "Lakukan pemasangan IV dengan prosedur standar",
  };
  return {
    label: `${score} - Risiko Tinggi`,
    color: "bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]",
    recommendation: "Akses IV diperkirakan sangat sulit. Segera konsultasikan pemasangan akses dengan tim yang terlatih",
  };
}

// ── Shared checkbox component ──

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

// ── Main component ──

export function DivaModal({ currentScore, currentType, onSave, onClose }: DivaModalProps) {
  const [tab, setTab] = useState<"dewasa" | "anak">(currentType || "dewasa");
  
  // Dewasa state
  const [dewasaChecked, setDewasaChecked] = useState<Set<string>>(new Set());
  
  // Anak state: map of category id -> selected value
  const [anakSelections, setAnakSelections] = useState<Record<string, number>>({});

  const dewasaScore = dewasaChecked.size;
  const anakScore = useMemo(() => {
    return Object.values(anakSelections).reduce((sum, v) => sum + v, 0);
  }, [anakSelections]);

  const currentScoreNum = tab === "dewasa" ? dewasaScore : anakScore;
  const interpretation = tab === "dewasa"
    ? getDewasaInterpretation(dewasaScore)
    : getAnakInterpretation(anakScore);

  const canSave = tab === "dewasa"
    ? true // Score 0 is valid for dewasa (no checks needed = risiko rendah)
    : Object.keys(anakSelections).length === ANAK_CATEGORIES.length; // All categories must be answered

  const handleSave = () => {
    onSave(String(currentScoreNum), tab);
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
            Skor DIVA
          </h2>
          <button onClick={onClose} className="p-1.5 hover:bg-secondary rounded-lg transition-colors" title="Tutup">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center w-full bg-[#f1f5f9] rounded-lg p-1 border border-border/40">
            <button
              onClick={() => setTab("dewasa")}
              className={`flex-1 py-2 text-center text-sm font-bold rounded-md transition-all ${
                tab === "dewasa" ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Dewasa
            </button>
            <button
              onClick={() => setTab("anak")}
              className={`flex-1 py-2 text-center text-sm font-bold rounded-md transition-all ${
                tab === "anak" ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Anak
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {tab === "dewasa" ? (
            <div className="flex flex-col gap-1">
              {DEWASA_CRITERIA.map((c) => {
                const checked = dewasaChecked.has(c.id);
                return (
                  <label
                    key={c.id}
                    className={`flex items-start gap-3 cursor-pointer p-2.5 rounded-lg transition-colors border ${
                      checked ? "bg-[#f0f4ff] border-[#00277f]/30" : "bg-card border-transparent hover:bg-secondary/60"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setDewasaChecked((prev) => {
                        const next = new Set(prev);
                        if (next.has(c.id)) next.delete(c.id);
                        else next.add(c.id);
                        return next;
                      });
                    }}
                  >
                    <CheckboxIcon checked={checked} />
                    <span className={`text-sm flex-1 ${checked ? "text-[#001b63] font-medium" : "text-foreground"}`} style={{ lineHeight: "1.4" }}>
                      {c.text}
                    </span>
                  </label>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {ANAK_CATEGORIES.map((cat) => (
                <div key={cat.id} className="flex flex-col gap-2">
                  <p className="text-sm font-bold text-foreground">{cat.label}</p>
                  <div className="flex flex-wrap gap-4">
                    {cat.options.map((opt) => {
                      const selected = anakSelections[cat.id] === opt.value;
                      return (
                        <label
                          key={opt.label}
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            setAnakSelections((prev) => ({ ...prev, [cat.id]: opt.value }));
                          }}
                        >
                          <RadioIcon selected={selected} />
                          <span className={`text-sm ${selected ? "text-foreground font-medium" : "text-muted-foreground"}`}>{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Score Result + Action bar */}
        <div className="px-5 pb-5 pt-2 bg-white flex flex-col gap-3 border-t border-border shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
          {/* Score display */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-foreground">Total Skor DIVA</label>
            <div className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg border ${interpretation.color}`}>
              <span className="text-sm font-bold">{interpretation.label}</span>
            </div>
          </div>

          {/* Recommendation callout */}
          {interpretation.recommendation && (
            <div className={`flex items-start gap-3 px-4 py-3 rounded-lg ${
              currentScoreNum >= 4 || (tab === "anak" && currentScoreNum > 3)
                ? "bg-[#0ea5e9]/10 border border-[#0ea5e9]/30"
                : "bg-[#0ea5e9]/10 border border-[#0ea5e9]/30"
            }`}>
              <Info className="w-5 h-5 text-[#0284c7] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-bold text-[#0c4a6e]">
                  {currentScoreNum >= 4 || (tab === "anak" && currentScoreNum > 3) ? "Intervensi" : "Rekomendasi Tindakan"}
                </p>
                <p className="text-sm text-[#0c4a6e]">{interpretation.recommendation}</p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-1">
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
    </div>
  );
}

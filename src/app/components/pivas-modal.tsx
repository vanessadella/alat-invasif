import { useState, useMemo } from "react";
import { X, AlertCircle, CheckCircle2 } from "lucide-react";

interface PivasModalProps {
  currentScore: string;
  onSave: (score: string, kategoriPhlebitis: string) => void;
  onClose: () => void;
}

// ── Category-grouped signs matching Figma design ──

interface PivasSign {
  id: string;
  text: string;
}

interface PivasCategory {
  id: string;
  label: string;
  signs: PivasSign[];
}

const NORMAL_CATEGORY: PivasCategory = {
  id: "normal",
  label: "Normal",
  signs: [
    { id: "baik", text: "Lokasi infus tampak baik (tidak ada kemerahan, bengkak, nyeri, keras)" },
  ],
};

const ABNORMAL_CATEGORIES: PivasCategory[] = [
  {
    id: "nyeri",
    label: "Nyeri",
    signs: [
      { id: "nyeri_ringan", text: "Nyeri ringan skor 1-3 di area insersi" },
      { id: "nyeri_sedang", text: "Skor Nyeri 4-6 di area pemasangan infus" },
      { id: "nyeri_berat", text: "Skor Nyeri 5-7 di area pemasangan infus" },
      { id: "nyeri_lebih", text: "Skor Nyeri > dari 7 di area pemasangan infus" },
      { id: "nyeri_hebat", text: "Nyeri sangat hebat" },
    ],
  },
  {
    id: "kemerahan",
    label: "Kemerahan",
    signs: [
      { id: "kemerahan_ringan", text: "Kemerahan ringan diameter < 1 cm dari titik insersi" },
      { id: "kemerahan_1_25", text: "Kemerahan di sekitar area penusukan diameter > 1 cm dan < 2.5 cm" },
      { id: "kemerahan_25_5", text: "Kemerahan di sekitar area penusukan diameter 2.5 cm sampai 5 cm" },
      { id: "kemerahan_luas", text: "Kemerahan meluas dan menjalar sepanjang vena lebih dari 5 cm" },
    ],
  },
  {
    id: "bengkak",
    label: "Bengkak",
    signs: [
      { id: "bengkak_area", text: "Bengkak diarea sekitar penusukan" },
      { id: "bengkak_keras", text: "Bengkak dan teraba keras diarea vena seperti kabel/ paltable core (palpasi seperti tali)" },
      { id: "bengkak_significant", text: "Pembengkakan significant (area sekitarnya)" },
      { id: "vena_teraba", text: "Vena sangat jelas teraba dan terlihat (cord-like)" },
      { id: "vena_keras", text: "Vena sangat keras dan nyeri sepanjang jalur" },
    ],
  },
  {
    id: "infeksi",
    label: "Tanda-Tanda Infeksi",
    signs: [
      { id: "kulit_hangat", text: "Kulit sekitar mulai hangat" },
      { id: "demam_ringan", text: "Demam (>37,5 - < 38 C)" },
      { id: "demam_tinggi", text: "Demam (>38 C)" },
      { id: "cairan_minimal", text: "Terdapat cairan minimal pada area insersi" },
      { id: "cairan_purulent", text: "Terdapat cairan purulent di area insersi" },
      { id: "infeksi_sistemik", text: "Tanda infeksi sistemik" },
      { id: "trombophlebitis", text: "Kemungkinan Trombophlebitis" },
    ],
  },
];

// ── Scoring logic (maps new IDs to 0-5 scale) ──

function calculatePivasScore(selectedIds: string[]): string {
  if (selectedIds.length === 0) return "";
  if (selectedIds.includes("baik") && selectedIds.length === 1) return "0 - Tidak ada tanda-tanda phlebitis";

  // Score 5: severe infection signs
  const score5 = ["cairan_purulent", "infeksi_sistemik", "trombophlebitis"];
  if (score5.some((id) => selectedIds.includes(id))) return "5 - Stadium lanjut Thrombophlebitis";

  // Score 4: advanced phlebitis
  const score4 = ["vena_teraba", "vena_keras", "demam_tinggi"];
  if (score4.some((id) => selectedIds.includes(id))) return "4 - Tahap lanjut phlebitis/awal trombophlebitis";

  // Score 3: early phlebitis (moderate pain + kemerahan + bengkak combinations)
  const score3 = ["nyeri_berat", "nyeri_lebih", "nyeri_hebat", "kemerahan_25_5", "kemerahan_luas", "bengkak_keras", "bengkak_significant", "demam_ringan", "cairan_minimal"];
  if (score3.some((id) => selectedIds.includes(id))) return "3 - Tahap awal phlebitis";

  // Score 2: early signs (moderate kemerahan or bengkak or moderate pain)
  const score2 = ["nyeri_sedang", "kemerahan_1_25", "bengkak_area", "kulit_hangat"];
  const has2 = score2.filter((id) => selectedIds.includes(id));
  if (has2.length >= 2) return "2 - Phlebitis awal";

  // Score 1: mild signs
  const score1 = ["nyeri_ringan", "kemerahan_ringan"];
  if (score1.some((id) => selectedIds.includes(id)) || has2.length === 1) return "1 - Tidak ada tanda-tanda phlebitis";

  return "0 - Tidak ada tanda-tanda phlebitis";
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

export function PivasModal({ currentScore, onSave, onClose }: PivasModalProps) {
  const initialSelected = currentScore?.startsWith("0") ? ["baik"] : [];
  const [selectedIds, setSelectedIds] = useState<string[]>(initialSelected);

  const calculatedScoreText = useMemo(() => calculatePivasScore(selectedIds), [selectedIds]);

  const toggleSign = (id: string) => {
    setSelectedIds((prev) => {
      if (id === "baik" && !prev.includes("baik")) return ["baik"];
      let next = [...prev];
      if (next.includes(id)) {
        next = next.filter((i) => i !== id);
      } else {
        next.push(id);
      }
      if (id !== "baik" && next.includes(id)) {
        next = next.filter((i) => i !== "baik");
      }
      return next;
    });
  };

  const handleSave = () => {
    let kat = "";
    if (calculatedScoreText.startsWith("0")) kat = "O";
    else if (calculatedScoreText.startsWith("1") || calculatedScoreText.startsWith("2")) kat = "A";
    else if (calculatedScoreText) kat = "P";
    onSave(calculatedScoreText, kat);
    onClose();
  };

  // Score result styling
  let scoreColorClass = "bg-secondary text-foreground border-border/50";
  let scoreIcon = null;

  if (calculatedScoreText.startsWith("0")) {
    scoreColorClass = "bg-[#ecfdf5] text-[#047857] border-[#a7f3d0]";
    scoreIcon = <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0" />;
  } else if (calculatedScoreText.startsWith("1")) {
    scoreColorClass = "bg-[#fefce8] text-[#a16207] border-[#fde047]";
    scoreIcon = <AlertCircle className="w-5 h-5 text-[#eab308] shrink-0" />;
  } else if (calculatedScoreText.startsWith("2")) {
    scoreColorClass = "bg-[#fff7ed] text-[#c2410c] border-[#fed7aa]";
    scoreIcon = <AlertCircle className="w-5 h-5 text-[#f97316] shrink-0" />;
  } else if (calculatedScoreText.startsWith("3")) {
    scoreColorClass = "bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]";
    scoreIcon = <AlertCircle className="w-5 h-5 text-[#ef4444] shrink-0" />;
  } else if (calculatedScoreText.startsWith("4")) {
    scoreColorClass = "bg-[#7f1d1d] text-white border-[#450a0a]";
    scoreIcon = <AlertCircle className="w-5 h-5 text-white shrink-0" />;
  } else if (calculatedScoreText.startsWith("5")) {
    scoreColorClass = "bg-[#450a0a] text-white border-[#450a0a]";
    scoreIcon = <AlertCircle className="w-5 h-5 text-white shrink-0" />;
  }

  const renderCheckbox = (sign: PivasSign) => {
    const checked = selectedIds.includes(sign.id);
    return (
      <label
        key={sign.id}
        className={`flex items-start gap-2.5 cursor-pointer p-2 rounded-lg transition-colors border ${
          checked ? "bg-[#f0f4ff] border-[#00277f]/30" : "bg-transparent border-transparent hover:bg-secondary/60"
        }`}
        onClick={(e) => { e.preventDefault(); toggleSign(sign.id); }}
      >
        <CheckboxIcon checked={checked} />
        <span className={`text-[13px] flex-1 leading-[1.4] ${checked ? "text-[#001b63] font-medium" : "text-foreground"}`}>
          {sign.text}
        </span>
      </label>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-[2px]"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.4)" }}
      onClick={onClose}
    >
      <div
        className="bg-[#f8fafc] flex flex-col w-full max-w-[960px] max-h-[90vh] overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-white">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-foreground text-lg font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
              Skor PIVAS
            </h2>
            <p className="text-xs text-muted-foreground">IV Perifer</p>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-secondary rounded-lg transition-colors" title="Tutup">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">

          {/* Normal section - full width */}
          <div className="mb-4 pb-4 border-b border-border">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Normal</p>
            {NORMAL_CATEGORY.signs.map((sign) => renderCheckbox(sign))}
          </div>

          {/* Abnormal categories - responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {ABNORMAL_CATEGORIES.map((category) => (
              <div key={category.id} className="flex flex-col gap-1">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">{category.label}</p>
                {category.signs.map((sign) => renderCheckbox(sign))}
              </div>
            ))}
          </div>
        </div>

        {/* Score Result + Actions */}
        <div className="px-5 pb-5 pt-2 bg-white flex flex-col gap-4 border-t border-border shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-foreground">Skor PIVAS</label>
            <div className={`flex items-center gap-3 w-full px-4 py-3 min-h-[52px] rounded-lg border transition-all ${scoreColorClass}`}>
              {scoreIcon}
              <span className="text-sm font-bold leading-tight">
                {calculatedScoreText || "Pilih gejala untuk melihat skor"}
              </span>
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
              disabled={!calculatedScoreText}
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
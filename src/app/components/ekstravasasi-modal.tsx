import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface EkstravasasiModalProps {
  currentScore: string;
  currentChecks?: string[];
  onSave: (score: string, checks: string[]) => void;
  onClose: () => void;
}

// Symptom categories matching the Figma design
const CATEGORIES: { title: string; items: string[] }[] = [
  {
    title: "Nyeri",
    items: [
      "Lokasi infus terasa nyeri",
      "Nyeri",
    ],
  },
  {
    title: "Eritema",
    items: [
      "Tidak ada eritema",
      "Eritema ringan",
      "Eritema meluas",
      "Eritema luas",
    ],
  },
  {
    title: "Bengkak",
    items: [
      "Pembengkakan lokal (±1-10% area ekstremitas)",
      "Pembengkakan ringan (±25%)",
      "Pembengkakan 25-50%",
      "Pembengkakan >50%",
    ],
  },
  {
    title: "Lainnya",
    items: [
      "Kulit sekitar mulai hangat",
      "Kulit Dingin",
      "CRT 1-2 detik",
      "CRT >4 detik",
      "Blanching (vasopressor)",
      "Nadi distal baik",
      "Nadi baik",
      "Nadi ↓ / tidak ada",
      "Nekrosis / blister",
    ],
  },
];

const STAGES = ["1", "2", "3", "4", "5"];

function CheckboxIcon({ checked }: { checked: boolean }) {
  return (
    <div
      className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
        checked
          ? "bg-[#00277f] border-[#00277f]"
          : "bg-white border-muted-foreground/30"
      }`}
    >
      {checked && (
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
          <path
            d="M1 4L4.5 7.5L11 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export function EkstravasasiModal({ currentScore, currentChecks, onSave, onClose }: EkstravasasiModalProps) {
  const [checks, setChecks] = useState<string[]>(currentChecks || []);
  const [stage, setStage] = useState<string>(currentScore || "");

  useEffect(() => {
    let maxStage = 0;
    for (const check of checks) {
      if ([
        "Pembengkakan >50%", 
        "Eritema luas", 
        "Nadi ↓ / tidak ada", 
        "CRT >4 detik", 
        "Nekrosis / blister"
      ].includes(check)) {
        maxStage = Math.max(maxStage, 4);
      } else if ([
        "Nyeri", 
        "Pembengkakan 25-50%", 
        "Eritema meluas", 
        "Blanching (vasopressor)", 
        "Kulit Dingin", 
        "Nadi baik"
      ].includes(check)) {
        maxStage = Math.max(maxStage, 3);
      } else if ([
        "Eritema ringan", 
        "Pembengkakan ringan (±25%)", 
        "Nadi distal baik", 
        "CRT 1-2 detik"
      ].includes(check)) {
        maxStage = Math.max(maxStage, 2);
      } else if ([
        "Lokasi infus terasa nyeri", 
        "Tidak ada eritema", 
        "Pembengkakan lokal (±1-10% area ekstremitas)"
      ].includes(check)) {
        maxStage = Math.max(maxStage, 1);
      }
    }
    setStage(maxStage > 0 ? maxStage.toString() : "");
  }, [checks]);

  const toggleCheck = (item: string) => {
    setChecks((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  const handleSave = () => {
    onSave(stage, checks);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-[2px]"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.4)" }}
      onClick={onClose}
    >
      <div
        className="bg-[#f8fafc] flex flex-col w-full max-w-[820px] max-h-[90vh] overflow-hidden rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-white">
          <h2
            className="text-foreground text-lg font-bold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Skor Ekstravasasi
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-secondary rounded-lg transition-colors"
            title="Tutup"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {/* Checkbox Grid - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="flex flex-col gap-2.5">
                <h3
                  className="text-sm font-bold text-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {cat.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {cat.items.map((item) => {
                    const isChecked = checks.includes(item);
                    return (
                      <label
                        key={item}
                        className="flex items-start gap-2.5 cursor-pointer select-none group"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleCheck(item);
                        }}
                      >
                        <CheckboxIcon checked={isChecked} />
                        <span
                          className={`text-sm leading-tight ${
                            isChecked ? "text-foreground font-medium" : "text-muted-foreground"
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Stage Ekstravasasi Input */}
          <div className="mt-6 flex flex-col gap-1.5">
            <label
              className="text-sm font-bold text-foreground"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Stage Ekstravasasi
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-[#f1f5f9] border border-border rounded-lg text-sm text-foreground font-medium outline-none cursor-not-allowed"
              style={{ fontFamily: "'Inter', sans-serif" }}
              placeholder="Stage akan dihitung otomatis..."
              value={stage ? `Stage ${stage}` : ""}
              readOnly
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-border bg-white shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-border rounded-lg text-sm font-bold text-foreground hover:bg-secondary transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            BATAL
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-[#00277f] text-white rounded-lg text-sm font-bold hover:bg-[#001b63] transition-colors shadow-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            SIMPAN
          </button>
        </div>
      </div>
    </div>
  );
}

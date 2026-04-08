import { InvasiveDevice } from "./invasive-data";
import { Clock, AlertCircle } from "lucide-react";

const fontInter: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };

interface TugasTabContentProps {
  devices: InvasiveDevice[];
  onOpenIvTask: () => void;
}

export function TugasTabContent({ devices, onOpenIvTask }: TugasTabContentProps) {
  const activeIvs = devices.filter(d => !d.waktuPelepasan && d.deviceType === "IV Perifer");

  return (
    <div className="flex-1 bg-muted/40 overflow-y-auto flex flex-col">
      {/* Top Filter Bar */}
      <div className="bg-card px-4 py-3 flex gap-2 border-b border-border shadow-sm justify-between">
        <button
          className="bg-card border border-border px-3 py-1.5 rounded-lg text-foreground flex items-center gap-2"
          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
        >
          14 MAR
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        
        <button
          className="bg-[#2a9d8f] text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5"
          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L8.854 4.757L13 5.36L10 8.284L10.708 12.41L7 10.457L3.292 12.41L4 8.284L1 5.36L5.146 4.757L7 1Z" fill="white" />
          </svg>
          5 CATATAN PENTING
        </button>
      </div>

      <div className="px-4 py-4">
        <h3 className="text-foreground mb-4" style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-bold)", ...fontInter }}>
          14 Mar Shift Pagi
        </h3>

        {/* Timeline Items */}
        <div className="flex flex-col gap-5">
          
          {/* Clock icon row */}
          <div className="flex gap-4 relative">
            <div className="w-8 shrink-0 flex justify-center mt-1">
              <Clock className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              {activeIvs.length > 0 && (
                <button
                  onClick={onOpenIvTask}
                  className="w-full bg-[#faedd9] rounded-lg p-4 flex items-center text-left relative overflow-hidden active:scale-[0.98] transition-transform shadow-sm"
                >
                  <span className="text-foreground font-bold" style={{ fontSize: "var(--text-base)", ...fontInter }}>
                    IV Monitoring
                  </span>
                  
                  {/* Red warning triangle right top corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M0 0H32V32L0 0Z" fill="#e21100" />
                      <circle cx="21" cy="7" r="1" fill="white" />
                      <path d="M20 9H22V15H20V9Z" fill="white" />
                      <path d="M20 17H22V19H20V17Z" fill="white" />
                    </svg>
                  </div>
                </button>
              )}
              
              <div className="w-full bg-[#faedd9] rounded-lg p-4 flex items-center text-left shadow-sm">
                <span className="text-foreground font-bold" style={{ fontSize: "var(--text-base)", ...fontInter }}>
                  Reassessment
                </span>
              </div>
            </div>
          </div>

          {/* 07 row */}
          <div className="flex gap-4">
            <div className="w-8 shrink-0 flex justify-center mt-3">
              <div className="w-7 h-7 bg-[#00109c] rounded-full flex items-center justify-center text-white text-xs font-bold">
                07
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="w-full bg-card rounded-lg p-4 flex items-center text-left border-l-[3px] border-[#f59e0b] shadow-sm">
                <span className="text-foreground font-bold" style={{ fontSize: "var(--text-base)", ...fontInter }}>
                  07:00 Mandi
                </span>
              </div>
              <div className="w-full bg-card rounded-lg p-4 flex items-center text-left border-l-[3px] border-[#f59e0b] shadow-sm">
                <span className="text-foreground font-bold" style={{ fontSize: "var(--text-base)", ...fontInter }}>
                  07:30 Makan
                </span>
              </div>
            </div>
          </div>
          
          {/* 08 row */}
          <div className="flex gap-4">
            <div className="w-8 shrink-0 flex justify-center mt-3">
              <span className="text-muted-foreground font-bold text-sm">08</span>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="w-full bg-card rounded-lg p-4 flex items-center text-left border-l-[3px] border-[#f59e0b] shadow-sm relative overflow-hidden">
                <span className="text-foreground font-bold" style={{ fontSize: "var(--text-base)", ...fontInter }}>
                  08:00 Cek gula darah
                </span>
                {/* Red warning triangle right top corner */}
                <div className="absolute top-0 right-0 w-7 h-7 pointer-events-none">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <path d="M0 0H32V32L0 0Z" fill="#e21100" />
                    <circle cx="21" cy="7" r="1" fill="white" />
                    <path d="M20 9H22V15H20V9Z" fill="white" />
                    <path d="M20 17H22V19H20V17Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="bg-card w-full mt-auto p-4 border-t border-border shadow-md">
        <button className="w-full py-3.5 bg-[#00109c] text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
          ATUR TUGAS - 14 MAR
        </button>
      </div>
    </div>
  );
}

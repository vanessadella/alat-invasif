import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Clock, Pencil, AlertCircle, CheckCircle2, BookmarkPlus } from "lucide-react";
import {
  InvasiveDevice,
  calculateDayCount,
  formatDateDisplay,
  hasPendingIntervensi,
} from "./invasive-data";

const fontBase: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };
const textXs: React.CSSProperties = { ...fontBase, fontSize: "var(--text-xs)" };
const textXsBold: React.CSSProperties = { ...textXs, fontWeight: "var(--font-weight-bold)" };
const textSm: React.CSSProperties = { ...fontBase, fontSize: "var(--text-sm)" };
const textSmBold: React.CSSProperties = { ...textSm, fontWeight: "var(--font-weight-bold)" };

interface InvasiveCardProps {
  device: InvasiveDevice;
  onEdit: (device: InvasiveDevice) => void;
  onOpenIntervensi?: (device: InvasiveDevice) => void;
  highlightedDeviceId?: string | null;
}

export function InvasiveCard({ device, onEdit, onOpenIntervensi, highlightedDeviceId }: InvasiveCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isHighlighted = highlightedDeviceId === device.id;

  // Scroll into view and auto-expand when highlighted
  useEffect(() => {
    if (isHighlighted && cardRef.current) {
      // Small delay to allow page change to render
      requestAnimationFrame(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        setExpanded(true);
      });
    }
  }, [isHighlighted]);

  const dayCount = calculateDayCount(device.waktuPemasangan);
  const isFailed = device.status === "tidak_berhasil";
  const hasStatus = !!device.status;
  const isRemoved = !!device.waktuPelepasan;
  const hasPendingTasks = hasPendingIntervensi(device);
  const hasIntervensi = device.intervensiTasks && device.intervensiTasks.length > 0;
  const tasks = device.intervensiTasks || [];
  const completedCount = tasks.filter((t) => t.checked).length;
  const totalCount = tasks.length;
  const allDone = totalCount > 0 && completedCount === totalCount;
  const historyCount = (device.pivasLog || []).filter(e => e.intervensiTasks && e.intervensiTasks.length > 0).length;

  return (
    <div
      ref={cardRef}
      data-device-id={device.id}
      className={`rounded-lg border overflow-hidden transition-all ${
        device.isDraft 
          ? "border-[#c2410c] border-dashed" 
          : isFailed 
            ? "border-[#e11d48]" 
            : "border-border"
        } ${isHighlighted ? "reminder-flash" : ""}`}
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)", borderRadius: "var(--radius)" }}
    >
      {/* Collapsed header */}
      <div
        className={`p-3 cursor-pointer ${isFailed && !expanded ? "bg-[#fff1f2]" : "bg-card"}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center justify-between">
          <span
            className="text-foreground truncate pr-2"
            style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
          >
            {device.displayName}
          </span>
          <div className="flex items-center gap-2 shrink-0">
            {hasStatus && (
              <span
                className={`px-2 py-0.5 rounded-full text-white ${isFailed ? "bg-[#e11d48]" : "bg-[#047857]"}`}
                style={{ fontSize: "10px", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
              >
                {isFailed ? "Tidak Berhasil" : "Berhasil"}
              </span>
            )}
            {device.isDraft && (
              <span
                className="px-2 py-0.5 rounded-full bg-[#FFF7ED] text-[#c2410c] flex items-center gap-1"
                style={{ fontSize: "10px", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
              >
                Draft
              </span>
            )}
            {expanded ? (
              <ChevronUp className="w-4 h-4 text-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-foreground" />
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-1 text-muted-foreground flex-wrap">
            <span style={{ fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
              {[device.location?.split(",")[1]?.trim() || device.location?.split(",")[0]?.trim(), device.size].filter(Boolean).join(", ")}
            </span>
            {device.waktuPemasangan && (
              <div className="flex items-center gap-1 ml-1" style={{ fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
                <Clock className="w-3.5 h-3.5" />
                <span>Hari ke-{dayCount}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className={`px-3 pb-3 ${isFailed ? "bg-[#fff1f2]" : "bg-card"}`}>
          <div className="bg-[#f8fafc] rounded-lg p-3 flex flex-col gap-3">
            {/* Row 1: Posisi & Lokasi */}
            <div className="grid grid-cols-2 gap-3">
              {device.deviceType === "IV Perifer" && (
                <div>
                  <p className="text-muted-foreground" style={textXs}>
                    Posisi
                  </p>
                  <p className="text-foreground" style={textSmBold}>
                    {device.location?.split(",")[0]?.trim() || "-"}
                  </p>
                </div>
              )}
              <div>
                <p className="text-muted-foreground" style={textXs}>
                  Lokasi
                </p>
                <p className="text-foreground" style={textSmBold}>
                  {device.deviceType === "IV Perifer"
                    ? device.location?.split(",")[1]?.trim() || "-"
                    : device.location || "-"}
                </p>
              </div>
            </div>

            {/* Row 2: Size & Jenis */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-muted-foreground" style={textXs}>
                  Size
                </p>
                <p className="text-foreground" style={textSmBold}>
                  {device.size || "-"}
                </p>
              </div>
              {device.jenis ? (
                <div>
                  <p className="text-muted-foreground" style={textXs}>
                    Jenis
                  </p>
                  <p className="text-foreground" style={textSmBold}>
                    {device.jenis}
                  </p>
                </div>
              ) : null}
            </div>

            {/* Size Huber Needle (conditional) */}
            {device.sizeHuber && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-muted-foreground" style={textXs}>
                    Size Huber Needle
                  </p>
                  <p className="text-foreground" style={textSmBold}>
                    {device.sizeHuber}
                  </p>
                </div>
              </div>
            )}

            {/* Row 3: Waktu Pemasangan & Waktu Pelepasan */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-muted-foreground" style={textXs}>
                  Waktu Pemasangan
                </p>
                <p className="text-foreground" style={textSmBold}>
                  {device.waktuPemasangan ? formatDateDisplay(device.waktuPemasangan) : "-"}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={textXs}>
                  Waktu Pelepasan
                </p>
                <p className="text-foreground" style={textSmBold}>
                  {device.waktuPelepasan ? formatDateDisplay(device.waktuPelepasan) : "-"}
                </p>
              </div>
            </div>

            {/* Row 4: Rekomendasi Pelepasan Alat & Alasan Pelepasan */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-muted-foreground" style={textXs}>
                  Rekomendasi Pelepasan Alat
                </p>
                <p className="text-foreground" style={textSmBold}>
                  Sesuai Indikasi Klinis
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={textXs}>
                  Alasan Pelepasan
                </p>
                <p className="text-foreground" style={textSmBold}>
                  {device.alasanPelepasan || "-"}
                </p>
              </div>
            </div>

            {/* Pemasang */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-muted-foreground" style={textXs}>
                  Pemasang
                </p>
                <p className="text-foreground" style={textSmBold}>
                  {device.pemasang || "-"}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground" style={textXs}>
                  Pelepas
                </p>
                <p className="text-foreground" style={textSmBold}>
                  {device.pelepas || "-"}
                </p>
              </div>
            </div>

            {/* Skor PIVAS - only for IV */}
            {device.pivasScore && (
              <div>
                <p className="text-muted-foreground" style={textXs}>
                  Skor PIVAS
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className="text-foreground" style={textSmBold}>
                    {device.pivasScore}
                  </p>
                  {device.kategoriPhlebitis && (
                    <span
                      className="px-1.5 py-0.5 rounded bg-[#fef3c7] text-[#92400e]"
                      style={textXs}
                    >
                      {device.kategoriPhlebitis}
                    </span>
                  )}
                </div>
              </div>
            )}


            {/* Komen */}
            {device.komen && (
              <div>
                <p className="text-muted-foreground" style={textXs}>
                  Komen
                </p>
                <p className="text-foreground" style={textSmBold}>
                  {device.komen}
                </p>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 mt-3 p-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(device);
              }}
              className="flex-1 flex justify-center items-center bg-[#00277f] text-white py-2 rounded border border-[#00277f] text-xs font-bold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              EDIT
            </button>
            {onOpenIntervensi && hasIntervensi ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenIntervensi(device);
                }}
                className={`flex-1 flex justify-center items-center py-2 rounded text-xs font-bold border ${allDone ? "border-[#047857] text-[#047857]" : "border-[#b45309] text-[#b45309]"}`}
                style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "white" }}
              >
                Intervensi ({completedCount}/{totalCount})
              </button>
            ) : (
                <div className="flex-1" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
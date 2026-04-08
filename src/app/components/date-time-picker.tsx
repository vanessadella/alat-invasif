import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import svgPaths from "../../imports/svg-vpsug9k617";

const MONTH_NAMES = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];
const DAY_NAMES = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

const fontBase: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };
const textSm: React.CSSProperties = { ...fontBase, fontSize: "var(--text-sm)" };
const textSmBold: React.CSSProperties = { ...textSm, fontWeight: "var(--font-weight-bold)" };

interface DateTimePickerProps {
  value: string; // ISO string like "2025-12-15T14:30"
  onChange: (value: string) => void;
  placeholder?: string;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function parseValue(value: string): { year: number; month: number; day: number; hours: string; minutes: string } {
  if (!value) {
    const now = new Date();
    return {
      year: now.getFullYear(),
      month: now.getMonth(),
      day: 0,
      hours: "",
      minutes: "",
    };
  }
  const d = new Date(value);
  return {
    year: d.getFullYear(),
    month: d.getMonth(),
    day: d.getDate(),
    hours: String(d.getHours()).padStart(2, "0"),
    minutes: String(d.getMinutes()).padStart(2, "0"),
  };
}

function formatDisplay(value: string): string {
  if (!value) return "";
  const d = new Date(value);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

export function DateTimePicker({ value, onChange, placeholder = "Pilih tanggal & waktu" }: DateTimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const parsed = parseValue(value);
  const [viewYear, setViewYear] = useState(parsed.year);
  const [viewMonth, setViewMonth] = useState(parsed.month);
  const [selectedDay, setSelectedDay] = useState(parsed.day);
  const [hours, setHours] = useState(parsed.hours);
  const [minutes, setMinutes] = useState(parsed.minutes);
  const [pickerPos, setPickerPos] = useState<{ top: number; left: number; openUp: boolean }>({ top: 0, left: 0, openUp: false });

  const triggerRef = useRef<HTMLDivElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const PICKER_HEIGHT = 420;

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const openUp = spaceBelow < PICKER_HEIGHT && rect.top > spaceBelow;
    setPickerPos({
      top: openUp ? rect.top - PICKER_HEIGHT - 4 : rect.bottom + 4,
      left: Math.min(rect.left, window.innerWidth - 284),
      openUp,
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();
    const onScroll = () => updatePosition();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        triggerRef.current && !triggerRef.current.contains(target) &&
        pickerRef.current && !pickerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // When opening, sync state from value
  const handleOpen = () => {
    const p = parseValue(value);
    setViewYear(p.year);
    setViewMonth(p.month);
    setSelectedDay(p.day);
    setHours(p.hours);
    setMinutes(p.minutes);
    setIsOpen(true);
  };

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    // Auto-commit the value
    const h = hours || "00";
    const m = minutes || "00";
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}T${h}:${m}`;
    onChange(dateStr);
  };

  const handleTimeChange = (newHours: string, newMinutes: string) => {
    setHours(newHours);
    setMinutes(newMinutes);
    if (selectedDay > 0) {
      const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}T${newHours || "00"}:${newMinutes || "00"}`;
      onChange(dateStr);
    }
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  // Check if a day is today
  const today = new Date();
  const isToday = (day: number) =>
    viewYear === today.getFullYear() && viewMonth === today.getMonth() && day === today.getDate();

  return (
    <>
      <div
        ref={triggerRef}
        className="flex items-center h-10 cursor-pointer gap-2 pl-4 pr-3"
        onClick={handleOpen}
      >
        <span
          className={`flex-1 min-w-0 truncate ${value ? "text-foreground" : "text-muted-foreground"}`}
          style={textSm}
        >
          {value ? formatDisplay(value) : placeholder}
        </span>
        <div className="shrink-0 size-5 relative overflow-clip">
          <div className="absolute inset-[6.8%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2673 17.2673">
              <path d={svgPaths.p27a3e300} fill="var(--fill-0, var(--foreground))" />
            </svg>
          </div>
        </div>
      </div>

      {isOpen && createPortal(
        <div
          ref={pickerRef}
          className="bg-card rounded-[var(--radius)] flex flex-col gap-2 p-2 overflow-hidden"
          style={{
            position: "fixed",
            top: pickerPos.top,
            left: pickerPos.left,
            width: 268,
            zIndex: 9999,
            border: "1px solid var(--border)",
            boxShadow: "var(--elevation-sm)",
          }}
        >
          {/* Month navigation */}
          <div className="flex gap-2 items-center">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-secondary transition-colors shrink-0"
            >
              <div className="overflow-clip relative size-5">
                <div className="absolute inset-[25%_37%_25%_34%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.81755 9.92204">
                    <path d={svgPaths.p2bf23d00} fill="var(--fill-0, var(--foreground))" />
                  </svg>
                </div>
              </div>
            </button>
            <div className="flex-1 text-center">
              <span className="text-foreground" style={textSmBold}>
                {MONTH_NAMES[viewMonth]} {viewYear}
              </span>
            </div>
            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-secondary transition-colors shrink-0"
            >
              <div className="overflow-clip relative size-5">
                <div className="absolute inset-[25%_36%_25%_35%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.80755 9.91205">
                    <path d={svgPaths.p3eb081c0} fill="var(--fill-0, var(--foreground))" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          {/* Day names */}
          <div className="grid grid-cols-7" style={{ width: 252 }}>
            {DAY_NAMES.map((d) => (
              <div key={d} className="size-9 flex items-center justify-center">
                <span className="text-foreground text-center" style={{ ...textSmBold, width: 36 }}>{d}</span>
              </div>
            ))}
          </div>

          {/* Date grid */}
          <div className="grid grid-cols-7" style={{ width: 252 }}>
            {/* Empty cells for first day offset */}
            {Array.from({ length: firstDay }, (_, i) => (
              <div key={`empty-${i}`} className="size-9" />
            ))}
            {/* Actual days */}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const isSelected = day === selectedDay;
              const isTodayDate = isToday(day);
              return (
                <button
                  key={day}
                  onClick={() => handleDayClick(day)}
                  className={`size-9 rounded-full flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : isTodayDate
                        ? "bg-secondary text-foreground"
                        : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span style={{ ...fontBase, fontSize: "var(--text-sm)", fontWeight: isSelected ? "var(--font-weight-bold)" : "var(--font-weight-normal)", width: 24, textAlign: "center" }}>
                    {day}
                  </span>
                </button>
              );
            })}
            {/* Trailing empty cells */}
            {Array.from({ length: (7 - ((firstDay + daysInMonth) % 7)) % 7 }, (_, i) => (
              <div key={`trail-${i}`} className="size-9" />
            ))}
          </div>

          {/* Time input */}
          <div className="p-2 flex flex-col gap-2">
            <div
              className="bg-card rounded-[var(--radius-button)] flex items-center gap-2 px-3 py-2"
              style={{ border: "1px solid var(--border)" }}
            >
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground min-w-0"
                style={textSm}
                placeholder="00.00"
                value={hours && minutes ? `${hours}.${minutes}` : ""}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^0-9.]/g, "");
                  const parts = raw.split(".");
                  let h = parts[0] || "";
                  let m = parts[1] !== undefined ? parts[1] : "";
                  if (h.length > 2) h = h.slice(0, 2);
                  if (m.length > 2) m = m.slice(0, 2);
                  const hNum = parseInt(h, 10);
                  const mNum = parseInt(m, 10);
                  if (h && hNum > 23) h = "23";
                  if (m && mNum > 59) m = "59";
                  const newH = h.padStart(2, "0");
                  const newM = m ? m.padStart(2, "0") : minutes || "00";
                  handleTimeChange(h ? newH : "", m ? newM : minutes || "");
                }}
                onBlur={() => {
                  // Normalize on blur
                  if (hours || minutes) {
                    const h = (hours || "00").padStart(2, "0");
                    const m = (minutes || "00").padStart(2, "0");
                    handleTimeChange(h, m);
                  }
                }}
              />
              <div className="shrink-0 size-5 relative overflow-clip">
                <div className="absolute inset-[6.8%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2673 17.2673">
                    <path d={svgPaths.p27a3e300} fill="var(--fill-0, var(--foreground))" />
                  </svg>
                </div>
              </div>
            </div>
            {/* "Sekarang" (Now) button */}
            <button
              type="button"
              onClick={() => {
                const now = new Date();
                const nowYear = now.getFullYear();
                const nowMonth = now.getMonth();
                const nowDay = now.getDate();
                const nowH = String(now.getHours()).padStart(2, "0");
                const nowM = String(now.getMinutes()).padStart(2, "0");
                setViewYear(nowYear);
                setViewMonth(nowMonth);
                setSelectedDay(nowDay);
                setHours(nowH);
                setMinutes(nowM);
                const dateStr = `${nowYear}-${String(nowMonth + 1).padStart(2, "0")}-${String(nowDay).padStart(2, "0")}T${nowH}:${nowM}`;
                onChange(dateStr);
              }}
              className="w-full rounded-[var(--radius-button)] py-1.5 text-primary border transition-colors hover:bg-secondary"
              style={{ ...textSmBold, borderColor: "var(--primary)" }}
            >
              Sekarang
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";

interface InlineCellDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  allowFreeText?: boolean;
}

export function InlineCellDropdown({ options, value, onChange, placeholder, allowFreeText = false }: InlineCellDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number; width: number; openUp: boolean }>({ top: 0, left: 0, width: 0, openUp: false });
  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = options.filter((opt) => opt.toLowerCase().includes(search.toLowerCase()));

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const dropdownHeight = Math.min(filtered.length * 36 + 8, 192); // max-h-48 = 192px
    const openUp = spaceBelow < dropdownHeight && spaceAbove > spaceBelow;

    setDropdownPos({
      top: openUp ? rect.top - dropdownHeight : rect.bottom,
      left: rect.left,
      width: Math.max(rect.width, 180),
      openUp,
    });
  }, [filtered.length]);

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
        dropdownRef.current && !dropdownRef.current.contains(target)
      ) {
        if (allowFreeText && search.trim() && !value) {
          onChange(search.trim());
        }
        setIsOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, search, value, allowFreeText, onChange]);

  const handleToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setIsOpen(false);
      setSearch("");
    }
  };

  const handleSelect = (opt: string) => {
    onChange(opt);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <>
      <div
        ref={triggerRef}
        className="relative flex items-center justify-between w-full h-10 cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex-1 min-w-0 pl-4 py-2">
          {isOpen ? (
            <input
              ref={inputRef}
              type="text"
              className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
              placeholder={placeholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (allowFreeText && search.trim()) {
                    onChange(search.trim());
                  } else if (filtered.length > 0) {
                    onChange(filtered[0]);
                  }
                  setIsOpen(false);
                  setSearch("");
                }
                if (e.key === "Escape") {
                  setIsOpen(false);
                  setSearch("");
                }
              }}
            />
          ) : (
            <span
              className={`block truncate ${value ? "text-foreground" : "text-muted-foreground"}`}
              style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif", lineHeight: "20px" }}
            >
              {value || placeholder}
            </span>
          )}
        </div>
        <div className="shrink-0 pr-4 py-2">
          <ChevronDown className={`w-5 h-5 text-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>

      {/* Portal dropdown */}
      {isOpen && createPortal(
        <div
          ref={dropdownRef}
          className="bg-card border border-border rounded-md max-h-48 overflow-y-auto"
          style={{
            position: "fixed",
            top: dropdownPos.top,
            left: dropdownPos.left,
            width: dropdownPos.width,
            zIndex: 9999,
            boxShadow: "var(--elevation-sm)",
          }}
        >
          {filtered.map((opt) => (
            <div
              key={opt}
              className={`px-3 py-2 cursor-pointer hover:bg-secondary transition-colors ${opt === value ? "bg-secondary" : ""}`}
              style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
          {allowFreeText && search.trim() && filtered.length === 0 && (
            <div
              className="px-3 py-2 cursor-pointer hover:bg-secondary transition-colors text-accent"
              style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
              onClick={() => handleSelect(search.trim())}
            >
              Lainnya: "{search.trim()}"
            </div>
          )}
          {allowFreeText && !search.trim() && (
            <div
              className="px-3 py-2 text-muted-foreground border-t border-border"
              style={{ fontSize: "var(--text-xs)", fontFamily: "'Inter', sans-serif" }}
            >
              Ketik untuk input "Lainnya"
            </div>
          )}
          {filtered.length === 0 && !allowFreeText && (
            <div className="px-3 py-2 text-muted-foreground" style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}>
              Tidak ditemukan
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
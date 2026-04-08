import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SearchableDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  allowFreeText?: boolean;
  freeTextLabel?: string;
}

export function SearchableDropdown({
  options,
  value,
  onChange,
  placeholder,
  allowFreeText = false,
  freeTextLabel = "Lainnya",
}: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showFreeText, setShowFreeText] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch("");
        setShowFreeText(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (opt: string) => {
    if (opt === freeTextLabel && allowFreeText) {
      setShowFreeText(true);
      setSearch("");
      onChange("");
      return;
    }
    onChange(opt);
    setIsOpen(false);
    setSearch("");
    setShowFreeText(false);
  };

  const handleFreeTextConfirm = () => {
    if (search.trim()) {
      onChange(search.trim());
      setIsOpen(false);
      setSearch("");
      setShowFreeText(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className="flex items-center gap-2 px-3 py-2 bg-input-background border border-border rounded-md cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setTimeout(() => inputRef.current?.focus(), 50);
        }}
      >
        {isOpen || showFreeText ? (
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
            placeholder={showFreeText ? "Ketik nama lainnya..." : `Cari ${placeholder.toLowerCase()}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && showFreeText) handleFreeTextConfirm();
            }}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span
            className={`flex-1 truncate ${value ? "text-foreground" : "text-muted-foreground"}`}
            style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
          >
            {value || placeholder}
          </span>
        )}
        <ChevronDown className="w-5 h-5 text-foreground shrink-0" />
      </div>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-card border border-border rounded-md shadow-sm max-h-48 overflow-y-auto">
          {showFreeText ? (
            <div className="p-2">
              <p className="text-muted-foreground px-2 py-1" style={{ fontSize: "var(--text-xs)", fontFamily: "'Inter', sans-serif" }}>
                Tekan Enter untuk konfirmasi
              </p>
            </div>
          ) : (
            <>
              {filtered.map((opt) => (
                <div
                  key={opt}
                  className={`px-3 py-2 cursor-pointer hover:bg-secondary transition-colors ${
                    opt === value ? "bg-secondary" : ""
                  }`}
                  style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
                  onClick={() => handleSelect(opt)}
                >
                  {opt}
                </div>
              ))}
              {allowFreeText && (
                <div
                  className="px-3 py-2 cursor-pointer hover:bg-secondary transition-colors border-t border-border text-accent"
                  style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
                  onClick={() => handleSelect(freeTextLabel)}
                >
                  {freeTextLabel} (ketik manual)
                </div>
              )}
              {filtered.length === 0 && !allowFreeText && (
                <div className="px-3 py-2 text-muted-foreground" style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}>
                  Tidak ditemukan
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
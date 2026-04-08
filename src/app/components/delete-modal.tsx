import { X } from "lucide-react";

interface DeleteModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteModal({ onConfirm, onCancel }: DeleteModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(23,23,23,0.75)]" onClick={onCancel}>
      <div
        className="bg-card rounded-xl w-[328px] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-2 p-4 border-b border-border">
          <p
            className="flex-1 text-foreground"
            style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
          >
            Hapus Alat Invasif?
          </p>
          <button onClick={onCancel} className="shrink-0">
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <p
            className="text-foreground"
            style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", fontFamily: "'Inter', sans-serif", lineHeight: "20px" }}
          >
            Data yang sudah Anda isi belum disimpan dan akan hilang. Yakin ingin hapus?
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 p-4 border-t border-border">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors"
            style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
          >
            BATAL
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity"
            style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
          >
            YA, HAPUS
          </button>
        </div>
      </div>
    </div>
  );
}

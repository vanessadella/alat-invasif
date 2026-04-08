import { useState, useRef } from "react";
import { InvasiveDevice, generateIntervensiTasks } from "./invasive-data";
import { PivasModal } from "./pivas-modal";
import { toast } from "sonner";
import { Info, Camera, ImagePlus, X, ZoomIn, CheckCircle2, AlertCircle, ArrowRight, FileText as FileIcon } from "lucide-react";

interface TugasPivasModalProps {
  devices: InvasiveDevice[];
  onSave: (devices: InvasiveDevice[]) => void;
  onClose: () => void;
}

// ── Shared helpers ──────────────────────────────────────────────

const getScoreBadgeStyle = (scoreText: string) => {
  if (scoreText.startsWith("0")) return "bg-[#ecfdf5] text-[#047857] border-[#a7f3d0]";
  if (scoreText.startsWith("1")) return "bg-[#fefce8] text-[#a16207] border-[#fde047]";
  if (scoreText.startsWith("2")) return "bg-[#fff7ed] text-[#c2410c] border-[#fed7aa]";
  if (scoreText.startsWith("3")) return "bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]";
  if (scoreText.startsWith("4")) return "bg-[#7f1d1d] text-white border-[#450a0a]";
  if (scoreText.startsWith("5")) return "bg-[#450a0a] text-white border-[#450a0a]";
  return "bg-secondary text-muted-foreground border-border";
};

const getScoreNumber = (scoreText: string) => scoreText.split(" ")[0] || "";

// ── Score Badge (one component, used everywhere) ────────────────

function ScoreBadge({ scoreText, size = "sm" }: { scoreText: string; size?: "sm" | "xs" }) {
  const cls = size === "sm"
    ? "px-2.5 py-1 text-xs gap-1.5"
    : "px-2 py-0.5 text-[10px] gap-1";
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-3 h-3";
  return (
    <span className={`inline-flex items-center rounded-md border font-bold ${cls} ${getScoreBadgeStyle(scoreText)}`}>
      <CheckCircle2 className={iconSize} />
      {getScoreNumber(scoreText)}
    </span>
  );
}

// ── Before → After score widget ─────────────────────────────────

function BeforeAfterScore({
  prevScore,
  newScore,
}: {
  prevScore: string | undefined;
  newScore: string | undefined;
}) {
  const prev = prevScore || null;
  const next = newScore || null;

  // Nothing evaluated yet and no previous
  if (!prev && !next) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#e21100]/30 bg-[#fef2f2] text-[#e21100] text-xs font-bold">
        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
        Skor PIVAS wajib diisi
      </div>
    );
  }

  // Has previous but not yet evaluated this round
  if (prev && !next) {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        <ScoreBadge scoreText={prev} size="sm" />
        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#e21100]/30 bg-[#fef2f2] text-[#e21100] text-xs font-bold">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          Wajib diisi
        </span>
      </div>
    );
  }

  // No previous, but just evaluated
  if (!prev && next) {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        <span className="px-2.5 py-1 rounded-md border border-border bg-secondary text-muted-foreground text-xs font-bold">—</span>
        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        <ScoreBadge scoreText={next} size="sm" />
      </div>
    );
  }

  // Both present → show before → after
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <ScoreBadge scoreText={prev!} size="sm" />
      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
      <ScoreBadge scoreText={next!} size="sm" />
    </div>
  );
}

// ── Photo controls (shared for mobile + desktop) ────────────────

function PhotoControl({
  deviceId,
  displayName,
  photoUrl,
  fileInfo,
  showOptions,
  onToggleOptions,
  onOpenCamera,
  onOpenGallery,
  onRemove,
  onPreview,
}: {
  deviceId: string;
  displayName: string;
  photoUrl: string | undefined;
  fileInfo: { name: string; size: string } | undefined;
  showOptions: boolean;
  onToggleOptions: () => void;
  onOpenCamera: () => void;
  onOpenGallery: () => void;
  onRemove: (e: React.MouseEvent) => void;
  onPreview: () => void;
}) {
  // After photo is captured: show file card (matching Figma)
  if (photoUrl && fileInfo) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div
          className="flex items-center gap-3 bg-card border border-border rounded-lg px-3 py-2.5 cursor-pointer hover:bg-secondary/30 transition-colors group"
          onClick={onPreview}
        >
          <div className="w-6 h-6 bg-[#f0f4ff] rounded flex items-center justify-center shrink-0">
            <FileIcon className="w-3.5 h-3.5 text-[#00277f]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-[#00277f] font-medium truncate leading-tight group-hover:underline">
              {fileInfo.name}
            </p>
            <p className="text-[10px] text-muted-foreground leading-tight">
              {fileInfo.size}
            </p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onRemove(e); }}
            className="p-1 hover:bg-destructive/10 rounded transition-colors shrink-0"
            title="Hapus foto"
          >
            <X className="w-3.5 h-3.5 text-muted-foreground hover:text-destructive" />
          </button>
        </div>
      </div>
    );
  }

  // No photo yet: show "Tambah Foto Luka" link
  return (
    <div className="relative">
      <button
        onClick={onToggleOptions}
        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
      >
        <Camera className="w-3.5 h-3.5" />
        <span className="font-medium">Tambah Foto Luka <span className="text-muted-foreground/60">(Opsional)</span></span>
      </button>
      {showOptions && (
        <PhotoDropdown onOpenCamera={onOpenCamera} onOpenGallery={onOpenGallery} />
      )}
    </div>
  );
}

function PhotoDropdown({ onOpenCamera, onOpenGallery }: { onOpenCamera: () => void; onOpenGallery: () => void }) {
  return (
    <div className="absolute left-0 md:right-0 md:left-auto top-full mt-1 z-10 bg-card border border-border rounded-xl shadow-lg overflow-hidden min-w-[180px]">
      <button
        onClick={onOpenCamera}
        className="flex items-center gap-3 w-full px-4 py-2.5 text-xs font-medium text-foreground hover:bg-muted/60 transition-colors border-b border-border"
      >
        <Camera className="w-3.5 h-3.5 text-[#00277f]" />
        Ambil dari Kamera
      </button>
      <button
        onClick={onOpenGallery}
        className="flex items-center gap-3 w-full px-4 py-2.5 text-xs font-medium text-foreground hover:bg-muted/60 transition-colors"
      >
        <ImagePlus className="w-3.5 h-3.5 text-[#00277f]" />
        Pilih dari Galeri
      </button>
    </div>
  );
}

// ── Unified Device Row ──────────────────────────────────────────
// One component renders as a card. Responsive via CSS only.

function DeviceRow({
  device,
  prevScore,
  newScore,
  photoUrl,
  fileInfo,
  showPhotoOpts,
  onTogglePhotoOpts,
  onOpenCamera,
  onOpenGallery,
  onRemovePhoto,
  onPreviewPhoto,
  onEditPivas,
}: {
  device: InvasiveDevice;
  prevScore: string | undefined;
  newScore: string | undefined;
  photoUrl: string | undefined;
  fileInfo: { name: string; size: string } | undefined;
  showPhotoOpts: boolean;
  onTogglePhotoOpts: () => void;
  onOpenCamera: () => void;
  onOpenGallery: () => void;
  onRemovePhoto: (e: React.MouseEvent) => void;
  onPreviewPhoto: () => void;
  onEditPivas: () => void;
}) {
  const hasScore = !!newScore;

  return (
    <div className={`bg-card border rounded-xl overflow-hidden transition-all duration-200 ${hasScore ? "border-border" : "border-[#e21100]/30"}`}>
      <div className="p-4 flex flex-col gap-3">
        {/* Row 1: device info + status badges / device header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between w-full">
              <p className="text-foreground font-bold text-sm md:text-base">{device.displayName}</p>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="bg-[#047857] text-white px-2 py-0.5 rounded-full text-[10px] font-bold leading-none">
                  Berhasil
                </span>
                {(device.intervensiTasks && device.intervensiTasks.length > 0) && (
                  <span className="border border-[#c2410c] text-[#c2410c] px-2 py-0.5 rounded-full text-[10px] font-bold leading-none bg-white">
                    {device.intervensiTasks.every(t => t.checked) ? "Intervensi Selesai" : "Intervensi"}
                  </span>
                )}
              </div>
            </div>
            <p className="text-muted-foreground text-xs md:text-sm">
              {[device.location, device.size].filter(Boolean).join(", ") || "—"}
            </p>
          </div>
        </div>

        {/* Row 2: Before & After score as plain text rows */}
        <div className="flex flex-col gap-1.5 mt-1">
          <div className="flex items-start gap-4">
            <span className="text-sm text-muted-foreground min-w-[140px]">Skor PIVAS Sebelum</span>
            <span className={`text-sm font-bold flex-1 ${!prevScore ? "text-[#e21100]" : "text-foreground"}`}>
              {prevScore || "Belum ada skor"}
            </span>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-sm text-muted-foreground min-w-[140px]">Skor PIVAS Saat Ini</span>
            <span className={`text-sm font-bold flex-1 ${!newScore ? "text-[#e21100]" : "text-foreground"}`}>
              {newScore || "Wajib diisi"}
            </span>
          </div>
        </div>

        {/* Row 3: Photo controls */}
        <div className="mt-1">
          <PhotoControl
            deviceId={device.id}
            displayName={device.displayName}
            photoUrl={photoUrl}
            fileInfo={fileInfo}
            showOptions={showPhotoOpts}
            onToggleOptions={onTogglePhotoOpts}
            onOpenCamera={onOpenCamera}
            onOpenGallery={onOpenGallery}
            onRemove={onRemovePhoto}
            onPreview={onPreviewPhoto}
          />
        </div>

        {/* Full width action button */}
        <button
          onClick={onEditPivas}
          className={`w-full py-2.5 px-4 rounded-lg font-bold text-sm transition-all text-center border mt-2 ${
            hasScore
              ? "bg-white border-[#00277f] text-[#00277f] hover:bg-secondary/30"
              : "bg-white border-[#00277f] text-[#00277f] hover:bg-secondary/30 shadow-sm"
          }`}
        >
          UPDATE SKOR PIVAS
        </button>
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────

export function TugasPivasModal({ devices, onSave, onClose }: TugasPivasModalProps) {
  const [showPickerForId, setShowPickerForId] = useState<string | null>(null);
  const [tempScores, setTempScores] = useState<Record<string, {score: string, kat: string}>>({});
  const [catatan, setCatatan] = useState("");
  const [photos, setPhotos] = useState<Record<string, string>>({});
  const [photoFileInfos, setPhotoFileInfos] = useState<Record<string, { name: string; size: string }>>({});
  const [previewingPhoto, setPreviewingPhoto] = useState<string | null>(null);
  const [showPhotoOptions, setShowPhotoOptions] = useState<string | null>(null);

  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const activeDeviceIdRef = useRef<string | null>(null);

  // ── Photo handlers ──

  const handlePhotoCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeDeviceIdRef.current) {
      const url = URL.createObjectURL(file);
      setPhotos(prev => ({ ...prev, [activeDeviceIdRef.current!]: url }));
      // Store file info for display
      const sizeStr = file.size < 1024 ? `${file.size} B` : file.size < 1024 * 1024 ? `${(file.size / 1024).toFixed(0)} kB` : `${(file.size / (1024*1024)).toFixed(1)} MB`;
      setPhotoFileInfos(prev => ({ ...prev, [activeDeviceIdRef.current!]: { name: file.name, size: sizeStr } }));
      setShowPhotoOptions(null);
    }
    e.target.value = "";
  };

  const openCamera = (deviceId: string) => {
    activeDeviceIdRef.current = deviceId;
    cameraInputRef.current?.click();
    setShowPhotoOptions(null);
  };

  const openGallery = (deviceId: string) => {
    activeDeviceIdRef.current = deviceId;
    galleryInputRef.current?.click();
    setShowPhotoOptions(null);
  };

  const removePhoto = (deviceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotos(prev => {
      const clone = { ...prev };
      delete clone[deviceId];
      return clone;
    });
    setPhotoFileInfos(prev => {
      const clone = { ...prev };
      delete clone[deviceId];
      return clone;
    });
  };

  // ── PIVAS handlers ──

  const handleSelectPivas = (score: string, kategoriPhlebitis: string) => {
    if (showPickerForId) {
      setTempScores(prev => ({
        ...prev,
        [showPickerForId]: { score, kat: kategoriPhlebitis }
      }));
    }
    setShowPickerForId(null);
  };

  const handleSimpanTugas = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const local = new Date(now.getTime() - offset * 60 * 1000);
    const dateStr = local.toISOString().slice(0, 16);

    const updatedDevices = devices.map(device => {
      const temp = tempScores[device.id];
      if (!temp) return device;

      return {
        ...device,
        pivasScore: temp.score,
        kategoriPhlebitis: temp.kat,
        pivasLog: [
          ...(device.pivasLog || []),
          { timestamp: dateStr, score: temp.score, kategoriPhlebitis: temp.kat, nurse: "Widya Karina", catatan, photoUrl: photos[device.id] }
        ],
        intervensiTasks: generateIntervensiTasks(temp.score),
      };
    });

    onSave(updatedDevices);
    toast.success("Tugas IV Monitoring berhasil disimpan!");
    onClose();
  };

  const allEvaluated = devices.every(d => tempScores[d.id]?.score);
  const evaluatedCount = devices.filter(d => tempScores[d.id]?.score).length;

  // ── Render PIVAS picker when active ──

  if (showPickerForId) {
    const currentScore = tempScores[showPickerForId]?.score || "";
    return (
      <PivasModal
        currentScore={currentScore}
        onSave={handleSelectPivas}
        onClose={() => setShowPickerForId(null)}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-end"
      style={{ backgroundColor: "rgba(23, 23, 23, 0.75)" }}
      onClick={(e) => {
        if (showPhotoOptions) {
          setShowPhotoOptions(null);
          e.stopPropagation();
          return;
        }
        onClose();
      }}
    >
      {/* Hidden file inputs */}
      <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={handlePhotoCapture} />
      <input ref={galleryInputRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoCapture} />

      <div
        className="bg-background w-full flex flex-col overflow-hidden max-w-[822px] rounded-t-3xl pt-2 pb-6 px-4 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 bg-muted rounded-full mx-auto self-center mb-4 shrink-0" />

        <div className="flex-1 overflow-y-auto w-full pr-1 pb-4">
          {/* Header */}
          <div className="flex flex-col gap-1 mb-4">
            <p className="text-muted-foreground text-xs font-bold leading-none">#120002</p>
            <h2 className="text-foreground text-2xl font-bold leading-tight">07:00 IV Monitoring</h2>
          </div>

          {/* Patient Info */}
          <div className="flex flex-col mb-5 bg-card rounded-lg overflow-hidden border border-border">
            <div className="p-3 pb-2 border-b border-border bg-muted/20">
              <p className="text-muted-foreground text-[10px] font-bold tracking-wider mb-1">NAMA PASIEN</p>
              <div className="flex items-center gap-2">
                <span className="text-[#be123c] font-black text-xs">♀</span>
                <h3 className="text-foreground font-bold text-base leading-none">June Annabelle Alexander</h3>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex gap-2 mt-2">
                <span className="bg-[#f59e0b] text-white px-2 py-0.5 rounded-full text-[10px] font-bold">MRS</span>
                <div className="w-6 h-4 bg-muted rounded-full flex items-center justify-center border border-foreground/20">
                  <span className="text-[10px] font-bold text-foreground line-through">UTI</span>
                </div>
              </div>
            </div>
            <div className="px-3 pt-3 pb-3 flex flex-row gap-6 bg-muted/20">
              <div className="flex flex-col">
                <span className="text-muted-foreground text-[10px] font-bold tracking-wider opacity-70">NO. MR</span>
                <span className="text-foreground text-sm">00027482</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-[10px] font-bold tracking-wider opacity-70">TGL LAHIR</span>
                <span className="text-foreground text-sm">18 Feb 1994</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-[10px] font-bold tracking-wider opacity-70">BED NO.</span>
                <span className="text-foreground text-sm">852-2</span>
              </div>
            </div>
          </div>

          <hr className="border-t border-border mt-3 mb-1" />

          {/* Catatan Tambahan Moved to Top */}
          <div className="flex flex-col gap-1.5 mb-2 mt-2">
            <label className="text-sm font-bold text-foreground">Catatan Tambahan <span className="text-muted-foreground font-normal">(opsional)</span></label>
            <textarea
              className="w-full min-h-[72px] p-3 border border-border rounded-lg bg-card text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#00277f]/20 focus:border-[#00277f]/50 transition-all"
              placeholder="Cth: Pasien Tidak Mau Minum Obat Mules"
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-4 mt-2 mb-2 pb-8">
            {devices.map(device => (
              <DeviceRow
                key={device.id}
                device={device}
                prevScore={device.pivasScore}
                newScore={tempScores[device.id]?.score}
                photoUrl={photos[device.id]}
                fileInfo={photoFileInfos[device.id]}
                showPhotoOpts={showPhotoOptions === device.id}
                onTogglePhotoOpts={() => setShowPhotoOptions(prev => prev === device.id ? null : device.id)}
                onOpenCamera={() => openCamera(device.id)}
                onOpenGallery={() => openGallery(device.id)}
                onRemovePhoto={(e) => removePhoto(device.id, e)}
                onPreviewPhoto={() => setPreviewingPhoto(photos[device.id])}
                onEditPivas={() => setShowPickerForId(device.id)}
              />
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSimpanTugas}
          disabled={!allEvaluated}
          className={`mt-2 py-3 w-full shrink-0 rounded-lg font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 ${
            allEvaluated
              ? "bg-[#00277f] text-white hover:opacity-90 active:scale-[0.98]"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          {allEvaluated ? (
            "SIMPAN"
          ) : (
            `ISI SKOR PIVAS (${evaluatedCount}/${devices.length})`
          )}
        </button>
      </div>

      {/* Image Preview Overlay */}
      {previewingPhoto && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setPreviewingPhoto(null)}
        >
          <img
            src={previewingPhoto}
            alt="Preview Foto Luka"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <button
            className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-colors flex items-center justify-center border border-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setPreviewingPhoto(null);
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

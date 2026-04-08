import { useState, useEffect, useRef } from "react";
import { Trash2, AlertTriangle } from "lucide-react";
import { SearchableDropdown } from "./searchable-dropdown";
import { DateTimePicker } from "./date-time-picker";
import { PivasModal } from "./pivas-modal";
import { DivaModal } from "./diva-modal";
import { StatusModal } from "./status-modal";
import { EkstravasasiModal } from "./ekstravasasi-modal";
import { IntervensiModal } from "./intervensi-modal";
import {
  INVASIVE_DEVICES,
  DEVICE_NAMES,
  ALASAN_PELEPASAN,
  PEMASANG_OPTIONS,
  InvasiveDevice,
  InvasiveDeviceConfig,
  PivasLogEntry,
  IntervensiTask,
  FormDraft,
  generateIntervensiTasks,
  computeAutoChecks,
} from "./invasive-data";

interface InvasiveFormProps {
  onSave: (device: InvasiveDevice) => void;
  onSaveDraft?: (device: InvasiveDevice) => void;
  onCancel: () => void;
  existingDevices: InvasiveDevice[];
  editDevice?: InvasiveDevice | null;
  formDraftRef?: React.MutableRefObject<FormDraft | null>;
}

function getDefaultDateTime(): string {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 16);
}

const labelStyle: React.CSSProperties = { fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" };

// ── Format DIVA display ──
function formatDivaDisplay(score: string, type: "dewasa" | "anak"): string {
  if (!score) return "";
  if (type === "anak") {
    const n = parseInt(score, 10);
    const risk = n <= 3 ? "Risiko Rendah" : "Risiko Tinggi";
    return `Anak: ${risk}`;
  }
  const n = parseInt(score, 10);
  const risk = n === 0 ? "Risiko Rendah" : n <= 3 ? "Risiko Sedang" : "Risiko Tinggi";
  return `Dewasa: ${score}-${risk}`;
}

// ── Confirmation Dialog ──
function ConfirmDialog({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(55, 55, 55, 0.65)" }}
      onClick={onCancel}
    >
      <div className="bg-white rounded-xl w-full max-w-[380px] overflow-hidden shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-foreground text-base font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>Ganti Alat Invasif?</h3>
          <button onClick={onCancel} className="p-1 hover:bg-secondary rounded-lg transition-colors">
            <span className="text-muted-foreground text-lg leading-none">×</span>
          </button>
        </div>
        <p className="px-4 py-4 text-sm text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
          Data yang sudah Anda isi belum disimpan dan akan hilang. Yakin ingin lanjut ganti?
        </p>
        <div className="flex items-center justify-end gap-3 px-4 py-3 border-t border-border">
          <button onClick={onCancel} className="px-5 py-2 border border-border rounded-lg text-sm font-bold text-foreground hover:bg-secondary transition-colors">
            BATAL
          </button>
          <button onClick={onConfirm} className="px-5 py-2 bg-[#be123c] text-white rounded-lg text-sm font-bold hover:bg-[#9f1239] transition-colors">
            YA, GANTI
          </button>
        </div>
      </div>
    </div>
  );
}

export function InvasiveForm({ onSave, onSaveDraft, onCancel, existingDevices, editDevice, formDraftRef }: InvasiveFormProps) {
  const draft = formDraftRef?.current;
  const hasDraft = !!draft;

  const resolvedDraftLocation = (() => {
    if (!draft) return undefined;
    if (draft.posisi && draft.location) return `${draft.posisi}, ${draft.location}`;
    if (draft.posisi) return draft.posisi;
    return draft.location;
  })();

  const [deviceType, setDeviceType] = useState(draft?.deviceType ?? editDevice?.deviceType ?? "");
  const [jenis, setJenis] = useState(draft?.jenis ?? editDevice?.jenis ?? "");
  const [location, setLocation] = useState(resolvedDraftLocation ?? editDevice?.location ?? "");
  const [size, setSize] = useState(draft?.size ?? editDevice?.size ?? "");
  const [sizeHuber, setSizeHuber] = useState(draft?.sizeHuber ?? editDevice?.sizeHuber ?? "");
  const [divaScore, setDivaScore] = useState(draft?.divaScore ?? editDevice?.divaScore ?? "");
  const [divaType, setDivaType] = useState<"dewasa" | "anak">((draft?.divaType as "dewasa" | "anak") ?? editDevice?.divaType ?? "dewasa");
  const [waktuPemasangan, setWaktuPemasangan] = useState(draft?.waktuPemasangan ?? editDevice?.waktuPemasangan ?? getDefaultDateTime());
  const [waktuPelepasan, setWaktuPelepasan] = useState(draft?.waktuPelepasan ?? editDevice?.waktuPelepasan ?? "");
  const [alasanPelepasan, setAlasanPelepasan] = useState(draft?.alasanPelepasan ?? editDevice?.alasanPelepasan ?? "");
  const [ekstravasasiScore, setEkstravasasiScore] = useState(draft?.ekstravasasiScore ?? editDevice?.ekstravasasiScore ?? "");
  const [pivasScore, setPivasScore] = useState(draft?.pivasScore ?? editDevice?.pivasScore ?? "");
  const [status, setStatus] = useState<"berhasil" | "tidak_berhasil" | "">(
    draft?.status
      ? (draft.status === "Tidak Berhasil" || draft.status === "tidak_berhasil" ? "tidak_berhasil" : draft.status === "Berhasil" || draft.status === "berhasil" ? "berhasil" : "")
      : editDevice?.status ?? ""
  );
  const [statusKriteria, setStatusKriteria] = useState<string[]>(draft?.statusKriteria ?? editDevice?.statusKriteria ?? []);
  const [pemasang, setPemasang] = useState(draft?.pemasang ?? editDevice?.pemasang ?? "");
  const [pelepas, setPelepas] = useState(draft?.pelepas ?? editDevice?.pelepas ?? "");
  const [komen, setKomen] = useState(draft?.komen ?? editDevice?.komen ?? "");
  const [kategoriPhlebitis, setKategoriPhlebitis] = useState(draft?.kategoriPhlebitis ?? editDevice?.kategoriPhlebitis ?? "");
  const [intervensiTasks, setIntervensiTasks] = useState<IntervensiTask[]>(editDevice?.intervensiTasks || []);

  // Modal states
  const [showPivasModal, setShowPivasModal] = useState(false);
  const [showDivaModal, setShowDivaModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showEkstravasasiModal, setShowEkstravasasiModal] = useState(false);

  // Confirmation dialog state
  const [pendingDeviceType, setPendingDeviceType] = useState<string | null>(null);

  const isInitialMount = useRef(hasDraft);
  const config: InvasiveDeviceConfig | undefined = INVASIVE_DEVICES.find((d) => d.name === deviceType);
  const isIvPerifer = deviceType === "IV Perifer";
  const needsEkstravasasi = (deviceType === "Chemoport" || deviceType === "PICC") && alasanPelepasan === "Ekstravasasi";

  // Whether the form has any data filled beyond device type
  const hasFilledData = !!(jenis || location || size || sizeHuber || divaScore || pivasScore || alasanPelepasan || status || pemasang || pelepas || komen);

  // Sync form state to draft ref
  useEffect(() => {
    if (formDraftRef) {
      formDraftRef.current = {
        deviceType, jenis, location, posisi: "", size, sizeHuber,
        divaScore, divaType,
        waktuPemasangan, waktuPelepasan, alasanPelepasan,
        ekstravasasiScore,
        pivasScore, kategoriPhlebitis,
        status: status as string, statusKriteria,
        pemasang, pelepas, komen,
      };
    }
  }, [deviceType, jenis, location, size, sizeHuber, divaScore, divaType, waktuPemasangan, waktuPelepasan, alasanPelepasan, ekstravasasiScore, pivasScore, kategoriPhlebitis, status, statusKriteria, pemasang, pelepas, komen, formDraftRef]);

  // Reset dependent fields when device type changes
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!editDevice) {
      setLocation(""); setSize(""); setSizeHuber(""); setJenis("");
      setPivasScore(""); setAlasanPelepasan(""); setDivaScore("");
      setEkstravasasiScore("");
    }
  }, [deviceType]);

  // Auto-open ekstravasasi modal when Ekstravasasi is selected
  useEffect(() => {
    if (needsEkstravasasi && !ekstravasasiScore) {
      setShowEkstravasasiModal(true);
    }
  }, [alasanPelepasan]);

  // ── Device type change handler with confirmation ──
  const handleDeviceTypeChange = (newType: string) => {
    if (deviceType && hasFilledData && newType !== deviceType) {
      setPendingDeviceType(newType);
    } else {
      setDeviceType(newType);
    }
  };

  const confirmDeviceChange = () => {
    if (pendingDeviceType !== null) {
      // Reset all fields
      setJenis(""); setLocation(""); setSize(""); setSizeHuber("");
      setDivaScore(""); setPivasScore(""); setAlasanPelepasan("");
      setEkstravasasiScore(""); setStatus(""); setStatusKriteria([]);
      setPemasang(""); setPelepas(""); setKomen(""); setKategoriPhlebitis("");
      setDeviceType(pendingDeviceType);
      setPendingDeviceType(null);
    }
  };

  const getDisplayName = (): string => {
    if (!deviceType) return "";
    const existingCount = existingDevices.filter(
      (d) => d.deviceType === deviceType && d.id !== editDevice?.id
    ).length;
    const prefix = deviceType === "IV Perifer" ? "IV" : deviceType;
    return `${prefix} ${existingCount + 1}`;
  };

  // Validation for SAVE (not draft)
  const isIvPerMandatoryMet = !isIvPerifer || (!!divaScore && !!pivasScore);
  const isEksMandatoryMet = !needsEkstravasasi || !!ekstravasasiScore;
  const isStatusMet = !!status && statusKriteria.length >= 1;
  // Waktu Pelepasan is mandatory when alasan pelepasan is filled, EXCEPT "Dibawa Pulang"
  const needsWaktuPelepasan = !!alasanPelepasan && alasanPelepasan !== "Dibawa Pulang";
  const isWaktuPelepasanMet = !needsWaktuPelepasan || !!waktuPelepasan;
  const canSave = !!deviceType && !!waktuPemasangan && isIvPerMandatoryMet && isEksMandatoryMet && isStatusMet && isWaktuPelepasanMet;

  const handleSave = () => {
    if (!canSave) return;

    let pivasLog: PivasLogEntry[] = editDevice?.pivasLog || [];
    if (pivasScore && pivasScore !== (editDevice?.pivasScore || "")) {
      const now = new Date();
      const offset = now.getTimezoneOffset();
      const local = new Date(now.getTime() - offset * 60 * 1000);
      pivasLog = [
        ...pivasLog,
        { score: pivasScore, timestamp: local.toISOString().slice(0, 16), nurse: pemasang || "Nurse", kategoriPhlebitis: kategoriPhlebitis || undefined },
      ];
    }

    const device: InvasiveDevice = {
      id: editDevice?.id || `inv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      deviceType,
      displayName: editDevice?.displayName || getDisplayName(),
      jenis, location, size, sizeHuber,
      divaScore: isIvPerifer ? divaScore : undefined,
      divaType: isIvPerifer ? divaType : undefined,
      waktuPemasangan, waktuPelepasan, alasanPelepasan,
      ekstravasasiScore: needsEkstravasasi ? ekstravasasiScore : undefined,
      pivasScore, pivasLog,
      status, statusKriteria,
      pemasang, pelepas, komen, kategoriPhlebitis, intervensiTasks,
    };
    onSave(device);
  };

  // Draft save - NO mandatory checks needed
  const handleSaveDraft = () => {
    if (!deviceType) return; // At least a device type
    const device: InvasiveDevice = {
      id: editDevice?.id || `inv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      deviceType,
      displayName: editDevice?.displayName || getDisplayName() || deviceType || "Draft",
      jenis, location, size, sizeHuber,
      divaScore: isIvPerifer ? divaScore : undefined,
      divaType: isIvPerifer ? divaType : undefined,
      waktuPemasangan, waktuPelepasan, alasanPelepasan,
      ekstravasasiScore: needsEkstravasasi ? ekstravasasiScore : undefined,
      pivasScore, pivasLog: editDevice?.pivasLog || [],
      status, statusKriteria,
      pemasang, pelepas, komen, kategoriPhlebitis,
      intervensiTasks: editDevice?.intervensiTasks,
      isDraft: true,
    };
    if (onSaveDraft) onSaveDraft(device);
  };

  return (
    <div className="bg-card rounded-lg p-4 flex flex-col gap-3 w-full">
      <h3 className="text-foreground" style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}>
        Alat Invasif
      </h3>

      {/* Nama Alat Invasif */}
      <div className="flex flex-col gap-1">
        <label className="text-foreground" style={labelStyle}>
          Nama Alat Invasif<span className="text-destructive">*</span>
        </label>
        <SearchableDropdown
          options={DEVICE_NAMES}
          value={deviceType}
          onChange={handleDeviceTypeChange}
          placeholder="Pilih nama alat invasif di sini..."
        />
        {deviceType && (
          <p className="text-accent mt-1" style={{ fontSize: "var(--text-xs)", fontFamily: "'Inter', sans-serif" }}>
            Akan disimpan sebagai: {getDisplayName()}
          </p>
        )}
      </div>

      {/* Lokasi & Size */}
      {config && (
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-foreground" style={labelStyle}>Lokasi</label>
            <SearchableDropdown options={config.locations} value={location} onChange={setLocation} placeholder="Pilih lokasi" allowFreeText freeTextLabel="Lainnya" />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-foreground" style={labelStyle}>Size</label>
            <SearchableDropdown options={config.sizes} value={size} onChange={setSize} placeholder="Pilih size" allowFreeText freeTextLabel="Lainnya" />
          </div>
        </div>
      )}
      {deviceType && !config && (
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-foreground" style={labelStyle}>Lokasi</label>
            <input type="text" className="px-3 py-2 bg-input-background border border-border rounded-md text-foreground placeholder:text-muted-foreground outline-none focus:border-ring" style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }} placeholder="Ketik lokasi..." value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-foreground" style={labelStyle}>Size</label>
            <input type="text" className="px-3 py-2 bg-input-background border border-border rounded-md text-foreground placeholder:text-muted-foreground outline-none focus:border-ring" style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }} placeholder="Ketik size..." value={size} onChange={(e) => setSize(e.target.value)} />
          </div>
        </div>
      )}

      {/* Jenis */}
      {config?.jenisOptions && config.jenisOptions.length > 0 && (
        <div className="flex flex-col gap-1">
          <label className="text-foreground" style={labelStyle}>Jenis</label>
          <SearchableDropdown options={config.jenisOptions} value={jenis} onChange={setJenis} placeholder="Pilih jenis" allowFreeText freeTextLabel="Lainnya" />
        </div>
      )}

      {/* Size Huber Needle */}
      {config?.sizeHuberOptions && config.sizeHuberOptions.length > 0 && (
        <div className="flex flex-col gap-1">
          <label className="text-foreground" style={labelStyle}>Size Huber Needle</label>
          <SearchableDropdown options={config.sizeHuberOptions} value={sizeHuber} onChange={setSizeHuber} placeholder="Pilih size huber needle" allowFreeText freeTextLabel="Lainnya" />
        </div>
      )}

      {/* ── Skor DIVA - IV Perifer only ── */}
      {isIvPerifer && (
        <div className="flex flex-col gap-1">
          <label className="text-foreground" style={labelStyle}>
            Skor DIVA<span className="text-destructive">*</span>
          </label>
          <button
            type="button"
            onClick={() => setShowDivaModal(true)}
            className={`flex items-center justify-between px-3 py-2 bg-input-background border rounded-md text-left hover:border-ring transition-colors ${
              !divaScore && isIvPerifer ? "border-destructive/50" : "border-border"
            }`}
          >
            <span
              className={divaScore ? "text-foreground" : "text-muted-foreground"}
              style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
            >
              {divaScore ? formatDivaDisplay(divaScore, divaType) : "Hitung skor di sini..."}
            </span>
          </button>
        </div>
      )}

      {/* Waktu Pemasangan */}
      <div className="flex flex-col gap-1">
        <label className="text-foreground" style={labelStyle}>
          Waktu Pemasangan<span className="text-destructive">*</span>
        </label>
        <div className="bg-input-background border border-border rounded-md overflow-hidden">
          <DateTimePicker value={waktuPemasangan} onChange={setWaktuPemasangan} placeholder="Pilih waktu pemasangan" />
        </div>
      </div>

      {/* Alasan Pelepasan */}
      {config?.hasAlasanPelepasan && (
        <div className="flex flex-col gap-1">
          <label className="text-foreground" style={labelStyle}>Alasan Pelepasan</label>
          <SearchableDropdown
            options={ALASAN_PELEPASAN}
            value={alasanPelepasan}
            onChange={(v) => {
              setAlasanPelepasan(v);
              if (v !== "Ekstravasasi") setEkstravasasiScore("");
            }}
            placeholder="Pilih alasan pelepasan di sini..."
            allowFreeText
            freeTextLabel="Lainnya"
          />
          {/* Ekstravasasi score badge */}
          {needsEkstravasasi && ekstravasasiScore && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-bold text-[#c2410c] bg-[#fff7ed] px-2 py-0.5 rounded-md border border-[#fed7aa]">
                Grade {ekstravasasiScore}
              </span>
              <button onClick={() => setShowEkstravasasiModal(true)} className="text-xs text-[#00277f] font-bold hover:underline">
                Ubah
              </button>
            </div>
          )}
          {needsEkstravasasi && !ekstravasasiScore && (
            <button
              onClick={() => setShowEkstravasasiModal(true)}
              className="text-xs text-destructive mt-1 font-bold hover:underline text-left"
            >
              ⚠ Skor ekstravasasi wajib diisi — Klik untuk input
            </button>
          )}
        </div>
      )}

      {/* Waktu Pelepasan - mandatory when alasan pelepasan filled except "Dibawa Pulang" */}
      <div className="flex flex-col gap-1">
        <label className="text-foreground" style={labelStyle}>
          Waktu Pelepasan{needsWaktuPelepasan && <span className="text-destructive">*</span>}
        </label>
        <div className={`bg-input-background border rounded-md overflow-hidden ${needsWaktuPelepasan && !waktuPelepasan ? "border-destructive/50" : "border-border"}`}>
          <DateTimePicker value={waktuPelepasan} onChange={setWaktuPelepasan} placeholder="Pilih waktu pelepasan" />
        </div>
        {needsWaktuPelepasan && !waktuPelepasan && (
          <p className="text-xs text-destructive mt-0.5 font-medium">Waktu pelepasan wajib diisi</p>
        )}
      </div>

      {/* Skor PIVAS - IV Perifer only, mandatory */}
      {config?.hasPivas && (
        <div className="flex flex-col gap-1">
          <label className="text-foreground" style={labelStyle}>
            Skor PIVAS<span className="text-destructive">*</span>
          </label>
          <button
            type="button"
            onClick={() => setShowPivasModal(true)}
            className={`flex items-center justify-between px-3 py-2 bg-input-background border rounded-md text-left hover:border-ring transition-colors ${
              !pivasScore && isIvPerifer ? "border-destructive/50" : "border-border"
            }`}
          >
            <span
              className={pivasScore ? "text-foreground" : "text-muted-foreground"}
              style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
            >
              {pivasScore || "Pilih skor PIVAS..."}
            </span>
          </button>
        </div>
      )}

      {/* Status - mandatory, opens modal */}
      <div className="flex flex-col gap-1">
        <label className="text-foreground" style={labelStyle}>
          Status<span className="text-destructive">*</span>
        </label>
        <button
          type="button"
          onClick={() => setShowStatusModal(true)}
          className={`flex items-center justify-between px-3 py-2 bg-input-background border rounded-md text-left hover:border-ring transition-colors border-border`}
        >
          <span
            className={status ? "text-foreground" : "text-muted-foreground"}
            style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
          >
            {status === "berhasil" ? "Berhasil" : status === "tidak_berhasil" ? "Tidak Berhasil" : "Pilih status di sini..."}
          </span>
          {status && statusKriteria.length > 0 && (
            <span className="text-xs font-bold text-[#00277f] bg-[#f0f4ff] px-1.5 py-0.5 rounded-md border border-[#00277f]/20">
              {statusKriteria.length} kriteria
            </span>
          )}
        </button>
      </div>

      {/* Pemasang */}
      <div className="flex flex-col gap-1">
        <label className="text-foreground" style={labelStyle}>Pemasang</label>
        <SearchableDropdown options={PEMASANG_OPTIONS} value={pemasang} onChange={setPemasang} placeholder="Pilih pemasang di sini..." allowFreeText freeTextLabel="Lainnya" />
      </div>

      {/* Pelepas */}
      <div className="flex flex-col gap-1">
        <label className="text-foreground" style={labelStyle}>Pelepas</label>
        <SearchableDropdown options={PEMASANG_OPTIONS} value={pelepas} onChange={setPelepas} placeholder="Pilih pelepas di sini..." allowFreeText freeTextLabel="Lainnya" />
      </div>

      {/* Komen */}
      <div className="flex flex-col gap-1">
        <label className="text-foreground" style={labelStyle}>Komen</label>
        <textarea
          className="px-3 py-2 bg-input-background border border-border rounded-md text-foreground placeholder:text-muted-foreground outline-none focus:border-ring resize-none"
          style={{ fontSize: "var(--text-sm)", fontFamily: "'Inter', sans-serif" }}
          rows={2}
          placeholder="Tulis catatan di sini..."
          value={komen}
          onChange={(e) => setKomen(e.target.value)}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-2 mt-1">
        <button onClick={onCancel} className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors">
          <Trash2 className="w-5 h-5 text-destructive" />
        </button>
        {onSaveDraft && (
          <button
            onClick={handleSaveDraft}
            disabled={!deviceType}
            className="flex-1 border-2 border-[#c2410c] text-[#c2410c] py-2 px-4 rounded-lg hover:bg-[#FFF7ED] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
          >
            SIMPAN DRAFT
          </button>
        )}
        <button
          onClick={handleSave}
          disabled={!canSave}
          className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}
        >
          SIMPAN
        </button>
      </div>

      {/* ── Modals ── */}
      {showPivasModal && (
        <PivasModal
          currentScore={pivasScore}
          onSave={(score, kat) => { setPivasScore(score); setKategoriPhlebitis(kat); setShowPivasModal(false); }}
          onClose={() => setShowPivasModal(false)}
        />
      )}
      {showDivaModal && (
        <DivaModal
          currentScore={divaScore}
          currentType={divaType}
          onSave={(score, type) => { setDivaScore(score); setDivaType(type); setShowDivaModal(false); }}
          onClose={() => setShowDivaModal(false)}
        />
      )}
      {showStatusModal && (
        <StatusModal
          deviceType={deviceType || "Alat Invasif"}
          currentStatus={status}
          currentKriteria={statusKriteria}
          onSave={(s, k) => { setStatus(s); setStatusKriteria(k); setShowStatusModal(false); }}
          onClose={() => setShowStatusModal(false)}
        />
      )}
      {showEkstravasasiModal && (
        <EkstravasasiModal
          currentScore={ekstravasasiScore}
          onSave={(score) => { setEkstravasasiScore(score); setShowEkstravasasiModal(false); }}
          onClose={() => setShowEkstravasasiModal(false)}
        />
      )}
      {pendingDeviceType !== null && (
        <ConfirmDialog
          onConfirm={confirmDeviceChange}
          onCancel={() => setPendingDeviceType(null)}
        />
      )}
    </div>
  );
}
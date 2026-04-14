// Invasive device configuration
export interface InvasiveDeviceConfig {
  name: string;
  locations: string[];
  sizes: string[];
  jenisOptions?: string[];
  sizeHuberOptions?: string[];
  hasPivas: boolean;
  hasAlasanPelepasan: boolean;
}

export const INVASIVE_DEVICES: InvasiveDeviceConfig[] = [
  {
    name: "IV Perifer",
    locations: [
      "Perifer Kiri, Metatarsal",
      "Perifer Kanan, Metatarsal",
      "Perifer Kiri, Vena Mediana cubiti sinistra",
      "Perifer Kanan, Vena Mediana cubiti dextra",
      "Perifer Kiri, Dorsum manus sinistra",
      "Perifer Kanan, Dorsum manus dextra",
      "Perifer Kiri, Vena cephalica sinistra",
      "Perifer Kanan, Vena cephalica dextra",
      "Perifer Kiri, Vena basilica sinistra",
      "Perifer Kanan, Vena basilica dextra",
    ],
    sizes: ["14", "16", "18", "20", "22", "24", "26"],
    hasPivas: true,
    hasAlasanPelepasan: true,
  },
  {
    name: "CVC",
    locations: [
      "Vena Jugularis Sinistra",
      "Vena Jugularis Dextra",
      "Vena Subclavia Sinistra",
      "Vena Subclavia Dextra",
      "Vena Femoralis Sinistra",
      "Vena Femoralis Dextra",
    ],
    sizes: ["5", "7", "8", "9", "11.5"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "Chemoport",
    locations: [
      "Vena Jugularis Sinistra",
      "Vena Jugularis Dextra",
      "Vena Subclavia Sinistra",
      "Vena Subclavia Dextra",
    ],
    sizes: ["5", "7", "8", "19"],
    sizeHuberOptions: ["19", "20", "22", "23"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "Vaskular Chateter",
    locations: [
      "Vena Jugularis Dextra",
      "Vena Jugularis Sinistra",
      "Vena Femoralis Dextra",
      "Vena Femoralis Sinistra",
    ],
    sizes: ["5", "7", "8", "11.5"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "PICC",
    locations: [
      "Vena brakialis",
      "Vena basilica",
      "Vena cephalica",
    ],
    sizes: ["3", "4", "5", "6"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "Pigtail Chateter",
    locations: [
      "Prosesus xifoideus",
      "Interkostal kanan",
      "Interkostal kiri",
    ],
    sizes: ["5", "7", "8", "10", "12"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "NGT",
    locations: [
      "Hidung Kanan",
      "Hidung Kiri",
      "Mulut",
    ],
    sizes: ["8", "10", "12", "14", "16", "18"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "Urine Catheter",
    locations: [
      "Uretra",
      "Suprapubik",
    ],
    sizes: ["8", "10", "12", "14", "16", "18", "20", "22", "24"],
    jenisOptions: ["Silikon", "Folley"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "ETT",
    locations: [
      "Oral",
      "Nasal",
    ],
    sizes: ["3.0", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0", "6.5", "7.0", "7.5", "8.0", "8.5", "9.0"],
    jenisOptions: ["Kinking", "Non Kinking"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "Chest Tube/WSD",
    locations: [
      "Interkostal kanan",
      "Interkostal kiri",
    ],
    sizes: ["12", "16", "20", "24", "28", "32", "36"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "Umbilical Catheter",
    locations: [
      "Arteri Umbilikal",
      "Vena Umbilikal",
    ],
    sizes: ["2.5", "3.5", "5"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "Arteri Line",
    locations: [
      "Arteri Radialis Sinistra",
      "Arteri Radialis Dextra",
      "Arteri Femoralis Sinistra",
      "Arteri Femoralis Dextra",
      "Arteri Brachialis Sinistra",
      "Arteri Brachialis Dextra",
      "Arteri Dorsalis Pedis Sinistra",
      "Arteri Dorsalis Pedis Dextra",
    ],
    sizes: ["20", "22", "24"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "Epidural Kateter",
    locations: [
      "Lumbar L2-L3",
      "Lumbar L3-L4",
      "Lumbar L4-L5",
      "Thorakal T6-T7",
      "Thorakal T7-T8",
      "Thorakal T8-T9",
      "Thorakal T9-T10",
      "Thorakal T10-T11",
    ],
    sizes: ["16", "18", "20"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
  {
    name: "EVD",
    locations: [
      "Frontal Kanan (Kocher's Point)",
      "Frontal Kiri (Kocher's Point)",
      "Parietal Kanan (Keen's Point)",
      "Parietal Kiri (Keen's Point)",
    ],
    sizes: ["5", "8", "9", "12"],
    hasPivas: false,
    hasAlasanPelepasan: true,
  },
];

export const DEVICE_NAMES = INVASIVE_DEVICES.map((d) => d.name);

export const PIVAS_SCORES = [
  "0 - Tidak ada tanda phlebitis",
  "1 - Nyeri, eritema ringan di area insersi",
  "2 - Tanda awal kemungkinan phlebitis",
  "3 - Tahap awal phlebitis",
  "4 - Tahap lanjut phlebitis/awal trombophlebitis",
  "5 - Tahap lanjut trombophlebitis",
];

export const ALASAN_PELEPASAN = [
  "Waktunya Ganti",
  "Sesuai Indikasi Klinis",
  "Phlebitis",
  "Infiltrasi",
  "Oklusi",
  "Dislodge",
  "Infeksi",
  "Ekstravasasi",
  "Pasien Pulang",
  "Permintaan Pasien",
];

export const PEMASANG_OPTIONS = [
  "Nurse Sarah",
  "Nurse Dewi",
  "Nurse Rina",
  "Nurse Ahmad",
  "Nurse Budi",
  "dr. Aloysius Sutedja",
  "dr. Maria Santos",
  "dr. Widya Karina",
];

export const KATEGORI_PHLEBITIS = ["Mekanik", "Bakterial", "Chemical"];

export interface IntervensiTask {
  id: string;
  text: string;
  checked: boolean;
  autoTrigger?: "observasi_pivas" | "lepaskan_kanula" | "pindahkan_kanula"; // Auto-check triggers
}

export interface PivasLogEntry {
  score: string;
  timestamp: string;
  nurse: string;
  kategoriPhlebitis?: string;
  intervensiTasks?: IntervensiTask[];       // Snapshot of intervention tasks at this score
  intervensiStatus?: "completed" | "not_done"; // Whether all tasks were done before score changed
  photoUrl?: string; // Base64 or URL of attached photo
  catatan?: string; // Optional note attached to this evaluation
}

// Instruksi Khusus options for Urine Catheter (Surgery Care)
export const INSTRUKSI_KHUSUS_URINE = [
  "Fiksasi ditarik/traksi di paha",
  "Bilas NaCL",
  "Klem .... Jam",
  "Blader palpation 2jam setelah pemasangan",
];

// Instruksi Khusus options for ETT
export const INSTRUKSI_KHUSUS_ETT = [
  "Cuff Pressure Monitoring",
  "Fiksasi Ulang Berkala",
  "Suction Berkala",
  "Oral Hygiene Berkala",
];

export interface InvasiveDevice {
  id: string;
  deviceType: string;
  displayName: string;
  jenis: string;
  location: string;
  size: string;
  sizeHuber: string;
  divaScore?: string;       // DIVA score for IV Perifer
  divaType?: "dewasa" | "anak"; // Which DIVA tab was used
  waktuPemasangan: string;
  waktuPelepasan: string;
  alasanPelepasan: string;
  ekstravasasiScore?: string; // Ekstravasasi stage for Chemoport/PICC
  ekstravasasiChecks?: string[]; // Ekstravasasi symptom checkboxes
  pivasScore: string;
  pivasLog: PivasLogEntry[];
  kategoriPhlebitis: string;
  status: "berhasil" | "tidak_berhasil" | "";
  statusKriteria?: string[]; // Criteria checkboxes for status
  pemasang: string;
  pelepas: string;
  komen: string;
  intervensiTasks?: IntervensiTask[]; // Intervention checklist
  isDraft?: boolean; // True if the entry is a partially-filled draft
  instruksiKhusus?: string[]; // Optional special instructions for ETT & Urine Catheter
  isiBalon?: string; // Optional balloon fill in ml for ETT & Urine Catheter
}

// Draft state for form persistence across layout changes (mobile ↔ desktop)
export interface FormDraft {
  deviceType: string;
  jenis: string;
  location: string;
  posisi: string; // IV Perifer only (desktop splits location into posisi+lokasi)
  size: string;
  sizeHuber: string;
  divaScore: string;
  divaType: string;
  waktuPemasangan: string;
  waktuPelepasan: string;
  alasanPelepasan: string;
  ekstravasasiScore: string;
  ekstravasasiChecks: string[];
  pivasScore: string;
  kategoriPhlebitis: string;
  status: string;
  statusKriteria: string[];
  pemasang: string;
  pelepas: string;
  komen: string;
  instruksiKhusus: string[];
  isiBalon: string;
}

// --- Scalable Intervention Score System ---
// Each score type (e.g. PIVAS, future: Fall Risk, VTE) has its own config
export interface InterventionScoreConfig {
  scoreType: string; // e.g. "PIVAS"
  label: string; // Display label e.g. "Intervensi PIVAS"
  appliesTo: (device: InvasiveDevice) => boolean; // Which devices this applies to
  getScoreValue: (device: InvasiveDevice) => string; // Extract score from device
  templates: Record<number, Omit<IntervensiTask, "checked">[]>;
}

// PIVAS intervention task templates matching Figma designs exactly
const PIVAS_TEMPLATES: Record<number, Omit<IntervensiTask, "checked">[]> = {
  0: [
    { id: "pivas0-1", text: "Observasi lokasi infus", autoTrigger: "observasi_pivas" },
    { id: "pivas0-2", text: "Lepaskan kanula bila tidak lagi diperlukan", autoTrigger: "lepaskan_kanula" },
  ],
  1: [
    { id: "pivas1-1", text: "Observasi ketat lokasi infus", autoTrigger: "observasi_pivas" },
    { id: "pivas1-2", text: "Lepaskan kanula bila tidak lagi diperlukan", autoTrigger: "lepaskan_kanula" },
    { id: "pivas1-3", text: "Observasi Pivas score sampai 48-96 jam" },
    { id: "pivas1-4", text: "Dokumentasikan" },
  ],
  2: [
    { id: "pivas2-1", text: "Lepaskan kanula", autoTrigger: "lepaskan_kanula" },
    { id: "pivas2-2", text: "Pindahkan kanula bila masih diperlukan", autoTrigger: "pindahkan_kanula" },
    { id: "pivas2-3", text: "Lakukan Perawatan Phlebitis" },
    { id: "pivas2-4", text: "Observasi Pivas score sampai 48-96 jam", autoTrigger: "observasi_pivas" },
    { id: "pivas2-5", text: "Dokumentasikan dan buat Incident Report" },
  ],
  3: [
    { id: "pivas3-1", text: "Lepaskan kanula", autoTrigger: "lepaskan_kanula" },
    { id: "pivas3-2", text: "Pindahkan kanula bila masih diperlukan", autoTrigger: "pindahkan_kanula" },
    { id: "pivas3-3", text: "Lakukan Perawatan Phlebitis" },
    { id: "pivas3-4", text: "Observasi Pivas score sampai 48-96 jam", autoTrigger: "observasi_pivas" },
    { id: "pivas3-5", text: "Dokumentasikan dan buat Incident Report" },
  ],
  4: [
    { id: "pivas4-1", text: "Lepaskan kanula", autoTrigger: "lepaskan_kanula" },
    { id: "pivas4-2", text: "Pindahkan kanula bila masih diperlukan", autoTrigger: "pindahkan_kanula" },
    { id: "pivas4-3", text: "Lakukan Perawatan Phlebitis" },
    { id: "pivas4-4", text: "Observasi Pivas score sampai 48-96 jam", autoTrigger: "observasi_pivas" },
    { id: "pivas4-5", text: "Dokumentasikan dan buat Incident Report" },
  ],
  5: [
    { id: "pivas5-1", text: "Lepaskan kanula", autoTrigger: "lepaskan_kanula" },
    { id: "pivas5-2", text: "Lakukan pengambilan sampel mikrobiologi \u2192 sampel pus" },
    { id: "pivas5-3", text: "Pindahkan kanula bila masih diperlukan", autoTrigger: "pindahkan_kanula" },
    { id: "pivas5-4", text: "Kolaborasi dengan dokter sesuai hasil kultur untuk pengobatan" },
    { id: "pivas5-5", text: "Lakukan Perawatan Phlebitis" },
    { id: "pivas5-6", text: "Observasi Pivas score sampai 48-96 jam", autoTrigger: "observasi_pivas" },
    { id: "pivas5-7", text: "Dokumentasikan dan buat Incident Report" },
  ],
};

// PIVAS intervention config
export const PIVAS_INTERVENTION_CONFIG: InterventionScoreConfig = {
  scoreType: "PIVAS",
  label: "Intervensi PIVAS",
  appliesTo: (device) => device.deviceType === "IV Perifer",
  getScoreValue: (device) => device.pivasScore,
  templates: PIVAS_TEMPLATES,
};

// Ekstravasasi intervention task templates
const EKSTRAVASASI_TEMPLATES: Record<number, Omit<IntervensiTask, "checked">[]> = {
  0: [
    { id: "eks0-1", text: "Observasi area insersi" },
    { id: "eks0-2", text: "Dokumentasikan kondisi" },
  ],
  1: [
    { id: "eks1-1", text: "Observasi ketat lokasi infus" },
    { id: "eks1-2", text: "Lepaskan kanula bila tidak lagi diperlukan" },
    { id: "eks1-3", text: "Observasi PIVAS score sampai 48-96 jam" },
    { id: "eks1-4", text: "Dokumentasikan" },
  ],
  2: [
    { id: "eks2-1", text: "Lepaskan kanula" },
    { id: "eks2-2", text: "Tinggikan ekstremitas" },
    { id: "eks2-3", text: "Kompres" },
    { id: "eks2-4", text: "Pertimbangkan antidot" },
  ],
  3: [
    { id: "eks3-1", text: "Pertahankan kanula" },
    { id: "eks3-2", text: "Aspirasi (spuit 1 mL)" },
    { id: "eks3-3", text: "Lepas bila tidak perlu antidot" },
    { id: "eks3-4", text: "Elevasi" },
    { id: "eks3-5", text: "Kompres" },
    { id: "eks3-6", text: "Antidot" },
  ],
  4: [
    { id: "eks4-1", text: "Pertahankan kanula" },
    { id: "eks4-2", text: "Aspirasi maksimal" },
    { id: "eks4-3", text: "Lepas bila tidak perlu antidot" },
    { id: "eks4-4", text: "Elevasi" },
    { id: "eks4-5", text: "Kompres" },
    { id: "eks4-6", text: "Antidot" },
    { id: "eks4-7", text: "Konsultasi bedah" },
  ],
};

// Ekstravasasi intervention config
export const EKSTRAVASASI_INTERVENTION_CONFIG: InterventionScoreConfig = {
  scoreType: "Ekstravasasi",
  label: "Intervensi Ekstravasasi",
  appliesTo: (device) =>
    (device.deviceType === "Chemoport" || device.deviceType === "PICC") &&
    device.alasanPelepasan === "Ekstravasasi",
  getScoreValue: (device) => device.ekstravasasiScore || "",
  templates: EKSTRAVASASI_TEMPLATES,
};

// Registry of all intervention score configs (add future ones here)
export const INTERVENTION_CONFIGS: InterventionScoreConfig[] = [
  PIVAS_INTERVENTION_CONFIG,
  EKSTRAVASASI_INTERVENTION_CONFIG,
];

// Get the applicable intervention config for a device
export function getInterventionConfig(device: InvasiveDevice): InterventionScoreConfig | undefined {
  return INTERVENTION_CONFIGS.find((config) => config.appliesTo(device));
}

// Generate intervention tasks for a given device using its applicable score config
export function generateIntervensiTasks(
  pivasScore: string,
  existingTasks?: IntervensiTask[],
  _config?: InterventionScoreConfig
): IntervensiTask[] {
  if (!pivasScore) return [];

  const scoreNum = parseInt(pivasScore.charAt(0), 10);

  // Use provided config or default to PIVAS
  const config = _config || PIVAS_INTERVENTION_CONFIG;
  const template = config.templates[scoreNum];

  if (!template) return [];

  // Preserve existing checked states by matching task text (more resilient than id)
  const existingMap = new Map<string, boolean>();
  if (existingTasks) {
    existingTasks.forEach((t) => {
      existingMap.set(t.id, t.checked);
      existingMap.set(t.text, t.checked);
    });
  }

  return template.map((task) => ({
    ...task,
    checked: existingMap.get(task.id) || existingMap.get(task.text) || false,
  }));
}

// Auto-check tasks based on device state
export function computeAutoChecks(
  tasks: IntervensiTask[],
  device: InvasiveDevice
): IntervensiTask[] {
  return tasks.map((task) => {
    if (!task.autoTrigger) return task;

    let shouldAutoCheck = false;

    if (task.autoTrigger === "observasi_pivas") {
      // Auto-check if PIVAS score has changed (pivasLog has entries)
      shouldAutoCheck = (device.pivasLog?.length || 0) > 1;
    } else if (task.autoTrigger === "lepaskan_kanula") {
      // Auto-check if alasan pelepasan is filled
      shouldAutoCheck = !!device.alasanPelepasan;
    } else if (task.autoTrigger === "pindahkan_kanula") {
      // Auto-check if device has been removed AND re-installed (both alasanPelepasan and waktuPemasangan present)
      shouldAutoCheck = !!device.alasanPelepasan && !!device.waktuPemasangan;
    }

    return { ...task, checked: task.checked || shouldAutoCheck };
  });
}

// Check if device has pending interventions
export function hasPendingIntervensi(device: InvasiveDevice): boolean {
  if (!device.intervensiTasks || device.intervensiTasks.length === 0) {
    return false;
  }
  return device.intervensiTasks.some((task) => !task.checked);
}

// Count pending interventions across all devices
export function countPendingIntervensi(devices: InvasiveDevice[]): number {
  return devices.filter(hasPendingIntervensi).length;
}

export function calculateDayCount(dateStr: string): number {
  if (!dateStr) return 1;
  const installDate = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now.getTime() - installDate.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(diff, 0) + 1;
}

export function formatDateDisplay(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year}, ${hours}:${minutes}`;
}
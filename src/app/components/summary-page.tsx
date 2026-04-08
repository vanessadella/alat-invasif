import { ChevronLeft, ChevronRight, Filter, AlertCircle, RefreshCw } from "lucide-react";
import { useAppContext } from "./root-layout";
import { InvasiveCard } from "./invasive-card";
import { InvasiveTable } from "./invasive-table";
import { InvasiveForm } from "./invasive-form";
import { EmptyStateNodata } from "./empty-state-nodata";
import { calculateDayCount, hasPendingIntervensi, InvasiveDevice } from "./invasive-data";
import { TugasTabContent } from "./tugas-tab-content";
import { TugasPivasModal } from "./tugas-pivas-modal";
import { useState } from "react";

const fontInter: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };
const MAX_SUMMARY_CARDS = 3;
const CARDS_PER_PAGE = 10;

const MOBILE_TABS = ["FLOWCHART", "CAT.", "INVASIF", "SUMMARY", "CPPT", "HANDOVER", "TUGAS", "RENCANA OPERASI"];
const DESKTOP_TABS = ["FLOWCHART", "CAT.", "INVASIF", "SUMMARY", "CPPT", "HANDOVER", "TUGAS", "RENCANA OPERASI"];

function PatientHeader({ compact }: { compact?: boolean }) {
  return (
    <>
      <div className={`flex items-center gap-1 ${compact ? "" : "mt-1"}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M17.4375 3H13.734C13.335 3 13.215 3.37 13.335 3.96L14.127 4.75L10.35 8.54C9.27 7.86 8.02 7.5 6.75 7.5C3.02 7.5 0 10.52 0 14.25C0 17.98 3.02 21 6.75 21C10.48 21 13.5 17.98 13.5 14.25C13.5 12.98 13.14 11.73 12.46 10.65L16.25 6.87L17.04 7.66C17.44 8.06 18 7.82 18 7.27V3.56C18 3.25 17.75 3 17.44 3Z"
            fill="#1B29E5"
            transform="translate(3, 1.5)"
          />
        </svg>
        <h2 className="text-foreground" style={{ fontSize: "var(--text-xl)", fontWeight: "var(--font-weight-bold)", ...fontInter }}>
          GANENDRA BIMA
        </h2>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-10 h-8 flex items-center justify-center">
          <svg width="40" height="32" viewBox="0 0 50 40" fill="none">
            <path d="M33.232 7.484H18.264C11.3748 7.484 5.79 13.0688 5.79 19.958C5.79 26.8472 11.3748 32.432 18.264 32.432H33.232C40.1212 32.432 45.706 26.8472 45.706 19.958C45.706 13.0688 40.1212 7.484 33.232 7.484Z" fill="#E21100" />
            <path d="M38.976 33.579H23.065C22.521 33.579 22.035 33.297 21.764 32.826C21.494 32.354 21.495 31.793 21.769 31.323L29.725 17.685C29.997 17.219 30.481 16.941 31.021 16.941C31.56 16.941 32.044 17.219 32.316 17.685L40.272 31.323C40.546 31.793 40.548 32.354 40.277 32.826C40.006 33.297 39.52 33.579 38.976 33.579Z" fill="white" />
            <path d="M31.021 17.441C30.685 17.441 30.35 17.606 30.157 17.937L22.201 31.575C21.812 32.242 22.293 33.079 23.065 33.079H38.976C39.748 33.079 40.229 32.242 39.84 31.575L31.884 17.937C31.691 17.606 31.356 17.441 31.021 17.441Z" fill="#E21100" />
            <path d="M32.127 27.818H30.084L29.716 20.507H32.401L32.127 27.818ZM29.716 31C29.714 30.853 29.749 30.708 29.816 30.578C29.885 30.445 29.984 30.33 30.104 30.241C30.238 30.142 30.388 30.067 30.548 30.018C30.732 29.961 30.924 29.934 31.116 29.936C31.309 29.934 31.501 29.961 31.685 30.018C31.844 30.067 31.993 30.142 32.126 30.241C32.247 30.33 32.346 30.445 32.416 30.578C32.482 30.708 32.516 30.852 32.516 30.998C32.516 31.144 32.482 31.288 32.416 31.418C32.347 31.551 32.248 31.666 32.128 31.755C31.995 31.854 31.846 31.929 31.687 31.978C31.502 32.036 31.31 32.065 31.116 32.064C30.923 32.067 30.731 32.039 30.547 31.982C30.389 31.933 30.239 31.858 30.106 31.759C29.985 31.669 29.886 31.552 29.816 31.418C29.749 31.289 29.715 31.145 29.716 31Z" fill="#E21100" stroke="#E21100" strokeWidth="0.2" />
          </svg>
        </div>
        <span className="bg-[#58065B] text-white px-2.5 py-0.5 rounded-full" style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", ...fontInter }}>
          HAD
        </span>
        <span className="bg-[#F88805] text-white px-2.5 py-0.5 rounded-full" style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", ...fontInter }}>
          MRS
        </span>
      </div>
    </>
  );
}

function ActionButtons({ pendingCount, onReminderClick }: { pendingCount: number; onReminderClick: () => void }) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onReminderClick}
        disabled={pendingCount === 0}
        className="flex-1 bg-[#e21100] text-white py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 disabled:opacity-50 transition-opacity"
        style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4.817 11.333C5.187 11.327 5.539 11.174 5.797 10.909C6.054 10.643 6.197 10.287 6.192 9.917H3.441C3.437 10.287 3.579 10.643 3.837 10.909C4.095 11.174 4.447 11.327 4.817 11.333ZM9.448 8.019C9.033 7.56 8.255 6.869 8.255 4.604C8.264 3.802 7.995 3.021 7.494 2.395C6.992 1.769 6.289 1.336 5.504 1.169V0.708C5.507 0.523 5.436 0.344 5.307 0.212C5.178 0.079 5.002 0.003 4.817 0C4.725 0.001 4.634 0.021 4.55 0.057C4.466 0.093 4.39 0.146 4.326 0.212C4.262 0.278 4.212 0.355 4.178 0.441C4.144 0.526 4.127 0.617 4.129 0.709V1.17C3.344 1.336 2.641 1.769 2.139 2.396C1.637 3.022 1.368 3.802 1.377 4.605C1.378 6.867 0.6 7.56 0.185 8.019C0.065 8.15 -0.001 8.322 0 8.5C-0.002 8.685 0.069 8.864 0.199 8.997C0.328 9.13 0.505 9.206 0.69 9.208H8.943C9.129 9.206 9.306 9.13 9.435 8.997C9.564 8.864 9.636 8.685 9.633 8.5C9.635 8.322 9.568 8.15 9.448 8.019Z" fill="white" transform="translate(3, 2.5)" />
        </svg>
        REMINDER ({pendingCount})
      </button>
      <button className="flex-1 border-2 border-primary text-primary py-1.5 px-2 rounded-lg" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}>
        INFO LENGKAP
      </button>
    </div>
  );
}

function TabNavigation({ tabs, activeTab, onTabChange }: { tabs: string[]; activeTab: string; onTabChange: (tab: string) => void }) {
  // Map tab names to internal keys
  const tabKeyMap: Record<string, string> = {
    "INVASIF": "INVASIF",
    "SUMMARY": "SUMMARY",
    "TUGAS": "TUGAS",
  };

  return (
    <div className="bg-card flex overflow-x-auto border-b border-border">
      {tabs.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            onClick={() => {
              if (tabKeyMap[tab]) onTabChange(tab);
            }}
            className="flex flex-col items-center pt-4 shrink-0"
          >
            <div className="px-4">
              <span
                className={isActive ? "text-[#00109c]" : "text-[#00109c] opacity-40"}
                style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
              >
                {tab}
              </span>
            </div>
            <div className={`w-full h-0.5 mt-3.5 ${isActive ? "bg-[#00109c]" : "bg-transparent"}`} />
          </button>
        );
      })}
    </div>
  );
}

/* ===== SUMMARY TAB CONTENT (matches Figma) ===== */
function SummaryTabContent({
  devices,
  onLihatDetail,
  onEdit,
  onOpenIntervensi,
}: {
  devices: InvasiveDevice[];
  onLihatDetail: () => void;
  onEdit: (device: InvasiveDevice) => void;
  onOpenIntervensi: (device: InvasiveDevice) => void;
}) {
  const latestDevices = devices.slice(0, MAX_SUMMARY_CARDS);
  const terpasang = devices.filter((d) => !d.waktuPelepasan).length;

  return (
    <div className="flex-1 bg-muted/40 overflow-y-auto">
      {/* Alat Invasif Section */}
      <div className="bg-card px-4 py-5">
        <h3 className="text-foreground mb-3" style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-bold)", ...fontInter }}>
          Alat Invasif
        </h3>

        {terpasang === 0 ? (
          <EmptyStateNodata message="Belum ada alat invasif yang terpasang" />
        ) : (
          <div className="flex flex-col gap-3">
            {latestDevices.map((d) => (
              <InvasiveCard
                key={d.id}
                device={d}
                onEdit={onEdit}
                onOpenIntervensi={onOpenIntervensi}
              />
            ))}
            {devices.length > MAX_SUMMARY_CARDS && (
              <p className="text-muted-foreground text-center" style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-normal)", ...fontInter }}>
                +{devices.length - MAX_SUMMARY_CARDS} lainnya
              </p>
            )}
          </div>
        )}

        <button
          onClick={onLihatDetail}
          className="mt-3 px-4 py-1.5 border border-border rounded-lg bg-card hover:bg-secondary transition-colors"
          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", ...fontInter }}
        >
          Lihat Detail
        </button>
      </div>

      {/* Divider */}
      <div className="h-2 bg-muted/60" />

      {/* Dokumen Terakhir Section */}
      <div className="bg-card px-4 py-5">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-foreground" style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-bold)", ...fontInter }}>
            Dokumen Terakhir
          </h3>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <p className="text-muted-foreground" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", ...fontInter }}>
            per 14 Okt 2025, 08:23
          </p>
          <RefreshCw className="w-4 h-4 text-primary" />
        </div>

        {/* Document items */}
        <div className="flex flex-col divide-y divide-border">
          <DokumenItem
            icon={<ObservasiIcon />}
            title="Observasi Rutin"
            subtitle="Widya Karina · 23 Ags 2020, 09:00"
          />
          <DokumenItem
            icon={<BalanceCairanIcon />}
            title="Balance Cairan"
            subtitle="Sor Sembiring · 23 Ags 2020, 08:54"
          />
          <DokumenItem
            icon={<CatatanPengobatanIcon />}
            title="Catatan Pengobatan"
            subtitle="dr. Aloysius Sutedja · 23 Ags 2020, 06:48"
          />
        </div>

        <button
          className="w-full mt-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors"
          style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
        >
          SELENGKAPNYA
        </button>
      </div>
    </div>
  );
}

function DokumenItem({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-foreground truncate" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", ...fontInter }}>
          {title}
        </p>
        <p className="text-muted-foreground truncate" style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-normal)", ...fontInter }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function ObservasiIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 12.6A5.6 5.6 0 112.4 8 5.607 5.607 0 018 13.6zM8.35 4.5H7.3v4.2l3.675 2.205.525-.861L8.35 8.15V4.5z" fill="#1B29E5" />
      </svg>
    </div>
  );
}

function BalanceCairanIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM4 3.5h8a.5.5 0 01.5.5v1H3.5V4a.5.5 0 01.5-.5zm8 9H4a.5.5 0 01-.5-.5V6.5h9V12a.5.5 0 01-.5.5z" fill="#1B29E5" />
      </svg>
    </div>
  );
}

function CatatanPengobatanIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#FFF3E0] flex items-center justify-center">
      <span className="text-[#F88805]" style={{ fontSize: "8px", fontWeight: "var(--font-weight-bold)", fontFamily: "'Inter', sans-serif" }}>RMO</span>
    </div>
  );
}

/* ===== INVASIF TAB CONTENT (full device management) ===== */
function InvasifTabContent() {
  const ctx = useAppContext();
  const {
    devices,
    filteredDevices,
    filter,
    activeFilterCount,
    currentPage,
    showForm,
    editingDevice,
    highlightedDeviceId,
    pendingCount,
    formDraftRef,
    setCurrentPage,
    handleSave,
    handleSaveDraft,
    handleEdit,
    handleCancel,
    handleStartAdd,
    setShowFilter,
    handleReminderClick,
    handleOpenIntervensiModal,
  } = ctx;

  const isAddingRow = showForm && !editingDevice;
  const totalPages = Math.max(1, Math.ceil(filteredDevices.length / CARDS_PER_PAGE));
  const startIdx = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedDevices = filteredDevices.slice(startIdx, startIdx + CARDS_PER_PAGE);

  // Stats
  const terpasang = devices.filter((d) => !d.waktuPelepasan).length;
  const dilepas = devices.filter((d) => !!d.waktuPelepasan).length;
  const prolong = devices.filter((d) => {
    if (!d.waktuPemasangan || d.waktuPelepasan) return false;
    return calculateDayCount(d.waktuPemasangan) > 3;
  }).length;
  const berhasil = devices.filter((d) => d.status === "berhasil").length;
  const tidakBerhasil = devices.filter((d) => d.status === "tidak_berhasil").length;
  const pendingIntervensiDevices = filteredDevices.filter((d) => hasPendingIntervensi(d));

  return (
    <>
      {/* ===== MOBILE INVASIF CONTENT ===== */}
      <div className="max-[760px]:flex hidden flex-col flex-1 overflow-hidden">
        {/* Status badges + filter */}
        <div className="bg-card px-4 py-3 flex items-center gap-2 border-b border-border">
          <div className="flex-1 flex gap-2 overflow-x-auto">
            <span className="bg-[#d7e3ea] text-[#166886] px-2 py-0.5 rounded-full whitespace-nowrap shrink-0" style={{ fontSize: "var(--text-xs)", ...fontInter }}>
              <span style={{ fontWeight: "var(--font-weight-bold)" }}>{terpasang} </span>
              <span style={{ fontWeight: "var(--font-weight-normal)" }}>Terpasang</span>
            </span>
            <span className="bg-muted text-foreground px-2 py-0.5 rounded-full whitespace-nowrap shrink-0" style={{ fontSize: "var(--text-xs)", ...fontInter }}>
              <span style={{ fontWeight: "var(--font-weight-bold)" }}>{dilepas} </span>
              <span style={{ fontWeight: "var(--font-weight-normal)" }}>Dilepas</span>
            </span>
            <span className="bg-[#fffbeb] text-[#b45309] px-2 py-0.5 rounded-full whitespace-nowrap shrink-0" style={{ fontSize: "var(--text-xs)", ...fontInter }}>
              <span style={{ fontWeight: "var(--font-weight-bold)" }}>{prolong} </span>
              <span style={{ fontWeight: "var(--font-weight-normal)" }}>Prolong</span>
            </span>
            <span className="bg-[#ecfdf5] text-[#16a34a] px-2 py-0.5 rounded-full whitespace-nowrap shrink-0" style={{ fontSize: "var(--text-xs)", ...fontInter }}>
              <span style={{ fontWeight: "var(--font-weight-bold)" }}>{berhasil} </span>
              <span style={{ fontWeight: "var(--font-weight-normal)" }}>Berhasil</span>
            </span>
            <span className="bg-[#fef0f0] text-[#dc2626] px-2 py-0.5 rounded-full whitespace-nowrap shrink-0" style={{ fontSize: "var(--text-xs)", ...fontInter }}>
              <span style={{ fontWeight: "var(--font-weight-bold)" }}>{tidakBerhasil} </span>
              <span style={{ fontWeight: "var(--font-weight-normal)" }}>Tidak Berhasil</span>
            </span>
          </div>
          <button
            onClick={() => setShowFilter(true)}
            className="relative shrink-0 flex items-center justify-center w-9 h-9 border border-border rounded-lg bg-card"
          >
            <Filter className="w-5 h-5 text-foreground" />
            {activeFilterCount > 0 && (
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
              >
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 bg-secondary/40 p-4 flex flex-col gap-3 overflow-y-auto">
          {/* Intervention alert banner */}
          {pendingIntervensiDevices.length > 0 && !showForm && (
            <div className="flex items-center gap-2 px-3 py-2 bg-[#FFFBEB] border border-[#FFD98F] rounded-lg">
              <AlertCircle className="w-4 h-4 text-[#b45309] shrink-0" />
              <span className="text-[#92400e] flex-1" style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-normal)", ...fontInter }}>
                <span style={{ fontWeight: "var(--font-weight-bold)" }}>{pendingIntervensiDevices.length} alat</span> memiliki intervensi belum selesai
              </span>
              <button
                onClick={handleReminderClick}
                className="px-2 py-1 bg-[#b45309] text-white rounded shrink-0"
                style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
              >
                Lihat
              </button>
            </div>
          )}

          {/* Add button */}
          {!showForm && (
            <button
              onClick={handleStartAdd}
              className="w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
            >
              Tambah Invasif
            </button>
          )}

          {/* Cards list */}
          {filteredDevices.length > 0 && !showForm && (
            <div className="flex flex-col gap-3">
              {paginatedDevices.map((device) => (
                <InvasiveCard
                  key={device.id}
                  device={device}
                  onEdit={handleEdit}
                  onOpenIntervensi={handleOpenIntervensiModal}
                  highlightedDeviceId={highlightedDeviceId}
                />
              ))}
            </div>
          )}

          {filteredDevices.length === 0 && !showForm && (
            <EmptyStateNodata
              message={devices.length > 0 ? "Tidak ada alat invasif yang cocok" : "Belum ada alat invasif yang terpasang"}
            />
          )}

          {showForm && (
            <InvasiveForm
              onSave={handleSave}
              onCancel={handleCancel}
              existingDevices={devices}
              editDevice={editingDevice}
              formDraftRef={formDraftRef}
              onSaveDraft={handleSaveDraft}
            />
          )}

          {/* Pagination */}
          {filteredDevices.length > CARDS_PER_PAGE && !showForm && (
            <div className="flex items-center justify-center gap-2 py-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded disabled:opacity-30 hover:bg-secondary transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 flex items-center justify-center rounded transition-colors ${
                    page === currentPage ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                  }`}
                  style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded disabled:opacity-30 hover:bg-secondary transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ===== DESKTOP INVASIF CONTENT ===== */}
      <div className="hidden min-[761px]:flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 px-6 py-4 overflow-auto">
          {/* Intervention alert banner for desktop */}
          {pendingIntervensiDevices.length > 0 && (
            <div className="flex items-center gap-3 px-4 py-2.5 mb-3 bg-[#FFFBEB] border border-[#FFD98F] rounded-lg">
              <AlertCircle className="w-5 h-5 text-[#b45309] shrink-0" />
              <span className="text-[#92400e] flex-1" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", ...fontInter }}>
                <span style={{ fontWeight: "var(--font-weight-bold)" }}>{pendingIntervensiDevices.length} alat invasif</span> memiliki intervensi yang belum selesai
              </span>
              <button
                onClick={handleReminderClick}
                className="px-3 py-1.5 bg-[#b45309] text-white rounded-lg shrink-0 flex items-center gap-1"
                style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4.817 11.333C5.187 11.327 5.539 11.174 5.797 10.909C6.054 10.643 6.197 10.287 6.192 9.917H3.441C3.437 10.287 3.579 10.643 3.837 10.909C4.095 11.174 4.447 11.327 4.817 11.333ZM9.448 8.019C9.033 7.56 8.255 6.869 8.255 4.604C8.264 3.802 7.995 3.021 7.494 2.395C6.992 1.769 6.289 1.336 5.504 1.169V0.708C5.507 0.523 5.436 0.344 5.307 0.212C5.178 0.079 5.002 0.003 4.817 0C4.725 0.001 4.634 0.021 4.55 0.057C4.466 0.093 4.39 0.146 4.326 0.212C4.262 0.278 4.212 0.355 4.178 0.441C4.144 0.526 4.127 0.617 4.129 0.709V1.17C3.344 1.336 2.641 1.769 2.139 2.396C1.637 3.022 1.368 3.802 1.377 4.605C1.378 6.867 0.6 7.56 0.185 8.019C0.065 8.15 -0.001 8.322 0 8.5C-0.002 8.685 0.069 8.864 0.199 8.997C0.328 9.13 0.505 9.206 0.69 9.208H8.943C9.129 9.206 9.306 9.13 9.435 8.997C9.564 8.864 9.636 8.685 9.633 8.5C9.635 8.322 9.568 8.15 9.448 8.019Z" fill="white" transform="translate(3, 2.5)" />
                </svg>
                Telusuri
              </button>
            </div>
          )}

          <InvasiveTable
            devices={filteredDevices}
            allDevices={devices}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onSave={handleSave}
            onSaveDraft={handleSaveDraft}
            onOpenFilter={() => setShowFilter(true)}
            filter={filter}
            isAddingRow={isAddingRow}
            onSetAddingRow={(v: boolean) => {
              if (v) handleStartAdd();
              else handleCancel();
            }}
            onEdit={handleEdit}
            editingDevice={editingDevice}
            onCancelEdit={handleCancel}
            onOpenIntervensi={handleOpenIntervensiModal}
            highlightedDeviceId={highlightedDeviceId}
            formDraftRef={formDraftRef}
          />
        </div>
      </div>
    </>
  );
}

/* ===== DESKTOP SUMMARY TAB CONTENT ===== */
function DesktopSummaryTabContent({
  devices,
  onLihatDetail,
  onEdit,
  onOpenIntervensi,
}: {
  devices: InvasiveDevice[];
  onLihatDetail: () => void;
  onEdit: (device: InvasiveDevice) => void;
  onOpenIntervensi: (device: InvasiveDevice) => void;
}) {
  const latestDevices = devices.slice(0, MAX_SUMMARY_CARDS);
  const terpasang = devices.filter((d) => !d.waktuPelepasan).length;

  return (
    <div className="flex-1 px-6 py-4 overflow-auto">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6">
        {/* Alat Invasif Card */}
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="text-foreground mb-3" style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-bold)", ...fontInter }}>
            Alat Invasif
          </h3>

          {terpasang === 0 ? (
            <EmptyStateNodata message="Belum ada alat invasif yang terpasang" />
          ) : (
            <div className="flex flex-col gap-3">
              {latestDevices.map((d) => (
                <InvasiveCard
                  key={d.id}
                  device={d}
                  onEdit={onEdit}
                  onOpenIntervensi={onOpenIntervensi}
                />
              ))}
              {devices.length > MAX_SUMMARY_CARDS && (
                <p className="text-muted-foreground text-center" style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-weight-normal)", ...fontInter }}>
                  +{devices.length - MAX_SUMMARY_CARDS} lainnya
                </p>
              )}
            </div>
          )}

          <button
            onClick={onLihatDetail}
            className="mt-3 px-4 py-1.5 border border-border rounded-lg bg-card hover:bg-secondary transition-colors"
            style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", ...fontInter }}
          >
            Lihat Detail
          </button>
        </div>

        {/* Dokumen Terakhir Card */}
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-foreground" style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-weight-bold)", ...fontInter }}>
              Dokumen Terakhir
            </h3>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-muted-foreground" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-normal)", ...fontInter }}>
              per 14 Okt 2025, 08:23
            </p>
            <RefreshCw className="w-4 h-4 text-primary" />
          </div>
          <div className="flex flex-col divide-y divide-border">
            <DokumenItem icon={<ObservasiIcon />} title="Observasi Rutin" subtitle="Widya Karina · 23 Ags 2020, 09:00" />
            <DokumenItem icon={<BalanceCairanIcon />} title="Balance Cairan" subtitle="Sor Sembiring · 23 Ags 2020, 08:54" />
            <DokumenItem icon={<CatatanPengobatanIcon />} title="Catatan Pengobatan" subtitle="dr. Aloysius Sutedja · 23 Ags 2020, 06:48" />
          </div>
          <button
            className="w-full mt-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors"
            style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
          >
            SELENGKAPNYA
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===== MAIN PAGE ===== */
export function SummaryPage() {
  const ctx = useAppContext();

  const {
    devices,
    activeTab,
    setActiveTab,
    pendingCount,
    handleReminderClick,
    showForm,
    editingDevice,
    filter,
    filteredDevices,
    formDraftRef,
    handleSave,
    handleSaveDraft,
    handleCancel,
    handleStartAdd,
    handleEdit,
    setShowFilter,
    handleOpenIntervensiModal,
    highlightedDeviceId,
    currentPage,
    setCurrentPage,
    activeFilterCount,
  } = ctx;

  const [isIvTaskModalOpen, setIsIvTaskModalOpen] = useState<boolean>(false);

  const isAddingRow = showForm && !editingDevice;

  // Determine which tab is active. Default to SUMMARY.
  const validTabs = ["INVASIF", "SUMMARY", "TUGAS"];
  const currentTab = validTabs.includes(activeTab) ? activeTab : "SUMMARY";

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleLihatDetail = () => {
    setActiveTab("INVASIF");
  };

  return (
    <div className="h-full bg-background flex flex-col overflow-hidden">
      {/* ==================== MOBILE LAYOUT (< 761px) ==================== */}
      <div className="max-[760px]:flex hidden flex-col h-full flex-1 overflow-hidden">
        <div className="w-full max-w-md mx-auto flex flex-col h-full flex-1 overflow-hidden">
          <div className="h-6 bg-card" />

          {/* Mobile Header */}
          <div className="bg-card px-4 py-2 flex flex-col gap-2">
            <button className="w-6 h-6 flex items-center justify-center">
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <PatientHeader />
            <ActionButtons pendingCount={pendingCount} onReminderClick={handleReminderClick} />
          </div>

          <TabNavigation tabs={MOBILE_TABS} activeTab={currentTab} onTabChange={handleTabChange} />

          {/* Mobile Tab Content */}
          {currentTab === "SUMMARY" && (
            <SummaryTabContent devices={devices} onLihatDetail={handleLihatDetail} onEdit={handleEdit} onOpenIntervensi={handleOpenIntervensiModal} />
          )}
          {currentTab === "INVASIF" && <InvasifTabContent />}
          {currentTab === "TUGAS" && (
            <div className="flex-1 flex flex-col min-h-0 bg-muted/40">
              <TugasTabContent devices={devices} onOpenIvTask={() => setIsIvTaskModalOpen(true)} />
            </div>
          )}
        </div>
      </div>

      {/* ==================== DESKTOP LAYOUT (>= 761px) ==================== */}
      <div className="hidden min-[761px]:flex flex-col min-h-full">
        {/* Desktop Header */}
        <div className="bg-card px-6 py-3 flex items-center gap-4 border-b border-border">
          <button className="w-6 h-6 flex items-center justify-center">
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <PatientHeader compact />
          <div className="flex-1" />
          <button
            onClick={handleReminderClick}
            disabled={pendingCount === 0}
            className="bg-[#e21100] text-white py-1.5 px-3 rounded-lg flex items-center justify-center gap-1 disabled:opacity-50 transition-opacity"
            style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4.817 11.333C5.187 11.327 5.539 11.174 5.797 10.909C6.054 10.643 6.197 10.287 6.192 9.917H3.441C3.437 10.287 3.579 10.643 3.837 10.909C4.095 11.174 4.447 11.327 4.817 11.333ZM9.448 8.019C9.033 7.56 8.255 6.869 8.255 4.604C8.264 3.802 7.995 3.021 7.494 2.395C6.992 1.769 6.289 1.336 5.504 1.169V0.708C5.507 0.523 5.436 0.344 5.307 0.212C5.178 0.079 5.002 0.003 4.817 0C4.725 0.001 4.634 0.021 4.55 0.057C4.466 0.093 4.39 0.146 4.326 0.212C4.262 0.278 4.212 0.355 4.178 0.441C4.144 0.526 4.127 0.617 4.129 0.709V1.17C3.344 1.336 2.641 1.769 2.139 2.396C1.637 3.022 1.368 3.802 1.377 4.605C1.378 6.867 0.6 7.56 0.185 8.019C0.065 8.15 -0.001 8.322 0 8.5C-0.002 8.685 0.069 8.864 0.199 8.997C0.328 9.13 0.505 9.206 0.69 9.208H8.943C9.129 9.206 9.306 9.13 9.435 8.997C9.564 8.864 9.636 8.685 9.633 8.5C9.635 8.322 9.568 8.15 9.448 8.019Z" fill="white" transform="translate(3, 2.5)" />
            </svg>
            REMINDER ({pendingCount})
          </button>
          <button className="border-2 border-primary text-primary py-1.5 px-3 rounded-lg" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-bold)", ...fontInter }}>
            INFO LENGKAP
          </button>
        </div>

        <TabNavigation tabs={DESKTOP_TABS} activeTab={currentTab} onTabChange={handleTabChange} />

        {/* Desktop Tab Content */}
        {currentTab === "SUMMARY" && (
          <DesktopSummaryTabContent devices={devices} onLihatDetail={handleLihatDetail} onEdit={handleEdit} onOpenIntervensi={handleOpenIntervensiModal} />
        )}
        {currentTab === "INVASIF" && <InvasifTabContent />}
        {currentTab === "TUGAS" && (
          <TugasTabContent devices={devices} onOpenIvTask={() => setIsIvTaskModalOpen(true)} />
        )}
      </div>

      {/* Global Modals for Tugas */}
      {isIvTaskModalOpen && (
        <TugasPivasModal
          devices={devices.filter(d => !d.waktuPelepasan && d.deviceType === "IV Perifer")}
          onSave={(devs) => {
            devs.forEach(dev => handleSave(dev));
          }}
          onClose={() => setIsIvTaskModalOpen(false)}
        />
      )}
    </div>
  );
}
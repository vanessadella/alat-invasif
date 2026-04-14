import { useState } from "react";
import { X, Search, Filter } from "lucide-react";

interface MedicationHistoryModalProps {
  onClose: () => void;
}

const fontInter: React.CSSProperties = { fontFamily: "'Inter', sans-serif" };

export function MedicationHistoryModal({ onClose }: MedicationHistoryModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-[2px]"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.4)" }}
      onClick={onClose}
    >
      <div
        className="bg-white flex flex-col w-full max-w-5xl h-[90vh] overflow-hidden rounded-xl shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-foreground text-xl font-bold flex items-center gap-2" style={fontInter}>
            Catatan Pengobatan <span className="text-muted-foreground text-base font-normal">| Medication Record</span>
          </h2>
          <button onClick={onClose} className="p-1.5 hover:bg-secondary rounded-lg transition-colors">
            <X className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {/* Patient Details Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-8 text-sm" style={fontInter}>
            <div className="flex flex-col gap-1">
              <div className="flex"><span className="w-24 text-muted-foreground">Nama</span><span>: Putri Ayu Ningtyas</span></div>
              <div className="flex"><span className="w-24 text-muted-foreground">TTL / umur</span><span>: 18 Apr 1990 / 35Y 3M 7D</span></div>
              <div className="flex"><span className="w-24 text-muted-foreground">JK</span><span>: Perempuan</span></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex"><span className="w-24 text-muted-foreground">MR no.</span><span>: 000012345</span></div>
              <div className="flex"><span className="w-24 text-muted-foreground">No. / tgl admisi</span><span>: EPA00000011 / 18 Mei 2025</span></div>
              <div className="flex"><span className="w-24 text-muted-foreground"></span><span className="text-muted-foreground ml-2">IPA00000011 / 19 Mei 2025</span></div>
              <div className="flex"><span className="w-24 text-muted-foreground">DPJP</span><span>: dr. Eko Suratman</span></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex"><span className="w-32 text-muted-foreground">Bangsal / no. bed</span><span>: Ward 31 / ICR02</span></div>
              <div className="flex"><span className="w-32 text-muted-foreground">Diagnosa</span><span>: DBD</span></div>
            </div>
          </div>
          <div className="text-sm border-b border-border pb-4" style={fontInter}>
            <div className="flex"><span className="w-24 text-muted-foreground font-bold">Berat badan</span><span className="font-bold">: 56 Kg</span></div>
            <div className="flex mt-1"><span className="w-24 text-[#dc2626] font-bold">Alergi obat</span><span className="font-bold text-[#dc2626] flex items-center gap-2">: <span className="w-2 h-2 rounded-full bg-[#dc2626]"></span> Atorvastatin (reaction: gatal)</span></div>
          </div>

          {/* Filters & Legend */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold flex items-center gap-2" style={fontInter}>
                Riwayat pemberian <span className="text-muted-foreground text-sm font-normal">| Administration history</span>
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-10 h-5 bg-[#22c55e] rounded-full relative"><div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
                <span className="text-sm font-medium">Tampilkan riwayat pemberian di Emergency (ED)</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground" style={fontInter}>
              <span>Keterangan:</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#16a34a] text-white flex items-center justify-center text-[8px]">✓</span> Obat sudah diberikan</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full border border-muted-foreground flex items-center justify-center"></span> Obat belum diberikan</span>
              <span className="flex items-center gap-1"><span className="text-[#dc2626] font-bold">⊘</span> Obat tidak diberikan</span>
              <span className="flex items-center gap-1"><span className="text-[#ea580c] font-bold">W:</span> Penundaan obat</span>
              <span className="flex items-center gap-1"><span className="text-[#dc2626] font-bold">R:</span> Pasien menolak</span>
              <span className="flex items-center gap-1"><span className="text-[#ea580c] font-bold">N:</span> Pasien puasa</span>
              <span className="flex items-center gap-1"><span className="text-[#16a34a] font-bold">DC:</span> Double Check</span>
              <span className="flex items-center gap-1"><span className="text-[#16a34a] font-bold">IDC:</span> Independent Double Check</span>
            </div>

            <div className="flex items-end gap-3 pb-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-muted-foreground">Date</label>
                <div className="flex items-center bg-card border border-border rounded-lg overflow-hidden h-9 line-height-none">
                  <input type="text" value="13/08/2025" readOnly className="w-24 px-2 text-sm text-center outline-none bg-transparent" />
                  <div className="bg-muted px-2 py-2 text-xs text-muted-foreground h-full border-x border-border flex items-center">to</div>
                  <input type="text" value="15/08/2025" readOnly className="w-24 px-2 text-sm text-center outline-none bg-transparent" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-xs">&nbsp;</label>
                <div className="relative">
                  <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Search Medication or Doctor" className="w-full h-9 pl-9 pr-3 text-sm border border-border rounded-lg outline-none focus:border-ring" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-muted-foreground">Timeslot View</label>
                <select className="h-9 px-3 border border-border rounded-lg text-sm bg-card outline-none w-40">
                  <option>All</option>
                </select>
              </div>
              <button className="h-9 px-4 bg-[#00277f] text-white rounded-lg flex items-center gap-2 text-sm font-bold ml-2">
                <Filter className="w-4 h-4" /> Filter (1)
              </button>
              <button className="h-9 px-3 text-muted-foreground flex items-center gap-1 text-sm font-medium hover:bg-secondary rounded-lg">
                <X className="w-4 h-4" /> Clear filter
              </button>
            </div>
          </div>

          {/* Table 1: Obat-obatan */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold flex items-center gap-2 mb-2" style={fontInter}>
              Obat-obatan <span className="text-muted-foreground text-sm font-normal">| medications</span>
            </h3>
            
            <div className="border border-border overflow-hidden bg-white text-xs" style={fontInter}>
              {/* Header Row 1: Dates */}
              <div className="flex bg-[#f8fafc] border-b border-border text-center font-bold">
                <div className="w-64 shrink-0 border-r border-border p-2"></div>
                <div className="flex-1 border-r border-border p-2">13/08/2025</div>
                <div className="flex-1 border-r border-border p-2">14/08/2025</div>
                <div className="flex-1 p-2">15/08/2025</div>
              </div>
              {/* Header Row 2: Timeslots */}
              <div className="flex bg-[#f8fafc] border-b border-border text-center font-bold text-[10px]">
                <div className="w-64 shrink-0 border-r border-border p-2 flex items-center justify-start text-xs">Nama obat</div>
                <div className="flex-1 flex border-r border-border">
                  <div className="flex-1 border-r border-border p-1.5 flex items-center justify-center">00.01 - 06.00</div>
                  <div className="flex-1 border-r border-border p-1.5 flex items-center justify-center">06.01 - 12.00</div>
                  <div className="flex-1 border-r border-border p-1.5 flex items-center justify-center">12.01 - 18.00</div>
                  <div className="flex-1 p-1.5 flex items-center justify-center">18.01 - 00.00</div>
                </div>
                <div className="flex-1 flex border-r border-border">
                  <div className="flex-1 border-r border-border p-1.5 flex items-center justify-center">00.01 - 06.00</div>
                  <div className="flex-1 border-r border-border p-1.5 flex items-center justify-center">06.01 - 12.00</div>
                  <div className="flex-1 border-r border-border p-1.5 flex items-center justify-center">12.01 - 18.00</div>
                  <div className="flex-1 p-1.5 flex items-center justify-center">18.01 - 00.00</div>
                </div>
                <div className="flex-1 flex">
                  <div className="flex-1 border-r border-border p-1.5 flex items-center justify-center">00.01 - 06.00</div>
                  <div className="flex-1 border-r border-border p-1.5 flex items-center justify-center">06.01 - 12.00</div>
                  <div className="flex-1 border-r border-border p-1.5 flex items-center justify-center">12.01 - 18.00</div>
                  <div className="flex-1 p-1.5 flex items-center justify-center">18.01 - 00.00</div>
                </div>
              </div>
              
              {/* Row 1 */}
              <div className="flex border-b border-border items-stretch">
                <div className="w-64 shrink-0 border-r border-border p-3 flex flex-col gap-1 bg-[#f8fafc]">
                  <p className="font-bold">AMLODIPINE 5MG</p>
                  <p className="text-[#dc2626] text-[10px]">(Obat dilanjutkan dari ED)</p>
                  <p className="text-[10px] text-muted-foreground mt-1">10mg, 2x1 sehari, Intra Vena, Setelah makan</p>
                  <p className="text-[10px] text-muted-foreground">dr. Eko Suratman on behalf Prof. dr. Eka Wahjoepramono, SpBS</p>
                  <p className="text-[10px] mt-1"><span className="text-muted-foreground">Start:</span> 13/08/2025, 00:01</p>
                  <p className="text-[10px] font-bold text-[#dc2626]"><span className="text-muted-foreground font-normal">Stop:</span> 21/08/2025, 23:59</p>
                  <p className="text-[10px] mt-1 text-muted-foreground">Pemberian ke-/Total Pemberian: <span className="font-bold text-foreground">6/7</span></p>
                </div>
                {/* 13/08 */}
                <div className="flex-1 flex border-r border-border">
                  <div className="flex-1 border-r border-border p-2 flex flex-col items-center justify-center gap-4 border-l-2 border-l-[#22c55e]/30 bg-[#f0fdf4]/30">
                    <div className="flex flex-col items-center"><span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 00:10</span><span className="text-[9px] text-muted-foreground">(ED)</span></div>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 03:59</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 05:59</span>
                  </div>
                  <div className="flex-1 border-r border-border p-2 flex flex-col items-center justify-center gap-4 bg-[#f0fdf4]/30">
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 08:00</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 11:40</span>
                  </div>
                  <div className="flex-1 border-r border-border p-2 flex flex-col items-center justify-center gap-4 bg-[#f0fdf4]/30">
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 12:10</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 15:00</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 17:59</span>
                  </div>
                  <div className="flex-1 p-2 flex flex-col items-center justify-center gap-4 bg-[#f0fdf4]/30">
                    <span className="text-[#dc2626] font-bold text-[10px] flex items-center"><span className="mr-1">R</span> 18:50</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 20:20</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 23:00</span>
                  </div>
                </div>
                {/* 14/08 */}
                <div className="flex-1 flex border-r border-border">
                  <div className="flex-1 border-r border-border p-2 flex flex-col items-center justify-center gap-4 bg-[#f0fdf4]/30">
                     <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 00:10</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 03:59</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 05:59</span>
                  </div>
                  <div className="flex-1 border-r border-border p-2 flex flex-col items-center justify-center gap-4 bg-[#fef2f2]/30">
                    <span className="text-[#dc2626] font-bold text-[10px] flex items-center"><span className="mr-1">⊘</span> 8:00</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 11:40</span>
                  </div>
                  <div className="flex-1 border-r border-border p-2 flex flex-col items-center justify-center gap-4 bg-[#fff3cd]/30">
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 12:10</span>
                    <span className="text-[#ea580c] font-bold text-[10px] flex items-center"><span className="mr-1">N</span> 15:00</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 17:59</span>
                  </div>
                  <div className="flex-1 p-2 flex flex-col items-center justify-center gap-4 bg-[#f0fdf4]/30">
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 18:50</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 20:20</span>
                    <span className="text-[#16a34a] font-bold text-[10px] flex items-center"><span className="w-3 h-3 mr-1 bg-[#16a34a] rounded-full text-white flex items-center justify-center">✓</span> 23:00</span>
                  </div>
                </div>
                {/* 15/08 */}
                <div className="flex-1 flex">
                  <div className="flex-1 border-r border-border p-2 flex flex-col items-center justify-center gap-4 text-muted-foreground">
                     <span className="text-[10px] flex items-center"><span className="w-3 h-3 mr-1 border border-muted-foreground rounded-full flex items-center justify-center"></span> 00:10</span>
                    <span className="text-[10px] flex items-center"><span className="w-3 h-3 mr-1 border border-muted-foreground rounded-full flex items-center justify-center"></span> 03:59</span>
                    <span className="text-[10px] flex items-center"><span className="w-3 h-3 mr-1 border border-muted-foreground rounded-full flex items-center justify-center"></span> 05:59</span>
                  </div>
                  <div className="flex-1 border-r border-border p-2 flex flex-col items-center justify-center gap-4 text-muted-foreground border-r-2 border-r-[#22c55e]/30">
                    <span className="text-[10px] flex items-center"><span className="w-3 h-3 mr-1 border border-muted-foreground rounded-full flex items-center justify-center"></span> 08:00</span>
                    <span className="text-[10px] flex items-center"><span className="w-3 h-3 mr-1 border border-muted-foreground rounded-full flex items-center justify-center"></span> 11:40</span>
                  </div>
                  <div className="flex-1 border-r border-border p-2 flex flex-col items-center justify-center bg-secondary/30"></div>
                  <div className="flex-1 p-2 flex flex-col items-center justify-center bg-secondary/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

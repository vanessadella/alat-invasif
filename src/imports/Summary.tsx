import svgPaths from "./svg-lqj1fahujv";

function Wifi() {
  return (
    <div className="absolute bottom-1/4 left-[6.78%] right-[79.66%] top-1/4" data-name="wifi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="wifi">
          <mask height="12" id="mask0_73_2219" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="16" x="0" y="0">
            <path clipRule="evenodd" d="M0 0L8 12L16 0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="wifi mask" />
          </mask>
          <g mask="url(#mask0_73_2219)">
            <path clipRule="evenodd" d={svgPaths.p39e1600} fill="var(--fill-0, #171717)" fillRule="evenodd" id="Shape" />
            <path clipRule="evenodd" d={svgPaths.p19081100} fill="var(--fill-0, #171717)" fillRule="evenodd" id="Shape_2" />
            <path clipRule="evenodd" d={svgPaths.p11728070} fill="var(--fill-0, #171717)" fillRule="evenodd" id="Shape_3" />
            <circle cx="8" cy="12" fill="var(--fill-0, #171717)" id="Oval" r="3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Reception() {
  return (
    <div className="absolute bottom-1/4 left-[28.81%] right-[61.02%] top-1/4" data-name="reception">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="reception">
          <mask height="12" id="mask0_73_2212" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="12" x="0" y="0">
            <path clipRule="evenodd" d="M12 12V0L0 12H12Z" fill="var(--fill-0, white)" fillRule="evenodd" id="reception mask" />
          </mask>
          <g mask="url(#mask0_73_2212)">
            <path clipRule="evenodd" d="M9 0V12H12V0H9Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path" />
            <path clipRule="evenodd" d="M6 0V12H9V0H6Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_2" />
            <path clipRule="evenodd" d="M3 0V12H6V0H3Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_3" />
            <path clipRule="evenodd" d="M0 0V12H3V0H0Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute bottom-1/4 left-[50.85%] right-[42.37%] top-[20.83%]" data-name="battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 13">
        <g id="battery">
          <mask height="13" id="mask0_73_2177" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="8" x="0" y="0">
            <path clipRule="evenodd" d={svgPaths.p2f7e0200} fill="var(--fill-0, white)" fillRule="evenodd" id="battery mask" />
          </mask>
          <g mask="url(#mask0_73_2177)">
            <path clipRule="evenodd" d="M0 10V13H8V10H0Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path" />
            <path clipRule="evenodd" d="M0 7V10H8V7H0Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_2" />
            <path clipRule="evenodd" d="M0 4V7H8V4H0Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_3" />
            <path clipRule="evenodd" d="M0 1V4H8V1H0Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_4" />
            <path clipRule="evenodd" d="M2 0V1H6V0H2Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute contents inset-[20.83%_6.78%_16.67%_65.25%]" data-name="time">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[20.83%_6.78%_16.67%_65.25%] leading-[normal] opacity-90 text-[#171717] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:30
      </p>
    </div>
  );
}

function StatusBarContents() {
  return (
    <div className="absolute inset-[0_0_0_67.22%]" data-name="status bar contents">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="bounds" />
      </svg>
      <Wifi />
      <Reception />
      <Battery />
      <Time />
    </div>
  );
}

function PatientName1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Patient Name">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Male Icon">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p19236a80} fill="var(--fill-0, #1B29E5)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1d1b20] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        GANENDRA BIMA
      </p>
    </div>
  );
}

function PatientName() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="Patient Name">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="System/Chevron">
        <div className="absolute flex inset-[11.46%_32.29%_11.46%_23.96%] items-center justify-center">
          <div className="-rotate-90 flex-none h-[10.5px] w-[18.5px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 10.5">
                <path clipRule="evenodd" d={svgPaths.p217fa3f0} fill="var(--fill-0, #00109C)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <PatientName1 />
    </div>
  );
}

function Symbol1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[50px]" data-name="Symbol">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 40">
        <g id="Symbol">
          <g id="Rectangle 2179" />
          <g id="round-table_chart-24px">
            <path d={svgPaths.p3439a70} fill="var(--fill-0, #E21100)" id="Rectangle 12941" />
            <g id="Bounding_Boxes">
              <g id="Path 3217" />
            </g>
            <path d={svgPaths.p180ada80} fill="var(--fill-0, white)" id="Path 640179" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            <g id="Action Icon">
              <g id="Polygon 1">
                <path d={svgPaths.p28336e80} fill="var(--fill-0, white)" id="Vector" />
                <path d={svgPaths.p2a446e80} fill="var(--fill-0, #E21100)" id="Vector_2" />
              </g>
              <path d={svgPaths.p87d4f00} fill="var(--fill-0, #E21100)" id="Path 640126" stroke="var(--stroke-0, #E21100)" strokeWidth="0.2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function BoundingBoxes() {
  return (
    <div className="col-1 ml-[12.5%] mt-0 relative row-1 size-[29.937px]" data-name="Bounding_Boxes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.937 29.937">
        <g id="Bounding_Boxes">
          <g id="Path 3217" />
        </g>
      </svg>
    </div>
  );
}

function RoundTableChart24Px() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[11.15%] mt-[9.36%] place-items-start relative row-1" data-name="round-table_chart-24px">
      <div className="col-1 h-[24.948px] ml-0 mt-[3.74px] relative row-1 w-[39.916px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.916 24.948">
          <path d={svgPaths.p329e800} fill="var(--fill-0, #58065B)" id="Rectangle 12941" />
        </svg>
      </div>
      <BoundingBoxes />
      <p className="col-1 font-['Helvetica:Bold',sans-serif] leading-[normal] ml-[5.97px] mt-[8.26px] not-italic relative row-1 text-[13px] text-white whitespace-nowrap">HAD</p>
    </div>
  );
}

function Symbol2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Symbol">
      <div className="col-1 h-[40px] ml-0 mt-0 relative row-1 w-[51px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 2179" />
        </svg>
      </div>
      <RoundTableChart24Px />
    </div>
  );
}

function BoundingBoxes1() {
  return (
    <div className="col-1 ml-[12.5%] mt-0 relative row-1 size-[29.937px]" data-name="Bounding_Boxes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.937 29.937">
        <g id="Bounding_Boxes">
          <g id="Path 3217" />
        </g>
      </svg>
    </div>
  );
}

function RoundTableChart24Px1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[9.16%] mt-[9.36%] place-items-start relative row-1" data-name="round-table_chart-24px">
      <div className="col-1 h-[24.948px] ml-0 mt-[3.74px] relative row-1 w-[39.916px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.916 24.948">
          <path d={svgPaths.p329e800} fill="var(--fill-0, #F88805)" id="Rectangle 12941" />
        </svg>
      </div>
      <BoundingBoxes1 />
      <p className="col-1 font-['Helvetica:Bold',sans-serif] leading-[normal] ml-[5.72px] mt-[8.26px] not-italic relative row-1 text-[13px] text-white whitespace-nowrap">MRS</p>
    </div>
  );
}

function Symbol3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Symbol">
      <div className="col-1 h-[40px] ml-0 mt-0 relative row-1 w-[50px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Rectangle 2179" />
        </svg>
      </div>
      <RoundTableChart24Px1 />
    </div>
  );
}

function Symbol() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Symbol">
      <Symbol1 />
      <Symbol2 />
      <Symbol3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center pr-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Notification">
        <div className="absolute inset-[16.67%_18.96%_12.5%_20.83%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.63344 11.3333">
            <path d={svgPaths.p2d6e3b80} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">REMINDER (5)</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[328px]" data-name="CTA">
      <div className="bg-[#e21100] content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[8px] shrink-0 w-[158px]" data-name="Button/With Icon">
        <Frame />
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0 w-[158px]" data-name="Button/General">
        <div aria-hidden="true" className="absolute border-2 border-[#1f1b91] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-0.5px)] text-[#1f1b91] text-[15px] text-center top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">INFO LENGKAP</p>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative shrink-0 w-[360px]" data-name="Navbar">
      <PatientName />
      <Symbol />
      <Cta />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">FLOWCHART</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">CAT.</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">INVASIF</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">SUMMARY</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">CPPT</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">HANDOVER</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">TUGAS</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">RENCANA OPERASI</p>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 top-0 w-[360px]" data-name="Profile">
      <div className="h-[24px] relative shrink-0 w-[360px]" data-name="Status Bar">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
          <path clipRule="evenodd" d="M0 0V24H360V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Container" />
        </svg>
        <StatusBarContents />
      </div>
      <Navbar />
      <div className="content-stretch flex items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Tab">
        <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
          <Frame1 />
          <div className="bg-white h-[2px] shrink-0 w-full" data-name="active line" />
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
          <Frame2 />
          <div className="bg-white h-[2px] shrink-0 w-full" data-name="active line" />
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
          <Frame3 />
          <div className="bg-white h-[2px] shrink-0 w-full" data-name="active line" />
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
          <Frame4 />
          <div className="bg-[#00109c] h-[2px] shrink-0 w-full" data-name="active line" />
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
          <Frame5 />
          <div className="bg-[#f4f3f2] h-[2px] shrink-0 w-full" data-name="active line" />
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
          <Frame6 />
          <div className="bg-[#f4f3f2] h-[2px] shrink-0 w-full" data-name="active line" />
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
          <Frame7 />
          <div className="bg-[#f4f3f2] h-[2px] shrink-0 w-full" data-name="active line" />
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
          <Frame8 />
          <div className="bg-white h-[2px] shrink-0 w-full" data-name="active line" />
        </div>
      </div>
    </div>
  );
}

function Gcs() {
  return (
    <div className="absolute contents inset-[521px_16px_98px_274px]" data-name="gcs">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[567px_16px_98px_274px] leading-[18px] opacity-0 text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rendah
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[535px_74px_120px_274px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[521px_16px_148px_274px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        pivas iv1
      </p>
    </div>
  );
}

function Gcs1() {
  return (
    <div className="absolute contents inset-[521px_102px_80px_188px]" data-name="gcs">
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[567px_102px_80px_188px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Risiko</p>
        <p>Rendah</p>
      </div>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[535px_160px_120px_188px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[521px_148px_148px_188px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        VTE
      </p>
    </div>
  );
}

function Gcs2() {
  return (
    <div className="absolute contents inset-[521px_188px_80px_102px]" data-name="gcs">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[521px_188px_148px_102px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Braden
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[535px_246px_120px_102px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[567px_188px_80px_102px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Tidak</p>
        <p>Berisiko</p>
      </div>
    </div>
  );
}

function Gcs3() {
  return (
    <div className="absolute contents inset-[521px_274px_80px_16px]" data-name="gcs">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[521px_303px_148px_16px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jatuh
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[535px_332px_120px_16px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[567px_274px_80px_16px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Risiko</p>
        <p>Rendah</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute contents inset-[521px_16px_80px_16px]" data-name="5">
      <Gcs />
      <Gcs1 />
      <Gcs2 />
      <Gcs3 />
    </div>
  );
}

function Nyeri() {
  return (
    <div className="absolute contents inset-[393px_16px_194px_274px]" data-name="nyeri">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[453px_16px_194px_274px] leading-[18px] text-[#e21100] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Risiko Tinggi
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[421px_74px_234px_274px] leading-[28px] text-[#e21100] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        8
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[393px_16px_262px_274px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        nyeri I - wong ba..
      </p>
    </div>
  );
}

function Nyeri1() {
  return (
    <div className="absolute contents inset-[393px_102px_194px_188px]" data-name="nyeri">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[453px_102px_194px_188px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tidak Nyeri
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[421px_160px_234px_188px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[393px_102px_262px_188px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        nyeri A - wong ba..
      </p>
    </div>
  );
}

function Pupil() {
  return (
    <div className="absolute contents inset-[393px_188px_212px_102px]" data-name="pupil">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[393px_188px_262px_102px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        pupil kanan
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[421px_246px_234px_102px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[453px_188px_212px_102px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        mm
      </p>
    </div>
  );
}

function Pupil1() {
  return (
    <div className="absolute contents inset-[393px_274px_212px_16px]" data-name="pupil">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[393px_274px_276px_16px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        pupil kiri
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[421px_332px_234px_16px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[453px_274px_212px_16px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        mm
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[393px_16px_194px_16px]">
      <Nyeri />
      <Nyeri1 />
      <Pupil />
      <Pupil1 />
    </div>
  );
}

function Tb() {
  return (
    <div className="absolute contents inset-[293px_16px_326px_274px]" data-name="tb">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[293px_16px_376px_274px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        tb
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[307px_51px_348px_274px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        170
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[339px_16px_326px_274px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        cm
      </p>
    </div>
  );
}

function Bb() {
  return (
    <div className="absolute contents inset-[293px_102px_326px_188px]" data-name="bb">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[293px_102px_376px_188px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        bb
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[307px_149px_348px_188px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        56
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[339px_102px_326px_188px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        kg
      </p>
    </div>
  );
}

function Gcs4() {
  return (
    <div className="absolute contents inset-[296px_188px_314px_16px]" data-name="gcs">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[296px_319px_373px_16px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        GCS
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[311px_332px_344px_16px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[311px_298px_344px_50px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[311px_264px_344px_84px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        6
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[342px_335px_323px_16px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        E
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[342px_296px_323px_50px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        M
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[342px_266px_323px_84px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        V
      </p>
      <div className="absolute bg-[#f4f3f2] inset-[307px_201px_314px_111px] rounded-[8px]" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[343px_188px_322px_119px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Skor
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[311px_218px_344px_119px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        15
      </p>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute contents inset-[293px_16px_314px_16px]" data-name="3">
      <Tb />
      <Bb />
      <Gcs4 />
    </div>
  );
}

function Ews() {
  return (
    <div className="absolute contents inset-[187px_102px_414px_188px]" data-name="ews">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[187px_102px_482px_188px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        EWS
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[201px_160px_454px_188px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[233px_102px_414px_188px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tidak berisiko
      </p>
    </div>
  );
}

function Ews1() {
  return (
    <div className="absolute contents inset-[187px_188px_432px_102px]" data-name="ews">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[187px_188px_482px_102px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        acvpu
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[201px_244px_454px_102px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        C
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[233px_188px_432px_102px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Confusion
      </p>
    </div>
  );
}

function Spo() {
  return (
    <div className="absolute contents inset-[187px_274px_432px_16px]" data-name="spo2">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[187px_274px_482px_16px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        SpO2
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[233px_274px_432px_16px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        %
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[201px_321px_454px_16px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        98
      </p>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents inset-[187px_102px_414px_16px]" data-name="2">
      <Ews />
      <Ews1 />
      <Spo />
    </div>
  );
}

function T() {
  return (
    <div className="absolute contents inset-[99px_16px_520px_274px]" data-name="t">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[145px_16px_520px_274px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        oC
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[113px_47px_542px_274px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        36,7
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[99px_16px_570px_274px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        suhu
      </p>
    </div>
  );
}

function P() {
  return (
    <div className="absolute contents inset-[99px_102px_520px_188px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[145px_102px_520px_188px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        x/mnt
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[113px_149px_542px_188px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        18
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[99px_102px_570px_188px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        napas
      </p>
    </div>
  );
}

function N() {
  return (
    <div className="absolute contents inset-[99px_188px_520px_102px]" data-name="n">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[145px_188px_520px_102px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        x/mnt
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[113px_235px_542px_102px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        80
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[99px_188px_570px_102px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nadi
      </p>
    </div>
  );
}

function Td() {
  return (
    <div className="absolute contents inset-[99px_274px_520px_16px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[145px_274px_520px_16px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        mmhg
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[113px_279px_542px_16px] leading-[28px] text-[#171717] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        110/30
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[99px_274px_570px_16px] leading-[normal] text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        T. Darah
      </p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents inset-[99px_16px_520px_16px]" data-name="1">
      <T />
      <P />
      <N />
      <Td />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents inset-[23px_122px_617px_16px] whitespace-nowrap" data-name="title">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[48px_198px_617px_16px] leading-[18px] text-[#555] text-[15px] tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        per 14 Okt 2025, 08:23
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[23px_122px_638px_16px] leading-[22px] text-[#171717] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tanda Vital Pasien Terakhir
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[23px_122px_617px_16px]">
      <Title />
    </div>
  );
}

function ProcedureInfo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Procedure Info">
      <div className="bg-white col-1 h-[72px] ml-0 mt-0 rounded-[8px] row-1 shadow-[0px_3px_2px_0px_rgba(0,0,0,0.08)] w-[328px]" data-name="Procedure Background" />
      <p className="col-1 font-['Roboto:Bold',sans-serif] font-bold leading-[normal] ml-[16px] mt-[37px] relative row-1 text-[#171717] text-[15px] tracking-[-0.075px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        11 - 12 Mei 2020
      </p>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[228px] mt-[37px] relative row-1 text-[#171717] text-[15px] tracking-[-0.225px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        20:00 - 07:00
      </p>
      <p className="col-1 font-['Roboto:Bold',sans-serif] font-bold leading-[18px] ml-[16px] mt-[15px] relative row-1 text-[#1172f7] text-[15px] tracking-[-0.075px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Nasal & Endoscopy`}</p>
    </div>
  );
}

function ProcedureInfo1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Procedure Info">
      <div className="bg-white col-1 h-[72px] ml-0 mt-0 rounded-[8px] row-1 shadow-[0px_3px_2px_0px_rgba(0,0,0,0.08)] w-[328px]" data-name="Procedure Background" />
      <p className="col-1 font-['Roboto:Bold',sans-serif] font-bold leading-[normal] ml-[16px] mt-[37px] relative row-1 text-[#171717] text-[15px] tracking-[-0.075px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        11 Mei 2020
      </p>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[228.49px] mt-[37px] relative row-1 text-[#171717] text-[15px] text-right tracking-[-0.225px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        15:00 - 17:00
      </p>
      <p className="col-1 font-['Roboto:Bold',sans-serif] font-bold leading-[18px] ml-[16px] mt-[15px] relative row-1 text-[#1172f7] text-[15px] tracking-[-0.075px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        CT Scan
      </p>
    </div>
  );
}

function NextProcedureCard() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Next Procedure Card">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <p className="font-['Roboto:Bold',sans-serif] font-bold h-[28px] leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[270.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Prosedur Selanjutnya
        </p>
        <ProcedureInfo />
        <ProcedureInfo1 />
      </div>
    </div>
  );
}

function MedicationDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Medication Details">
      <p className="font-['Roboto:Bold',sans-serif] font-bold h-[28px] leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[270.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Obat
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] tracking-[-0.225px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        per 14 Okt 2025, 08:23
      </p>
    </div>
  );
}

function MedicationInfo() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Medication Info">
      <MedicationDetails />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Refresh Icon">
        <div className="absolute inset-[16.67%_16.67%_16.66%_16.67%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.0011">
            <path d={svgPaths.p36a4600} fill="var(--fill-0, #00109C)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LastFluidBalanceCard() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Last Fluid Balance Card">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <MedicationInfo />
        <div className="h-[32px] overflow-clip relative shrink-0 w-[328px]" data-name="atom/label/message">
          <div className="absolute bg-[#e6e6e6] inset-0 rounded-[4px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.16)]" />
          <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[7px_16px] leading-[18px] text-[#76767c] text-[14px] text-center tracking-[-0.21px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Belum ada obat rutin yang diresepkan
          </p>
        </div>
      </div>
    </div>
  );
}

function FluidBalanceDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Fluid Balance Details">
      <p className="font-['Roboto:Bold',sans-serif] font-bold h-[28px] leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[270.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Balance Cairan Terakhir
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] tracking-[-0.225px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        per 14 Okt 2025, 08:23
      </p>
    </div>
  );
}

function FluidBalanceInfo() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Fluid Balance Info">
      <FluidBalanceDetails />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Refresh Icon">
        <div className="absolute inset-[16.67%_16.67%_16.66%_16.67%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.0011">
            <path d={svgPaths.p36a4600} fill="var(--fill-0, #00109C)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IntakeInfo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] place-items-start relative shrink-0 whitespace-nowrap" data-name="Intake Info">
      <p className="col-1 font-['Roboto:Bold',sans-serif] font-bold ml-0 mt-[2px] relative row-1 text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Total Intake (mL)
      </p>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal ml-[291.26px] mt-0 relative row-1 text-[#171717] text-[15px] text-right tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.200
      </p>
    </div>
  );
}

function OutputInfo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] place-items-start relative shrink-0 whitespace-nowrap" data-name="Output Info">
      <p className="col-1 font-['Roboto:Bold',sans-serif] font-bold ml-0 mt-[2px] relative row-1 text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Total Output (mL)
      </p>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal ml-[303.18px] mt-0 relative row-1 text-[#171717] text-[15px] text-right tracking-[-0.225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        600
      </p>
    </div>
  );
}

function BalanceInfo() {
  return (
    <div className="font-['Roboto:Bold',sans-serif] font-bold grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] place-items-start relative shrink-0 whitespace-nowrap" data-name="Balance Info">
      <p className="col-1 ml-0 mt-[11px] relative row-1 text-[#afaac2] text-[12px] tracking-[0.6px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        Total Balance (mL)
      </p>
      <p className="col-1 ml-[273.59px] mt-0 relative row-1 text-[#e21100] text-[24px] text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        +600
      </p>
    </div>
  );
}

function FluidBalanceData() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[328.59px]" data-name="Fluid Balance Data">
      <IntakeInfo />
      <OutputInfo />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328.59 1">
            <line id="Line 2466" opacity="0.5" stroke="var(--stroke-0, #CDD2DD)" x2="328.59" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <BalanceInfo />
    </div>
  );
}

function LastFluidBalanceActions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Last Fluid Balance Actions">
      <div className="bg-[#1f1b91] h-[32px] relative rounded-[8px] shrink-0 w-[158px]" data-name="Button/General">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-0.5px)] text-[15px] text-center text-white top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">TAMBAH DATA</p>
        </div>
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0 w-[158px]" data-name="Button/General">
        <div aria-hidden="true" className="absolute border-2 border-[#1f1b91] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-0.5px)] text-[#00109c] text-[15px] text-center top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">SELENGKAPNYA</p>
        </div>
      </div>
    </div>
  );
}

function LastFluidBalanceCard1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Last Fluid Balance Card">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <FluidBalanceInfo />
        <FluidBalanceData />
        <LastFluidBalanceActions />
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#171717] text-[16px]">Alat Invasif</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[30.39%_34.83%_4.07%_5%]" data-name="Group">
      <div className="absolute inset-[-9.54%_-24.24%_-28.61%_-17.31%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.8791 43.4598">
          <g filter="url(#filter0_d_1_408)" id="Group">
            <path d={svgPaths.p20e57c80} fill="var(--fill-0, white)" id="Subtraction 634" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="43.4598" id="filter0_d_1_408" width="40.8791" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="1" dy="3" />
              <feGaussianBlur stdDeviation="3" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_408" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_408" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Ellipse() {
  return (
    <div className="absolute inset-[23.49%_38.89%_69.62%_54.11%]" data-name="Ellipse">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.36177 3.30981">
        <g id="Ellipse">
          <g id="Ellipse 2786" />
          <path d={svgPaths.p34ab800} fill="var(--fill-0, #C0C1C6)" id="Path 640290" />
        </g>
      </svg>
    </div>
  );
}

function DocumentDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Document Details">
      <p className="font-['Roboto:Bold',sans-serif] font-bold h-[28px] leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[270.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dokumen Terakhir
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] tracking-[-0.225px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        per 14 Okt 2025, 08:23
      </p>
    </div>
  );
}

function DocumentInfo() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Document Info">
      <DocumentDetails />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Refresh Icon">
        <div className="absolute inset-[16.67%_16.67%_16.66%_16.67%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16.0011">
            <path d={svgPaths.p36a4600} fill="var(--fill-0, #00109C)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Obat() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[138px] place-items-start relative row-1" data-name="obat">
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[16px] ml-[48px] mt-[23px] relative row-1 text-[#555] text-[13px] tracking-[-0.195px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        dr. Aloysius Sutedja
      </p>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[16px] ml-[169px] mt-[23px] relative row-1 text-[#555] text-[13px] tracking-[-0.195px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        23 Ags 2020, 06:48
      </p>
      <p className="col-1 font-['Roboto:Bold',sans-serif] font-bold leading-[19px] ml-[48px] mt-0 relative row-1 text-[#171717] text-[15px] tracking-[-0.075px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Catatan Pengobatan
      </p>
      <div className="col-1 ml-[161px] mt-[30px] relative row-1 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CDD2DD)" id="Ellipse 2796" r="2" />
        </svg>
      </div>
      <div className="col-1 ml-0 mt-[5px] overflow-clip relative row-1 size-[32px]" data-name="atom/icon/docs">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="atoms/icons/docs/specialist">
            <path d={svgPaths.pc4a980} fill="var(--fill-0, #DEE7F8)" id="PH" />
            <path d={svgPaths.p3bc78880} id="Path 640359" stroke="var(--stroke-0, #1172F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
            <path d={svgPaths.p36866080} id="Path 640360" stroke="var(--stroke-0, #1172F7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
            <path d={svgPaths.pc4fa700} fill="var(--fill-0, #1172F7)" id="Rectangle 13163" />
            <circle cx="22.3441" cy="14.2594" fill="var(--fill-0, white)" id="Ellipse 2795" r="1.65627" stroke="var(--stroke-0, #1172F7)" strokeWidth="1.75" />
            <path d={svgPaths.p1f53b80} fill="var(--fill-0, white)" id="Path 640684" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Balance() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[69px] place-items-start relative row-1" data-name="balance">
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[16px] ml-[48px] mt-[23px] relative row-1 text-[#555] text-[13px] tracking-[-0.195px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sor Sembiring
      </p>
      <p className="col-1 font-['Roboto:Bold',sans-serif] font-bold leading-[19px] ml-[48px] mt-0 relative row-1 text-[#171717] text-[15px] tracking-[-0.075px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Balance Cairan
      </p>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[16px] ml-[139px] mt-[23px] relative row-1 text-[#555] text-[13px] tracking-[-0.195px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        23 Ags 2020, 08:54
      </p>
      <div className="col-1 ml-[131px] mt-[30px] relative row-1 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CDD2DD)" id="Ellipse 2796" r="2" />
        </svg>
      </div>
      <div className="col-1 ml-0 mt-[5px] overflow-clip relative row-1 size-[32px]" data-name="atom/icon/docs">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="atoms/icons/docs/nurse">
            <path d={svgPaths.pc4a980} fill="var(--fill-0, #DEE7F8)" id="PH" />
            <path d={svgPaths.p2213dc00} fill="var(--fill-0, white)" id="Path 35427" stroke="var(--stroke-0, #1172F7)" strokeWidth="1.5" />
            <path d={svgPaths.p3bacc4f0} fill="var(--fill-0, #1172F7)" id="Path 35428" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Obs() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Obs">
      <p className="col-1 font-['Roboto:Bold',sans-serif] font-bold leading-[19px] ml-[48px] mt-0 relative row-1 text-[#171717] text-[15px] tracking-[-0.075px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Observasi Rutin
      </p>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[16px] ml-[48px] mt-[23px] relative row-1 text-[#555] text-[13px] tracking-[-0.195px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Widya Karina
      </p>
      <p className="col-1 font-['Roboto:Regular',sans-serif] font-normal leading-[16px] ml-[133px] mt-[23px] relative row-1 text-[#555] text-[13px] tracking-[-0.195px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        23 Ags 2020, 09:00
      </p>
      <div className="col-1 ml-[125px] mt-[30px] relative row-1 size-[4px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CDD2DD)" id="Ellipse 2796" r="2" />
        </svg>
      </div>
      <div className="col-1 ml-0 mt-[5px] overflow-clip relative row-1 size-[32px]" data-name="atom/icon/docs">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="atoms/icons/docs/nurse">
            <path d={svgPaths.pc4a980} fill="var(--fill-0, #DEE7F8)" id="PH" />
            <path d={svgPaths.p2213dc00} fill="var(--fill-0, white)" id="Path 35427" stroke="var(--stroke-0, #1172F7)" strokeWidth="1.5" />
            <path d={svgPaths.p3bacc4f0} fill="var(--fill-0, #1172F7)" id="Path 35428" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Stack() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="stack">
      <Obat />
      <Balance />
      <Obs />
      <div className="col-1 h-0 ml-0 mt-[124px] relative row-1 w-[344px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <line id="Line 3336" opacity="0.5" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" x1="0.5" x2="343.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-0 ml-0 mt-[55px] relative row-1 w-[344px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <line id="Line 3336" opacity="0.5" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" x1="0.5" x2="343.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LastDocumentCard() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Last Document Card">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <DocumentInfo />
        <Stack />
        <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Button/General">
          <div aria-hidden="true" className="absolute border-2 border-[#1f1b91] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-0.5px)] text-[#00109c] text-[15px] text-center top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">SELENGKAPNYA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrganismCardSummaryOCardSummaryTestresults() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f0f2f5] content-stretch flex flex-col gap-[16px] h-[558px] items-center justify-end left-1/2 overflow-clip py-[16px] rounded-[8px] shadow-[0px_2px_4px_0px_rgba(29,37,103,0.08)] top-[240px] w-[360px]" data-name="organism/card/summary/o-card-summary-testresults">
      <div className="h-[683px] overflow-clip relative shrink-0 w-[360px]" data-name="TTV">
        <div className="absolute bg-white inset-0 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.16)]" data-name="BG" />
        <Component3 />
        <Group2 />
        <Component2 />
        <Component1 />
        <Component />
        <Group1 />
      </div>
      <NextProcedureCard />
      <LastFluidBalanceCard />
      <LastFluidBalanceCard1 />
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative shrink-0 w-[360px]" data-name="Invasive Tools Summary Card">
        <Title1 />
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="molecule/empty-state/inline/m-emptystate-inline-nodata">
          <div className="overflow-clip relative shrink-0 size-[48px]" data-name="atom/image/illustration/a-image-illustration-nodata">
            <div className="absolute inset-[5%]" data-name="Ellipse">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.2 43.1992">
                <path d={svgPaths.p1a67bf00} fill="var(--fill-0, #F0F1F7)" id="Ellipse" stroke="var(--stroke-0, white)" strokeWidth="2" />
              </svg>
            </div>
            <Group />
            <div className="absolute flex inset-[80.43%_78.9%_6.97%_8.38%] items-center justify-center">
              <div className="flex-none h-[13.07px] rotate-42 w-[15.619px]">
                <div className="relative size-full" data-name="Path_638291">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6858 3.92082">
                    <path d={svgPaths.p1b2ed100} fill="var(--fill-0, #C0C1C6)" id="Path_638291" />
                  </svg>
                </div>
              </div>
            </div>
            <Ellipse />
            <div className="absolute inset-[21.28%_17.81%_66.28%_69.75%]" data-name="Ellipse">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.9706 5.97049">
                <path d={svgPaths.p18ea7100} fill="var(--fill-0, #C0C1C6)" id="Ellipse" />
              </svg>
            </div>
            <div className="absolute inset-[0_23%_85.5%_62.49%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.96489 6.96169">
                <path d={svgPaths.p2357300} fill="var(--fill-0, #C0C1C6)" id="Union" />
              </svg>
            </div>
          </div>
          <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.2px] whitespace-nowrap">Belum ada alat invasif yang terpasang</p>
        </div>
        <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">Lihat Detail</p>
        </div>
      </div>
      <LastDocumentCard />
    </div>
  );
}

export default function Summary() {
  return (
    <div className="bg-white relative size-full" data-name="Summary">
      <Profile />
      <OrganismCardSummaryOCardSummaryTestresults />
    </div>
  );
}
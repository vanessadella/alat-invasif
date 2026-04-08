import svgPaths from "./svg-ri0j9808kn";

function Wifi() {
  return (
    <div className="absolute bottom-1/4 left-[6.78%] right-[79.66%] top-1/4" data-name="wifi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="wifi">
          <mask height="12" id="mask0_4_7860" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="16" x="0" y="0">
            <path clipRule="evenodd" d="M0 0L8 12L16 0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="wifi mask" />
          </mask>
          <g mask="url(#mask0_4_7860)">
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
          <mask height="12" id="mask0_4_7853" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="12" x="0" y="0">
            <path clipRule="evenodd" d="M12 12V0L0 12H12Z" fill="var(--fill-0, white)" fillRule="evenodd" id="reception mask" />
          </mask>
          <g mask="url(#mask0_4_7853)">
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
          <mask height="13" id="mask0_4_7875" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="8" x="0" y="0">
            <path clipRule="evenodd" d={svgPaths.p2f7e0200} fill="var(--fill-0, white)" fillRule="evenodd" id="battery mask" />
          </mask>
          <g mask="url(#mask0_4_7875)">
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
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">SUMMARY</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">CPPT</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">HANDOVER</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">TUGAS</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">RENCANA OPERASI</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
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
        <div className="bg-[#00109c] h-[2px] shrink-0 w-full" data-name="active line" />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
        <Frame4 />
        <div className="bg-[#f4f3f2] h-[2px] shrink-0 w-full" data-name="active line" />
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
        <div className="bg-white h-[2px] shrink-0 w-full" data-name="active line" />
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
      <Tab />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#111827] text-[16px]">Alat Invasif</p>
      <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-center leading-[20px] not-italic relative shrink-0 text-[#111827] text-[14px] text-center whitespace-nowrap" data-name="Showing-Row">
        <p className="relative shrink-0">Menampilkan</p>
        <p className="relative shrink-0">4 item</p>
      </div>
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_filter_alt">
          <div className="absolute inset-[15.14%_14.43%_15.19%_14.45%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.224 13.934">
              <path d={svgPaths.p1a2f0e00} fill="var(--fill-0, #111827)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="bg-[#00277f] content-stretch flex items-center justify-center min-h-[20px] min-w-[20px] px-[6px] relative rounded-[9999px] shrink-0" data-name="Badge">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">2</p>
        </div>
      </div>
    </div>
  );
}

function Count() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Count">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">ETT</p>
    </div>
  );
}

function StatusContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Status Container">
      <div className="bg-[#047857] content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] px-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">Berhasil</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Status Icon">
        <div className="absolute inset-[34.94%_25.35%_36.08%_25.3%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.87038 5.79671">
            <path d={svgPaths.pe295300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Count />
      <StatusContainer />
    </div>
  );
}

function Count1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Count">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_schedule">
        <div className="absolute inset-[6.8%_6.8%_6.86%_6.86%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8138 13.8138">
            <path d={svgPaths.p2762e180} fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Hari ke-1</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Non Kinking, 5</p>
      <Count1 />
    </div>
  );
}

function Count2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Count">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">IV</p>
      <div className="bg-[#f5f5f4] content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] px-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[#111827] text-[10px] text-center whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function StatusContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Status Container">
      <div className="bg-[#047857] content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] px-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">Berhasil</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Status Icon">
        <div className="absolute inset-[34.94%_25.35%_36.08%_25.3%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.87038 5.79671">
            <path d={svgPaths.pe295300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Count2 />
      <StatusContainer1 />
    </div>
  );
}

function Count3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Count">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_schedule">
        <div className="absolute inset-[6.8%_6.8%_6.86%_6.86%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8138 13.8138">
            <path d={svgPaths.p2762e180} fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Hari ke-2</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Perifer Kiri, Metatarsal, 18</p>
      <Count3 />
    </div>
  );
}

function Count4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Count">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">NGT / OGT</p>
    </div>
  );
}

function StatusContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Status Container">
      <div className="bg-[#047857] content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] px-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">Berhasil</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Status Icon">
        <div className="absolute inset-[34.94%_25.35%_36.08%_25.3%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.87038 5.79671">
            <path d={svgPaths.pe295300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Count4 />
      <StatusContainer2 />
    </div>
  );
}

function Count5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Count">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_schedule">
        <div className="absolute inset-[6.8%_6.8%_6.86%_6.86%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8138 13.8138">
            <path d={svgPaths.p2762e180} fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Hari ke-2</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Mulut / Oral, 18</p>
      <Count5 />
    </div>
  );
}

function Count6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Count">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">Kateter Urine</p>
    </div>
  );
}

function StatusContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Status Container">
      <div className="bg-[#047857] content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] px-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">Berhasil</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Status Icon">
        <div className="absolute inset-[34.94%_25.35%_36.08%_25.3%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.87038 5.79671">
            <path d={svgPaths.pe295300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Count6 />
      <StatusContainer3 />
    </div>
  );
}

function Count7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Count">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_schedule">
        <div className="absolute inset-[6.8%_6.8%_6.86%_6.86%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8138 13.8138">
            <path d={svgPaths.p2762e180} fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Hari ke-2</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Silikon, 18</p>
      <Count7 />
    </div>
  );
}

function GroupList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Group list">
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 2">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header1 />
          <Container />
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 4">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header2 />
          <Container1 />
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 5">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header3 />
          <Container2 />
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 6">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header4 />
          <Container3 />
        </div>
      </div>
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
    <div className="-translate-x-1/2 absolute bg-[#f0f2f5] content-stretch flex flex-col gap-[16px] h-[1374px] items-center left-1/2 overflow-clip py-[16px] rounded-[8px] shadow-[0px_2px_4px_0px_rgba(29,37,103,0.08)] top-[240px] w-[360px]" data-name="organism/card/summary/o-card-summary-testresults">
      <div className="relative shrink-0 w-full" data-name="Add Invasive Detail">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative w-full">
          <Header />
          <div className="bg-[#00277f] relative rounded-[8px] shrink-0 w-full" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#00277f] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Tambah Invasif</p>
              </div>
            </div>
          </div>
          <GroupList />
        </div>
      </div>
      <LastDocumentCard />
    </div>
  );
}

export default function FillCards() {
  return (
    <div className="bg-white relative size-full" data-name="Fill Cards">
      <Profile />
      <OrganismCardSummaryOCardSummaryTestresults />
    </div>
  );
}
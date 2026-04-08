import svgPaths from "./svg-df463mypz0";

function Wifi() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16px]" data-name="wifi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g clipPath="url(#clip0_59_2778)" id="wifi">
          <mask height="12" id="mask0_59_2778" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="16" x="0" y="0">
            <path clipRule="evenodd" d="M0 0L8 12L16 0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="wifi mask" />
          </mask>
          <g mask="url(#mask0_59_2778)">
            <path clipRule="evenodd" d={svgPaths.p39e1600} fill="var(--fill-0, #171717)" fillRule="evenodd" id="Shape" />
            <path clipRule="evenodd" d={svgPaths.p19081100} fill="var(--fill-0, #171717)" fillRule="evenodd" id="Shape_2" />
            <path clipRule="evenodd" d={svgPaths.p11728070} fill="var(--fill-0, #171717)" fillRule="evenodd" id="Shape_3" />
            <circle cx="8" cy="12" fill="var(--fill-0, #171717)" id="Oval" r="3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_59_2778">
            <rect fill="white" height="12" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Reception() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="reception">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_59_2767)" id="reception">
          <mask height="12" id="mask0_59_2767" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="12" x="0" y="0">
            <path clipRule="evenodd" d="M12 12V0L0 12H12Z" fill="var(--fill-0, white)" fillRule="evenodd" id="reception mask" />
          </mask>
          <g mask="url(#mask0_59_2767)">
            <path clipRule="evenodd" d="M9 0V12H12V0H9Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path" />
            <path clipRule="evenodd" d="M6 0V12H9V0H6Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_2" />
            <path clipRule="evenodd" d="M3 0V12H6V0H3Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_3" />
            <path clipRule="evenodd" d="M0 0V12H3V0H0Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_4" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_59_2767">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[8px]" data-name="battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 13">
        <g clipPath="url(#clip0_59_2795)" id="battery">
          <mask height="13" id="mask0_59_2795" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="8" x="0" y="0">
            <path clipRule="evenodd" d={svgPaths.p2f7e0200} fill="var(--fill-0, white)" fillRule="evenodd" id="battery mask" />
          </mask>
          <g mask="url(#mask0_59_2795)">
            <path clipRule="evenodd" d="M0 10V13H8V10H0Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path" />
            <path clipRule="evenodd" d="M0 7V10H8V7H0Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_2" />
            <path clipRule="evenodd" d="M0 4V7H8V4H0Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_3" />
            <path clipRule="evenodd" d="M0 1V4H8V1H0Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_4" />
            <path clipRule="evenodd" d="M2 0V1H6V0H2Z" fill="var(--fill-0, #171717)" fillRule="evenodd" id="Rectangle-path_5" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_59_2795">
            <rect fill="white" height="13" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="h-[15px] opacity-90 overflow-clip relative shrink-0 w-[33px]" data-name="time">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#171717] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:30
      </p>
    </div>
  );
}

function StatusBarContents() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center justify-end px-[8px] py-[4px] right-0 top-0" data-name="status bar contents">
      <Wifi />
      <Reception />
      <Battery />
      <Time />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Status Bar">
      <div className="h-[24px] relative shrink-0 w-full" data-name="Status Bar">
        <StatusBarContents />
      </div>
    </div>
  );
}

function SubTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Sub-title">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ganendra Bima
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Info">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.334 13.334">
            <path d={svgPaths.p81f5f00} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[52px] items-start justify-center min-h-px min-w-px relative" data-name="Title">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[18px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alat Invasif
      </p>
      <SubTitle />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[360px]" data-name="Header">
      <StatusBar />
      <div className="bg-[#262298] content-stretch flex gap-[16px] items-center px-[16px] py-[4px] relative shrink-0 w-[360px]" data-name="Header">
        <div className="relative shrink-0 size-[24px]" data-name="System/Chevron">
          <div className="absolute flex inset-[11.46%_32.29%_11.46%_23.96%] items-center justify-center">
            <div className="-rotate-90 flex-none h-[10.5px] w-[18.5px]">
              <div className="relative size-full" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 10.5">
                  <path clipRule="evenodd" d={svgPaths.p217fa3f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Title />
      </div>
    </div>
  );
}

function StatusCount() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px overflow-clip relative" data-name="Status Count">
      <div className="bg-[#d7e3ea] content-stretch flex items-center justify-center min-h-[24px] min-w-[24px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#166886] text-[14px] text-center whitespace-nowrap">
          <span className="leading-[20px]">{`1 `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Terpasang</span>
        </p>
      </div>
      <div className="bg-[#f5f5f4] content-stretch flex items-center justify-center min-h-[24px] min-w-[24px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] text-center whitespace-nowrap">
          <span className="leading-[20px]">{`1 `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Dilepas</span>
        </p>
      </div>
      <div className="bg-[#fffbeb] content-stretch flex items-center justify-center min-h-[24px] min-w-[24px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#b45309] text-[14px] text-center whitespace-nowrap">
          <span className="leading-[20px]">{`1 `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Prolong</span>
        </p>
      </div>
      <div className="bg-[#ecfdf5] content-stretch flex items-center justify-center min-h-[24px] min-w-[24px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#047857] text-[14px] text-center whitespace-nowrap">
          <span className="leading-[20px]">{`17 `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Berhasil</span>
        </p>
      </div>
      <div className="bg-[#fff1f2] content-stretch flex items-center justify-center min-h-[24px] min-w-[24px] px-[8px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#be123c] text-[14px] text-center whitespace-nowrap">
          <span className="leading-[20px]">{`3 `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">Tidak Berhasil</span>
        </p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <StatusCount />
      <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_filter_alt">
          <div className="absolute inset-[15.14%_14.43%_15.19%_14.45%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.224 13.934">
              <path d={svgPaths.p1a2f0e00} fill="var(--fill-0, #111827)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
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

function Header2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">ETT</p>
      <StatusContainer />
    </div>
  );
}

function Count() {
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
      <Count />
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

function Header3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">IV 2</p>
      <StatusContainer1 />
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Hari ke-2</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Perifer Kiri, Metatarsal, 18</p>
      <Count1 />
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

function Header4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">NGT / OGT</p>
      <StatusContainer2 />
    </div>
  );
}

function Count2() {
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
      <Count2 />
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

function Header5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">Kateter Urine</p>
      <StatusContainer3 />
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

function Container3() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Silikon, 18</p>
      <Count3 />
    </div>
  );
}

function StatusContainer4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Status Container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="LOB">
        <div className="bg-[#0369a1] content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] px-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">ICU</p>
        </div>
      </div>
      <div className="bg-[#e11d48] content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] px-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">Tidak Berhasil</p>
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

function Header6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">IV 1</p>
      <StatusContainer4 />
    </div>
  );
}

function Count4() {
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

function Container4() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Perifer Kiri, Vena Mediana cubiti sinistra, 18</p>
      <Count4 />
    </div>
  );
}

function StatusContainer5() {
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

function Header7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">CVC</p>
      <StatusContainer5 />
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

function Container5() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Vena Jugularis Sinistra, 5</p>
      <Count5 />
    </div>
  );
}

function StatusContainer6() {
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

function Header8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">Chemoport</p>
      <StatusContainer6 />
    </div>
  );
}

function Count6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Count">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_schedule">
        <div className="absolute inset-[6.8%_6.8%_6.86%_6.86%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8138 13.8138">
            <path d={svgPaths.p2762e180} fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Hari ke-8</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Vena Jugularis Sinistra, 5, 19</p>
      <Count6 />
    </div>
  );
}

function StatusContainer7() {
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

function Header9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">Vaskular Chateter</p>
      <StatusContainer7 />
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

function Container7() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Vena Jugularis Dextra, 5</p>
      <Count7 />
    </div>
  );
}

function StatusContainer8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Status Container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="LOB">
        <div className="bg-[#ddc733] content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] px-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[10px] text-black text-center whitespace-nowrap">SC</p>
        </div>
      </div>
      <div className="bg-[#e11d48] content-stretch flex items-center justify-center min-h-[16px] min-w-[16px] px-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">Tidak Berhasil</p>
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

function Header10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">PICC</p>
      <StatusContainer8 />
    </div>
  );
}

function Count8() {
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

function Container8() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Vena brakialis, 5</p>
      <Count8 />
    </div>
  );
}

function StatusContainer9() {
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

function Header11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">Pigtail Chateter</p>
      <StatusContainer9 />
    </div>
  );
}

function Count9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Count">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon_schedule">
        <div className="absolute inset-[6.8%_6.8%_6.86%_6.86%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8138 13.8138">
            <path d={svgPaths.p2762e180} fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Hari ke-7</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">Prosesus xifoideus, 5</p>
      <Count9 />
    </div>
  );
}

function GroupList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Group list">
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 2">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header2 />
          <Container />
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 4">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header3 />
          <Container1 />
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 5">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header4 />
          <Container2 />
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 6">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header5 />
          <Container3 />
        </div>
      </div>
      <div className="bg-[#fef2f2] relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 12">
        <div aria-hidden="true" className="absolute border border-[#e11d48] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header6 />
          <Container4 />
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 8">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header7 />
          <Container5 />
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 9">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header8 />
          <Container6 />
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 10">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header9 />
          <Container7 />
        </div>
      </div>
      <div className="bg-[#fef2f2] relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 3">
        <div aria-hidden="true" className="absolute border border-[#e11d48] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header10 />
          <Container8 />
        </div>
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Invasive Card - Option 11">
        <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <Header11 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Paging() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Paging">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Pagination">
        <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[36px] min-w-[36px] p-[8px] relative rounded-[4px] shrink-0 size-[36px]" data-name=".Pagination-Nav">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_west">
            <div className="absolute inset-[20.99%_6.86%_20.94%_8.58%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9113 11.6144">
                <path d={svgPaths.p26f71f80} fill="var(--fill-0, #D6D3D1)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f4] content-stretch flex flex-col items-center justify-center min-w-[36px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[36px]" data-name=".Pagination-Link">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#111827] text-[14px] text-center w-full">1</p>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center justify-center min-w-[36px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[36px]" data-name=".Pagination-Link">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#111827] text-[14px] text-center w-full">2</p>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center justify-center min-h-[36px] min-w-[36px] p-[8px] relative rounded-[4px] shrink-0 size-[36px]" data-name=".Pagination-Nav">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon_east">
            <div className="absolute inset-[20.99%_8.52%_20.94%_6.86%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9229 11.6144">
                <path d={svgPaths.p10e2fc00} fill="var(--fill-0, #111827)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListInvasif() {
  return (
    <div className="bg-white relative size-full" data-name="List Invasif">
      <Header />
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 p-[16px] top-[84px] w-[360px]" data-name="Add Invasive Detail">
        <Header1 />
        <div className="bg-[#00277f] relative rounded-[8px] shrink-0 w-full" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[#00277f] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Tambah Invasif</p>
            </div>
          </div>
        </div>
        <GroupList />
        <Paging />
      </div>
    </div>
  );
}
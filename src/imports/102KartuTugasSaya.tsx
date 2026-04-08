import svgPaths from "./svg-o2d7zzlxsb";

function Tugas() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Tugas">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="System/Task Nurse">
        <div className="absolute inset-[8.33%_8.33%_10.37%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.5122">
            <g id="Icon">
              <path d={svgPaths.p1bc44aa0} fill="var(--fill-0, #00109C)" />
              <path d={svgPaths.pee7ba00} fill="var(--fill-0, #00109C)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#00109c] text-[12px] text-center w-[56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tugas
      </p>
    </div>
  );
}

function DPasien() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="D.Pasien">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="System/Patient List">
        <div className="absolute inset-[12.5%_0_12.5%_4.17%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
            <g id="Icon">
              <path d={svgPaths.pe9f6b00} fill="var(--fill-0, #76767C)" />
              <path d={svgPaths.p2bd3a980} fill="var(--fill-0, #76767C)" />
              <path d={svgPaths.p33a75b80} fill="var(--fill-0, #76767C)" />
              <path d={svgPaths.pef63800} fill="var(--fill-0, #76767C)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#76767c] text-[12px] text-center w-[56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        D.Pasien
      </p>
    </div>
  );
}

function Medication() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Medication">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Medical/Consumables">
        <div className="absolute inset-[12.5%_8.33%_9.3%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.7682">
            <path d={svgPaths.p168b3700} fill="var(--fill-0, #76767C)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#76767c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Obat Pasien
      </p>
    </div>
  );
}

function Handover() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Handover">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="System/Handover">
        <div className="absolute inset-[4.17%_4.17%_13.79%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.6904">
            <path d={svgPaths.p62c1000} fill="var(--fill-0, #76767C)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#76767c] text-[12px] text-center w-[56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Handover
      </p>
    </div>
  );
}

function Profil() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Profil">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="System/Profile">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
              <path d={svgPaths.p31eafb80} fill="var(--stroke-0, #76767C)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#76767c] text-[12px] text-center w-[56px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Profil
      </p>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Action Button">
      <Tugas />
      <DPasien />
      <Medication />
      <Handover />
      <Profil />
    </div>
  );
}

function Wifi() {
  return (
    <div className="absolute bottom-1/4 left-[6.78%] right-[79.66%] top-1/4" data-name="wifi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="wifi">
          <mask height="12" id="mask0_18_14098" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="16" x="0" y="0">
            <path clipRule="evenodd" d="M0 0L8 12L16 0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="wifi mask" />
          </mask>
          <g mask="url(#mask0_18_14098)">
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
          <mask height="12" id="mask0_18_14151" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="12" x="0" y="0">
            <path clipRule="evenodd" d="M12 12V0L0 12H12Z" fill="var(--fill-0, white)" fillRule="evenodd" id="reception mask" />
          </mask>
          <g mask="url(#mask0_18_14151)">
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
          <mask height="13" id="mask0_18_14170" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="8" x="0" y="0">
            <path clipRule="evenodd" d={svgPaths.p2f7e0200} fill="var(--fill-0, white)" fillRule="evenodd" id="battery mask" />
          </mask>
          <g mask="url(#mask0_18_14170)">
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

function Frame16() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#171717] text-[24px] w-[156px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        10 Nov
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#555] text-[14px] w-[156px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pasien Saya
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120px]" data-name="Icon">
      <div className="absolute inset-[0_80%_0_0]" data-name="System/Search">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9997 19.9997">
            <path d={svgPaths.p22163800} fill="var(--fill-0, #AFAAC3)" id="Union" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0_40%]" data-name="System/Filter">
        <div className="absolute inset-[8.33%_13.26%_8.33%_12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8166 20">
            <path d={svgPaths.p32d62340} id="Icon" stroke="var(--stroke-0, #AFAAC3)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0_0_0_80%]" data-name="System/Notification">
        <div className="absolute inset-[12.5%_17.71%_12.5%_16.67%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7501 18">
            <g id="Icon">
              <path d={svgPaths.p28e8a980} fill="var(--fill-0, #AFAAC2)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-white content-stretch flex gap-[60px] items-center pl-[16px] pr-[8px] py-[2px] relative shrink-0" data-name="Menu">
      <Frame16 />
      <Icon />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">PASIEN BARU</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">TUGAS SAYA</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] opacity-40 relative shrink-0 text-[#00109c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">SUDAH LAKUKAN</p>
      </div>
    </div>
  );
}

function TabMenu() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Tab Menu">
      <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0 w-[127px]" data-name="Tabbing/General/">
        <Frame17 />
        <div className="bg-white h-[2px] shrink-0 w-full" data-name="active line" />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
        <Frame18 />
        <div className="bg-[#00109c] h-[2px] shrink-0 w-full" data-name="active line" />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center pt-[16px] relative shrink-0" data-name="Tabbing/General/">
        <Frame19 />
        <div className="bg-white h-[2px] shrink-0 w-full" data-name="active line" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[360px]" data-name="Header">
      <div className="content-stretch flex flex-col h-[80px] items-start relative shrink-0 w-full" data-name="Main Header">
        <div className="h-[24px] relative shrink-0 w-[360px]" data-name="Status Bar">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
            <path clipRule="evenodd" d="M0 0V24H360V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Container" />
          </svg>
          <StatusBarContents />
        </div>
        <Menu />
      </div>
      <TabMenu />
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-1/2 top-1/2 w-[296px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="System/Star">
        <div className="absolute inset-[8.33%_8.33%_11.92%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.9494">
            <path d={svgPaths.p14f480} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">5 CATATAN PENTING</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-center justify-center left-1/2 top-1/2 w-[296px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icPill_24">
        <div className="absolute inset-[12.5%]" data-name="pill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p15ada050} fill="var(--fill-0, white)" id="pill" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">RENCANA PEMBERIAN OBAT</p>
      </div>
    </div>
  );
}

function ExtraButton() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="extra button">
      <div className="bg-[#319c9c] h-[40px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Button/With Icon">
        <Frame14 />
      </div>
      <div className="bg-[#0076b3] h-[40px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Button/With Icon">
        <Frame15 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Female">
        <div className="absolute bottom-[12.5%] left-1/4 right-[26.79%] top-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.71429 12">
            <path d={svgPaths.p5500470} fill="var(--fill-0, #E51B94)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        June Anabelle Alexander
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rencana Pulang 10 Des
      </p>
      <Frame20 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        852-2
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame21 />
    </div>
  );
}

function Frame() {
  return <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame" />;
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Female">
        <div className="absolute bottom-[12.5%] left-1/4 right-[26.79%] top-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.71429 12">
            <path d={svgPaths.p5500470} fill="var(--fill-0, #E51B94)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        June Annabelle Alexander
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pasien Baru
      </p>
      <Frame23 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        850-2
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame22 />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#555] text-[15px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0/4
      </p>
    </div>
  );
}

function Frame1() {
  return <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame" />;
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-[#eae0fc] h-[84px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame37 />
        <Frame />
      </div>
      <div className="bg-[#eae0fc] h-[84px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame38 />
        <Frame1 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="System/Calendar">
        <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6656">
            <g id="Icon">
              <path d={svgPaths.p1f4c13c0} fill="var(--fill-0, #AFAAC3)" />
              <path d={svgPaths.p13483100} fill="var(--fill-0, #AFAAC3)" />
              <path d={svgPaths.p2d9f5ff0} fill="var(--fill-0, #AFAAC3)" />
              <path d={svgPaths.p6d02280} fill="var(--fill-0, #AFAAC3)" />
              <path d={svgPaths.p172a7180} fill="var(--fill-0, #AFAAC3)" />
            </g>
          </svg>
        </div>
      </div>
      <Frame30 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Male">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.pa675700} fill="var(--fill-0, #1B29E5)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yandi Setiawan Nomadi Hambali
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Intervensi Risiko Jatuh - Risiko Rendah
      </p>
      <Frame25 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        850-2
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame24 />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#555] text-[15px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2/4
      </p>
    </div>
  );
}

function Frame2() {
  return <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame" />;
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Male">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.pa675700} fill="var(--fill-0, #1B29E5)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yandi Setiawan Nomadi Hambali
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Manajemen VTE - Risiko Tinggi
      </p>
      <Frame27 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        850-2
      </p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame26 />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#555] text-[15px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2/4
      </p>
    </div>
  );
}

function Frame3() {
  return <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame" />;
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Female">
        <div className="absolute bottom-[12.5%] left-1/4 right-[26.79%] top-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.71429 12">
            <path d={svgPaths.p5500470} fill="var(--fill-0, #E51B94)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        June Anabelle Alexander
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Intervensi PIVAS - 0
      </p>
      <Frame29 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        850-2
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame28 />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#555] text-[15px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0/2
      </p>
    </div>
  );
}

function Frame4() {
  return <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame" />;
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Female">
        <div className="absolute bottom-[12.5%] left-1/4 right-[26.79%] top-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.71429 12">
            <path d={svgPaths.p5500470} fill="var(--fill-0, #E51B94)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brenda Claire
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pencegahan Luka Tekan - Glamorgan: Risiko Rendah
      </p>
      <Frame41 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        850-2
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame40 />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#555] text-[15px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0/2
      </p>
    </div>
  );
}

function Frame5() {
  return <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame" />;
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-[#f8e6d9] h-[109px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame34 />
        <Frame2 />
      </div>
      <div className="bg-[#f8e6d9] h-[84px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame35 />
        <Frame3 />
      </div>
      <div className="bg-[#f8e6d9] h-[84px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame36 />
        <Frame4 />
      </div>
      <div className="bg-[#f8e6d9] h-[112px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame39 />
        <Frame5 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="System/Clock">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-4.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1667 18.1667">
              <path d={svgPaths.p26f86bf0} id="Icon" stroke="var(--stroke-0, #AFAAC3)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame33 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#1b29e5] bottom-[-8.33%] content-stretch flex flex-col items-start left-1/2 px-[5px] py-[4px] rounded-[100px] top-[-8.33%]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        07
      </p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Male">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.pa675700} fill="var(--fill-0, #1B29E5)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Johan Agustinus
      </p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`07:00 Mandi `}</p>
      <Frame48 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        851-2
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame47 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 82">
        <path d="M4 0H0V82H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[259px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5 Pasien
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Chevron">
        <div className="absolute bottom-[37.5%] flex items-center justify-center left-1/4 right-1/4 top-[33.33%]">
          <div className="-scale-y-100 flex-none h-[7px] w-[12px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.66667">
                <path clipRule="evenodd" d={svgPaths.p3fc27000} fill="var(--fill-0, #00109C)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[12px] top-[8px]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        07:30 Makan
      </p>
      <Frame50 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-white h-[84px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame46 />
        <div className="absolute left-[284px] overflow-clip size-[32px] top-0" data-name="System/Warning" />
        <Frame6 />
      </div>
      <div className="bg-white h-[64px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame49 />
        <div className="absolute bottom-[-9.38%] left-0 top-[1.56%] w-[4px]" data-name="Label">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 69">
            <path d="M4 0H0V69H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame45 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Timer Indicator">
        <Frame43 />
      </div>
      <Frame44 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-8.33%] content-stretch flex flex-col items-start left-1/2 px-[5px] py-[4px] rounded-[100px] top-[-8.33%]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#919191] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        08
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Female">
        <div className="absolute bottom-[12.5%] left-1/4 right-[26.79%] top-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.71429 12">
            <path d={svgPaths.p5500470} fill="var(--fill-0, #E51B94)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        June Annabelle Alexander
      </p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        08:00 Cek gula darah
      </p>
      <Frame57 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        852-2
      </p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame56 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 82">
        <path d="M4 0H0V82H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="bg-white h-[84px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame55 />
        <div className="absolute left-[284px] overflow-clip size-[32px] top-0" data-name="System/Warning">
          <div className="absolute inset-[0_0_12.7%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 27.9365">
              <g id="Vector">
                <path d="M0 0L26.6667 27.9365V0H0Z" fill="#E21100" />
                <path d={svgPaths.p1f4cf800} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
        <Frame7 />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame54 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Timer Indicator">
        <Frame52 />
      </div>
      <Frame53 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-8.33%] content-stretch flex flex-col items-start left-1/2 px-[5px] py-[4px] rounded-[100px] top-[-8.33%]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#919191] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        09
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[259px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5 Pasien
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Chevron">
        <div className="absolute bottom-[37.5%] flex items-center justify-center left-1/4 right-1/4 top-[33.33%]">
          <div className="-scale-y-100 flex-none h-[7px] w-[12px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.66667">
                <path clipRule="evenodd" d={svgPaths.p3fc27000} fill="var(--fill-0, #00109C)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[12px] top-[8px]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        09:00 Reassessment
      </p>
      <Frame63 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-white h-[64px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame62 />
        <div className="absolute bottom-[-9.38%] left-0 top-[1.56%] w-[4px]" data-name="Label">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 69">
            <path d="M4 0H0V69H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame61 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Timer Indicator">
        <Frame59 />
      </div>
      <Frame60 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-8.33%] content-stretch flex flex-col items-start left-1/2 px-[5px] py-[4px] rounded-[100px] top-[-8.33%]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#919191] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        10
      </p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Female">
        <div className="absolute bottom-[12.5%] left-1/4 right-[26.79%] top-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.71429 12">
            <path d={svgPaths.p5500470} fill="var(--fill-0, #E51B94)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        June Annabelle Alexander
      </p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        10:15 IV Monitoring NaCL 250ml
      </p>
      <Frame70 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        852-2
      </p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame69 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 109.333">
        <path d="M4 0H0V109.333H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Female">
        <div className="absolute bottom-[12.5%] left-1/4 right-[26.79%] top-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.71429 12">
            <path d={svgPaths.p5500470} fill="var(--fill-0, #E51B94)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Willsen Alistair Thendra
      </p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        10:30 Persiapan Operasi: Angioplasty
      </p>
      <Frame73 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        854-2
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame72 />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#555] text-[15px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0/5
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 109.333">
        <path d="M4 0H0V109.333H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-white h-[112px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame68 />
        <Frame8 />
      </div>
      <div className="bg-white h-[112px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame71 />
        <div className="absolute left-[284px] overflow-clip size-[32px] top-0" data-name="System/Warning">
          <div className="absolute inset-[0_0_12.7%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 27.9365">
              <g id="Vector">
                <path d="M0 0L26.6667 27.9365V0H0Z" fill="#E21100" />
                <path d={svgPaths.p1f4cf800} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
        <Frame9 />
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame67 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Timer Indicator">
        <Frame65 />
      </div>
      <Frame66 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-8.33%] content-stretch flex flex-col items-start left-1/2 px-[5px] py-[4px] rounded-[100px] top-[-8.33%]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#919191] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        11
      </p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Male">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.pa675700} fill="var(--fill-0, #1B29E5)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Muhammad Rusli Santika
      </p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`11:00 Cek Radiologi: Scan Thorax `}</p>
      <Frame80 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        851-2
      </p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame79 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 109.333">
        <path d="M4 0H0V109.333H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[259px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5 Pasien
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Chevron">
        <div className="absolute bottom-[37.5%] flex items-center justify-center left-1/4 right-1/4 top-[33.33%]">
          <div className="-scale-y-100 flex-none h-[7px] w-[12px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.66667">
                <path clipRule="evenodd" d={svgPaths.p3fc27000} fill="var(--fill-0, #00109C)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[12px] top-[8px]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        11:30 Makan
      </p>
      <Frame82 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-white h-[112px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame78 />
        <Frame10 />
      </div>
      <div className="bg-white h-[64px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame81 />
        <div className="absolute bottom-[-9.38%] left-0 top-[1.56%] w-[4px]" data-name="Label">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 69">
            <path d="M4 0H0V69H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame77 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Timer Indicator">
        <Frame75 />
      </div>
      <Frame76 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-8.33%] content-stretch flex flex-col items-start left-1/2 px-[5px] py-[4px] rounded-[100px] top-[-8.33%]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#919191] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        12
      </p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Female">
        <div className="absolute bottom-[12.5%] left-1/4 right-[26.79%] top-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.71429 12">
            <path d={svgPaths.p5500470} fill="var(--fill-0, #E51B94)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        June Annabelle Alexander
      </p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:00 Ubah Posisi Pasien
      </p>
      <Frame89 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        852-2
      </p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame88 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 82">
        <path d="M4 0H0V82H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Male">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.pa675700} fill="var(--fill-0, #1B29E5)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Muhammad Rusli Santika
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:20 Observasi Khusus
      </p>
      <Frame93 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        854-2
      </p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame91 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 82">
        <path d="M4 0H0V82H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-white h-[84px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame87 />
        <Frame11 />
      </div>
      <div className="bg-white h-[84px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame90 />
        <Frame12 />
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame86 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Timer Indicator">
        <Frame84 />
      </div>
      <Frame85 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[-8.33%] content-stretch flex flex-col items-start left-1/2 px-[5px] py-[4px] rounded-[100px] top-[-8.33%]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#919191] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        13
      </p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[259px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5 Pasien
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Chevron">
        <div className="absolute bottom-[37.5%] flex items-center justify-center left-1/4 right-1/4 top-[33.33%]">
          <div className="-scale-y-100 flex-none h-[7px] w-[12px]">
            <div className="relative size-full" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.66667">
                <path clipRule="evenodd" d={svgPaths.p3fc27000} fill="var(--fill-0, #00109C)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[12px] top-[8px]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        13:30 Handover
      </p>
      <Frame99 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System/Male">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.pa675700} fill="var(--fill-0, #1B29E5)" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[239px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Willsen Alistair Thendra
      </p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] w-[260px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        13:45 Observasi Paska Operasi: Angioplasty
      </p>
      <Frame102 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[259px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        854-2
      </p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-end justify-end left-[12px] top-[8px]">
      <Frame101 />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#555] text-[15px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        0/3
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bottom-[1.19%] left-0 overflow-clip top-[1.19%] w-[4px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 110.31">
        <path d="M4 0H0V110.31H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-white h-[64px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame98 />
        <div className="absolute bottom-[-9.38%] left-0 top-[1.56%] w-[4px]" data-name="Label">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 69">
            <path d="M4 0H0V69H4V0Z" fill="var(--fill-0, #F88805)" id="Label" />
          </svg>
        </div>
      </div>
      <div className="bg-white h-[113px] overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[316px]" data-name="Nurse Task">
        <Frame100 />
        <Frame13 />
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame97 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Timer Indicator">
        <Frame95 />
      </div>
      <Frame96 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame31 />
      <Frame32 />
      <Frame42 />
      <Frame51 />
      <Frame58 />
      <Frame64 />
      <Frame74 />
      <Frame83 />
      <Frame94 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[16px] top-[144px] w-[344px]" data-name="Content">
      <ExtraButton />
      <Frame92 />
    </div>
  );
}

export default function Component102KartuTugasSaya() {
  return (
    <div className="bg-[#f4f3f2] relative size-full" data-name="102- Kartu Tugas Saya">
      <div className="-translate-x-1/2 absolute backdrop-blur-[2px] bg-white bottom-0 h-[64px] left-1/2 w-[360px]" data-name="Bottom Navbar">
        <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
          <ActionButton />
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none shadow-[0px_0px_8px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <Header />
      <Content />
    </div>
  );
}
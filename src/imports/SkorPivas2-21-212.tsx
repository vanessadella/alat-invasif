import svgPaths from "./svg-ukoxbrvswf";

function Frame3() {
  return <div className="shrink-0 size-[16px]" />;
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-start left-[16px] top-[-68px] w-[24px]">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[24px] top-[36px]">
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #FFD98F)" id="Ellipse 2783" r="8" />
        </svg>
      </div>
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#171717] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Intervensi PIVAS - 1
      </p>
    </div>
  );
}

function PlacehoderIcon() {
  return (
    <div className="h-[26px] overflow-clip relative shrink-0 w-[16px]" data-name="Placehoder Icon">
      <div className="absolute inset-[3.85%_-25%] overflow-clip" data-name="System/Female">
        <div className="absolute bottom-[12.5%] left-1/4 right-[26.79%] top-[12.5%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5714 18">
            <path d={svgPaths.p34639d80} fill="var(--fill-0, #E51B94)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NamaPasienGender() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Nama Pasien & Gender">
      <PlacehoderIcon />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#171717] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        June Annabelle Alexander
      </p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="System/Info">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3cd57a00} fill="var(--fill-0, #76767C)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[86px]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#afaac3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        NAMA PASIEN
      </p>
      <NamaPasienGender />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#afaac3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        NO.MR
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        00027482
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#afaac3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        TGL LAHIR
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[88px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        18 Feb 1994
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#afaac3] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        BED NO
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#555] text-[15px] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        850-2
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-start left-[24px] top-[162px]">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Checked() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checked">
          <g id="Icon">
            <path d={svgPaths.p20ce9080} fill="#29AF00" />
            <path clipRule="evenodd" d={svgPaths.p3ef0400} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Checked1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checked">
          <g id="Icon">
            <path d={svgPaths.p20ce9080} fill="#29AF00" />
            <path clipRule="evenodd" d={svgPaths.p3ef0400} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Checked2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checked">
          <g id="Icon">
            <path d={svgPaths.p20ce9080} fill="#29AF00" />
            <path clipRule="evenodd" d={svgPaths.p3ef0400} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Unchecked() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Unchecked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Unchecked">
          <path d={svgPaths.p267c5600} id="Icon" stroke="var(--stroke-0, #CDD2DD)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[20px] top-[232px] w-[295px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[14px] text-justify whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Lakukan checklist intervensi di bawah ini</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="New - Checkbox">
        <Checked />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[14px] text-justify whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">{`Observasi ketat lokasi infus `}</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="New - Checkbox">
        <Checked1 />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[14px] text-justify whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">{`Lepaskan kanula bila tidak lagi diperlukan `}</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="New - Checkbox">
        <Checked2 />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[14px] text-justify whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">{`Observasi Pivas score sampai 48- 96 jam `}</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="New - Checkbox">
        <Unchecked />
        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[14px] text-justify whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">Dokumentasikan</p>
        </div>
      </div>
    </div>
  );
}

function Halfcard() {
  return (
    <div className="absolute bg-white h-[769px] left-0 rounded-tl-[32px] rounded-tr-[32px] top-[31px] w-[360px]" data-name="Halfcard">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <button className="absolute bg-[#e8ebef] block cursor-pointer h-[4px] left-[159.5px] right-[144.5px] rounded-[8px] top-[8px]" data-name="Drawer" />
      <div className="absolute bg-[#cdd2dd] h-[48px] left-[16px] rounded-[8px] top-[701px] w-[328px]" data-name="Button/General">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-0.5px)] text-[15px] text-center text-white top-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px]">SIMPAN</p>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Wifi() {
  return (
    <div className="absolute bottom-1/4 left-[6.78%] right-[79.66%] top-1/4" data-name="wifi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="wifi">
          <mask height="12" id="mask0_21_358" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="16" x="0" y="0">
            <path clipRule="evenodd" d="M0 0L8 12L16 0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="wifi mask" />
          </mask>
          <g mask="url(#mask0_21_358)">
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
          <mask height="12" id="mask0_21_384" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="12" x="0" y="0">
            <path clipRule="evenodd" d="M12 12V0L0 12H12Z" fill="var(--fill-0, white)" fillRule="evenodd" id="reception mask" />
          </mask>
          <g mask="url(#mask0_21_384)">
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
          <mask height="13" id="mask0_21_371" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="8" x="0" y="0">
            <path clipRule="evenodd" d={svgPaths.p2f7e0200} fill="var(--fill-0, white)" fillRule="evenodd" id="battery mask" />
          </mask>
          <g mask="url(#mask0_21_371)">
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

export default function SkorPivas() {
  return (
    <div className="bg-[#f4f3f2] relative size-full" data-name="Skor PIVAS 2">
      <button className="absolute block cursor-pointer inset-[-2.51%_0]" data-name="Overlay">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 840.106">
          <path d="M360 0H0V840.106H360V0Z" fill="var(--fill-0, black)" fillOpacity="0.6" id="Overlay" />
        </svg>
      </button>
      <Halfcard />
      <div className="absolute h-[24px] left-0 top-0 w-[360px]" data-name="Status Bar">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
          <path clipRule="evenodd" d="M0 0V24H360V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Container" />
        </svg>
        <StatusBarContents />
      </div>
    </div>
  );
}
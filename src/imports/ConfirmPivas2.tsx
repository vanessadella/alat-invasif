import svgPaths from "./svg-xn045ddovf";

function Context() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[200px] relative" data-name="Context">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-full">Pastikan kondisi pasien karena skor PIVAS 3-5 akan masuk laporan insiden.</p>
    </div>
  );
}

function Radio() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio">
      <div className="relative shrink-0 size-[20px]" data-name="Radio">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse" r="9.5" stroke="var(--stroke-0, #00277F)" />
        </svg>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-name="Indicator">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #00277F)" id="Indicator" r="5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] text-justify whitespace-nowrap">
        <p className="leading-[20px]">Mekanik</p>
      </div>
    </div>
  );
}

function Radio1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio">
      <div className="relative shrink-0 size-[20px]" data-name="Radio">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse" r="9.5" stroke="var(--stroke-0, #AFC4D6)" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] text-justify whitespace-nowrap">
        <p className="leading-[20px]">Bakterial</p>
      </div>
    </div>
  );
}

function Radio2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Radio">
      <div className="relative shrink-0 size-[20px]" data-name="Radio">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse" r="9.5" stroke="var(--stroke-0, #AFC4D6)" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] text-justify whitespace-nowrap">
        <p className="leading-[20px]">Chemical</p>
      </div>
    </div>
  );
}

function StatusOptions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Status Options">
      <Radio />
      <Radio1 />
      <Radio2 />
    </div>
  );
}

function StatusSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Status Section">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-full">
        <p className="leading-[20px]">Pilih Kategori Phlebitis</p>
      </div>
      <StatusOptions />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] relative w-full">
          <div className="bg-[#b45309] relative rounded-[8px] shrink-0 w-full" data-name="Toast">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[14px] items-center px-[16px] py-[14px] relative w-full">
                <div className="overflow-clip relative shrink-0 size-[36px]" data-name="icon_warning">
                  <div className="absolute inset-[10.99%_5.86%_11.73%_5.87%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.7773 27.8201">
                      <path d={svgPaths.p17b67d00} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <Context />
              </div>
            </div>
          </div>
          <StatusSection />
        </div>
      </div>
    </div>
  );
}

function ModalSeeImage() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-end overflow-clip relative rounded-[8px] shrink-0 w-[328px]" data-name="modal-see image">
      <div className="bg-white relative shrink-0 w-full" data-name="Modal Header">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#111827] text-[16px]">Serious Safety Event</p>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name=".icon_close">
              <div className="absolute inset-[22.6%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.76667 8.76667">
                  <path d={svgPaths.p15c9f480} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#afc4d6] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <Content />
      <div className="bg-white relative shrink-0 w-full" data-name="Modal Footer">
        <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative w-full">
            <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name=".[Deracated]Button">
              <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">KOREKSI</p>
            </div>
            <div className="bg-[#00277f] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name=".[Deracated]Button">
              <div aria-hidden="true" className="absolute border border-[#00277f] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">SIMPAN</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#afc4d6] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(23,23,23,0.75)] content-stretch flex flex-col h-[800px] items-center justify-center left-0 p-[10px] right-0 top-0" data-name="Overlay">
      <ModalSeeImage />
    </div>
  );
}

export default function ConfirmPivas() {
  return (
    <div className="relative size-full" data-name="Confirm PIVAS > 2">
      <Overlay />
    </div>
  );
}
import svgPaths from "./svg-owwo5nieyx";

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 overflow-clip p-[16px] right-0 top-[56px]" data-name="Form">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px] w-full">
        <p className="leading-[20px]">Data yang sudah Anda isi belum disimpan dan akan hilang. Yakin ingin hapus?</p>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="bg-white h-[202px] relative rounded-[12px] shrink-0 w-[328px]" data-name="Modal">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-white left-0 right-0 top-0" data-name="Modal Header">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[16px] relative rounded-[inherit] w-full">
            <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#111827] text-[16px]">Hapus Alat Invasif?</p>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name=".icon_close">
              <div className="absolute inset-[22.6%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.76667 8.76667">
                  <path d={svgPaths.p15c9f480} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#afc4d6] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute bg-white bottom-0 left-0 right-0" data-name="Modal Footer">
          <div className="content-stretch flex gap-[8px] items-center justify-end overflow-clip p-[16px] relative rounded-[inherit] w-full">
            <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name=".[Deracated]Button">
              <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">BATAL</p>
            </div>
            <div className="bg-[#e11d48] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name=".[Deracated]Button">
              <div aria-hidden="true" className="absolute border border-[#e11d48] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">YA, HAPUS</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#afc4d6] border-solid border-t inset-0 pointer-events-none" />
        </div>
        <Form />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Overlay() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(23,23,23,0.75)] content-stretch flex h-[800px] items-center justify-center left-0 top-1/2 w-[360px]" data-name="Overlay">
      <Modal />
    </div>
  );
}

export default function PopUp() {
  return (
    <div className="relative size-full" data-name="Pop Up">
      <Overlay />
    </div>
  );
}
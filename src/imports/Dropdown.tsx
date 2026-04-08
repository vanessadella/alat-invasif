import svgPaths from "./svg-mddidm5g05";

function ListOption() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="list-option">
      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
        <div className="relative rounded-[6px] shrink-0 w-full" data-name=".Option">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">19</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[6px] shrink-0 w-full" data-name=".Option">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">20</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[6px] shrink-0 w-full" data-name=".Option">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">22</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[6px] shrink-0 w-full" data-name=".Option">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">23</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-[6px] shrink-0 w-full" data-name=".Option">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px not-italic relative text-[#111827] text-[14px]">Lainnya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dropdown() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Dropdown">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <ListOption />
        <div className="bg-[#fcfcfc] overflow-clip relative self-stretch shrink-0 w-[15px]" data-name="native-scroll">
          <div className="-translate-x-1/2 absolute bottom-[5px] h-[7px] left-1/2 w-[9px]" data-name="arrow-down">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 7">
              <path d={svgPaths.p217bbd80} fill="var(--fill-0, #8B8B8B)" id="arrow-down" />
            </svg>
          </div>
          <div className="-translate-x-1/2 absolute bg-[#8b8b8b] h-[40px] left-1/2 rounded-[100px] top-[17px] w-[9px]" data-name="thumb" />
          <div className="-translate-x-1/2 absolute h-[7px] left-1/2 top-[5px] w-[9px]" data-name="arrow-top">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 7">
              <path d={svgPaths.p36a5e310} fill="var(--fill-0, #8B8B8B)" id="arrow-top" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#afc4d6] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}
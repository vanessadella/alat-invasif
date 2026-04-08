import svgPaths from "../../imports/svg-67j7r1oyit";

interface EmptyStateNodataProps {
  message?: string;
}

export function EmptyStateNodata({ message = "Belum ada alat invasif yang terpasang" }: EmptyStateNodataProps) {
  return (
    <div className="flex gap-3 items-center w-full justify-center py-6">
      <div className="overflow-clip relative shrink-0 size-[48px]">
        <div className="absolute inset-[5%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.2 43.1992">
            <path d={svgPaths.p1a67bf00} fill="var(--fill-0, #F0F1F7)" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute inset-[30.39%_34.83%_4.07%_5%]">
          <div className="absolute inset-[-9.54%_-24.24%_-28.61%_-17.31%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.8791 43.4598">
              <g filter="url(#filter0_d_empty)">
                <path d={svgPaths.p20e57c80} fill="var(--fill-0, white)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="43.4598" id="filter0_d_empty" width="40.8791" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="1" dy="3" />
                  <feGaussianBlur stdDeviation="3" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.161 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[80.43%_78.9%_6.97%_8.38%] items-center justify-center">
          <div className="flex-none h-[13.07px] rotate-42 w-[15.619px]">
            <div className="relative size-full">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6858 3.92082">
                <path d={svgPaths.p1b2ed100} fill="var(--fill-0, #C0C1C6)" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-[23.49%_38.89%_69.62%_54.11%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.36177 3.30981">
            <g>
              <path d={svgPaths.p34ab800} fill="var(--fill-0, #C0C1C6)" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[21.28%_17.81%_66.28%_69.75%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.9706 5.97049">
            <path d={svgPaths.p18ea7100} fill="var(--fill-0, #C0C1C6)" />
          </svg>
        </div>
        <div className="absolute inset-[0_23%_85.5%_62.49%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.96489 6.96169">
            <path d={svgPaths.p2357300} fill="var(--fill-0, #C0C1C6)" />
          </svg>
        </div>
      </div>
      <p
        className="text-muted-foreground shrink-0 whitespace-nowrap"
        style={{
          fontSize: "var(--text-sm)",
          fontWeight: "var(--font-weight-normal)",
          fontFamily: "'Inter', sans-serif",
          lineHeight: "24px",
          letterSpacing: "0.2px",
        }}
      >
        {message}
      </p>
    </div>
  );
}

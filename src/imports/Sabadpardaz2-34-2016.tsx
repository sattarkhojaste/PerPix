import imgMultiPagesDesktopDark4 from "figma:asset/f489102d76a067b1a9a5ac6dcb0fe8f26fd29997.png";

function Frame() {
  return (
    <div className="font-['Roboto:Light',sans-serif] font-light h-[44.583px] leading-[1.5] lowercase relative text-[#6c757d] w-[549.859px]">
      <p className="-translate-x-1/2 absolute left-[97px] text-[29.722px] text-center top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        SATTAR KHOJASTE
      </p>
      <p className="absolute left-[220.44px] text-[27.245px] top-[1.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PRODUCT DESIGNER
      </p>
      <p className="absolute left-[430.97px] text-[27.245px] top-[1.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        -
      </p>
      <p className="absolute left-[448.31px] text-[27.245px] top-[1.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        PORTFOLIO
      </p>
    </div>
  );
}

export default function Sabadpardaz() {
  return (
    <div className="bg-[#e8e8e8] relative size-full" data-name="Sabadpardaz-2">
      <div className="absolute h-[1072px] left-[312px] top-[8px] w-[1608px]" data-name="Multi pages-Desktop-Dark 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMultiPagesDesktopDark4} />
      </div>
      <div className="-translate-y-1/2 absolute flex h-[549.859px] items-center justify-center left-[66px] top-[calc(50%-0.07px)] w-[44.583px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "84" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Frame />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[427px] not-italic text-[#ced4da] text-[73.48px] text-center top-[909.96px]">High Fidelity Design</p>
    </div>
  );
}
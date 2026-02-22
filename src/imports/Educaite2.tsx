import svgPaths from "./svg-k5rgutrphb";
import imgSomeAssets from "figma:asset/13085ccd2025bde76666c19b55a385268f1545a3.png";

function Frame3() {
  return (
    <div className="absolute h-[109px] leading-[1.5] left-[100px] not-italic top-[206px] w-[487px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] left-0 text-[#495057] text-[36px] top-0">Components and Assets:</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] left-0 text-[#6c757d] text-[24px] text-justify top-[64px] w-[633px] whitespace-pre-wrap" dir="auto">
        These are some results of the process...
      </p>
    </div>
  );
}

function SarrafexLogo() {
  return (
    <div className="-translate-y-1/2 absolute h-[95.479px] left-[13.7px] top-[calc(50%-0.08px)] w-[84.021px]" data-name="Sarrafex-Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.0212 95.4787">
        <g id="Sarrafex-Logo">
          <path clipRule="evenodd" d={svgPaths.p32b0faf0} fill="url(#paint0_linear_2_8832)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2f694500} fill="url(#paint1_linear_2_8832)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p2790c200} fill="url(#paint2_linear_2_8832)" fillRule="evenodd" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_8832" x1="3.11875" x2="81.847" y1="74.3702" y2="74.3702">
            <stop stopColor="#1875FF" />
            <stop offset="1" stopColor="#014FC2" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2_8832" x1="2.96567" x2="81.8531" y1="23.9236" y2="23.9236">
            <stop stopColor="#1875FF" />
            <stop offset="1" stopColor="#014FC2" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2_8832" x1="3.15117" x2="63.5073" y1="54.4314" y2="54.4314">
            <stop stopColor="#014FC2" />
            <stop offset="1" stopColor="#1875FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-0 size-[112.076px] top-0">
      <div className="absolute bg-gradient-to-b from-[#fafafa] h-[112.333px] left-0 opacity-50 rounded-[6.296px] shadow-[0px_7.556px_1.889px_0px_rgba(0,0,0,0),0px_5.037px_1.889px_0px_rgba(0,0,0,0.01),0px_2.519px_1.889px_0px_rgba(0,0,0,0.05),0px_1.259px_1.259px_0px_rgba(0,0,0,0.08),0px_0px_0.63px_0px_rgba(0,0,0,0.09),0px_0px_0px_0px_rgba(0,0,0,0.09)] to-[#eee] top-0 w-[516px]" />
      <SarrafexLogo />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[78.075px] left-[143.55px] not-italic top-[17.63px] w-[243.671px]">
      <a className="absolute block font-['Poppins:SemiBold',sans-serif] leading-[0] left-0 text-[#6c757d] text-[30.223px] top-0 whitespace-nowrap" href="https://sarrafex.com/">
        <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[1.25] underline">SarrafEX (ProEX)</p>
      </a>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-0 text-[#adb5bd] text-[22.667px] top-[44.07px] uppercase">Crypto Currency exchange</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[112.333px] relative shrink-0 w-[516px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="font-['Roboto:Light',sans-serif] font-light h-[36px] leading-[1.5] lowercase relative shrink-0 text-[#6c757d] w-[444px]">
      <p className="-translate-x-1/2 absolute left-[78.5px] text-[24px] text-center top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        SATTAR KHOJASTE
      </p>
      <p className="absolute left-[178px] text-[22px] top-px" style={{ fontVariationSettings: "'wdth' 100" }}>
        PRODUCT DESIGNER
      </p>
      <p className="absolute left-[164px] text-[22px] top-px" style={{ fontVariationSettings: "'wdth' 100" }}>
        -
      </p>
      <p className="absolute left-[348px] text-[22px] top-px" style={{ fontVariationSettings: "'wdth' 100" }}>
        -
      </p>
      <p className="absolute left-[362px] text-[22px] top-px" style={{ fontVariationSettings: "'wdth' 100" }}>
        PORTFOLIO
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[780px] items-center left-[100px] top-[30px]">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

export default function Educaite() {
  return (
    <div className="bg-gradient-to-b from-[#fafafa] relative size-full to-[#eee]" data-name="Educaite-2">
      <Frame3 />
      <Frame5 />
      <div className="absolute h-[638px] left-[100px] rounded-[8px] top-[383px] w-[747px]" data-name="Some Assets">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[122.57%] left-[-9.71%] max-w-none top-[-14.76%] w-[379.65%]" src={imgSomeAssets} />
        </div>
      </div>
      <div className="absolute h-[299px] left-[889px] rounded-[6px] top-[369px] w-[784px]" data-name="Some Assets">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
          <img alt="" className="absolute h-[253.2%] left-[-100.46%] max-w-none top-[-33.39%] w-[350.67%]" src={imgSomeAssets} />
        </div>
      </div>
      <div className="absolute h-[327px] left-[889px] rounded-[8px] top-[694px] w-[977px]" data-name="Some Assets">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[231.52%] left-[-172.33%] max-w-none top-[-29.92%] w-[281.39%]" src={imgSomeAssets} />
        </div>
      </div>
    </div>
  );
}
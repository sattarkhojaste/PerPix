import svgPaths from "./svg-i3959y3kgb";
import imgWalletMobileDark from "figma:asset/442669d41c727bc733d75e3e7c95db3382096f49.png";
import imgKybMobileDark from "figma:asset/651d6b5c403cb4481ba5f32ee48e87fd05009e29.png";
import imgPriceDesktopLight from "figma:asset/4e2eaa156e58052c211af97996f82a493ff695d0.png";

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

function Frame3() {
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

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[780px] items-center left-[100px] top-[50px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[129px] top-[224px]">
      <div className="absolute h-[720px] left-[460px] top-[232px] w-[329px]" data-name="Wallet-Mobile-Dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.17%] left-[-24.59%] max-w-none top-[-12.36%] w-[150.44%]" src={imgWalletMobileDark} />
        </div>
      </div>
      <div className="absolute h-[781px] left-[129px] top-[224px] w-[358px]" data-name="KYB-Mobile-Dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.8%] left-[-23.81%] max-w-none top-[-12.03%] w-[149.5%]" src={imgKybMobileDark} />
        </div>
      </div>
    </div>
  );
}

export default function AeTr() {
  return (
    <div className="bg-gradient-to-b from-[#fafafa] relative size-full to-[#eee]" data-name="AE&TR">
      <Frame4 />
      <p className="-translate-x-1/2 absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[1280px] not-italic text-[#ced4da] text-[48px] text-center top-[931px]">High Fidelity Design</p>
      <div className="absolute h-[761px] left-[625px] top-[159px] w-[1273px]" data-name="Price-Desktop-Light">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.39%] left-[-1.62%] max-w-none top-[-5.15%] w-[103.24%]" src={imgPriceDesktopLight} />
        </div>
      </div>
      <Group />
    </div>
  );
}
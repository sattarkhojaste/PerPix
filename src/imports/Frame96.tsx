import imgLoginDesktopDark from "figma:asset/5bb0b409b3782e2c90ff13b5b3d3113c5bb1d4d6.png";
import imgForgetPassMobileDark from "figma:asset/8f70eab06d59561c43607639ab62376b50d701d5.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[735px] left-[204px] top-0 w-[1251px]" data-name="Login-Desktop-Dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[158.42%] left-[-17.51%] max-w-none top-[-31.54%] w-[134.39%]" src={imgLoginDesktopDark} />
        </div>
      </div>
      <div className="absolute h-[772px] left-0 top-[37px] w-[360px]" data-name="Forget pass-Mobile-Dark">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.69%] left-[-22.01%] max-w-none top-[-12.07%] w-[145.85%]" src={imgForgetPassMobileDark} />
        </div>
      </div>
    </div>
  );
}
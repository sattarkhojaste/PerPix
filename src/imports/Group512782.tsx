import imgReferralDesktopLight2 from "figma:asset/7752cba52298cf12de48ad7fe13987dd50a092ea.png";
import imgVoucherMobileDark3 from "figma:asset/caf19d9a6dfb6b5e51001c30e537e12cdc987c6d.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[604.4px] left-[32px] top-0 w-[1028px]" data-name="Referral-Desktop-Light 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.52%] left-[-19.17%] max-w-none top-[-34.38%] w-[138.01%]" src={imgReferralDesktopLight2} />
        </div>
      </div>
      <div className="absolute h-[564px] left-0 top-[152px] w-[259px]" data-name="Voucher-Mobile-Dark 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.59%] left-[-24.34%] max-w-none top-[-12.58%] w-[150.05%]" src={imgVoucherMobileDark3} />
        </div>
      </div>
    </div>
  );
}
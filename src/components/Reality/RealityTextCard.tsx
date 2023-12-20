import TextCard from "../Cardlayout/TextCard";

import type { textCardType } from "@/constants/maindata";

const RealityTextCard = ({ realitytextdata }: { realitytextdata: textCardType[] }) => {
  return (
    <div className="py-6 flex justify-between gap-[2.8rem]">
      {realitytextdata.map((item) => (
        <TextCard key={item.id} text={item} btnType={false} btnText={""} />
      ))}
    </div>
  );
};

export default RealityTextCard;

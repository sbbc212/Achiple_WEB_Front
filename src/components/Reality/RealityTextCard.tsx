import TextCard from "../Cardlayout/TextCard";

import type { textCardType } from "@/constants/maindata";

const RealityTextCard = ({ realitytextdata }: { realitytextdata: textCardType[] }) => {
  return (
    <div className="layout flex justify-between gap-5 pb-9 pt-9">
      {realitytextdata.map((item) => (
        <TextCard key={item.id} text={item} btnType={false} btnText={""} />
      ))}
    </div>
  );
};

export default RealityTextCard;

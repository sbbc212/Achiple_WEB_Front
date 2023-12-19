import { studioonetextcard, studioonetitle } from "@/constants/studio";

import RealityTextCard from "../Reality/RealityTextCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const StudioFive = () => {
  return (
    <div className="py-[60px]">
      <SectionTitleAndContent content={studioonetitle[0]} />
      <RealityTextCard realitytextdata={studioonetextcard.slice(2, 5)} />
      <RealityTextCard realitytextdata={studioonetextcard.slice(5, 8)} />
    </div>
  );
};

export default StudioFive;

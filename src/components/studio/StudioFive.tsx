import { studioonetextcard, studioonetitle } from "@/constants/studio";

import RealityTextCard from "../Reality/RealityTextCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const StudioFive = () => {
  return (
    <>
      <SectionTitleAndContent content={studioonetitle[0]} />
      <RealityTextCard realitytextdata={studioonetextcard.slice(2, 5)} />
      <RealityTextCard realitytextdata={studioonetextcard.slice(5, 8)} />
    </>
  );
};

export default StudioFive;

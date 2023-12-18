import { studioonetextcard, studiotwo } from "@/constants/studio";

import RealitySecEight from "../Reality/RealitySecEight";
import RealityTextCard from "../Reality/RealityTextCard";

const StudioTwo = () => {
  return (
    <div className="py-[60px]">
      <RealitySecEight data={studiotwo} textcarddata={studioonetextcard.slice(2, 5)} />
      <RealityTextCard realitytextdata={studioonetextcard.slice(5, 8)} />
    </div>
  );
};

export default StudioTwo;

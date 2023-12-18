import { studioonetextcard, studiotwo } from "@/constants/studio";

import RealitySecEight from "../Reality/RealitySecEight";
import RealityTextCard from "../Reality/RealityTextCard";

const StudioTwo = () => {
  return (
    <>
      <RealitySecEight data={studiotwo} textcarddata={studioonetextcard.slice(2, 5)} />
      <RealityTextCard realitytextdata={studioonetextcard.slice(5, 8)} />
    </>
  );
};

export default StudioTwo;

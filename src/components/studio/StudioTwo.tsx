import { studioonetextcard, studiotwo } from "@/constants/studio";

import RealitySecEight from "../Reality/RealitySecEight";

const StudioTwo = () => {
  return (
    <div className="py-[60px] ">
      <RealitySecEight data={studiotwo[0]} textcarddata={studioonetextcard.slice(2, 5)} secondtextcard={studioonetextcard.slice(5, 8)} />
    </div>
  );
};

export default StudioTwo;

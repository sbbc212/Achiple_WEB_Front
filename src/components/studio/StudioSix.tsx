import { studioonetextcard, studiotwo } from "@/constants/studio";

import RealitySecEight from "../Reality/RealitySecEight";

const StudioSix = () => {
  return (
    <div className="py-[60px]">
      <RealitySecEight data={studiotwo[1]} textcarddata={studioonetextcard.slice(2, 4)} />
    </div>
  );
};

export default StudioSix;

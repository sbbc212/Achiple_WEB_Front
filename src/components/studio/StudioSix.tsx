import { studiotwo, studiotwocard } from "@/constants/studio";

import RealitySecEight from "../Reality/RealitySecEight";

const StudioSix = () => {
  return (
    <div className="py-[60px]">
      <RealitySecEight data={studiotwo[1]} textcarddata={studiotwocard} />
    </div>
  );
};

export default StudioSix;

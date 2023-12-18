import { studioonetextcard, studiotwo } from "@/constants/studio";

import RealitySecEight from "../Reality/RealitySecEight";

const StudioFour = () => {
  return (
    <>
      <RealitySecEight data={studiotwo.slice(1, 2)} textcarddata={studioonetextcard.slice(2, 5)} />
    </>
  );
};

export default StudioFour;

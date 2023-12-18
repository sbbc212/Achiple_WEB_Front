import React from "react";

import { studioonetextcard, studiotwo } from "@/constants/studio";

import RealitySecEight from "../Reality/RealitySecEight";

const StudioSix = () => {
  return (
    <>
      <RealitySecEight data={studiotwo} textcarddata={studioonetextcard.slice(2, 4)} />
    </>
  );
};

export default StudioSix;

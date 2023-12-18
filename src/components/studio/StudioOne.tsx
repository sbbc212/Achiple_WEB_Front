import React from "react";

import { studioonetextcard, studioonetitle } from "@/constants/studio";

import RealityTextCard from "../Reality/RealityTextCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const StudioOne = () => {
  return (
    <>
      <SectionTitleAndContent content={studioonetitle[0]} />
      <RealityTextCard realitytextdata={studioonetextcard.slice(0, 3)} />
    </>
  );
};

export default StudioOne;

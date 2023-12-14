import React from "react";

import { realityData } from "@/constants/realitypagedata";

import Cardlist from "../Cardlayout/Cardlist";

const RealitySecFour = () => {
  return (
    <>
      <Cardlist maincardData={realityData} btnText={"시작하기"} />
    </>
  );
};

export default RealitySecFour;

import React from "react";

import { maincardData } from "@/constants/maindata";

import Cardlist from "../Cardlayout/Cardlist";

const SectionFour = () => {
  return (
    <>
      <Cardlist maincardData={maincardData} />
    </>
  );
};

export default SectionFour;

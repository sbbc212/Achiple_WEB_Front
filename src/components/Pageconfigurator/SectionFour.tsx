import React from "react";

import { maincardData } from "@/constants/maindata";

import Cardlist from "../Cardlayout/Cardlist";

const SectionFour = () => {
  return (
    <>
      <Cardlist maincardData={maincardData} btnText={"test"} />
    </>
  );
};

export default SectionFour;

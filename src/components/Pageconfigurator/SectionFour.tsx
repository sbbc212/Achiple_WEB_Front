import React from "react";

import Cardlist from "../Cardlayout/Cardlist";

import { maincardData } from "@/constants/maindata";

const SectionFour = () => {
  return (
    <>
      <Cardlist maincardData={maincardData} btnText={"test"} />
    </>
  );
};

export default SectionFour;

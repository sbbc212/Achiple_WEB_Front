import React from "react";

import RealitySecFive from "@/components/Reality/RealitySecFive";
import RealitySecFour from "@/components/Reality/RealitySecFour";
import RealitySecThree from "@/components/Reality/RealitySecThree";
import RealitySecTwo from "@/components/Reality/RealitySecTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import { data } from "@/constants/maindata";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={data[2]} />
      <RealitySecTwo />
      <RealitySecThree />
      <RealitySecFour />
      <RealitySecFive />
    </div>
  );
};

export default page;

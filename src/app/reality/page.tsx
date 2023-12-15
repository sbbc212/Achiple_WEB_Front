import React from "react";

import BgBanner from "@/components/Banner/BgBanner";
import TextBanner from "@/components/Banner/TextBanner";
import RealitySecFive from "@/components/Reality/RealitySecFive";
import RealitySecFour from "@/components/Reality/RealitySecFour";
import RealitySecSeven from "@/components/Reality/RealitySecSeven";
import RealitySecSix from "@/components/Reality/RealitySecSix";
import RealitySecThree from "@/components/Reality/RealitySecThree";
import RealitySecTwo from "@/components/Reality/RealitySecTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import { data } from "@/constants/maindata";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={data} />
      <TextBanner />
      <RealitySecTwo />
      <RealitySecThree />
      <RealitySecFour />
      <RealitySecFive />
      <RealitySecSix />
      <RealitySecSeven />
      <BgBanner />
    </div>
  );
};

export default page;

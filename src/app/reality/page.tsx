import React from "react";

import BgBanner from "@/components/Banner/BgBanner";
import TextBanner from "@/components/Banner/TextBanner";
import RealitySecEight from "@/components/Reality/RealitySecEight";
import RealitySecFive from "@/components/Reality/RealitySecFive";
import RealitySecFour from "@/components/Reality/RealitySecFour";
import RealitySecNine from "@/components/Reality/RealitySecNine";
import RealitySecSeven from "@/components/Reality/RealitySecSeven";
import RealitySecSix from "@/components/Reality/RealitySecSix";
import RealitySecThree from "@/components/Reality/RealitySecThree";
import RealitySecTwo from "@/components/Reality/RealitySecTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import { data } from "@/constants/maindata";

const page = () => {
  return (
    <>
      <div className="layout">
        <PageTopSection data={data} />
        <div className="py-[7rem]">
          <TextBanner />
        </div>
        <RealitySecTwo />
        <RealitySecThree />
        <RealitySecFour />
        <RealitySecFive />
        <RealitySecSix />
      </div>
      <RealitySecSeven />

      <RealitySecEight />
      <RealitySecNine />
      <BgBanner />
    </>
  );
};

export default page;

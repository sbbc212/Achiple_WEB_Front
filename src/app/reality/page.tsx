import React from "react";

import BgBanner from "@/components/Banner/BgBanner";
import Full from "@/components/Banner/Full";
import TextBanner from "@/components/Banner/TextBanner";
import RealitySecEight from "@/components/Reality/RealitySecEight";
import RealitySecFive from "@/components/Reality/RealitySecFive";
import RealitySecFour from "@/components/Reality/RealitySecFour";
import RealitySecNine from "@/components/Reality/RealitySecNine";
import RealitySecSix from "@/components/Reality/RealitySecSix";
import RealitySecThree from "@/components/Reality/RealitySecThree";
import RealitySecTwo from "@/components/Reality/RealitySecTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import { realitymaindata, realityseceight, seceighttext } from "@/constants/realitypagedata";

const page = () => {
  return (
    <>
      <div className="layout">
        <PageTopSection data={realitymaindata} />
        <div className="py-[7rem]">
          <TextBanner />
        </div>
        <RealitySecTwo />
        <RealitySecThree />
        <RealitySecFour />
        <RealitySecFive />
        <RealitySecSix />
      </div>
      <Full />
      <RealitySecEight data={realityseceight[0]} textcarddata={seceighttext} />
      <RealitySecNine />
      <BgBanner />
    </>
  );
};

export default page;

import React from "react";

import RealitySecFour from "@/components/Reality/RealitySecFour";
import RealitySecThree from "@/components/Reality/RealitySecThree";
import RealitySecTwo from "@/components/Reality/RealitySecTwo";
import PageTopSection from "@/components/Section/PageTopSection";

const page = () => {
  return (
    <>
      <PageTopSection />
      <RealitySecTwo />
      <RealitySecThree />
      <RealitySecFour />
    </>
  );
};

export default page;

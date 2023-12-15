import React from "react";

import RealitySecFive from "@/components/Reality/RealitySecFive";
import RealitySecFour from "@/components/Reality/RealitySecFour";
import RealitySecThree from "@/components/Reality/RealitySecThree";
import RealitySecTwo from "@/components/Reality/RealitySecTwo";
import PageTopSection from "@/components/Section/PageTopSection";

const page = () => {
  return (
    <div>
      <PageTopSection />
      <RealitySecTwo />
      <RealitySecThree />
      <RealitySecFour />
      <RealitySecFive />
    </div>
  );
};

export default page;

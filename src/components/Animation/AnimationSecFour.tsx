import React from "react";

import { animationtextdata } from "@/constants/animation";

import TextCard from "../Cardlayout/TextCard";

const AnimationSecFour = () => {
  return (
    <>
      <div className="flex justify-between pb-9 pt-9">
        {animationtextdata.map((item) => (
          <TextCard key={item.id} text={item} btnType={false} btnText={""} />
        ))}
      </div>
    </>
  );
};

export default AnimationSecFour;

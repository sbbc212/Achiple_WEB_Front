import React from "react";

import { carddata } from "@/constants/imagecard";

const TextCard = () => {
  return (
    <>
      {carddata.map((data) => (
        <div className="" key={data.id}>
          <p className="text-xl font-bold">{data.title}</p>
          <p>{data.content}</p>
        </div>
      ))}
    </>
  );
};

export default TextCard;

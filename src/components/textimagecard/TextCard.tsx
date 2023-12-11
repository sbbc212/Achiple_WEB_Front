import React from "react";

import { carddata } from "@/constants/imagecard";

const TextCard = () => {
  return (
    <>
      {carddata.map((data) => (
        <div key={data.id}>
          <p className="text-3xl leading-loose font-bold">{data.title}</p>
          <p className="text-lg text-[#595959]">{data.content}</p>
        </div>
      ))}
    </>
  );
};

export default TextCard;

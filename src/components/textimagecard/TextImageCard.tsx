import React from "react";

import ImageCard from "./ImageCard";
import TextCard from "./TextCardList";

const TextImageCard = ({ type }: { type: string }) => {
  let layout;
  switch (type) {
    case "imgleft":
      layout = (
        <>
          <ImageCard />
          <TextCard />
        </>
      );
      break;
    case "imgright":
      layout = (
        <>
          <TextCard />
          <ImageCard />
        </>
      );
      break;
  }
  return <div className="flex items-center pt-10 justify-center space-x-24">{layout}</div>;
};

export default TextImageCard;

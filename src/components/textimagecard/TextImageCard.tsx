import React from "react";

import ImageCard from "./ImageCard";
import TextCard from "./TextCard";

const TextImageCard = () => {
  return (
    <div className="flex">
      <ImageCard />
      <TextCard />
    </div>
  );
};

export default TextImageCard;

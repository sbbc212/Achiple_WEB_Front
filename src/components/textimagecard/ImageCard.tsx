import React from "react";

import { cardimg } from "@/constants/imagecard";

const ImageCard = () => {
  return (
    <>
      <img src={cardimg} className="w-[40rem] h-[20rem]" alt="카드 이미지 임시" />
    </>
  );
};

export default ImageCard;

import React from "react";

import Image from "next/image";

import { cardimg } from "@/constants/imagecard";

const ImageCard = () => {
  return (
    <>
      <Image src={cardimg} width={400} height={200} alt="카드 이미지 임시" />
    </>
  );
};

export default ImageCard;

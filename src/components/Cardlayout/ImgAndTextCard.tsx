import React from "react";

import TextCardList from "./TextCardList";
import PageSectionframe from "../Section/PageSection.frame";

import type { datatype } from "../Section/PageSection";
import type { textCardType } from "@/constants/maindata";

function ImgAndTextCard({ ImgTextData, textCardData, isBtn }: { ImgTextData: datatype; textCardData: textCardType[]; isBtn: boolean }) {
  return (
    <>
      <PageSectionframe data={ImgTextData} isBtn={isBtn} />
      <TextCardList textCardData={textCardData} />
    </>
  );
}

export default ImgAndTextCard;

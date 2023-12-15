import React from "react";

import TextCardList from "./TextCardList";
import PageSectionframe from "../Section/PageSection.frame";

import type { datatype } from "../Section/PageSection";
import type { textCardType } from "@/constants/maindata";

function ImgAndTextCard({ ImgTextData, textCardData }: { ImgTextData: datatype; textCardData: textCardType[] }) {
  return (
    <div>
      <PageSectionframe data={ImgTextData} isBtn={false} />
      <TextCardList textCardData={textCardData} />
    </div>
  );
}

export default ImgAndTextCard;

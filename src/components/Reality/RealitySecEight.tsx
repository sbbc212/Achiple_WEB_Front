import RealityTextCard from "./RealityTextCard";
import Linebtn from "../Button/Linebtn";
import SectionImage from "../Section/SectionImage";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

import type { TextDataItem } from "@/constants/3dconfiguratordata";
import type { textCardType } from "@/constants/maindata";

const RealitySecEight = ({ data, textcarddata }: { data: TextDataItem; textcarddata: textCardType[] }) => {
  return (
    <div className=" flex-col flex justify-center">
      <SectionTitleAndContent content={data} />
      {data.datatype === "nobtn" ? (
        ""
      ) : (
        <div className="mx-auto pb-9">
          <Linebtn text={"애니메이션에 대해 자세히 알아보기"} />
        </div>
      )}
      <SectionImage sectionimg={data.img || ""} />
      <RealityTextCard realitytextdata={textcarddata} />
    </div>
  );
};

export default RealitySecEight;

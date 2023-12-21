import RealityTextCard from "./RealityTextCard";
import Linebtn from "../Button/Linebtn";
import TextCard from "../Cardlayout/TextCard";
import SectionImage from "../Section/SectionImage";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

import type { TextDataItem } from "@/constants/3dconfiguratordata";
import type { textCardType } from "@/constants/maindata";

const RealitySecEight = ({
  data,
  secondtitle,
  textcarddata,
  secondtextcard,
}: {
  secondtitle?: TextDataItem;
  data: TextDataItem;
  textcarddata: textCardType[];
  secondtextcard?: textCardType[];
}) => {
  return (
    <div className="flex-col flex justify-center layout">
      <SectionTitleAndContent content={data} />
      {data.datatype === "nobtn" ? (
        ""
      ) : (
        <div className="mx-auto pb-9">
          <Linebtn text={"애니메이션에 대해 자세히 알아보기"} />
        </div>
      )}
      <SectionImage sectionimg={data.img || ""} />
      {data.secondtitle === "true" && (
        <div className="section-tit text-center pt-[6rem]">
          <SectionTitleAndContent content={secondtitle} />
        </div>
      )}

      {textcarddata[0]?.cardtype === "twocard" ? (
        <div className="flex justify-center space-x-11 pt-10 text-lg">
          {textcarddata.map((data, i) => (
            <TextCard key={data.id} text={textcarddata[i]} btnType={false} btnText={""} />
          ))}
        </div>
      ) : (
        <div className="pt-11 pb-5">
          <RealityTextCard realitytextdata={textcarddata} />
        </div>
      )}
      {secondtextcard && secondtextcard[0].cardtype === "secondline" && <RealityTextCard realitytextdata={secondtextcard} />}
    </div>
  );
};

export default RealitySecEight;

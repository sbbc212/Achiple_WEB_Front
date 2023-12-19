import { configuratordata, nobtncardData } from "@/constants/3dconfiguratordata";

import ThreeCardGroup from "./ThreeCardGroup";
import Linebtn from "../Button/Linebtn";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

import type { maincardDataType } from "@/constants/maindata";

const SectionThree = () => {
  const dataSize = 3;
  const ThreeLengthData: maincardDataType[][] = [];

  for (let i = 0; i < nobtncardData.length; i += dataSize) {
    ThreeLengthData.push(nobtncardData.slice(i, i + dataSize));
  }
  return (
    <div className="flex flex-col text-center">
      <SectionTitleAndContent content={configuratordata[0].textdata[4]} />
      {ThreeLengthData.map((item, i) => (
        <ul key={item[i].id} className="flex text-start justify-between pb-[60px]">
          <ThreeCardGroup content={item} />
        </ul>
      ))}
      <div>
        <Linebtn text={"Archiple 도움말 섹션에서 자세히 알아보세요."} />
      </div>
    </div>
  );
};

export default SectionThree;

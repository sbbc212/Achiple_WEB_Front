import { configuratorcardData, configuratordata } from "@/constants/3dconfiguratordata";

import ThreeCardGroup from "./ThreeCardGroup";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

import type { maincardDataType } from "@/constants/maindata";

const SectionFive = () => {
  const dataSize = 3;
  const ThreeLengthData: maincardDataType[][] = [];

  for (let i = 0; i < configuratorcardData.length; i += dataSize) {
    ThreeLengthData.push(configuratorcardData.slice(i, i + dataSize));
  }

  return (
    <div className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
      <SectionTitleAndContent content={configuratordata[0].textdata[4]} />
      {ThreeLengthData.map((item, i) => (
        <ul key={item[i].id} className="flex text-start justify-between pb-[60px]">
          <ThreeCardGroup content={item} />
        </ul>
      ))}
    </div>
  );
};

export default SectionFive;

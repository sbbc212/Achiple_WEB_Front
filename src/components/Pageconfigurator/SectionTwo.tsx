import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionImage from "../Section/SectionImage";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const SectionTwo = () => {
  return (
    <div className="pt-[4rem]">
      <SectionTitleAndContent content={configuratordata[0].textdata[1]} />
      <SectionImage sectionimg={configuratordata[0].textdata[1].img || ""} />
      <div className="pt-[5rem]">
        <SectionTitleAndContent content={configuratordata[0].textdata[2]} />
      </div>
    </div>
  );
};

export default SectionTwo;

import { studioonetitle, studiotwo } from "@/constants/studio";

import SectionImage from "../Section/SectionImage";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const StudioThree = () => {
  return (
    <div className="py-[60px]">
      <div className="pt-[5rem]">
        <SectionTitleAndContent content={studioonetitle[1]} />
      </div>
      <SectionImage sectionimg={studiotwo[0].img || ""} />
    </div>
  );
};

export default StudioThree;

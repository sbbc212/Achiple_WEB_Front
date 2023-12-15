import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionCard from "./SectionCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const SectionThree = () => {
  return (
    <>
      <div className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
        <SectionTitleAndContent content={configuratordata[0].textdata[4]} />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </div>
      ;
    </>
  );
};

export default SectionThree;

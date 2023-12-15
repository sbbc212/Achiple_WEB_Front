import { configuratordata } from "@/constants/3dconfiguratordata";
import { maincardData } from "@/constants/maindata";

import SecFiveCard from "./SecFiveCard";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const SectionFive = () => (
  <div className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
    <SectionTitleAndContent content={configuratordata[0].textdata[4]} />
    <SecFiveCard content={maincardData} />
    <SecFiveCard content={maincardData} />
    <SecFiveCard content={maincardData} />
  </div>
);

export default SectionFive;

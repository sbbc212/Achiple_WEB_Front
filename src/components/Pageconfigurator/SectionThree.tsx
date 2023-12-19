import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionCard from "./SectionCard";
import Linebtn from "../Button/Linebtn";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const SectionThree = () => {
  const sectionCards = [];
  for (let i = 0; i < 3; i++) {
    sectionCards.push(<SectionCard key={i} content={configuratordata} />);
  }
  return (
    <>
      <div className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
        <SectionTitleAndContent content={configuratordata[0].textdata[4]} />
        {sectionCards}
        <Linebtn text={"Archiple 도움말 섹션에서 자세히 알아보세요."} />
      </div>
    </>
  );
};

export default SectionThree;

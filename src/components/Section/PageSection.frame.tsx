import SectionImage from "./SectionImage";
import SectionKeyword from "./SectionKeyword";
import SectionTitleAndContent from "./SectionTitleAndContent";
import Linebtn from "../Button/Linebtn";

import type { datatype } from "./PageSection";

export default function PageSectionframe({ data, isBtn }: { data: datatype; isBtn: boolean }) {
  return (
    <div>
      <div className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
        <SectionKeyword sectionkeyword={data.title} />
        <SectionTitleAndContent content={data} />
        {isBtn === true && <Linebtn text={"지금 시작해보세요."} />}
      </div>
      <SectionImage sectionimg={data.img} />
    </div>
  );
}

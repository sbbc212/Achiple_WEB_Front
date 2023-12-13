import { configuratordata } from "@/constants/3dconfiguratordata";

import Linebtn from "../Button/Linebtn";
import SectionImage from "../Section/SectionImage";
import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const SectionThree = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <div key={data.id} className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
          <SectionTitleAndContent key={data.id} contenttitle={data.textdata[1].title} content={data.textdata[1].content} />
          <div className="pb-12 ">
            <Linebtn text={"구성에대해 자세히 알아보기"} />
          </div>
          <SectionImage sectionimg={data?.textdata[1].img || ""} />
        </div>
      ))}
    </div>
  );
};

export default SectionThree;

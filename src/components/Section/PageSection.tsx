import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionImage from "./SectionImage";
import SectionKeyword from "./SectionKeyword";
import SectionTitleAndContent from "./SectionTitleAndContent";
import Fillbtn from "../Button/Fillbtn";
import Linebtn from "../Button/Linebtn";

export interface datatype {
  bt__text: string;
  id: string;
  title: string;
  content: string;
  content2: string;
  img: string;
}

function PageSection({ content, isBtn }: { content: datatype[]; isBtn?: boolean }) {
  return (
    <div className="contant py-[60px]">
      {content.map((item, index) => (
        <>
          <div key={index} className=" text-center mb-[60px]">
            <SectionKeyword sectionkeyword={item.title} />
            <div className="py-6">
              <SectionTitleAndContent content={configuratordata[0].textdata[2]} />
            </div>
            {!isBtn && (index === 2 ? <Fillbtn text={item.bt__text} /> : <Linebtn text={item.bt__text} />)}
          </div>
          <SectionImage sectionimg={item.img} />
        </>
      ))}
    </div>
  );
}

export default PageSection;

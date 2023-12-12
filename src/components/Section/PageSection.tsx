import SectionImage from "./SectionImage";
import SectionKeyword from "./SectionKeyword";
import SectionTitleAndContent from "./SectionTitleAndContent";
import Linebtn from "../Button/Linebtn";

interface datatype {
  id: string;
  title: string;
  content: string;
  content2: string;
  img: string;
}
function PageSection({ content }: { content: datatype[] }) {
  return (
    <div className="contant py-[60px]">
      {content.map((item, index) => (
        <>
          <div key={index} className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
            <SectionKeyword sectionkeyword={item.title} />
            <SectionTitleAndContent contenttitle={item.content} content={item.content2} />
            <Linebtn text={"지금 시작해보세요."} />
          </div>
          <SectionImage sectionimg={item.img} />
        </>
      ))}
    </div>
  );
}

export default PageSection;

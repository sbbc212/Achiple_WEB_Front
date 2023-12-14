import SectionImage from "./SectionImage";
import SectionKeyword from "./SectionKeyword";
import SectionTitleAndContent from "./SectionTitleAndContent";
import Fillbtn from "../Button/Fillbtn";
import Linebtn from "../Button/Linebtn";

interface datatype {
  id: string;
  title: string;
  content: string;
  content2: string;
  img: string;
  bt__text: string;
}
function PageSection({ content }: { content: datatype[] }) {
  return (
    <div className="contant py-[60px]">
      {content.map((item, index) => (
        <>
          <div key={index} className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
            <SectionKeyword sectionkeyword={item.title} />
            <SectionTitleAndContent contenttitle={item.content} content={item.content2} />
            {index === 2 ? <Fillbtn text={item.bt__text} /> : <Linebtn text={item.bt__text} />}
          </div>
          <SectionImage sectionimg={item.img} />
        </>
      ))}
    </div>
  );
}

export default PageSection;

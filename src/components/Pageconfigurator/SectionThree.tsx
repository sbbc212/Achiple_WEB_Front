import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";

const SectionThree = () => {
  return (
    <>
      {configuratordata.map((data) => {
        data.textdata.slice(2, 4).map((item) => (
          <div key={item.id} className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
            <SectionTitleAndContent contenttitle={item.title} content={item.content} />
          </div>
        ));
      })}
    </>
  );
};

export default SectionThree;

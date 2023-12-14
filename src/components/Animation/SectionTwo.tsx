import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionTwo = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <>
          <div className="pt-9">
            <SectionTitleAndContent key={data.id} contenttitle={data.textdata[5].title} content={data.textdata[3].content} />
          </div>
          <TextImageCard data={carddata} datatype={data.textdata[1].datatype || ""} />
          <TextImageCard data={carddata} datatype={data.textdata[2].datatype || ""} />
          <TextImageCard data={carddata} datatype={data.textdata[1].datatype || ""} />
          <TextImageCard data={carddata} datatype={data.textdata[2].datatype || ""} />
        </>
      ))}
    </div>
  );
};

export default SectionTwo;

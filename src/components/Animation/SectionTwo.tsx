import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionTwo = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <>
          <SectionTitleAndContent key={data.id} contenttitle={data.textdata[5].title} content={data.textdata[3].content} />
          <TextImageCard datatype={data.textdata[1].datatype || ""} />
          <TextImageCard datatype={data.textdata[2].datatype || ""} />
          <TextImageCard datatype={data.textdata[1].datatype || ""} />
          <TextImageCard datatype={data.textdata[2].datatype || ""} />
        </>
      ))}
    </div>
  );
};

export default SectionTwo;

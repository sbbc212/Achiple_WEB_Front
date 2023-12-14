import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionSix = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <>
          <SectionTitleAndContent key={data.id} contenttitle={data.textdata[3].title} content="" />
          <TextImageCard data={carddata} datatype={data.textdata[2].datatype || ""} />
        </>
      ))}
    </div>
  );
};

export default SectionSix;

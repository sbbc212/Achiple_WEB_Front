import { configuratordata } from "@/constants/3dconfiguratordata";
import { realitypagecard } from "@/constants/imagecard";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const RealitySecTwo = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <>
          <SectionTitleAndContent key={data.id} contenttitle={data.textdata[6].title} content="" />
          <TextImageCard data={realitypagecard} datatype={data.textdata[2].datatype || ""} />
        </>
      ))}
    </div>
  );
};

export default RealitySecTwo;

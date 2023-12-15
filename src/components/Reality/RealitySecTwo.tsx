import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

import { configuratordata } from "@/constants/3dconfiguratordata";
import { realitypagecard } from "@/constants/imagecard";

const RealitySecTwo = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <>
          <SectionTitleAndContent key={data.id} content={data.textdata[4]} />
          <TextImageCard data={realitypagecard} datatype={data.textdata[2].datatype || ""} />
        </>
      ))}
    </div>
  );
};

export default RealitySecTwo;

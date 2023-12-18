import { configuratordata } from "@/constants/3dconfiguratordata";
import { realitypagecard } from "@/constants/imagecard";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const RealitySecTwo = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <>
          <div className="pt-[5rem]">
            <SectionTitleAndContent key={data.id} content={data.textdata[4]} />
          </div>
          <TextImageCard data={realitypagecard} />
        </>
      ))}
    </div>
  );
};

export default RealitySecTwo;

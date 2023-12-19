import { configuratordata } from "@/constants/3dconfiguratordata";
import { animationdata } from "@/constants/animation";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionTwo = () => {
  return (
    <div className="pt-9">
      {configuratordata.map((data) => (
        <>
          <div className="pt-[5rem]">
            <SectionTitleAndContent key={data.id} content={data.textdata[3]} />
          </div>
          <TextImageCard data={animationdata} />
        </>
      ))}
    </div>
  );
};

export default SectionTwo;

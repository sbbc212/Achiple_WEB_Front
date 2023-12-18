import { configuratordata } from "@/constants/3dconfiguratordata";
import { animationdata } from "@/constants/animation";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionTwo = () => {
  return (
    <>
      {configuratordata.map((data) => (
        <>
          <div className="pt-9">
            <SectionTitleAndContent key={data.id} content={data.textdata[3]} />
          </div>
          <TextImageCard data={animationdata} />
        </>
      ))}
    </>
  );
};

export default SectionTwo;

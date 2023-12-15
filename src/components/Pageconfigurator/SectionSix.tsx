import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionSix = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <SectionTitleAndContent key={data.id} contenttitle={data.textdata[6].title} content="" />
      ))}
      <TextImageCard type="imgright" />
      <TextImageCard type="imgleft" />
    </div>
  );
};

export default SectionSix;

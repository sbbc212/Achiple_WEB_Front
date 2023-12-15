import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

const SectionSix = () => {
  return (
    <>
      <SectionTitleAndContent content={configuratordata[0].textdata[2]} />
      <TextImageCard data={carddata} datatype={configuratordata[0].textdata[2].datatype || ""} />
    </>
  );
};

export default SectionSix;

import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionFive = () => (
  <>
    {configuratordata.map((data) => (
      <>
        <SectionTitleAndContent key={data.id} contenttitle={data.textdata[2].title} content="" />
        <TextImageCard data={carddata} datatype={data.textdata[2].datatype || ""} />
      </>
    ))}
  </>
);

export default SectionFive;

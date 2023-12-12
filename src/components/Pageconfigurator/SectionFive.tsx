import { configuratordata } from "@/constants/3dconfiguratordata";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionFive = () => (
  <>
    {configuratordata.map((data) => (
      <SectionTitleAndContent key={data.id} contenttitle={data.textdata[5].title} content="" />
    ))}
    <TextImageCard type="imgright" />
  </>
);

export default SectionFive;

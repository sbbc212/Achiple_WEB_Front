import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

const SectionFive = () => (
  <>
    {configuratordata.map((data) => (
      <>
        <SectionTitleAndContent key={data.id} content={data.textdata[2]} />
        <TextImageCard data={carddata} datatype={data.textdata[2].datatype || ""} />
      </>
    ))}
  </>
);

export default SectionFive;

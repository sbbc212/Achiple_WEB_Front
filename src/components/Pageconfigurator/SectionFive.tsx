import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionFive = () => (
  <>
    {configuratordata.map((data) => (
      <>
        <SectionTitleAndContent key={data.id} content={data.textdata[2]} />
        <TextImageCard data={carddata} />
      </>
    ))}
  </>
);

export default SectionFive;

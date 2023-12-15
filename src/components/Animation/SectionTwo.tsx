import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

const SectionTwo = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <>
          <div className="pt-9">
            <SectionTitleAndContent key={data.id} content={data.textdata[3]} />
          </div>
          <TextImageCard data={carddata} />
          <TextImageCard data={carddata} />
          <TextImageCard data={carddata} />
          <TextImageCard data={carddata} />
        </>
      ))}
    </div>
  );
};

export default SectionTwo;

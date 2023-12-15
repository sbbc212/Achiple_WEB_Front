import SectionTitleAndContent from "../Section/SectionTitleAndContent";
import TextImageCard from "../textimagecard/TextImageCard";

import { configuratordata } from "@/constants/3dconfiguratordata";
import { carddata } from "@/constants/imagecard";

const SectionTwo = () => {
  return (
    <div>
      {configuratordata.map((data) => (
        <>
          <div className="pt-9">
            <SectionTitleAndContent key={data.id} content={data.textdata[3]} />
          </div>
          <TextImageCard data={carddata} datatype={data.textdata[1].datatype || ""} />
          <TextImageCard data={carddata} datatype={data.textdata[2].datatype || ""} />
          <TextImageCard data={carddata} datatype={data.textdata[1].datatype || ""} />
          <TextImageCard data={carddata} datatype={data.textdata[2].datatype || ""} />
        </>
      ))}
    </div>
  );
};

export default SectionTwo;

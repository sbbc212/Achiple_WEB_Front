import { mainlastsection } from "@/constants/maindata";

import ImageCard from "./ImageCard";
import TextCard from "../Cardlayout/TextCard";

import type { CarddataType } from "@/constants/imagecard";

const TextImageCard = ({ datatype, data }: { data: CarddataType[]; datatype: string }) => {
  return (
    <div className="py-10">
      {data.map((content: CarddataType) => (
        <div key={content.title} className={`${datatype === content.type ? "flex" : "flex flex-row-reverse"} items-center pt-10 justify-around`}>
          <ImageCard dataimg={content.img} />
          <TextCard lastsection={mainlastsection[1]} />
        </div>
      ))}
    </div>
  );
};

export default TextImageCard;

import ImageCard from "./ImageCard";
import TextCard from "./TextCardList";

import type { CarddataType } from "@/constants/imagecard";

const TextImageCard = ({ data }: { data: CarddataType[] }) => {
  return (
    <div className="py-10">
      {data.map((content: CarddataType) => (
        <div key={content.title} className={`${content.type === "imgleft" ? "flex" : "flex flex-row-reverse"} items-center pt-10 justify-around`}>
          <ImageCard dataimg={content.img} />
          <TextCard dataid={content.id} title={content.title} content={content.content} />
        </div>
      ))}
    </div>
  );
};
export default TextImageCard;

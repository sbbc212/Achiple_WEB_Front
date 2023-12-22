import ImageCard from "./ImageCard";
import TextCard from "./TextCardList";

import type { CarddataType } from "@/constants/imagecard";

const TextImageCard = ({ data }: { data: CarddataType[] }) => {
  return (
    <div className="py-[60px]">
      {data.map((content: CarddataType) => (
        <div key={content.title}>
          <div className={`${content.type === "imgleft" ? "flex" : "flex flex-row-reverse"} items-center py-[50px] justify-around`}>
            <ImageCard dataimg={content.img} />
            <TextCard dataid={content.id} title={content.title} content={content.content} btntext={content.btntext} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TextImageCard;

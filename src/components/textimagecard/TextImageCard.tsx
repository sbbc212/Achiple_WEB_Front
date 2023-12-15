import { carddata } from "@/constants/imagecard";

import ImageCard from "./ImageCard";
import TextCard from "./TextCardList";

const TextImageCard = ({ type }: { type: string }) => {
  switch (type) {
    case "imgleft":
      return (
        <div className="flex items-center pt-10 justify-center space-x-24">
          {carddata.map((data) => (
            <>
              <ImageCard dataimg={data.img} />
              <TextCard dataid={""} title={""} content={""} />
            </>
          ))}
        </div>
      );
    case "imgright":
      return (
        <div className="flex items-center pt-10 justify-center space-x-24">
          {carddata.map((data) => (
            <>
              <TextCard dataid={""} title={""} content={""} />
              <ImageCard dataimg={data.img} />
            </>
          ))}
        </div>
      );
  }
};

export default TextImageCard;

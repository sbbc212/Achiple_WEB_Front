import { carddata } from "@/constants/imagecard";

import ImageCard from "./ImageCard";
import TextCard from "../Cardlayout/TextCard";

const TextImageCard = ({ datatype }: { datatype: string }) => {
  return (
    <div>
      {carddata.map((data) => (
        <div key={data.title} className={`${datatype === data.type ? "flex" : "flex flex-row-reverse"} items-center pt-10 justify-center space-x-24`}>
          <ImageCard dataimg={data.img} />
          <TextCard text={data} btnType={false} btnText={""} />
        </div>
      ))}
    </div>
  );
};

export default TextImageCard;

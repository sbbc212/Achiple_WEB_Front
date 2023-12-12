import { carddata } from "@/constants/imagecard";

import Linebtn from "../Button/Linebtn";

const TextCardWithBtn = () => {
  return (
    <div>
      {carddata.map((data) => (
        <div key={data.id}>
          <p className="text-3xl leading-loose font-bold">{data.title}</p>
          <p className="text-lg text-[#595959]">{data.content}</p>
          <Linebtn text={data.btntext} />
        </div>
      ))}
    </div>
  );
};

export default TextCardWithBtn;

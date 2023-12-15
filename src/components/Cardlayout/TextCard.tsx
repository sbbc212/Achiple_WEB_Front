import Linebtn from "../Button/Linebtn";

import type { textCardType } from "@/constants/maindata";

function TextCard({ text, btnType, btnText }: { text: textCardType; btnType: boolean; btnText: string }) {
  return (
    <li className="card-list-item">
      <span className=" block font-bold text-[18px] mb-[20px]">{text.title}</span>
      <p className="my-[20px]">{text.content}</p>
      {btnType === true && <Linebtn text={btnText} />}
    </li>
  );
}

export default TextCard;

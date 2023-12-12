import Linebtn from "../Button/Linebtn";

import type { textCardType } from "@/constants/maindata";

function TextCard({ text, btnType }: { text: textCardType; btnType: boolean }) {
  return (
    <li className="card-list-item">
      <span className=" block font-bold text-[18px] mb-[20px]">{text.title}</span>
      <p className="my-[20px]">{text.content}</p>
      {btnType === true && <Linebtn text="start" />}
    </li>
  );
}

export default TextCard;

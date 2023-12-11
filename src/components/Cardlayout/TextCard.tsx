import Linebtn from "../Button/Linebtn";

import type { textCardType } from "@/constants/maindata";

function TextCard({ lastsection }: { lastsection: textCardType }) {
  return (
    <li className="card-list-item">
      <span className=" block font-bold text-[18px] mb-[20px]">{lastsection.title}</span>
      <p className="my-[20px]">{lastsection.content}</p>
      <Linebtn />
    </li>
  );
}

export default TextCard;

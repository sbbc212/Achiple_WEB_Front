import Linebtn from "../Button/Linebtn";

import type { maincardDataType } from "@/constants/maindata";

function Card({ cardlist, btntext }: { cardlist: maincardDataType; btntext: string }) {
  return (
    <li className="card-list-item">
      <div className="card-img" />
      <div className="card-desc mt-[20px]">
        <span className="item-kerword text-[16px] mb-[14px]">{cardlist.subtitle}</span>
        <span className="block font-bold text-[24px] mb-[26px]">{cardlist.secSubtitle}</span>
        <p className=" mb-[20px]">{cardlist.content}</p>
        <Linebtn text={btntext} />
      </div>
    </li>
  );
}

export default Card;

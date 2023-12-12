import CardContent from "./CardContent";
import CardImage from "./CardImage";
import CardKeyword from "./CardKeyword";
import CardTitle from "./CardTitle";
import Linebtn from "../Button/Linebtn";

import type { maincardDataType } from "@/constants/maindata";

function Card({ cardlist }: { cardlist: maincardDataType }) {
  return (
    <li className="card-list-item">
      <CardImage cardImg={cardlist.img} />
      <div className="card-desc mt-[20px]">
        <CardKeyword cardsubtitle={cardlist.subtitle} />
        <CardTitle cardtitle={cardlist.secSubtitle} />
        <CardContent cardcontent={cardlist.content} />
        <Linebtn text={cardlist.btntext} />
      </div>
    </li>
  );
}

export default Card;

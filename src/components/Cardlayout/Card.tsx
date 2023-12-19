import styles from "./itemlist.module.css";
import Linebtn from "../Button/Linebtn";

import type { maincardDataType } from "@/constants/maindata";

function Card({ cardlist, btntext, isBtn }: { cardlist: maincardDataType; btntext: string; isBtn?: boolean }) {
  return (
    <li className="card-list-item">
      <div className={styles.card_img}>
        <img className="h-full rounded-2xl" src={cardlist.img} alt="card" />
      </div>
      <div className="card-desc mt-[20px]">
        {!cardlist.type && <span className="item-kerword text-[16px] mb-[14px]">{cardlist.subtitle}</span>}
        <span className="block font-bold text-[24px] mb-[26px]">{cardlist.secSubtitle}</span>
        <p className=" mb-[20px]">{cardlist.content}</p>
        {cardlist.type && <p className=" mb-[20px]">{cardlist.seccondcontent}</p>}
        {!isBtn && <Linebtn text={btntext} />}
      </div>
    </li>
  );
}

export default Card;

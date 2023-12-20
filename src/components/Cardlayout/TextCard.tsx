import styles from "./itemlist.module.css";
import Linebtn from "../Button/Linebtn";

import type { textCardType } from "@/constants/maindata";

function TextCard({ text, btnType, btnText }: { text: textCardType; btnType: boolean; btnText: string }) {
  return (
    <li className={styles.text_layout}>
      <span className={`block font-bold ${text?.textgray === "true" ? "text-[24px]" : "text-[18px]"}  mb-[14px]`}>{text?.title}</span>
      <p className={`${text?.textgray === "true" ? "text-[1.1rem] text-gray-500" : ""} my-[24px]`}>{text?.content}</p>
      {btnType === true && <Linebtn text={btnText} />}
    </li>
  );
}

export default TextCard;

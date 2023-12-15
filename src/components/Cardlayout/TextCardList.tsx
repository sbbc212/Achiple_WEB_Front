import TextCard from "./TextCard";

import type { textCardType } from "@/constants/maindata";

function TextCardList({ textCardData }: { textCardData: textCardType[] }) {
  return (
    <div className="layout flex justify-evenly">
      {textCardData.map((item: textCardType) => (
        <TextCard text={item} key={item.id} btnType={false} btnText={""} />
      ))}
    </div>
  );
}

export default TextCardList;

import TextCard from "./TextCard";

import type { textCardType } from "@/constants/maindata";

function TextCardList({ textCardData }: { textCardData: textCardType[] }) {
  return (
    <div className="layout flex justify-evenly">
      {textCardData.map((item: textCardType) => (
        <TextCard key={item.id} text={item} btnType={false} btnText="시작해보기." />
      ))}
    </div>
  );
}

export default TextCardList;

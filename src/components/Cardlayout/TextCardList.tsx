import TextCard from "./TextCard";

import type { textCardType } from "@/constants/maindata";

function TextCardList({ textCardData }: { textCardData: textCardType[] }) {
  return (
    <div className="layout flex justify-between">
      {textCardData.map((item: textCardType) => (
        <TextCard key={item.id} text={item} btnType={false} />
      ))}
    </div>
  );
}

export default TextCardList;

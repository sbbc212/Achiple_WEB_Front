import TextCard from "./TextCard";

import type { textCardType } from "@/constants/maindata";

function TextCardList({ textCardData }: { textCardData: textCardType[] }) {
  return (
    <div className="layout flex justify-evenly">
      {textCardData.map((item: textCardType) => (
        <TextCard lastsection={item} key={item.id} />
      ))}
    </div>
  );
}

export default TextCardList;

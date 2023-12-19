import TextCard from "./TextCard";

import type { textCardType } from "@/constants/maindata";

function TextCardList({ textCardData }: { textCardData: textCardType[] }) {
  return (
    <div>
      <ul className="flex justify-between py-[32px]">
        {textCardData.map((item: textCardType) => (
          <TextCard key={item.id} text={item} btnType={false} btnText={""} />
        ))}
      </ul>
    </div>
  );
}

export default TextCardList;

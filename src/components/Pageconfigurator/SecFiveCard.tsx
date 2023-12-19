import ThreeCardGroup from "./ThreeCardGroup";

import type { maincardDataType } from "@/constants/maindata";

const SecFiveCard = ({ content }: { content: maincardDataType[] }) => {
  return (
    <ul className="flex text-start justify-between pb-[60px]">
      <ThreeCardGroup content={content} />
    </ul>
  );
};

export default SecFiveCard;

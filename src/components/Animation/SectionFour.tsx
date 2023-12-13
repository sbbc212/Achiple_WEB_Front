import { mainlastsection } from "@/constants/maindata";

import TextCard from "../Cardlayout/TextCard";

const SectionFour = () => {
  return (
    <div className="flex justify-between pb-9">
      {mainlastsection.map((item) => (
        <TextCard key={item.id} text={item} btnType={false} btnText={""} />
      ))}
    </div>
  );
};

export default SectionFour;

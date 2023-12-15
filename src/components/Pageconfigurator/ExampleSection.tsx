import { configuratordata } from "@/constants/3dconfiguratordata";

import Card from "../Cardlayout/Card";

import type { maincardDataType } from "@/constants/maindata";

const ExampleSection = () => {
  return (
    <ul className="flex justify-between pb-[60px]">
      {configuratordata.map((data) => data.cardcontent.map((item: maincardDataType) => <Card cardlist={item} btntext={""} key={item.id} />))}
    </ul>
  );
};

export default ExampleSection;

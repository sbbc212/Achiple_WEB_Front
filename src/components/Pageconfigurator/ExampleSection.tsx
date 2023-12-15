import Card from "../Cardlayout/Card";

import type { maincardDataType } from "@/constants/maindata";

import { configuratordata } from "@/constants/3dconfiguratordata";

const ExampleSection = () => {
  return (
    <ul className="flex justify-between pb-[60px]">
      {configuratordata.map((data) => data.cardcontent.map((item: maincardDataType) => <Card key={item.subtitle} cardlist={item} btntext={item.btnText} />))}
    </ul>
  );
};

export default ExampleSection;

import { configuratordata } from "@/constants/3dconfiguratordata";

import Card from "../Cardlayout/Card";

import type { maincardDataType } from "@/constants/maindata";

const ExampleSection = () => {
  return (
    <ul className="flex justify-between pb-[60px]">
      {configuratordata.map((data) => data.cardcontent.map((item: maincardDataType) => <Card key={item.subtitle} cardlist={item} btntext={"테스트 버튼"} />))}
    </ul>
  );
};

export default ExampleSection;

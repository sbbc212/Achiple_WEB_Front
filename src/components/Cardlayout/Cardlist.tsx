import Card from "./Card";

import type { maincardDataType } from "@/constants/maindata";

import "./style.css";

function Cardlist({ maincardData, btnText, isBtn }: { maincardData: maincardDataType[]; btnText?: string; isBtn?: boolean }) {
  return (
    <>
      <div className="page-tit text-center py-[60px]">
        <h3 className="text-[48px] font-medium">영감과 창의적인 솔루션 찾기</h3>
      </div>
      <ul className="flex justify-between pb-[60px]">
        {maincardData.map((cardlist, index) => (
          <Card key={index} cardlist={cardlist} btntext={btnText!} isBtn={isBtn} />
        ))}
      </ul>
    </>
  );
}

export default Cardlist;

import React from "react";

import { main } from "@/constants/maindata";

import Fillbtn from "../Button/Fillbtn";

function Textlist() {
  return (
    <>
      <div className="page-tit text-center py-[60px]">
        <h3 className="text-[48px] font-medium">소규모 및 대규모 팀의 역량 강화</h3>
      </div>
      <ul className="flex justify-between pb-[60px]">
        {main.map((item, index) => (
          <li className="card-list-item" key={index}>
            <span className=" block font-bold text-[18px] mb-[20px]">{item.title}</span>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
      <div className="text-center py-[60px]">
        <Fillbtn />
      </div>
    </>
  );
}

export default Textlist;

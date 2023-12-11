import React from "react";

import { maincarddata } from "@/constants/maindata";

import Linebtn from "../Button/Linebtn";

import "./style.css";

function Cardlist() {
  return (
    <>
      <div className="page-tit text-center py-[60px]">
        <h3 className="text-[48px] font-medium">영감과 창의적인 솔루션 찾기</h3>
      </div>
      <ul className="flex justify-between pb-[60px]">
        {maincarddata.map((cardlist, index) => (
          <li key={index} className="card-list-item">
            <div className="card-img"></div>
            <div className="card-desc mt-[20px]">
              <span className="item-kerword text-[16px] mb-[14px]">{cardlist.subtitle}</span>
              <span className="block font-bold text-[24px] mb-[26px]">{cardlist.subtitle2}</span>
              <p className=" mb-[20px]">{cardlist.content}</p>
              <Linebtn />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cardlist;

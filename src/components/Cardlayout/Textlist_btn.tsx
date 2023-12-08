import React from "react";

import { mainlastsection } from "@/constants/maindata";

import Linebtn from "../Button/Linebtn";

function Textlist_btn() {
  return (
    <div className="pt-[30px] pb-[60px]">
      <div className="page-tit text-center py-[60px]">
        <h3 className="text-[48px] font-medium">다이빙할 준비가 되셨나요?</h3>
      </div>
      <ul className="flex justify-between pb-[60px]">
        {mainlastsection.map((lastsection) => (
          <li key={lastsection.title} className="card-list-item">
            <span className=" block font-bold text-[18px] mb-[20px]">{lastsection.title}</span>
            <p className="my-[20px]">{lastsection.content}</p>
            <Linebtn />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Textlist_btn;

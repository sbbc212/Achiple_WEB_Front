import React from "react";

import Linebtn from "../Button/Linebtn";

import "./style.css";

function Cardlist() {
  return (
    <div>
      <div className="page-tit text-center py-[60px]">
        <h3 className="text-[48px] font-medium">영감과 창의적인 솔루션 찾기</h3>
      </div>
      <ul className="flex justify-between pb-[60px]">
        <li className="card-list-item">
          <div className="card-img"></div>
          <div className="card-desc mt-[20px]">
            <span className="item-kerword text-[16px] mb-[14px]">산업</span>
            <span className="block font-bold text-[24px] mb-[26px]">패션</span>
            <p className=" mb-[20px]">내부 사용, 매장 내 및 온라인 소매를 위한 몰입형 제품 쇼케이스를 위한 다목적 디자인 솔루션입니다.</p>
            <Linebtn />
          </div>
        </li>
        <li className="card-list-item">
          <div className="card-img"></div>
          <div className="card-desc mt-[20px]">
            <span className="item-kerword text-[16px] mb-[14px]">산업</span>
            <span className="block font-bold text-[24px] mb-[26px]">패션</span>
            <p className=" mb-[20px]">내부 사용, 매장 내 및 온라인 소매를 위한 몰입형 제품 쇼케이스를 위한 다목적 디자인 솔루션입니다.</p>
            <Linebtn />
          </div>
        </li>
        <li className="card-list-item">
          <div className="card-img"></div>
          <div className="card-desc mt-[20px]">
            <span className="item-kerword text-[16px] mb-[14px]">산업</span>
            <span className="block font-bold text-[24px] mb-[26px]">패션</span>
            <p className=" mb-[20px]">내부 사용, 매장 내 및 온라인 소매를 위한 몰입형 제품 쇼케이스를 위한 다목적 디자인 솔루션입니다.</p>
            <Linebtn />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Cardlist;

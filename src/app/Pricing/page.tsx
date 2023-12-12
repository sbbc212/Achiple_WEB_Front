"'use client ";

import React from "react";

import HomePage from "@/components/Accordion/HomePage";
import Tab_menu from "@/components/Tabmenu/Tab_menu";

function page() {
  return (
    <div className="layout">
      <div className="contant" style={{ height: "100vh" }}>
        <div className="section-tit text-center" style={{ padding: "120px 60px 0 60px" }}>
          <h3 className="text-[68px] mb-[14px]" style={{ fontWeight: "600" }}>
            가격
          </h3>
          <p className="pb-[30px]" style={{ maxWidth: "900px", margin: "0 auto", wordBreak: "keep-all" }}>
            연간 구독 플랜으로 2.5개월을 절약하세요.
            <br /> 지금 30일 무료 평가판을 시작해 보세요 .
          </p>
        </div>
        <Tab_menu />
        <HomePage />
      </div>
    </div>
  );
}

export default page;

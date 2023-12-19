"use client";

import React from "react";

import HomePage from "@/components/Accordion/HomePage";
import Tab_menu from "@/components/Tabmenu/Tab_menu";

export interface tabData {
  id: number;
  title: string;
  pricing: string;
  description: string;
}

function Pricingpage() {
  const data: tabData[] = [
    {
      id: 0,
      title: "월간",
      pricing: "$19",
      description: "30일 평가판 기간 이후에는 매월 청구 됩니다.",
    },
    {
      id: 1,
      title: "연간",
      pricing: "$15",
      description: "30일 평가판 기간 이후에는 매월 청구 됨, 연간 $180",
    },
  ];

  return (
    <div className="layout">
      <div className="contant">
        <div className="section-tit text-center" style={{ padding: "120px 60px 0 60px" }}>
          <h3 className="text-[68px] mb-[14px]" style={{ fontWeight: "600" }}>
            가격
          </h3>
          <p className="pb-[30px]" style={{ maxWidth: "900px", margin: "0 auto", wordBreak: "keep-all" }}>
            연간 구독 플랜으로 2.5개월을 절약하세요.
            <br /> 지금 30일 무료 평가판을 시작해 보세요 .
          </p>
        </div>
        <Tab_menu data={data} />
        <HomePage />
      </div>
    </div>
  );
}

export default Pricingpage;

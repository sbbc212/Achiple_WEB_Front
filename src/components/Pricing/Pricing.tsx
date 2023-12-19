import React from "react";

import styles from "./pricing.module.css";

import type { tabData } from "@/app/Pricing/page";

function Pricing({ data }: { data: tabData }) {
  const plans = [
    {
      type: "Starter",
      price: "$0",
      description: "3D 디자인, 공유 및 삽입을 시작합니다.",
      features: ["스튜디오 - 디자인 모드", "60개 이상의 파일 형식 가져오기", "프로젝트 공유/삽입", "2D 및 3D 파일 내보내기", "10 개 프로젝트"],
      buttonLabel: "시작하다",
    },
    {
      type: "Pro",
      price: data.pricing,
      description: "웹, AR, 메타버스를 위한 대화형 경험을 구축하는 데 사용됩니다.",
      features: ["애니메이션", "상호작용", "AR 파일 내보내기(usdz, glb, gltf)", "증강 현실", "버전기록", "100개프로젝트", "브랜딩 없이 조회수 10만회*"],
      buttonLabel: "30일 무료 평가판을 시작하세요",
    },
    {
      type: "Business",
      price: "Custom",
      description: "팀 및 비즈니스 확장에 적합합니다. 귀하의 필요에 맞게 맞춤 제작되었습니다.",
      features: ["협업기능", "작업공간역활관리", "전담 성공 관리자", "팀 온보딩", "싱글 사인온(SSO/SAML)", "API", "추가기능"],
      buttonLabel: "영업팀에 문의",
    },
  ];
  return (
    <div>
      <ul className="flex justify-between">
        {plans.map((plan) => (
          <li className={styles.cardItem} key={plan.type}>
            <div>
              <span className={`rating font-bold text-[20px] ${plan.type === "Pro" ? "text-white" : "text-[#191919]"}`}>{plan.type}</span>
              <p className={`pricing font-bold text-[54px] mb-[20px] ${plan.type === "Pro" ? "text-white" : "text-[#191919]"}`}>{plan.price}</p>
              <div className={`card-desc py-[20px] ${plan.type === "Pro" ? "text-white" : "text-[#191919]"}`}>{plan.description}</div>
            </div>
            <div className={styles.option}>
              {plan.type !== "Business" && (
                <span className={`${plan.type === "Pro" ? "text-white" : "text-[#191919]"}`}>{`${
                  plan.type === "Pro" ? "스타터 플러스" : "Pro plus"
                } 의 모든 것`}</span>
              )}
              <ul>
                {plan.features.map((feature) => (
                  <li className="option-list" key={feature}>
                    <span className={`bold flex items-center gap-2 ${plan.type === "Pro" ? "text-white" : "text-[#191919]"}`}>
                      <i>
                        <img src={`img/check${plan.type === "Pro" ? "_w" : "_b"}.png`} alt="" />
                      </i>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.buttonWrap}>
              <button className="w-full py-4">{plan.buttonLabel}</button>
            </div>
          </li>
        ))}
      </ul>
      <span className="text-center block pt-[12px] pb-[60px]">
        Workspace 요금제 구독은 취소하지 않는 한 각 결제 주기가 끝날 때 자동으로 갱신됩니다. 서비스 약관을 참조하세요 .
      </span>
    </div>
  );
}

export default Pricing;

import React from "react";

import styles from "./pricing.module.css";

import type { tabData } from "../Tabmenu/Tab_menu";

function Pricing({ data }: { data: tabData }) {
  const starter = ["스튜디오 - 디자인 모드", "60개 이상의 파일 형식 가져오기", "프로젝트 공유/삽입", "2D 및 3D 파일 내보내기", "10 개 프로젝트"];
  const pro = ["애니메이션", "상호작용", "AR 파일 내보내기(usdz, glb, gltf)", "증강 현실", "버전기록", "100개프로젝트", "브랜딩 없이 조회수 10만회*"];
  const business = ["협업기능", "작업공간역활관리", "전담 성공 관리자", "팀 온보딩", "싱글 사인온(SSO/SAML)", "API", "추가기능"];
  return (
    <div>
      <ul className="flex justify-between">
        <li className={styles.cardItem}>
          <div>
            <span className="rating font-bold	text-[20px]">Starter</span>
            <p className="pricing font-bold text-[54px] mb-[20px]">$0</p>
            <div className="card-desc py-[20px]">3D 디자인, 공유 및 삽입을 시작합니다.</div>
          </div>
          <div className={styles.option}>
            <ul>
              {starter.map((item) => (
                <li className="option-list" key={item}>
                  <span className="bold flex items-center gap-2 text-[#191919]">
                    <i>
                      <img src="img/check.png" alt="" />
                    </i>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.buttonWrap}>
            <button className="w-full py-4">시작하다</button>
          </div>
        </li>
        <li className={styles.cardItem}>
          <div>
            <span className="rating font-bold text-[20px] text-white">Pro</span>
            <div className="pricing-wrap flex items-center gap-5 mb-[20px] ">
              <p className="pricing font-bold text-[54px] text-white ">{data.pricing}</p>
              <p className="pricing-text text-[16px] text-white">{data.description}</p>
            </div>
            <div className="card-desc py-[20px] ">
              <p className="text-white">웹, AR, 메타버스를 위한 대화형 경험을 구축하는 데 사용됩니다.</p>
            </div>
          </div>
          <div className={styles.option}>
            <span className="text-white">스타터 플러스 의 모든 것</span>
            <ul>
              {pro.map((item) => (
                <li className="option-list" key={item}>
                  <span className="bold flex items-center gap-2 text-white">
                    <i>
                      <img src="img/check_w.png" alt="" />
                    </i>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.buttonWrap}>
            <button className="w-full py-4">30일 무료 평가판을 시작하세요</button>
          </div>
        </li>
        <li className={styles.cardItem}>
          <div>
            <span className="rating font-bold	text-[20px]">Business</span>
            <p className="pricing font-bold text-[54px] mb-[20px]">Custom</p>
            <div className="card-desc py-[20px]">
              <p>팀 및 비즈니스 확장에 적합합니다. 귀하의 필요에 맞게 맞춤 제작되었습니다.</p>
            </div>
          </div>
          <div className={styles.option}>
            <span>Pro plus 의 모든 것</span>
            <ul>
              {business.map((item) => (
                <li className="option-list" key={item}>
                  <span className="bold flex items-center gap-2 text-[#191919]">
                    <i>
                      <img src="img/check.png" alt="" />
                    </i>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.buttonWrap}>
            <button className="w-full py-4">영업팀에 문의</button>
          </div>
        </li>
      </ul>
      <span className="text-center block pt-[12px] pb-[60px]">
        Workspace 요금제 구독은 취소하지 않는 한 각 결제 주기가 끝날 때 자동으로 갱신됩니다. 서비스 약관을 참조하세요 .
      </span>
    </div>
  );
}

export default Pricing;

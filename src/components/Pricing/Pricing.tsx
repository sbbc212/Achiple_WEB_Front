import React from "react";

import styles from "./pricing.module.css";

function Pricing() {
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
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  스튜디오 - 디자인 모드
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  60개 이상의 파일 형식 가져오기
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  프로젝트 공유/삽입
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  2D 및 3D 파일 내보내기
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  10 개 프로젝트
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  브랜딩이 포함된 무료 공개 시청*
                </span>
              </li>
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
              <p className="pricing font-bold text-[54px] text-white ">$0</p>
              <p className="pricing-text text-[16px] text-white">
                30일 평가판 기간 이후에는 매월
                <br />
                청구됩니다.
              </p>
            </div>
            <div className="card-desc py-[20px] ">
              <p className="text-white">웹, AR, 메타버스를 위한 대화형 경험을 구축하는 데 사용됩니다.</p>
            </div>
          </div>
          <div className={styles.option}>
            <span className="text-white">스타터 플러스 의 모든 것</span>
            <ul>
              <li className="option-list">
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  애니메이션
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  상호작용
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  AR 파일 내보내기(usdz, glb, gltf)
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  증강 현실
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  버전 기록
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  100 개 프로젝트
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  브랜딩 없이 조회수 10만회*
                </span>
              </li>
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
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  협업 기능
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  작업공간 역할 관리
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  전담 성공 관리자
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  팀 온보딩
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  싱글 사인온(SSO/SAML)
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  API
                </span>
              </li>
              <li>
                <span className="bold flex items-center gap-2">
                  <i>
                    <img src="img/check.png" alt="" />
                  </i>
                  추가기능
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.buttonWrap}>
            <button className="w-full py-4">영업팀에 문의</button>
          </div>
        </li>
      </ul>
      <span className="text-center block py-5">
        Workspace 요금제 구독은 취소하지 않는 한 각 결제 주기가 끝날 때 자동으로 갱신됩니다. 서비스 약관을 참조하세요 .
      </span>
    </div>
  );
}

export default Pricing;

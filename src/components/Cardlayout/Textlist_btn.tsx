import React from "react";

import Linebtn from "../Button/Linebtn";

function Textlist_btn() {
  return (
    <div className="pt-[30px] pb-[60px]">
      <div className="page-tit text-center py-[60px]">
        <h3 className="text-[48px] font-medium">다이빙할 준비가 되셨나요?</h3>
      </div>
      <ul className="flex justify-between pb-[60px]">
        <li className="card-list-item">
          <span className=" block font-bold text-[18px] mb-[20px]">벡터 스타터</span>
          <p className="my-[20px]">
            기술 세트를 구축하고 3D 디자인의 가능성에 대한 이해를 높일 수 있는 접근 가능한 옵션입니다. 아이디어, 프로젝트, 콘텐츠 협업 및 공유 방법을 시각화하기
            위한 새로운 옵션을 소개합니다.
          </p>
          <Linebtn />
        </li>
        <li className="card-list-item">
          <span className=" block font-bold text-[18px] mb-[20px]">벡터 프로</span>
          <p className="my-[20px]">
            고객이나 외부 파트너에게 컨셉을 전달하는 전문가를 위한 이상적인 계획입니다. Vectary PRO로 최선을 다해 작업해 보세요. 시각적 설명, 몰입형 경험, 실제
            디자인 효과를 제공하는 기능에 액세스해 보세요.
          </p>
          <Linebtn />
        </li>
        <li className="card-list-item">
          <span className=" block font-bold text-[18px] mb-[20px]">벡터사업</span>
          <p className="my-[20px]">
            모든 3D 파이프라인에 통합하기 위해 원활한 워크플로우가 필요한 기업을 위한 전문 솔루션입니다. 팀, 프로젝트 및 디자인 플랫폼을 하나로 통합하세요. 3D
            디자인을 최대한 활용할 수 있도록 성능이 향상되었습니다.
          </p>
          <Linebtn />
        </li>
      </ul>
    </div>
  );
}

export default Textlist_btn;

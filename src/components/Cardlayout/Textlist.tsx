import React from "react";

import Fillbtn from "../Button/Fillbtn";

function Textlist() {
  return (
    <div>
      <div className="page-tit text-center py-[60px]">
        <h3 className="text-[48px] font-medium">소규모 및 대규모 팀의 역량 강화</h3>
      </div>
      <ul className="flex justify-between pb-[60px]">
        <li className="card-list-item">
          <span className=" block font-bold text-[18px] mb-[20px]">협동</span>
          <p>
            시간과 노력을 절약해 주는 실용적인 기능. 모든 장치에서 프로젝트에 쉽게 액세스할 수 있습니다. 파일 복제, 디자인 시스템 옵션, 사용자 정의 라이브러리
            및 전체 3D 장면을 프레젠테이션 또는 생산성 도구에 쉽게 포함할 수 있습니다.
          </p>
        </li>
        <li className="card-list-item">
          <span className=" block font-bold text-[18px] mb-[20px]">협동</span>
          <p>
            시간과 노력을 절약해 주는 실용적인 기능. 모든 장치에서 프로젝트에 쉽게 액세스할 수 있습니다. 파일 복제, 디자인 시스템 옵션, 사용자 정의 라이브러리
            및 전체 3D 장면을 프레젠테이션 또는 생산성 도구에 쉽게 포함할 수 있습니다.
          </p>
        </li>
        <li className="card-list-item">
          <span className=" block font-bold text-[18px] mb-[20px]">협동</span>
          <p>
            시간과 노력을 절약해 주는 실용적인 기능. 모든 장치에서 프로젝트에 쉽게 액세스할 수 있습니다. 파일 복제, 디자인 시스템 옵션, 사용자 정의 라이브러리
            및 전체 3D 장면을 프레젠테이션 또는 생산성 도구에 쉽게 포함할 수 있습니다.
          </p>
        </li>
      </ul>
      <div className="text-center py-[60px]">
        <Fillbtn />
      </div>
    </div>
  );
}

export default Textlist;

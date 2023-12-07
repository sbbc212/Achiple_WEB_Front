import React from "react";

import Linebtn from "../Button/Linebtn";

function Page_section() {
  return (
    <div className="contant">
      <div className="section-tit text-center mb-[60px]" style={{ padding: "120px 60px 0 60px" }}>
        <div className="keyword">
          <p>솔루션</p>
        </div>
        <h3 className="text-[48px] mb-[14px]" style={{ fontWeight: "600" }}>
          3D 워크플로에 필요한 모든 것
        </h3>
        <p className="pb-[30px]" style={{ maxWidth: "900px", margin: "0 auto", wordBreak: "keep-all" }}>
          하나의 플랫폼 내에서 컨셉을 생성, 협업, 전시 및 게시할 수 있습니다. 디자이너, 엔지니어, 제품 관리자, 마케팅 담당자 등 많은 사람들이 Vectary를 사용하여
          3D 업계에서 가장 효율적인 브라우저 내, 코드 없는 워크플로우 중 하나로 작업합니다.
        </p>
        <Linebtn />
      </div>
      <div className="card-img-wrap" style={{ width: "100%", height: "auto", borderRadius: "10px", overflow: "hidden" }}>
        <img src="/img/dummy_img_01.jpg" alt="3D 작업완료 된 이미지" />
      </div>
    </div>
  );
}

export default Page_section;

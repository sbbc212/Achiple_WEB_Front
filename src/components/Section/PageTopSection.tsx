import React from "react";

import Fillbtn from "../Button/Fillbtn";

interface PropsTypes {
  title: string;
  content: string;
  btnContent: string;
  hightlight: string;
  url: string;
}

function PageTopSection({ data }: { data: PropsTypes }) {
  return (
    <div className="layout contant">
      <div className="section-tit text-center mb-[60px]" style={{ padding: "120px 60px 0 60px" }}>
        <h3 className="text-[68px] mb-[14px]" style={{ fontWeight: "600" }}>
          {data.title}
        </h3>
        <p className="pb-[30px]" style={{ maxWidth: "900px", margin: "0 auto", wordBreak: "keep-all" }}>
          {data.content}
          <span style={{ fontWeight: "700" }}>{data.hightlight}</span>
        </p>
        <Fillbtn text={data.btnContent} />
      </div>
      <div className="card-img-wrap" style={{ width: "100%", height: "auto", borderRadius: "10px", overflow: "hidden" }}>
        <img src={data.url} alt="3D 작업완료 된 이미지" />
      </div>
    </div>
  );
}

export default PageTopSection;

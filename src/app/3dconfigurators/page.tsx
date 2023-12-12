import React from "react";

import SectionTwo from "@/components/Pageconfigurator/SectionTwo";
import PageTopSection from "@/components/Section/PageTopSection";
import TextImageCard from "@/components/textimagecard/TextImageCard";

const page = () => {
  const data = {
    title: "대화형 3D 및 AR로 작업 완료",
    content: "영감을 주고, 교육하고, 문제를 해결하는 대화형 3D 디자인을 만들고 관리하기 위한 온라인 플랫폼인 Vectary를 만나보세요.",
    btnContent: "지금 시작해보세요.",
    hightlight: "다운로드나 코드가필요 하지 않습니다",
    url: "/img/dummy_img_01.jpg",
  };
  return (
    <div className="layout">
      <PageTopSection data={data} />
      <SectionTwo />
      <TextImageCard type="imgright" />
      <TextImageCard type="imgleft" />
    </div>
  );
};

export default page;

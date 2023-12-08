import React from "react";

import Image from "next/image";

import { mainbottom, maintext, topsection } from "@/constants/maindata";

import Linebtn from "../Button/Linebtn";

interface datatype {
  id: string;
  title: string;
  content: string;
  content2: string;
  img: string;
}
function Page_section({ type }: { type: string }) {
  let content: datatype[] = [];
  switch (type) {
    case "topsection":
      content = topsection;
      break;
    case "maintop":
      content = maintext;
      break;
    case "mainbottom":
      content = mainbottom;
      break;
  }
  return (
    <div className="contant py-[60px]">
      {content.map((item, index) => (
        <>
          <div key={index} className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
            <div className="keyword">
              <p>{item.title}</p>
            </div>
            <h3 className="text-[48px] mb-[14px]" style={{ fontWeight: "600" }}>
              {item.content}
            </h3>
            <p className="pb-[30px]" style={{ maxWidth: "900px", margin: "0 auto", wordBreak: "keep-all" }}>
              {item.content2}
            </p>
            <Linebtn />
          </div>
          <div className="card-img-wrap" style={{ width: "100%", height: "auto", borderRadius: "10px", overflow: "hidden" }}>
            <Image src={item.img} alt="3D 작업완료 된 이미지" />
          </div>
        </>
      ))}
    </div>
  );
}

export default Page_section;

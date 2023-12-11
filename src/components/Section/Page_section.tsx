import React from "react";

import { mainbottom, maintext, topsection } from "@/constants/maindata";

import SectionImage from "./SectionImage";
import SectionKeyword from "./SectionKeyword";
import SectionTitleAndContent from "./SectionTitleAndContent";
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
            <SectionKeyword sectionkeyword={item.title} />
            <SectionTitleAndContent contenttitle={item.content} content={item.content2} />
            <Linebtn />
          </div>
          <SectionImage sectionimg={item.img} />
        </>
      ))}
    </div>
  );
}

export default Page_section;

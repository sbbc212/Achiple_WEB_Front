import React from "react";

import type { TextDataItem } from "@/constants/3dconfiguratordata";

const SectionTitleAndContent = ({ content }: { content: TextDataItem }) => {
  return (
    <>
      <h3 className="text-[48px] text-center mb-[14px]" style={{ fontWeight: "600" }}>
        {content.title}
      </h3>
      <p className="pb-[30px] text-center" style={{ maxWidth: "900px", margin: "0 auto", wordBreak: "keep-all" }}>
        {content.content}
      </p>
    </>
  );
};

export default SectionTitleAndContent;

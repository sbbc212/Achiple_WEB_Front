import React from "react";

const SectionTitleAndContent = ({ contenttitle, content }: { contenttitle: string; content: string }) => {
  return (
    <>
      <h3 className="text-[48px] text-center mb-[14px]" style={{ fontWeight: "600" }}>
        {contenttitle}
      </h3>
      <p className="pb-[30px] text-center" style={{ maxWidth: "900px", margin: "0 auto", wordBreak: "keep-all" }}>
        {content}
      </p>
    </>
  );
};

export default SectionTitleAndContent;

import type { titleAndContent } from "@/constants/3dconfiguratordata";

const SectionTitleAndContent = ({ content }: { content: titleAndContent }) => {
  return (
    <div className="section-tit text-center mb-[60px]" style={{ padding: "30px 60px 0 60px" }}>
      <h3 className="text-[48px] text-center mb-[14px]" style={{ fontWeight: "600" }}>
        {content.title}
      </h3>
      <p className="pb-[30px] text-center" style={{ maxWidth: "900px", margin: "0 auto", wordBreak: "keep-all" }}>
        {content.content}
      </p>
    </div>
  );
};

export default SectionTitleAndContent;

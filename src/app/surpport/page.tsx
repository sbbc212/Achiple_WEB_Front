import SectionTitleAndContent from "@/components/Section/SectionTitleAndContent";

import ContactBanner from "./ContactBanner";
import ListCard from "./ListCard";

import type { titleAndContent } from "@/constants/3dconfiguratordata";

export default function Surpport() {
  const data: titleAndContent = {
    id: "1",
    title: "Contact",
    content: "데모 예약, 기능 요청, 버그 신고, 커뮤니티 지원, 계정 및 청구 관련 도움말을 계정 및 청구 지원팀에 문의하세요.",
  };
  return (
    <div className="layout mx-auto mb-14">
      <SectionTitleAndContent content={data} />
      <ListCard />
      <ContactBanner />
    </div>
  );
}

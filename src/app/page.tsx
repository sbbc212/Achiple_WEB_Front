import Full from "@/components/Banner/Full";
import Cardlist from "@/components/Cardlayout/Cardlist";
import Textlist from "@/components/Cardlayout/Textlist";
import Textlist_btn from "@/components/Cardlayout/Textlist_btn";
import PageSection from "@/components/Section/PageSection";
import PageTopSection from "@/components/Section/PageTopSection";
import { mainbottom, maintext, topsection } from "@/constants/maindata";

export default function Home() {
  const data = {
    title: "대화형 3D 및 AR로 작업 완료",
    content: "영감을 주고, 교육하고, 문제를 해결하는 대화형 3D 디자인을 만들고 관리하기 위한 온라인 플랫폼인 Vectary를 만나보세요.",
    btnContent: "지금 시작해보세요.",
    hightlight: "다운로드나 코드가필요 하지 않습니다",
    url: "/img/dummy_img_01.jpg",
  };
  return (
    <div className="w-full">
      <div className="layout">
        <PageTopSection data={data} />
        <PageSection content={maintext} />
      </div>
      <Full />
      <div className="layout">
        <PageSection content={topsection} />
        <Textlist />
        <Cardlist />
        <PageSection content={mainbottom} />
      </div>
      <Full />
      <div className="layout">
        <Textlist_btn />
      </div>
    </div>
  );
}

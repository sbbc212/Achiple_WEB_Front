import Full from "@/components/Banner/Full";
import Cardlist from "@/components/Cardlayout/Cardlist";
import Textlist from "@/components/Cardlayout/Textlist";
import Textlist_btn from "@/components/Cardlayout/Textlist_btn";
import PageSection from "@/components/Section/PageSection";
import PageTopSection from "@/components/Section/PageTopSection";
import { data, mainbottom, maincardData, maintext, topsection } from "@/constants/maindata";

export default function Home() {
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
        <Cardlist maincardData={maincardData} btnText={"시작하기"} />
        <PageSection content={mainbottom} />
      </div>
      <Full />
      <div className="layout">
        <Textlist_btn />
      </div>
    </div>
  );
}

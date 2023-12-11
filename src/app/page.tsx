import Full from "@/components/Banner/Full";
import Cardlist from "@/components/Cardlayout/Cardlist";
import Textlist from "@/components/Cardlayout/Textlist";
import Textlist_btn from "@/components/Cardlayout/Textlist_btn";
import PageSection from "@/components/Section/PageSection";
import PageTopSection from "@/components/Section/PageTopSection";
import { mainbottom, maintext, topsection } from "@/constants/maindata";

export default function Home() {
  return (
    <div className="w-full">
      <div className="layout">
        <PageTopSection />
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

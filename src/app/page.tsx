import Full from "@/components/Banner/Full";
import Cardlist from "@/components/Cardlayout/Cardlist";
import Textlist from "@/components/Cardlayout/Textlist";
import Textlist_btn from "@/components/Cardlayout/Textlist_btn";
import Page_section from "@/components/Section/Page_section";
import Page_top_section from "@/components/Section/Page_top_section";

export default function Home() {
  return (
    <div className="w-full">
      <div className="layout">
        <Page_top_section />
        <Page_section />
      </div>
      <Full />
      <div className="layout">
        <Page_section />
        <Page_section />
        <Page_section />
        <Textlist />
        <Cardlist />
        <Page_section />
      </div>
      <Full />
      <div className="layout">
        <Textlist_btn />
      </div>
    </div>
  );
}

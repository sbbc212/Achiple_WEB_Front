import Page_section from "@/components/Section/Page_section";
import Page_top_section from "@/components/Section/Page_top_section";

export default function Home() {
  return (
    <div className="w-full">
      <div className="layout">
        <Page_top_section />
        <Page_section />
      </div>
    </div>
  );
}

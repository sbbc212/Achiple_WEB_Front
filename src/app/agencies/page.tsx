import PageTopSection from "@/components/Section/PageTopSection";

function Agencies() {
  const Titledata = {
    title: "에이전시 페이지",
    content: "영감을 주고, 교육하고, 문제를 해결하는 대화형 3D 디자인을 만들고 관리하기 위한 온라인 플랫폼인 Vectary를 만나보세요.",
    btnContent: "지금 시작해보세요.",
    hightlight: "다운로드나 코드가필요 하지 않습니다",
    url: "/img/dummy_img_01.jpg",
  };
  return (
    <div>
      <PageTopSection data={Titledata} />
    </div>
  );
}

export default Agencies;

import Cardlist from "@/components/Cardlayout/Cardlist";
import PageTopSection from "@/components/Section/PageTopSection";
import SectionTitleAndContent from "@/components/Section/SectionTitleAndContent";
import { workflowdData } from "@/constants/\bworkFlow";

function page() {
  const data = {
    title: "아키플 작업 플로우",
    content: "비즈니스에 3D와 AR을 사용하는 새롭고 기능적인 방법을 살펴보세요.",
    btnContent: "문의하기",
    url: "/img/dummy_img_01.jpg",
  };
  return (
    <section className="layout">
      <PageTopSection data={data} />
      <SectionTitleAndContent
        contenttitle={"가장 매력적인 제품 쇼케이스 제공"}
        content={
          "디자이너, 엔지니어, 제품 관리자, 마케터를 비롯한 수많은 팀이 영감을 주고, 교육하고, 문제를 해결하는 개념과 아이디어를 시각화하기 위해 Vectary를 사용합니다. 디자인은 웹사이트뿐만 아니라 프레젠테이션, 생산성 도구, 심지어 공간 플랫폼에서도 사용할 수 있습니다."
        }
      />
      <Cardlist maincardData={workflowdData} btnText={"데모보기"} />
    </section>
  );
}

export default page;

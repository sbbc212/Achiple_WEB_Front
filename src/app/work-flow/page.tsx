import BgBanner from "@/components/Banner/BgBanner";
import Full from "@/components/Banner/Full";
import Cardlist from "@/components/Cardlayout/Cardlist";
import ImgAndTextCard from "@/components/Cardlayout/ImgAndTextCard";
import PageSectionframe from "@/components/Section/PageSection.frame";
import PageTopSection from "@/components/Section/PageTopSection";
import SectionTitleAndContent from "@/components/Section/SectionTitleAndContent";
import TextImageCard from "@/components/textimagecard/TextImageCard";
import ShadowCard from "@/components/work-flow/ShadowCard";
import { workFlowCardData, workFlowCarddata, workflowdData, workFlowTextCardData } from "@/constants/workFlow";

function page() {
  const data = {
    title: "아키플 작업 플로우",
    content: "비즈니스에 3D와 AR을 사용하는 새롭고 기능적인 방법을 살펴보세요.",
    btnContent: "문의하기",
    url: "/img/dummy_img_01.jpg",
  };

  const ImgTextData = {
    id: "0",
    title: "솔루션bottom",
    content: "3D 워크플로에 필요한 모든 것bottom",
    content2:
      " 하나의 플랫폼 내에서 컨셉을 생성, 협업, 전시 및 게시할 수 있습니다. 디자이너, 엔지니어, 제품 관리자, 마케팅 담당자 등 많은 사람들이 Vectary를 사용하여 3D 업계에서 가장 효율적인 브라우저 내, 코드 없는 워크플로우 중 하나로 작업합니다.",
    img: "/img/dummy_img_01.jpg",
    bt__text: "test",
  };

  const content = {
    id: "0",
    title: "가장 매력적인 제품 쇼케이스 제공",
    content:
      "디자이너, 엔지니어, 제품 관리자, 마케터를 비롯한 수많은 팀이 영감을 주고, 교육하고, 문제를 해결하는 개념과 아이디어를 시각화하기 위해 Vectary를 사용합니다. 디자인은 웹사이트뿐만 아니라 프레젠테이션, 생산성 도구, 심지어 공간 플랫폼에서도 사용할 수 있습니다.",
  };

  return (
    <section>
      <div className="layout">
        <PageTopSection data={data} />
        <SectionTitleAndContent content={content} />
        <Cardlist maincardData={workflowdData} btnText={"데모보기"} />
        <TextImageCard data={workFlowCarddata} />
      </div>
      <Full />
      <div className="layout space-y-10">
        <PageSectionframe data={ImgTextData} isBtn={false} />
        <PageSectionframe data={ImgTextData} isBtn={false} />
        <ImgAndTextCard ImgTextData={ImgTextData} textCardData={workFlowTextCardData} isBtn={false} />
        <div className="flex justify-between">
          <ShadowCard />
          <ShadowCard />
          <ShadowCard />
        </div>
        <Cardlist maincardData={workFlowCardData} isBtn={true} />
      </div>
      <Full />
      <section className="layout space-y-10">
        <ImgAndTextCard ImgTextData={ImgTextData} textCardData={workFlowTextCardData} isBtn={false} />
        <BgBanner />
      </section>
    </section>
  );
}

export default page;

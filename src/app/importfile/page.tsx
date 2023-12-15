import BgBanner from "@/components/Banner/BgBanner";
import Full from "@/components/Banner/Full";
import TextBanner from "@/components/Banner/TextBanner";
import Cardlist from "@/components/Cardlayout/Cardlist";
import ImgAndTextCard from "@/components/Cardlayout/ImgAndTextCard";
import TextCardFrame from "@/components/importFile/TextCardFrame";
import PageSectionframe from "@/components/Section/PageSection.frame";
import PageTopSection from "@/components/Section/PageTopSection";
import SectionTitleAndContent from "@/components/Section/SectionTitleAndContent";
import TitleImg from "@/components/titleWimg/Title.Img";
import { configuratordata } from "@/constants/3dconfiguratordata";
import { textCardData } from "@/constants/importCAD.DATA";
import { maincardData } from "@/constants/maindata";

function ImportFile() {
  const data = {
    title: "캐드가져오기 페이지",
    content: "영감을 주고, 교육하고, 문제를 해결하는 대화형 3D 디자인을 만들고 관리하기 위한 온라인 플랫폼인 Vectary를 만나보세요.",
    btnContent: "지금 시작해보세요.",
    hightlight: "다운로드나 코드가필요 하지 않습니다",
    url: "/img/dummy_img_01.jpg",
  };
  const ImgTextData = {
    id: "0",
    title: "솔루션bottom",
    content: "3D 워크플로에 필요한 모든 것bottom",
    content2:
      " 하나의 플랫폼 내에서 컨셉을 생성, 협업, 전시 및 게시할 수 있습니다. 디자이너, 엔지니어, 제품 관리자, 마케팅 담당자 등 많은 사람들이 Vectary를 사용하여 3D 업계에서 가장 효율적인 브라우저 내, 코드 없는 워크플로우 중 하나로 작업합니다.",
    img: "/img/dummy_img_01.jpg",
    bt__text: "ff",
  };

  return (
    <div className="space-y-16">
      <div className="layout text-center space-y-32">
        <PageTopSection data={data} />
        <SectionTitleAndContent content={configuratordata[0].textdata[2]} />
        <div className="layout h-[200px] mx-auto flex justify-center">
          <TitleImg />
        </div>
      </div>
      <Full />
      <section className="layout">
        <ImgAndTextCard ImgTextData={ImgTextData} textCardData={textCardData} />
        <ImgAndTextCard ImgTextData={ImgTextData} textCardData={textCardData} />
        <PageSectionframe data={ImgTextData} />
        <ImgAndTextCard ImgTextData={ImgTextData} textCardData={textCardData} />
        <ImgAndTextCard ImgTextData={ImgTextData} textCardData={textCardData} />
      </section>
      <TextBanner />
      <section className="layout">
        <Cardlist maincardData={maincardData} btnText={"데모보기"} />
        <TextCardFrame />
      </section>
      <BgBanner />
    </div>
  );
}

export default ImportFile;

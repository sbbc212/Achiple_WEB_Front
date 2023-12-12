import TextCard from "@/components/Cardlayout/TextCard";
import PageSection from "@/components/Section/PageSection";
import PageTopSection from "@/components/Section/PageTopSection";
import SectionTitleAndContent from "@/components/Section/SectionTitleAndContent";

function ImportFile() {
  const data = {
    title: "캐드가져오기 페이지",
    content: "영감을 주고, 교육하고, 문제를 해결하는 대화형 3D 디자인을 만들고 관리하기 위한 온라인 플랫폼인 Vectary를 만나보세요.",
    btnContent: "지금 시작해보세요.",
    hightlight: "다운로드나 코드가필요 하지 않습니다",
    url: "/img/dummy_img_01.jpg",
  };

  const textCardData = [
    {
      title: "모델만들기",
      content: "메시 모델링 또는 프리미티브를 사용하여 나만의 3D 오브젝트를 만들어 디자인하세요. 수정자와 디포머로 가능성을 확장하세요.",
    },
    {
      title: "모델만들기",
      content: "메시 모델링 또는 프리미티브를 사용하여 나만의 3D 오브젝트를 만들어 디자인하세요. 수정자와 디포머로 가능성을 확장하세요.",
    },
    {
      title: "모델만들기",
      content: "메시 모델링 또는 프리미티브를 사용하여 나만의 3D 오브젝트를 만들어 디자인하세요. 수정자와 디포머로 가능성을 확장하세요.",
    },
  ];
  return (
    <div className="layout text-center space-y-10">
      <PageTopSection data={data} />
      <SectionTitleAndContent
        contenttitle={"디자인 모드에서 프로젝트 시작"}
        content={
          "모든 요구 사항을 충족하는 강력한 도구입니다. 씬을 설정하고, 3D 에셋을 만들거나 가져오고, 머티리얼을 조정하고, 인터랙티브 요소를 추가할 수 있습니다."
        }
      />
      <div className="flex justify-between">
        {textCardData.map((data, idx) => (
          <TextCard key={idx} text={data} btnType={false} />
        ))}
      </div>
      <PageSection content={[]} />
    </div>
  );
}

export default ImportFile;

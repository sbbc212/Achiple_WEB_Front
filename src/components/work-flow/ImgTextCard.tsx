import PageSectionframe from "../Section/PageSection.frame";

function ImgTextCard() {
  const ImgTextData = {
    id: "0",
    title: "솔루션bottom",
    content: "3D 워크플로에 필요한 모든 것bottom",
    content2:
      " 하나의 플랫폼 내에서 컨셉을 생성, 협업, 전시 및 게시할 수 있습니다. 디자이너, 엔지니어, 제품 관리자, 마케팅 담당자 등 많은 사람들이 Vectary를 사용하여 3D 업계에서 가장 효율적인 브라우저 내, 코드 없는 워크플로우 중 하나로 작업합니다.",
    img: "/img/dummy_img_01.jpg",
    bt__text: "text",
  };
  return (
    <div>
      <PageSectionframe data={ImgTextData} isBtn={false} />
    </div>
  );
}

export default ImgTextCard;

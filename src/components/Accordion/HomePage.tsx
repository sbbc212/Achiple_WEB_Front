import Accordion from "./Accordion";

const items = [
  {
    id: "0",
    title: "Q. 아키플은 어떤 서비스인가요?",
    content:
      "아키플 스튜디오는 인테리어 전문가와 1:1 비대면 컨설팅을 통해 최종 결과물을 3D도면과 4K 이미지, 그리고 다양한 메타버스 콘텐츠를 제공하는 온라인 인테리어 서비스입니다.",
  },
  {
    id: "1",
    title: "Q. 아키플은 어떤 서비스인가요?",
    content:
      "아키플 스튜디오는 인테리어 전문가와 1:1 비대면 컨설팅을 통해 최종 결과물을 3D도면과 4K 이미지, 그리고 다양한 메타버스 콘텐츠를 제공하는 온라인 인테리어 서비스입니다.",
  },
  {
    id: "2",
    title: "Q. 아키플은 어떤 서비스인가요?",
    content:
      "아키플 스튜디오는 인테리어 전문가와 1:1 비대면 컨설팅을 통해 최종 결과물을 3D도면과 4K 이미지, 그리고 다양한 메타버스 콘텐츠를 제공하는 온라인 인테리어 서비스입니다.",
  },
];

const HomePage = () => {
  return (
    <div>
      <div className="page-tit text-center">
        <h3 className="text-[36px] mb-[14px]" style={{ fontWeight: "600" }}>
          자주하는질문
        </h3>
      </div>
      <Accordion items={items} />
    </div>
  );
};

export default HomePage;

import Fillbtn from "../Button/Fillbtn";

function PageTopSection() {
  return (
    <div className="contant">
      <div className="section-tit text-center mb-[60px]" style={{ padding: "120px 60px 0 60px" }}>
        <h3 className="text-[68px] mb-[14px]" style={{ fontWeight: "600" }}>
          대화형 3D 및 AR로 작업 완료
        </h3>
        <p className="pb-[30px]" style={{ maxWidth: "900px", margin: "0 auto", wordBreak: "keep-all" }}>
          영감을 주고, 교육하고, 문제를 해결하는 대화형 3D 디자인을 만들고 관리하기 위한 온라인 플랫폼인 Vectary를 만나보세요.
          <span style={{ fontWeight: "700" }}>다운로드나 코드가</span>
          필요 하지 않습니다
        </p>
        <Fillbtn text="지금 시작해보세요." />
      </div>
      <div className="card-img-wrap" style={{ width: "100%", height: "auto", borderRadius: "10px", overflow: "hidden" }}>
        <img src="/img/dummy_img_01.jpg" alt="3D 작업완료 된 이미지" />
      </div>
    </div>
  );
}

export default PageTopSection;

import styles from "../../components/Tabmenu/tab.module.css";

function ListCard() {
  const plans = [
    {
      type: "Starter",
      price: "티켓 만들기",
      description: "3D 디자인, 공유 및 삽입을 시작합니다.",
      features: ["계정", "60개 이상의 파일 형식 가져오기", "프로젝트 공유/삽입", "2D 및 3D 파일 내보내기", "10 개 프로젝트"],
      buttonLabel: "시작하다",
    },
    {
      type: "Pro",
      price: "비즈니스 솔루션",
      description: "웹, AR, 메타버스를 위한 대화형 경험을 구축하는 데 사용됩니다.",
      features: ["애니메이션", "상호작용", "AR 파일 내보내기(usdz, glb, gltf)", "증강 현실", "버전기록", "100개프로젝트", "브랜딩 없이 조회수 10만회*"],
      buttonLabel: "30일 무료 평가판을 시작하세요",
    },
    {
      type: "Business",
      price: "커뮤니티 지원",
      description: "팀 및 비즈니스 확장에 적합합니다. 귀하의 필요에 맞게 맞춤 제작되었습니다.",
      features: ["협업기능", "작업공간역활관리", "전담 성공 관리자", "팀 온보딩", "싱글 사인온(SSO/SAML)", "API", "추가기능"],
      buttonLabel: "영업팀에 문의",
    },
  ];
  return plans.map((plan) => {
    return (
      <li className={styles.cardItem} key={plan.type}>
        <div>
          <span className="rating font-bold text-[20px]">{plan.type}</span>
          <p className="pricing font-bold text-[54px] mb-[20px]">{plan.price}</p>
          <div className="card-desc py-[20px]">{plan.description}</div>
        </div>
        <div className={styles.option}>
          <ul>
            {plan.features.map((feature) => (
              <li className="option-list" key={feature}>
                <span className={`bold flex items-center gap-2 ${plan.type === "Pro" ? "text-white" : "text-[#191919]"}`}>
                  <i>
                    <img src={`img/check${plan.type === "Pro" ? "_w" : ""}.png`} alt="" />
                  </i>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.buttonWrap}>
          <button className="w-full py-4">{plan.buttonLabel}</button>
        </div>
      </li>
    );
  });
}

export default ListCard;

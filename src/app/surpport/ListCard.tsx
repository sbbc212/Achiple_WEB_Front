import Link from "next/link";

function ListCard() {
  const plans = [
    {
      type: "Starter",
      price: "티켓 만들기",
      description: "3D 디자인, 공유 및 삽입을 시작합니다.",
      features: ["계정", "60개 이상의 파일 형식 가져오기", "프로젝트 공유/삽입", "2D 및 3D 파일 내보내기", "10 개 프로젝트"],
      buttonLabel: "시작하다",
      endPoints: "/surpport/mail",
    },
    {
      type: "Pro",
      price: "비즈니스 솔루션",
      description: "계정, 결제 또는 문제 해결에 대해 질문이 있는 경우 당사에 문의하세요.",
      features: ["애니메이션", "상호작용", "AR 파일 내보내기(usdz, glb, gltf)", "증강 현실", "버전기록", "100개프로젝트"],
      buttonLabel: " 시작하세요",
      endPoints: "/surpport/contact",
    },
    {
      type: "Business",
      price: "커뮤니티 지원",
      description: "팀 및 비즈니스 확장에 적합합니다. 귀하의 필요에 맞게 맞춤 제작되었습니다.",
      features: ["협업기능", "작업공간역활관리", "전담 성공 관리자", "팀 온보딩", "싱글 사인온(SSO/SAML)", "API", "추가기능"],
      buttonLabel: "영업팀에 문의",
      endPoints: "",
    },
  ];
  return (
    <div className="flex justify-between">
      {plans.map((plan, index) => {
        const Libg = index === 1 && "bg-[#2aa86b] text-white";
        const text = index === 1 && "text-white";
        return (
          <li className={` space-y-4 border  border-[#2aa86b] rounded-md p-5 w-[30%] ${Libg} flex flex-col justify-between `} key={plan.type}>
            <div className={`${text}`}>
              <p className=" font-bold text-[30px] mb-[20px]">{plan.price}</p>
              <div className="card-desc py-[20px]">{plan.description}</div>
            </div>
            <ul>
              {plan.features.map((feature) => (
                <li className={`${text}`} key={feature}>
                  <span className={`bold flex items-center gap-2  "text-[#191919]"`}>
                    <i>
                      <img src={`img/check${plan.type === "Pro" ? "_w" : ""}.png`} alt="" />
                    </i>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            {/* <div className={`${buttonColorClass}`} style={{ border: "1px solid #2aa86b" }}> */}
            <Link href={plan.endPoints} className="border border-[#2aa86b] text-[#2aa86b] rounded-md bg-white">
              <button className="w-full  py-4">{plan.buttonLabel}</button>
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default ListCard;

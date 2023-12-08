import "./style.css";

function Footer() {
  return (
    <div className="w-full" style={{ backgroundColor: "#191919", padding: "60px 0" }}>
      <div className="layout">
        <div className="flex">
          <div className="w-[20%]">
            <span className="block mb-[18px]" style={{ width: "200px", overflow: "hidden" }}>
              <img src="/img/logo.png" alt="" />
            </span>
            <ul>
              <li>
                <a className="text-[#949494]" href="#">
                  가격
                </a>
              </li>
              <li>
                <a className="text-[#949494]" href="#">
                  문의
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[15%]">
            <span className="block text-white text-[22px] font-light mb-[18px]">Explore</span>
            <ul>
              <li>
                <a className="text-[#949494]" href="#">
                  아키플스튜디오
                </a>
              </li>
              <li>
                <a className="text-[#949494]" href="#">
                  워크스루 & 애니메이션
                </a>
              </li>
              <li>
                <a className="text-[#949494]" href="#">
                  증강 현실
                </a>
              </li>
              <li>
                <a className="text-[#949494]" href="#">
                  3D Configurators
                </a>
              </li>
              <li>
                <a className="text-[#949494]" href="#">
                  공유
                </a>
              </li>
              <li>
                <a className="text-[#949494]" href="#">
                  캐드 가져오기
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[15%]">
            <span className="block text-white text-[22px] font-light mb-[18px]">Business</span>
            <ul>
              <li>
                <a className="text-[#949494]" href="#">
                  고객지원
                </a>
              </li>
              <li>
                <a className="text-[#949494]" href="#">
                  작업순서
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[15%]">
            <span className="block text-white text-[22px] font-light mb-[18px]">Industries</span>
            <ul>
              <li>
                <a className="text-[#949494]" href="#">
                  인테리어
                </a>
              </li>
              <li>
                <a className="text-[#949494]" href="#">
                  디자인 대행
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

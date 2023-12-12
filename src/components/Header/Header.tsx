import "./style.css";

function Header() {
  return (
    <div className="w-full h-[88px] px-[2rem]">
      <div className="layout">
        <nav className="h-[88px] flex justify-between items-center ">
          <div className="logo" style={{ width: "200px", cursor: "pointer" }}>
            <a href="/">
              <img src="./img/logo.png" alt="아키플 스튜디오 로고" />
            </a>
          </div>
          <div className="gnb">
            <ul className="flex gap-[24px]">
              <li>
                <a className="text-[1rem]" href="#">
                  Studio
                </a>
              </li>
              <li>
                <a className="text-[1rem] flex items-center gap-1" href="#">
                  Explore
                  <i className="arrow">
                    <img src="img/Vector_arrow.png" alt="화살표" />
                  </i>
                </a>
                <ul className="deep-menu"></ul>
              </li>
              <li>
                <a className="text-[1rem] flex items-center gap-1" href="#">
                  Business
                  <i className="arrow">
                    <img src="img/Vector_arrow.png" alt="화살표" />
                  </i>
                </a>
                <ul className="deep-menu"></ul>
              </li>
              <li>
                <a className="text-[1rem]" href="/Pricing">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="user-wrap">
            <div className="flex gap-[12px]">
              <button className="login">Login</button>
              <button className="sign">SignUp</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

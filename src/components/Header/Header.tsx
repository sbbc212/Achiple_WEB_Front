import "./style.css";

function Header() {
  return (
    <div className="w-full h-[88px]">
      <div className="layout">
        <nav className="h-[88px] flex justify-between items-center">
          <div className="logo" style={{ cursor: "pointer" }}>
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
                <a className="text-[1rem]" href="#">
                  Explore<i className="arrow">1</i>
                </a>
                <ul className="deep-menu"></ul>
              </li>
              <li>
                <a className="text-[1rem]" href="#">
                  Business<i className="arrow">1</i>
                </a>
                <ul className="deep-menu"></ul>
              </li>
              <li>
                <a className="text-[1rem]" href="#">
                  Resources<i className="arrow">1</i>
                </a>
                <ul className="deep-menu"></ul>
              </li>
              <li>
                <a className="text-[1rem]" href="#">
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

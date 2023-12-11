import Link from "next/link";
import "./style.css";

const menuItems = [
  { text: "Studio", href: "/" },
  { text: "Explore", href: "#", submenu: true },
  { text: "Business", href: "#", submenu: true },
  { text: "Pricing", href: "#" },
];

function Header() {
  return (
    <div className="w-full h-[88px] px-[2rem]">
      <div className="layout">
        <nav className="h-[88px] flex justify-between items-center ">
          <div className="logo" style={{ width: "200px", cursor: "pointer" }}>
            <Link href="/">
              <img src="./img/logo.png" alt="아키플 스튜디오 로고" />
            </Link>
          </div>
          <div className="gnb">
            <ul className="flex gap-[24px]">
              {menuItems.map((item) => (
                <li key={item.text}>
                  <Link className="text-[1rem]" href={item.href}>
                    {item.text}
                    {item.submenu && <i className="arrow">1</i>}
                  </Link>
                  {item.submenu && <ul className="deep-menu"></ul>}
                </li>
              ))}
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

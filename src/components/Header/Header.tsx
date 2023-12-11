import { Dropdown, type MenuProps } from "antd";
import Link from "next/link";

import "./style.css";

const menuItems = [
  { text: "Studio", href: "/" },
  { text: "Explore", href: "#", submenu: true },
  { text: "Business", href: "#", submenu: true },
  { text: "Pricing", href: "#" },
];

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
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
              {menuItems.map((item) =>
                item.submenu === true ? (
                  <Dropdown key={item.text} menu={{ items }}>
                    <li>
                      <Link className="text-[1rem]" href={item.href}>
                        {item.text}
                        {item.submenu && <i className="arrow">1</i>}
                      </Link>
                    </li>
                  </Dropdown>
                ) : (
                  <li key={item.text}>
                    <Link className="text-[1rem]" href={item.href}>
                      {item.text}
                      {item.submenu && <i className="arrow">1</i>}
                    </Link>
                  </li>
                ),
              )}
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

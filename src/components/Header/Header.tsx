"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import useRender from "@/hooks/useRender";

import DropdownMenu from "./DropdownMenu";

import "./style.css";

export interface menuType {
  text: string;
  href?: string;
  submenu?: boolean;
}
const menuItems: menuType[] = [
  { text: "Studio", href: "/studio" },
  { text: "Explore", submenu: true },
  { text: "Business", submenu: true },
  { text: "pricing", href: "/pricing" },
];

function Header() {
  const pathname = usePathname();

  const isrender = useRender(pathname);
  console.log(isrender);

  return isrender === false ? null : (
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
                  <DropdownMenu key={item.text} item={item} />
                ) : (
                  <li key={item.text}>
                    {item.href ? (
                      <Link className="text-[1rem]" href={item.href!}>
                        {item.text}
                        {item.submenu && <i className="arrow">1</i>}
                      </Link>
                    ) : (
                      <div>
                        {item.text}
                        {item.submenu && <i className="arrow">1</i>}
                      </div>
                    )}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="user-wrap">
            <div className="flex gap-[12px]">
              <Link href="/signin">
                <button className="login">Login</button>
              </Link>
              <Link href="/signup/provideinfo">
                <button className="sign">SignUp</button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

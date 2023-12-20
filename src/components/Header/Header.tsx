"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import useRender from "@/hooks/useRender";

import "./style.css";
import NavList from "./NavList";

export interface menuType {
  text: string;
  href?: string;
  submenu?: boolean;
}

function Header() {
  const pathname = usePathname();

  const isrender = useRender(pathname);

  return isrender === false ? null : (
    <nav className="layout w-full h-[88px] px-[2rem] flex justify-between items-center ">
      <div className="logo" style={{ width: "200px", cursor: "pointer" }}>
        <Link href="/">
          <img src="./img/logo.png" alt="아키플 스튜디오 로고" />
        </Link>
      </div>
      <NavList />
      <div>
        <div className="flex gap-[12px] justify-center items-center">
          <Link className="p-2 px-4 bg-gray-800 rounded-md text-white text-base font-semibold" href="/signin">
            <button>Login</button>
          </Link>
          <Link href="/signup">
            <button className="sign">SignUp</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import { Dropdown } from "antd";
import Link from "next/link";

import type { menuType } from "./Header";
import type { MenuProps } from "antd";

const explore: MenuProps = {
  items: [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" href="/arichiplestudio">
          아키플스튜디오
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="noopener noreferrer" href="/work&animiation">
          워크스루 & 애니메이션
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="noopener noreferrer" href="/ar">
          증강 현실
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link rel="noopener noreferrer" href="/3dconfigurators">
          3D Configurators
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link rel="noopener noreferrer" href="/share">
          공유
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link rel="noopener noreferrer" href="/importfile">
          캐드 가져오기
        </Link>
      ),
    },
  ],
};

const Business: MenuProps = {
  items: [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" href="/surpport">
          고객지원
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="noopener noreferrer" href="/work-flow">
          작업순서
        </Link>
      ),
    },
  ],
};

function DropdownMenu({ item }: { item: menuType }) {
  const items = item.text === "Business" ? Business : explore;
  return (
    <Dropdown key={item.text} menu={items} placement="bottom" arrow>
      <li className="my-auto cursor-pointer">
        <div className="text-[1rem]">
          {item.text}
          {item.submenu && <i className="arrow">1</i>}
        </div>
      </li>
    </Dropdown>
  );
}

export default DropdownMenu;

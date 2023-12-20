import Link from "next/link";

import DropdownMenu from "./DropdownMenu";

import type { menuType } from "./Header";

export default function NavList() {
  const menuItems: menuType[] = [
    { text: "Studio", href: "/studio" },
    { text: "Explore", submenu: true },
    { text: "Business", submenu: true },
    { text: "pricing", href: "/pricing" },
  ];
  return (
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
  );
}

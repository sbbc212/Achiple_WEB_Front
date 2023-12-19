import Link from "next/link";

import type { MenuProps } from "antd";

function Dropdwon() {
  const items: MenuProps = {
    items: [
      {
        key: "1",
        label: (
          <Link rel="noopener noreferrer" href="/">
            아키플스튜디오
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link rel="noopener noreferrer" href="/">
            워크스루 & 애니메이션
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link rel="noopener noreferrer" href="/">
            증강 현실
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link rel="noopener noreferrer" href="/">
            증강 현실
          </Link>
        ),
      },
      {
        key: "5",
        label: (
          <Link rel="noopener noreferrer" href="/">
            3D Configurators
          </Link>
        ),
      },
      {
        key: "6",
        label: (
          <Link rel="noopener noreferrer" href="/">
            공유
          </Link>
        ),
      },
      {
        key: "7",
        label: (
          <Link rel="noopener noreferrer" href="/">
            캐드 가져오기
          </Link>
        ),
      },
    ],
  };
  return items;
}

export default Dropdwon;

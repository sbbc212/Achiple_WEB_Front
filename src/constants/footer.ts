type TitleItem = {
  id: string;
  title: string;
  link: string;
};

type FooterItem = {
  id: string;
  tab: string;
  title: TitleItem[];
};

type FooterData = FooterItem[];
export const footerdata: FooterData = [
  {
    id: "0",
    tab: "Explore",
    title: [
      { id: "0", title: "아키플스튜디오", link: "" },
      { id: "01", title: "워크스루 & 애니메이션", link: "/animation" },
      { id: "02", title: "증강 현실", link: "/reality" },
      { id: "03", title: "3D Configurators", link: "/3dconfigurators" },
      { id: "04", title: "공유", link: "" },
      { id: "05", title: "캐드 가져오기", link: "" },
    ],
  },
  {
    id: "1",
    tab: "Business",
    title: [
      { id: "01", title: "고객지원", link: "" },
      { id: "02", title: "작업순서", link: "" },
    ],
  },
  {
    id: "2",
    tab: "Industries",
    title: [
      { id: "03", title: "인테리어", link: "" },
      { id: "04", title: "디자인 대행", link: "" },
    ],
  },
];

type TitleItem = {
  id: string;
  title: string;
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
      { id: "0", title: "아키플스튜디오" },
      { id: "01", title: "워크스루 & 애니메이션" },
      { id: "02", title: "증강 현실" },
      { id: "03", title: "3D Configurators" },
      { id: "04", title: "공유" },
      { id: "05", title: "캐드 가져오기" },
    ],
  },
  {
    id: "1",
    tab: "Business",
    title: [
      { id: "01", title: "고객지원" },
      { id: "02", title: "작업순서" },
    ],
  },
  {
    id: "2",
    tab: "Industries",
    title: [
      { id: "03", title: "인테리어" },
      { id: "04", title: "디자인 대행" },
    ],
  },
];

import type { maincardDataType } from "./maindata";

export interface TextDataItem {
  id: string;
  title: string;
  content: string;
  btntext?: string;
  img?: string;
  datatype?: string;
}

export interface ConfiguratorDataItem {
  id: string;
  pagename: string;
  textdata: TextDataItem[];
  cardcontent: maincardDataType[];
}
export const configuratordata: ConfiguratorDataItem[] = [
  {
    id: "0",
    pagename: "3dconfigurator",
    textdata: [
      {
        id: "section1",
        title: "나만의 3D 구성 프로그램 만들기",
        content: "코드가 없습니다. Vectary에서 미리 만들어진 요소로 UI를 설정합니다. 메뉴, 기능 및 트리거를 디자인합니다. 몇 분 안에 준비됩니다.",
        btntext: "30일 무료 평가판을 시작하세요",
        datatype: "imgleft",
      },
      {
        id: "section2",
        title: "청중에게 감동을 주고 영향력을 창출하세요1",
        content:
          "아이디어부터 최종 컨셉까지 모든 제품 버전을 웹에 표시합니다. 시청자의 관심을 사로잡고 메인 쇼케이스를 가리지 않으면서 다양한 정보를 공개하세요. 맞춤형 브랜딩을 추가하세요. 채팅에서 열거나 온라인 어디든 삽입할 수 있는 하나의 링크를 보내 공유하세요.1",
        img: "https://assets-global.website-files.com/636cc984003871e3cda597bb/64f711f1f9709d68d9de08de_bag%20-%203d%20configurator%20vectary-p-2000.jpeg",
        datatype: "imgright",
      },
      {
        id: "section3",
        title: "청중에게 감동을 주고 영향력을 창출하세요2",
        content:
          "아이디어부터 최종 컨셉까지 모든 제품 버전을 웹에 표시합니다. 시청자의 관심을 사로잡고 메인 쇼케이스를 가리지 않으면서 다양한 정보를 공개하세요. 맞춤형 브랜딩을 추가하세요. 채팅에서 열거나 온라인 어디든 삽입할 수 있는 하나의 링크를 보내 공유하세요.",
        img: "https://assets-global.website-files.com/636cc984003871e3cda597bb/64f711f1f9709d68d9de08de_bag%20-%203d%20configurator%20vectary-p-2000.jpeg",
        datatype: "imgleft",
      },
      {
        id: "04",
        title: "구성할 수 있는 항목 보기",
        content: "사용 가능한 코드 없는 구성 요소를 찾아보세요.",
      },
      {
        id: "3D 구성기 예 살펴보기",
        title: "3D 구성기 예 살펴보기",
        content: "",
      },
    ],
    cardcontent: [
      {
        id: "0",
        subtitle: "산업1",
        secSubtitle: "패션1",
        btnText: "text",
        content: "3D 구성기는 추가 정보를 제공하고 모듈식 부품을 제시할 수 있습니다.",
        img: "/img/dummy_img_01.jpg",
      },
      {
        id: "1",
        subtitle: "산업2",
        secSubtitle: "패션2",
        btnText: "text",
        content: "내부 사용, 매장 내 및 온라인 소매를 위한 몰입형 제품 쇼케이스를 위한 다목적 디자인 솔루션입니다.",
        img: "/img/dummy_img_01.jpg",
      },
      {
        id: "2",
        subtitle: "산업3",
        secSubtitle: "패션3",
        btnText: "text",
        content: "내부 사용, 매장 내 및 온라인 소매를 위한 몰입형 제품 쇼케이스를 위한 다목적 디자인 솔루션입니다.",
        img: "/img/dummy_img_01.jpg",
      },
      {
        id: "4",
        subtitle: "산업4",
        secSubtitle: "패션1",
        btnText: "text",
        content: "3D 구성기는 추가 정보를 제공하고 모듈식 부품을 제시할 수 있습니다.",
        img: "/img/dummy_img_01.jpg",
      },
      {
        id: "5",
        subtitle: "산업",
        secSubtitle: "패션2",
        btnText: "text",
        content: "내부 사용, 매장 내 및 온라인 소매를 위한 몰입형 제품 쇼케이스를 위한 다목적 디자인 솔루션입니다.",
        img: "/img/dummy_img_01.jpg",
      },
      {
        id: "6",
        subtitle: "산업3",
        secSubtitle: "패션3",
        btnText: "text",
        content: "내부 사용, 매장 내 및 온라인 소매를 위한 몰입형 제품 쇼케이스를 위한 다목적 디자인 솔루션입니다.",
        img: "/img/dummy_img_01.jpg",
      },
    ],
  },
];

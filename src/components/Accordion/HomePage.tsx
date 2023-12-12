import React from "react";

import { Collapse } from "antd";

import styles from "@/components/Accordion/Accordion.module.css";

import type { CollapseProps } from "antd";

const text = `
아키플 스튜디오는 인테리어 전문가와 1:1 비대면 컨설팅을 통해 최종 결과물을 3D도면과 4K 이미지,
그리고 다양한 메타버스 콘텐츠를 제공하는 온라인 인테리어 서비스입니다.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Q. 아키플은 어떤 서비스 인가요?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Q. 아키플은 어떤 서비스 인가요?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Q. 아키플은 어떤 서비스 인가요?",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Q. 아키플은 어떤 서비스 인가요?",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "Q. 아키플은 어떤 서비스 인가요?",
    children: <p>{text}</p>,
  },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h3 className="text-[34px] text-center mb-[20px]" style={{ fontWeight: "600" }}>
        자주 묻는 질문
      </h3>
      <Collapse className={styles.red} items={items} defaultActiveKey={["1"]} />;
    </div>
  );
};

export default HomePage;

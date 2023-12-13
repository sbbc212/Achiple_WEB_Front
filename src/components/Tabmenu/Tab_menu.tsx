"use client";

import { useState } from "react";

import styles from "./tab.module.css";
import Pricing from "../Pricing/Pricing";

export interface tabData {
  id: number;
  pricing: string;
  description: string;
}

export default function Tab() {
  const data = [
    {
      id: 0,
      title: "월간",
      pricing: "$19",
      description: "30일 평가판 기간 이후에는 매월 청구 됩니다.",
    },
    {
      id: 1,
      title: "연간",
      pricing: "$15",
      description: "30일 평가판 기간 이후에는 매월 청구 됨, 연간 $180",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className={styles.tabContainer}>
      <ul className={styles.tabMenu}>
        {data.map((item) => (
          <li key={item.id} className={index === item.id && styles.active} onClick={() => setIndex(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
      <Pricing data={data[index]} />
    </div>
  );
}

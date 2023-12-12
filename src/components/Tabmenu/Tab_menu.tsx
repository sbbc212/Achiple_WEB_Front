"use client";

import { useState } from "react";

import styles from "./tab.module.css";
import Pricing from "../Pricing/Pricing";

export default function Tab() {
  const data = [
    {
      id: 0,
      title: "월간",
      description: "월간 가격 안내",
    },
    {
      id: 1,
      title: "연간",
      description: "연간 가격 안내",
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
      {data
        .filter((item) => index === item.id)
        .map((item) => (
          <div key={index} className={styles.tabContent}>
            {item.description}
            <Pricing />
          </div>
        ))}
    </div>
  );
}

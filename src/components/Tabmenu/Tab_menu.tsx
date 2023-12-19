"use client";

import { useState } from "react";

import styles from "./tab.module.css";
import Pricing from "../Pricing/Pricing";

import type { tabData } from "@/app/pricing/page";

export default function Tab({ data }: { data: tabData[] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.tabContainer}>
      <ul className={styles.tabMenu}>
        {data.map((item, idx) => (
          <li key={item.id} className={index === idx ? styles.active : ""} onClick={() => setIndex(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
      <Pricing data={data[index]} />
    </div>
  );
}

"use client";

// components/Accordion.js
import React from "react";
import { useState } from "react";

import styles from "./Accordion.module.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: React.SetStateAction<null>, active: null | undefined) => {
    setActiveIndex(activeIndex === active ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div className={styles.accordionHeader} onClick={() => handleClick(index)}>
            {item.title}
          </div>
          {activeIndex === index && <div className={styles.accordionContent}>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

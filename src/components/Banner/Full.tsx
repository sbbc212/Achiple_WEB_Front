import React from "react";

import "./style.css";
import { logo } from "@/constants/maindata";

function Full() {
  return (
    <div style={{ backgroundColor: "#f7f7f7", padding: "60px 30px", margin: "60px 0 0 0" }}>
      <div className="layout text-center">
        <h4 className="text-[48px] font-medium">전 세계 기업으로부터 사랑받는</h4>
        <div className="logo-list py-[30px]">
          <ul className="flex justify-center flex-wrap">
            {logo.map((logoname, index) => (
              <li key={index} className="logo-list-item">
                <a href="#">{logoname.logotitle}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Full;

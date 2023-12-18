import Link from "next/link";

import { footerdata } from "@/constants/footer";

import "./style.css";

function Footer() {
  return (
    <div className="w-full" style={{ backgroundColor: "#191919", padding: "60px 0" }}>
      <div className="layout">
        <div className="flex">
          <div className="w-[20%]">
            <span className="block mb-[18px]" style={{ width: "200px", overflow: "hidden" }}>
              <img src="/img/logo.png" alt="" />
            </span>
            <ul>
              <li>
                <Link className="text-[#949494]" href="#">
                  가격
                </Link>
              </li>
              <li>
                <Link className="text-[#949494]" href="/surpport">
                  문의
                </Link>
              </li>
            </ul>
          </div>
          {footerdata.map((data, index) => (
            <div key={index} className="w-[15%]">
              <span className="block text-white text-[22px] font-light mb-[18px]">{data.tab}</span>
              <ul>
                {data.title.map((datatitle) => (
                  <li key={datatitle.id}>
                    <Link className="text-[#949494]" href={datatitle.link}>
                      {datatitle.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

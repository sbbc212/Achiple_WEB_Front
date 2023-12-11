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
                <a className="text-[#949494]" href="#">
                  가격
                </a>
              </li>
              <li>
                <a className="text-[#949494]" href="#">
                  문의
                </a>
              </li>
            </ul>
          </div>
          {footerdata.map((data, index) => (
            <div key={index} className="w-[15%]">
              <span className="block text-white text-[22px] font-light mb-[18px]">{data.tab}</span>
              <ul>
                {data.title.map((datatitle) => (
                  <li key={datatitle.id}>
                    <a className="text-[#949494]" href="#">
                      {datatitle.title}
                    </a>
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

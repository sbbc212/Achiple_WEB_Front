import { configuratordata } from "@/constants/3dconfiguratordata";

import CardImage from "../Cardlayout/CardImage";

const SectionCard = () => {
  return (
    <ul className="flex justify-between pb-[60px]">
      {configuratordata.map((data) =>
        data.seccardcontent.map((content) => (
          <li key={content.secsubtitle} className="card-list-item">
            <CardImage cardImg={content.img} />
            <div className="card-desc mt-[20px]">
              <span className="block font-bold text-[24px] mb-[26px]">{content.secsubtitle}</span>
              <p className=" mb-[20px]">{content.content}</p>
            </div>
          </li>
        )),
      )}
    </ul>
  );
};

export default SectionCard;

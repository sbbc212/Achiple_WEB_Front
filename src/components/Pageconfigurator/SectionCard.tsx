import { configuratordata } from "@/constants/3dconfiguratordata";

import CardContent from "../Cardlayout/CardContent";
import CardImage from "../Cardlayout/CardImage";
import CardTitle from "../Cardlayout/CardTitle";

const SectionCard = () => {
  return (
    <ul className="flex justify-between pb-[60px]">
      {configuratordata.map((data) =>
        data.seccardcontent.map((content) => (
          <li key={content.secsubtitle} className="card-list-item">
            <CardImage cardImg={content.img} />
            <div className="card-desc mt-[20px]">
              <CardTitle cardtitle={content.secsubtitle} />
              <CardContent cardcontent={content.content} />
            </div>
          </li>
        )),
      )}
    </ul>
  );
};

export default SectionCard;

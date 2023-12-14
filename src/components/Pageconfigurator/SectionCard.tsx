import { configuratordata } from "@/constants/3dconfiguratordata";

const SectionCard = () => {
  return (
    <ul className="flex justify-between pb-[60px]">
      {configuratordata.map((data) =>
        data.cardcontent.map((content) => (
          <li key={content.secSubtitle} className="card-list-item">
            <img src={content.img} alt="dummy" />
            <div className="card-desc mt-[20px]">
              <span className="block font-bold text-[24px] mb-[26px]">{content.secSubtitle}</span>
              <p className=" mb-[20px]">{content.content}</p>
            </div>
          </li>
        )),
      )}
    </ul>
  );
};

export default SectionCard;

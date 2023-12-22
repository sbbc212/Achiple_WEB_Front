import Linebtn from "../Button/Linebtn";

const TextCardList = ({ dataid, title, content, btntext }: { dataid: string; title: string; content: string; btntext?: string }) => {
  return (
    <div className="w-1/2 px-11" key={dataid}>
      <p className="text-3xl leading-loose font-bold">{title}</p>
      <p className="text-lg text-[#595959]">{content}</p>
      <div className="pt-9">{btntext && <Linebtn text={btntext} />}</div>
    </div>
  );
};

export default TextCardList;

const TextCardList = ({ dataid, title, content }: { dataid: string; title: string; content: string }) => {
  return (
    <div className="w-1/2" key={dataid}>
      <p className="text-3xl leading-loose font-bold">{title}</p>
      <p className="text-lg text-[#595959]">{content}</p>
    </div>
  );
};

export default TextCardList;

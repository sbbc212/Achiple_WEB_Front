const CardTitle = ({ cardtitle }: { cardtitle: string }) => {
  return (
    <>
      <span className="block font-bold text-[24px] mb-[26px]">{cardtitle}</span>
    </>
  );
};

export default CardTitle;

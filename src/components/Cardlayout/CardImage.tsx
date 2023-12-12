const CardImage = ({ cardImg }: { cardImg: string }) => {
  return (
    <>
      <img className="card-img rounded-3xl" src={cardImg} alt="더미데이터" />
    </>
  );
};

export default CardImage;

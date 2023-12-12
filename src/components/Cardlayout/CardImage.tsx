import React from "react";

const CardImage = ({ cardImg }: { cardImg: string }) => {
  return (
    <>
      <img className="card-img" src={cardImg} alt="더미데이터" />
    </>
  );
};

export default CardImage;

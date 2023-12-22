const ImageCard = ({ dataimg }: { dataimg: string }) => {
  return (
    <div className="w-1/2">
      <img src={dataimg} alt="카드 이미지 임시" />
    </div>
  );
};

export default ImageCard;

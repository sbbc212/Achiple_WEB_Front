const ImageCard = ({ dataimg }: { dataimg: string }) => {
  return (
    <div className="w-1/2 h-full">
      <img src={dataimg} className="w-[40rem] h-[20rem]" alt="카드 이미지 임시" />
    </div>
  );
};

export default ImageCard;

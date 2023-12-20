const ImageCard = ({ dataimg }: { dataimg: string }) => {
  return (
    <div className="w-1/2 h-full">
      <img src={dataimg} className="w-[50rem] h-[25rem]" alt="카드 이미지 임시" />
    </div>
  );
};

export default ImageCard;

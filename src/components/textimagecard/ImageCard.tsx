const ImageCard = ({ dataimg }: { dataimg: string }) => {
  return (
    <>
      <img src={dataimg} className="w-[40rem] h-[20rem]" alt="카드 이미지 임시" />
    </>
  );
};

export default ImageCard;

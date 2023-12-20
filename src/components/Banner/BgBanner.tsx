import Linebtn from "../Button/Linebtn";

function BgBanner() {
  return (
    <div style={{ marginBottom: "60px", marginTop: "60px" }} className=" text-white rounded-lg h-[400px] ">
      <div
        className="layout h-full bg-cover bg-no-repeat bg-center flex justify-center flex-col items-center gap-y-8 rounded-[10px] overflow-hidden"
        style={{ backgroundImage: `url('/img/dummy_img_01.jpg')` }}>
        <h1 className="font-bold text-5xl text-white">Archiple로 실감형공간 불러오기</h1>
        <div className="text-center text-2xl">PRO 요금제로 모든 대화형 기능을 이용하세요.</div>
        <Linebtn text={"보러가기"} />
      </div>
    </div>
  );
}

export default BgBanner;

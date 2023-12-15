import Image from "next/image";

function ShadowCard() {
  return (
    <div className="w-1/3 shadow-xl rounded-xl text-center p-10">
      <p>한국어 아키플은 저희 캠페인에 큰 힘이 되었습니다. 환상적인 ROI!</p>
      <div className="w-full ">
        <div className="w-[100px] h-[100px] relative object-cover  mx-auto">
          <Image
            className=" rounded-full"
            fill
            alt="profile"
            src={"https://assets-global.website-files.com/636cc984003871e3cda597bb/637faac79d765428117027f5_felix-egidi-quote.jpg"}
          />
        </div>
        <p>Felix Egidi</p>
        <p> Head of Marketing Europe, KTM Motorcycles</p>
      </div>
    </div>
  );
}

export default ShadowCard;

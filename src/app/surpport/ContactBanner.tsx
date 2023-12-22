function ContactBanner() {
  return (
    <div className="w-full bg-[#595959] flex justify-between items-center p-10 rounded-lg my-10">
      <div className="text-white">
        <p>미디어 & 파트너십</p>
        <p>미디어협업, 언론 및 파트너십과 문의사항이 있으면 당사에 문의하세요.</p>
        <p>손을 내밀어 함께 일해 보세요!</p>
      </div>
      <div className="bg-white w-44">
        <button type="button">문의하기</button>
      </div>
    </div>
  );
}

export default ContactBanner;

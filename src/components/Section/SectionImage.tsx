const SectionImage = ({ sectionimg }: { sectionimg: string }) => {
  return (
    <div className="card-img-wrap" style={{ width: "100%", height: "auto", borderRadius: "10px", overflow: "hidden" }}>
      <img src={sectionimg} alt="3D 작업완료 된 이미지" />
    </div>
  );
};

export default SectionImage;

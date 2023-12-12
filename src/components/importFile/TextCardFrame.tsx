import TextImageCard from "../textimagecard/TextImageCard";

export default function TextCardFrame() {
  return (
    <div>
      <h2>벡타리 성공 사례에서 영감 얻기</h2>
      <div>
        <TextImageCard type={"imgright"} />
        <TextImageCard type={"imgleft"} />
        <TextImageCard type={"imgright"} />
      </div>
    </div>
  );
}

import { carddata } from "@/constants/imagecard";

import TextImageCard from "../textimagecard/TextImageCard";

export default function TextCardFrame() {
  return (
    <div>
      <h2>벡타리 성공 사례에서 영감 얻기</h2>
      <div>
        <TextImageCard data={carddata} />
        <TextImageCard data={carddata} />
        <TextImageCard data={carddata} />
      </div>
    </div>
  );
}

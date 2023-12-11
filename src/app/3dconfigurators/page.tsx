import React from "react";

import TextImageCard from "@/components/textimagecard/TextImageCard";

const page = () => {
  return (
    <div className="layout">
      <TextImageCard type="imgright" />
      <TextImageCard type="imgleft" />
      <TextImageCard type="imgright" />
    </div>
  );
};

export default page;

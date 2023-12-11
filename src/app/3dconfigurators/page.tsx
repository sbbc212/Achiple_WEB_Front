import React from "react";

import Page_top_section from "@/components/Section/Page_top_section";
import TextImageCard from "@/components/textimagecard/TextImageCard";

const page = () => {
  return (
    <div className="layout">
      <Page_top_section />
      <TextImageCard type="imgright" />
      <TextImageCard type="imgleft" />
    </div>
  );
};

export default page;

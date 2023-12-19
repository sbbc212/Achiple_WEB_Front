import Card from "../Cardlayout/Card";

import type { maincardDataType } from "@/constants/maindata";

const ThreeCardGroup = ({ content }: { content: maincardDataType[] }) => {
  return (
    <>
      {content.map((cardlist, index) =>
        cardlist.btnText === "" ? (
          <Card isBtn={true} key={index} cardlist={cardlist} btntext={"btnText"} />
        ) : (
          <Card key={index} cardlist={cardlist} btntext={"btnText"} />
        ),
      )}
    </>
  );
};

export default ThreeCardGroup;

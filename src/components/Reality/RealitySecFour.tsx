import Cardlist from "../Cardlayout/Cardlist";

import { realityData } from "@/constants/realitypagedata";

const RealitySecFour = () => {
  return (
    <>
      <Cardlist maincardData={realityData} btnText={"시작하기"} />
    </>
  );
};

export default RealitySecFour;

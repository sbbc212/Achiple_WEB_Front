import { secfouranimation } from "@/constants/animation";

import TextCard from "../Cardlayout/TextCard";

const AnimationSecFour = () => {
  return (
    <>
      <div className="flex justify-between pb-9 pt-9">
        {secfouranimation.map((item) => (
          <TextCard key={item.id} text={item} btnType={false} btnText={""} />
        ))}
      </div>
    </>
  );
};

export default AnimationSecFour;

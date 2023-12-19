import BgBanner from "@/components/Banner/BgBanner";
import PageTopSection from "@/components/Section/PageTopSection";
import StudioFive from "@/components/studio/StudioFive";
import StudioFour from "@/components/studio/StudioFour";
import StudioOne from "@/components/studio/StudioOne";
import StudioSix from "@/components/studio/StudioSix";
import StudioThree from "@/components/studio/StudioThree";
import StudioTwo from "@/components/studio/StudioTwo";
import { studiosectop } from "@/constants/studio";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={studiosectop[0]} />
      <StudioOne />
      <StudioTwo />
      <StudioThree />
      <StudioFour />
      <StudioFive />
      <StudioSix />
      <BgBanner />
    </div>
  );
};

export default page;

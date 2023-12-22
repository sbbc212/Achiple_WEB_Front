import BgBanner from "@/components/Banner/BgBanner";
import RealitySecEight from "@/components/Reality/RealitySecEight";
import PageTopSection from "@/components/Section/PageTopSection";
import StudioFive from "@/components/studio/StudioFive";
import StudioFour from "@/components/studio/StudioFour";
import StudioOne from "@/components/studio/StudioOne";
import StudioSix from "@/components/studio/StudioSix";
import StudioThree from "@/components/studio/StudioThree";
import { studioonetextcard, studiosectop, studiotwo } from "@/constants/studio";

const page = () => {
  return (
    <div className="layout">
      <PageTopSection data={studiosectop[0]} />
      <StudioOne />
      <RealitySecEight data={studiotwo[0]} textcarddata={studioonetextcard.slice(2, 5)} secondtextcard={studioonetextcard.slice(5, 8)} />
      <StudioThree />
      <StudioFour />
      <StudioFive />
      <StudioSix />
      <BgBanner />
    </div>
  );
};

export default page;

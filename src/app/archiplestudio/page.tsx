import BgBanner from "@/components/Banner/BgBanner";
import PageTopSection from "@/components/Section/PageTopSection";
import StudioFour from "@/components/studio/StudioFour";
import StudioOne from "@/components/studio/StudioOne";
import StudioThree from "@/components/studio/StudioThree";
import StudioTwo from "@/components/studio/StudioTwo";
import { studiosectop } from "@/constants/studio";

const page = () => {
  return (
    <>
      <PageTopSection data={studiosectop[0]} />
      <StudioOne />
      <StudioTwo />
      <StudioThree />
      <StudioFour />
      <BgBanner />
    </>
  );
};

export default page;

import BannerSlider from "@/components/frontend/BannerSlider";
import DonateSection from "@/components/frontend/DonateSection";
import WhoWeAre from "@/components/frontend/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <DonateSection />
      <WhoWeAre />
    </>
  );
}

import ControlledCarousel from "../../Components/Slider";
import CardSection from "../../Components/QualifyCards";
import MoreAboutUs from "../../Components/MoreAboutUs";
import DownloadInfo from "../../Components/DownloadInfo";
import OpeningTimes from "../../Components/OpeningTimes";
import Testimonials from "../../Components/Testimonials";
import Menu from "../Menu";
import OurChief from "../../Components/OurChief";
import DeliverySection from "../../Components/DeliverySection";
import HomeMenu from "../../Components/HomeMenu";

export default function Home() {
  return (
    <>
      <div className="hero">
        <ControlledCarousel />
      </div>
      <CardSection />
      <MoreAboutUs />
      <Menu />
      <HomeMenu />
      <DownloadInfo />
      <DeliverySection/>
      <OurChief />
      <Testimonials />
      <OpeningTimes />
    </>
  );
}

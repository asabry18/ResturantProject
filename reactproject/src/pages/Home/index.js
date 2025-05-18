import ControlledCarousel from "../../Components/Slider"
import CardSection from "../../Components/QualifyCards"
import MoreAboutUs from "../../Components/MoreAboutUs"
import DownloadInfo from "../../Components/DownloadInfo"
import OpeningTimes from "../../Components/OpeningTimes"
import Testimonials from "../../Components/Testimonials"
import Menu from "../Menu"
import OurChief from "../../Components/OurChief"
import DeliverySection from "../../Components/DeliverySection"
import HomeMenu from "../../Components/HomeMenu"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false })
  }, [])

  return (
    <>
      <div className="hero" data-aos="fade-in">
        <ControlledCarousel />
      </div>

      <div data-aos="fade-up">
        <CardSection />
      </div>

      <div data-aos="fade-up">
        <MoreAboutUs />
      </div>

      <div data-aos="fade-right">
        <Menu />
      </div>

      <div data-aos="fade-right">
        <HomeMenu />
      </div>

      <div data-aos="zoom-in">
        <DownloadInfo />
      </div>

      <div data-aos="flip-left">
        <DeliverySection />
      </div>

      <div data-aos="fade-up">
        <OurChief />
      </div>

      <div data-aos="fade-up">
        <Testimonials />
      </div>

      <div data-aos="fade-up">
        <OpeningTimes />
      </div>
    </>
  );
}

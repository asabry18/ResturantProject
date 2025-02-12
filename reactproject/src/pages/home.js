import ControlledCarousel from "../Components/Slider"
import CardSection from "../Components/QualifyCards"
import MoreAboutUs from "../Components/MoreAboutUs"
import DownloadInfo from "../Components/DownloadInfo"
import OpeningTimes from "../Components/OpeningTimes"
import MenuItems from "./menuItems"
import HomeMenu from "../Components/homeMenu"
import OurChief from "../Components/OurCheif"

export default function Home(){
    return(
        <>
            <div className='hero'>
                <ControlledCarousel/>
            </div>
            <CardSection/>
            <MoreAboutUs/>
            <MenuItems/>
            <HomeMenu/>
            <DownloadInfo/>
            <OurChief/>
            <OpeningTimes/>
        </>
    )
}
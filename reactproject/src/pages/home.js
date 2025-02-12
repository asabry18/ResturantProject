import ControlledCarousel from "../Components/Slider"
import CardSection from "../Components/QualifyCards"
import MoreAboutUs from "../Components/MoreAboutUs"
import DownloadInfo from "../Components/DownloadInfo"
import OpeningTimes from "../Components/OpeningTimes"
import MenuItems from "./menuItems"

export default function Home(){
    return(
        <>
            <div className='hero'>
                <ControlledCarousel/>
            </div>
            <CardSection/>
            <MoreAboutUs/>
            <MenuItems/>
            <DownloadInfo/>
            <OpeningTimes/>
        </>
    )
}
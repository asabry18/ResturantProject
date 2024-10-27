import ControlledCarousel from "../Components/Slider"
import CardSection from "../Components/QualifyCards"
import MoreAboutUs from "../Components/MoreAboutUs"
import MenuSection from "../Components/MenuSection"
import DownloadInfo from "../Components/DownloadInfo"
import OpeningTimes from "../Components/OpeningTimes"
import OurTeam from "../Components/OurTeam"
import BlogsSection from "../Components/BlogData"

export default function Home(){
    return(
        <>
            <div className='hero'>
                <ControlledCarousel/>
            </div>
            <CardSection/>
            <MoreAboutUs/>
            <MenuSection/>
            <DownloadInfo/>
            <OpeningTimes/>
            <OurTeam/>
            <BlogsSection/>
        </>
    )
}
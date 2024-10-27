import CardSection from '../components/QualifyCards';
import OurTeam from '../components/OurTeam'
import OpeningTimes from '../components/OpeningTimes';
import MoreAboutUs from '../components/MoreAboutUs';
import BlogsSection from '../components/BlogData.js';
import DownloadInfo from '../components/DownloadInfo.js';
import ControlledCarousel from '../components/Slider.js';
import MenuSection from '../components/MenuSection.js';

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
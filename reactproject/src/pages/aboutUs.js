import MoreAboutUs from "../components/MoreAboutUs";
import OpeningTimes from "../components/OpeningTimes";
import OurTeam from "../components/OurTeam";

export default function AboutUs(){
    return(
        <>
            <section class="AboutUsBg d-flex flex-column justify-content-center align-items-center mb-5">
                <h1>About Us page</h1>
                <p>Home/about-us</p>
            </section>

            <MoreAboutUs/>

            <section className="CallBg d-flex flex-column justify-content-center align-items-center">
                <p>CALL TO ACTION</p>
                <h2 className="text-capitalize">Hire your next candidate on discate</h2>
                <h6>Call Us: +99 698 569 565</h6>
                <button className="DiscoverBtn">Discover More</button>
            </section>

            <OurTeam/>

            <OpeningTimes/>
        </>
    )
}
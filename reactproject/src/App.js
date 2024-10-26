import CardSection from './components/QualifyCards';
import Header from './views/Header.js';
import Footer from './views/footer';
import OurTeam from './components/OurTeam'
import OpeningTimes from './components/OpeningTimes';
import MoreAboutUs from './components/MoreAboutUs';
import Menu from './components/Menu';
import Blogs from './components/BlogData.js';
import DownloadInfo from './components/DownloadInfo.js';
import ControlledCarousel from './components/Slider.js';
function App() {
  return (
    <div className="App">
      <div className='hero'>
        <Header />
        <ControlledCarousel/>
      </div>
      <CardSection/>
      <MoreAboutUs/>
      <Menu/>
      <DownloadInfo/>
      <OpeningTimes/>
      <OurTeam/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;

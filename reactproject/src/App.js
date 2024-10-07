import './index';
import AboutUsBg from './components/AboutUsBg'
import MoreAboutUs from './components/MoreAboutUs';
import CalUs from './components/CallUs';
import OurTeam from './components/OurTeam';
import OpeningTimes from './components/OpeningTimes';
function App() {
  return (
    <div className="App">
        <AboutUsBg />
        <MoreAboutUs />
        <CalUs />
        <OurTeam />
        <OpeningTimes />
    </div>
  );
}

export default App;

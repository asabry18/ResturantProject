import CardSection from './components/QualifyCards';
import Header from './views/header';
import Footer from './views/footer';
import OurTeam from './components/OurTeam'
import OpeningTimes from './components/OpeningTimes';
import MoreAboutUs from './components/MoreAboutUs';
import Menu from './components/Menu';
function App() {
  return (
    <div className="App">
      <Header />
      <CardSection/>
      <MoreAboutUs/>
      <Menu/>
      <OurTeam/>
      <OpeningTimes/>
      <Footer/>
    </div>
  );
}

export default App;

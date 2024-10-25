import "./index";
import Header from "./views/Header";
import Footer from "./views/Footer";
import  Slider from './views/Slider'
function App() {
  return (
    <div className="App">
    <div className="hero">

        <Header />
      <Slider/>
    </div>
      
      
      <Footer />
    </div>
  );
}

export default App;

import "./index.css";
import Header from "./views/Header";
import Footer from "./views/Footer";
import Slider from "./views/Slider";
import DownloadInfo from "./Components/downloadInfo/DownloadInfo";



function App() {
  return (
    <div className="App">
      <div className="hero">
        <Header />
        <Slider />
      </div>
      <DownloadInfo />
      <Footer />
    </div>
  );
}

export default App;

import { Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import ContactUs from './pages/contactUs';
import NavBar from "./views/NavBar";
import AboutUs from './pages/aboutUs';
import Blogs from './pages/blogs';
import BlogDetails from './pages/blogDetails';
import Menu from './pages/menu';
import Footer from './views/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs-details" element={<BlogDetails/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

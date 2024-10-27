import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./pages/home";
import ContactUs from './pages/contactUs';
import Header from "./views/Header";
import AboutUs from './pages/aboutUs';
import Blogs from './pages/blogs';
import BlogDetails from './pages/blogDetails';
import Menu from './pages/menu';
import Footer from './views/footer';
function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Header isHomePage = {isHomePage}/>
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

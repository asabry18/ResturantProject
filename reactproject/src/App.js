import { Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import ContactUs from './pages/contactUs';
import NavBar from "./views/NavBar";
import AboutUs from './pages/aboutUs';
import Blogs from './pages/blogs';
import BlogDetails from './pages/blogDetails';
import Menu from './pages/menu';
import Footer from './views/Footer';
import Sidebar from './dashboard/sidebar';
import MenuDashboard from './dashboard/menudash';
import BlogsDashboard from './dashboard/blogdash';
import TeamDashboard from './dashboard/ourteam';
import Login from './pages/Login';
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

        <Route path="/dashboard" element={<Sidebar />}>
          <Route path="menu" element={<MenuDashboard />} />
          <Route path="blogs" element={<BlogsDashboard />} />
          <Route path="our-team" element={<TeamDashboard />} />
        </Route>

        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      {/* <Login/> */}
    </div>
  );
}

export default App;

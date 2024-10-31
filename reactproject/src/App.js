import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/contactUs";
import NavBar from "./views/NavBar";
import AboutUs from "./pages/aboutUs";
import Blogs from "./pages/blogs";
import BlogDetails from "./pages/blogDetails";
import Menu from "./pages/menu";
import Footer from "./views/Footer";
import Sidebar from "./dashboard/sidebar";
import MenuDashboard from "./dashboard/menudash";
import BlogsDashboard from "./dashboard/blogdash";
import TeamDashboard from "./dashboard/ourteam";
import Login from "./pages/Login";
import Register from "./pages/register";
import { useEffect, useState } from "react";
import axios from "axios";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserIsAdmin = async () => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        setIsLoading(false);
        return false;
      }

      try {
        const validationRequest = await axios.post("http://localhost:3001/api/verifyToken", {
          token: authToken
        });
        setIsUserAdmin(validationRequest.data.isAdmin ?? false);
      } catch (e) {
        setIsUserAdmin(false);
      }

      setIsLoading(false);
    }

    fetchUserIsAdmin();
  }, [])

  return (
    <div className="App">
      <NavBar isUserAdmin={isUserAdmin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs-details" element={<BlogDetails />} />
        <Route path="/menu" element={<Menu />} />

        {/* Only allow access to Dashboard for logged in admins */}
        <Route element={<ProtectedRoute isAdmin={isUserAdmin} isLoading={isLoading} />}>
          <Route path="/dashboard" element={<Sidebar />}>
            <Route path="menu" element={<MenuDashboard />} />
            <Route path="blogs" element={<BlogsDashboard />} />
            <Route path="our-team" element={<TeamDashboard />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import NavBar from "./Components/NavBar";
import AboutUs from "./pages/Aboutus";
import Footer from "./Components/Footer";
import Sidebar from "./dashboard/sidebar";
import MenuDashboard from "./dashboard/menudash";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import axios from "axios";
import ProtectedRoute from "./Components/ProtectedRoute";
import MenuItems from "./pages/MenuItems";
import ReservationPage from "./pages/ ReservationPage";
import HomeMenu from "./Components/homeMenu";
import OurChief from "./Components/OurCheif";
import ServicePage from "./pages/ServicePage";
import Menu from "./pages/Menu";

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
        const validationRequest = await axios.post(
          "http://localhost:3001/api/verifyToken",
          {
            token: authToken,
          },
        );
        setIsUserAdmin(validationRequest.data.isAdmin ?? false);
      } catch (e) {
        setIsUserAdmin(false);
      }

      setIsLoading(false);
    };

    fetchUserIsAdmin();
  }, []);

  return (
    <div className="App">
      <NavBar isUserAdmin={isUserAdmin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu" element={<MenuItems />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/homemenu" element={<HomeMenu />} />
        <Route path="/ourChief" element={<OurChief />} />

        {/* Only allow access to Dashboard for logged in admins */}
        <Route
          element={
            <ProtectedRoute isAdmin={isUserAdmin} isLoading={isLoading} />
          }
        >
          <Route path="/dashboard" element={<Sidebar />}>
            <Route path="menu" element={<MenuDashboard />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

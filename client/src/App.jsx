import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import LandingAbout from "./pages/LandingAbout";
import ContactPage from "./pages/ContactPage";
import Services from "./pages/ServicesPage";
import BackToTopButton from "./components/BackToTopButton";
import JoinUs from "./pages/JoinUs";


function App() {
  const { token } = useContext(AppContext);

  return (
    <div className="">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />

        {/* If not logged in */}
        {!token ? (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LandingPage />} />
            <Route path="/about" element={<LandingAbout />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<LandingPage />} />
            <Route path="/JoinUs" element={<JoinUs />} />
          </>
        ) : (
          /* If logged in */
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Dashboard />} />
            <Route path="/my-profile" element={<Dashboard />} />
            <Route path="/partner" element={<Dashboard />} />       
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<Dashboard />} />
          </>
        )}
      </Routes>
      <BackToTopButton />
    </div>
  );
}

export default App;
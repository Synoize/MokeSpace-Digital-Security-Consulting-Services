import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

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
            <Route path="/login" element={<Dashboard />} />
            <Route path="/about" element={<Dashboard />} />
            <Route path="/partner" element={<Dashboard />} />
            <Route path="/contact" element={<Dashboard />} />
            <Route path="/privacy-policy" element={<Dashboard />} />
          </>
        ) : (
          /* If logged in */
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Dashboard />} />
            <Route path="/my-profile" element={<Dashboard />} />
            <Route path="/partner" element={<Dashboard />} />
            <Route path="/contact" element={<Dashboard />} />
            <Route path="/privacy-policy" element={<Dashboard />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
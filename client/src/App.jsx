import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";

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
            <Route path="/about" element={<LandingPage />} />
            <Route path="/partner" element={<LandingPage />} />
            <Route path="/contact" element={<LandingPage />} />
            <Route path="/privacy-policy" element={<LandingPage />} />
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
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
<<<<<<< HEAD
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
=======
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
>>>>>>> 8d1502d (edit)

function App() {
  const { token } = useContext(AppContext);
  return (
<<<<<<< HEAD
    <div className="container mx-auto">
=======
    <div>
>>>>>>> 8d1502d (edit)
      <ToastContainer />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
<<<<<<< HEAD
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Home />} />
        <Route path={"/my-profile"} element={<Home />} />
        <Route path={"/about"} element={<Home />} />
        <Route path={"/partner"} element={<Home />} />
        <Route path={"/contact"} element={<Home />} />
        <Route path={"/privacy-policy"} element={<Home />} />
      </Routes>
      <Footer />
=======
        {!token ? (
          <>
            <Route path={"/"} element={<LandingPage />} />

          </>
        ) : (
          <>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/login"} element={<Dashboard />} />
            <Route path={"/my-profile"} element={<Dashboard />} />
            <Route path={"/partner"} element={<Dashboard />} />
            <Route path={"/contact"} element={<Dashboard />} />
            <Route path={"/privacy-policy"} element={<Dashboard />} />
          </>
        )}
      </Routes>
>>>>>>> 8d1502d (edit)
    </div>
  );
}

export default App;

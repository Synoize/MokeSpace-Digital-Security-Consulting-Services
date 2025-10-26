import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu-icon.png";
import { Link, useLocation } from "react-router-dom"; // <-- 1. Import useLocation

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const toggleButtonRef = useRef();
  
  const location = useLocation(); // <-- 2. Get location info
  const currentPath = location.pathname; // Get the current path (e.g., "/about")

  // Close menu when clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 text-white">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img
            src={logo}
            alt="logo"
            width={42}
            className="transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110"
          />
          <span className="text-2xl font-semibold tracking-wide">
            Moke<span className="text-orange-500">Space</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Join Us", "/joinus"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <Link key={label} to={path}>
              {/* <-- 3. Add conditional classes --> */}
              <p
                className={`relative cursor-pointer transition-colors duration-300
                  ${
                    currentPath === path
                      ? "text-orange-500" // Active class
                      : "text-gray-300 hover:text-orange-400" // Inactive class
                  }
                  after:content-[''] after:absolute after:h-[2px] after:left-0 after:-bottom-1 after:bg-orange-500 after:transition-all after:duration-300
                  ${
                    currentPath === path
                      ? "after:w-full" // Active class
                      : "after:w-0 hover:after:w-full" // Inactive class
                  }
                `}
              >
                {label}
              </p>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          ref={toggleButtonRef}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-all duration-300"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="w-7 h-7 text-white transition-transform duration-500 rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <img src={menuIcon} alt="menu" className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/10 transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-3 text-white">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Services", "/services"],
            ["Join Us", "/joinus"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <Link
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-2 group"
            >
              {/* <-- 4. Add conditional classes here too --> */}
              <span
                className={`relative inline-block cursor-pointer transition-colors duration-300
                  ${
                    currentPath === path
                      ? "text-orange-500" // Active class
                      : "text-gray-300 group-hover:text-orange-400" // Inactive class
                  }
                  after:content-[''] after:absolute after:h-[2px] after:left-0 after:-bottom-1 after:bg-orange-500 after:transition-all after:duration-300
                  ${
                    currentPath === path
                      ? "after:w-full" // Active class
                      : "after:w-0 group-hover:after:w-full" // Inactive class
                  }
                `}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Custom Subtle Glow + Animation */}
      <style>{`
        nav {
          transition: all 0.5s ease;
        }
        nav:hover {
          box-shadow: 0 0 25px rgba(255, 102, 0, 0.1);
        }
        @keyframes fadeDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        nav {
          animation: fadeDown 0.8s ease forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
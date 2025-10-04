import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
<<<<<<< HEAD
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all font-semibold w-full top-1">
        <div className="flex items-center gap-3 group cursor-pointer">
          <img
            src={logo}
            alt=""
            width={40}
            className="transition-transform group-hover:scale-110"
          />
          <span className="text-xl text-gray-900">MokeSpace</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 ">
          <a className="cursor-pointer  hover:text-orange-400 hover:border-b ">
            Home
          </a>
          <a className="cursor-pointer  hover:text-orange-400 hover:border-b">
            About
          </a>
          <a className="cursor-pointer  hover:text-orange-400 hover:border-b">
            Services
          </a>
          <a className="cursor-pointer  hover:text-orange-400 hover:border-b">
            Portfolio
          </a>
          <a className="cursor-pointer  hover:text-orange-400 hover:border-b">
            Join Us{" "}
          </a>
          <a className="cursor-pointer  hover:text-orange-400 hover:border-b">
            Contact
          </a>
          <span>
            <a className="cursor-pointer rounded-md transition-transform group-hover:scale-110 p-2">
              Get Started
            </a>
          </span>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 md:hidden z-10">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-full hover:bg-orange-400 hover:rounded-md p-1.5 font-semibold"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-full hover:bg-orange-400 hover:rounded-md p-1.5 font-semibold"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-full hover:bg-orange-400 hover:rounded-md p-1.5 font-semibold"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-full hover:bg-orange-400 hover:rounded-md p-1.5 font-semibold"
            >
              Portfolio
            </a>
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-full hover:bg-orange-400 hover:rounded-md p-1.5 font-semibold"
            >
              Join Us
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-full hover:bg-orange-400 hover:rounded-md p-1.5 font-semibold"
            >
              Contact
            </a>
            <a
              href="#get-started"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer w-full hover:bg-orange-400 rounded-md p-1.5 text-center bg-orange-400"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
=======
   const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className=" w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-100  transition-all fixed shadow-lg z-50 backdrop-blur-xl text-white">
      <div className="flex items-center justify-between w-full ">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img
            src={logo}
            alt="logo"
            width={40}
            className="transition-transform group-hover:scale-105"
          />
          <span className="text-xl">MokeSpace</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="cursor-pointer hover:text-orange-400 hover:border-b">
            Home
          </a>
          <a className="cursor-pointer hover:text-orange-400 hover:border-b">
            About
          </a>
          <a className="cursor-pointer hover:text-orange-400 hover:border-b">
            Services
          </a>
          <a className="cursor-pointer hover:text-orange-400 hover:border-b">
            Portfolio
          </a>
          <a className="cursor-pointer hover:text-orange-400 hover:border-b">
            Join Us
          </a>
          <a className="cursor-pointer hover:text-orange-400 hover:border-b">
            Contact
          </a>
          <span>
            <a className="cursor-pointer rounded-md transition-transform group-hover:scale-110 p-2">
              Get Started
            </a>
          </span>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu (same as before) */}
    </nav>

  )
}

export default Navbar
>>>>>>> 8d1502d (edit)

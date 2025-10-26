import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-[#B3B3B3] border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="MokeSpace Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold text-white">
                Moke<span className="text-orange-500">Space</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Digital Security Consulting Services — building secure,
              innovative, and scalable solutions for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Join Us", path: "/join" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-orange-500 transition-colors duration-300">
                Web Development
              </li>
              <li className="hover:text-orange-500 transition-colors duration-300">
                App Development
              </li>
              <li className="hover:text-orange-500 transition-colors duration-300">
                Cybersecurity
              </li>
              <li className="hover:text-orange-500 transition-colors duration-300">
                UI/UX Design
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 group">
                <Mail className="h-4 w-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                <span className="text-gray-400 group-hover:text-orange-500 transition-colors">
                  mokespaceagency@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="h-4 w-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                <span className="text-gray-400 group-hover:text-orange-500 transition-colors">
                  +91 8269559082
                </span>
              </li>
              <li className="flex gap-4 mt-4">
                {[
                  { icon: <Linkedin className="h-5 w-5" />, link: "#" },
                  { icon: <Youtube className="h-5 w-5" />, link: "#" },
                  { icon: <Instagram className="h-5 w-5" />, link: "#" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-transform transform hover:scale-110"
                  >
                    {item.icon}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025{" "}
            <span className="text-white font-semibold">MokeSpace</span> Digital
            Security Consulting Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

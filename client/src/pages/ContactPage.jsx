import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";
import Footer from '../components/Footer';
import { ArrowRight,Github,Linkedin,X} from "lucide-react";
const ContactPage = () => {
  return (
    <>
    <div className="bg-black text-white min-h-screen pt-35 pb-16">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-lg text-gray-400">
            Let's connect and build something amazing together
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column: Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full p-3 bg-[#191919] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full p-3 bg-[#191919] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 12345 67890"
                  className="w-full p-3 bg-[#191919] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full p-3 bg-[#191919] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-orange-500 rounded-md font-semibold text-white hover:bg-orange-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="p-6 bg-[#191919]  rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <InfoItem
                  icon={<FiMail />}
                  title="Email"
                  text="mokespaceagency@gmail.com"
                />
                <InfoItem
                  icon={<FiPhone />}
                  title="Phone"
                  text="+91 8269559082"
                />
                <InfoItem
                  icon={<FaWhatsapp />}
                  title="WhatsApp"
                  text="+91 8269559082"
                />
                <InfoItem
                  icon={<FiMapPin />}
                  title="Location"
                  text="Remote & Global"
                  subtext="Serving clients worldwide"
                />
              </div>
            </div>

            {/* Follow Us Card */}
            <div className="p-6 bg-[#191919] border border-orange-500 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <SocialIcon href="#" icon={<Linkedin size={20} />} />
                <SocialIcon href="#" icon={<X size={20} />} />
                <SocialIcon href="#" icon={<Github size={20} />} />
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="p-6 bg-[#191919] border border-gray-800 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  Monday - Friday:{' '}
                  <span className="text-white font-medium">
                    9:00 AM - 6:00 PM
                  </span>
                </li>
                <li>
                  Saturday:{' '}
                  <span className="text-white font-medium">
                    10:00 AM - 4:00 PM
                  </span>
                </li>
                <li>
                  Sunday: <span className="text-white font-medium">Closed</span>
                </li>
              </ul>
              <p className="mt-4 text-orange-400 text-sm font-medium">
                24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

// Helper component for contact info items
const InfoItem = ({ icon, title, text, subtext }) => (
  <div className="flex items-start space-x-4">
    <div className="text-orange-500 text-2xl mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-white text-lg">{title}</h4>
      <p className="text-gray-400">{text}</p>
      {subtext && <p className="text-gray-500 text-sm">{subtext}</p>}
    </div>
  </div>
  
);

// Helper component for social media icons
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    className="p-3 bg-[#191919] rounded-md text-white hover:bg-orange-500 hover:text-white transition-colors"
  >
    {icon}
  </a>
);

export default ContactPage;
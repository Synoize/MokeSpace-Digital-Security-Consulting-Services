import React from "react";
import {
  Code2,
  Smartphone,
  Palette,
  ShieldCheck,
  BriefcaseBusiness,
  Database,
  ArrowRight,
} from "lucide-react";
import Footer from "../components/Footer";

const services = [
  {
    title: "Web Development",
    desc: "Custom, scalable web solutions",
    Icon: Code2,
    whyChooseUs:
      "We use the latest technologies and frameworks to deliver fast, secure, and maintainable web solutions.",
    features: [
      "Custom web applications",
      "E-commerce solutions",
      "Progressive web apps (PWA)",
      "API development and integration",
      "Responsive design",
    ],
  },
  {
    title: "App Development",
    desc: "Native and cross-platform apps",
    Icon: Smartphone,
    whyChooseUs:
      "Our mobile apps are built with performance and user experience as top priorities.",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "App maintenance and updates",
      "App store optimization",
      "Push notifications",
    ],
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, intuitive designs that enhance user engagement and satisfaction.",
    Icon: Palette,
    whyChooseUs:
      "We create designs that not only look great but also drive business results.",
    features: [
      "User interface design",
      "User experience optimization",
      "Brand identity design",
      "Wireframing and prototyping",
      "Design systems",
    ],
  },
  {
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect your digital assets.",
    Icon: ShieldCheck,
    whyChooseUs:
      "We implement enterprise-grade security measures to keep your business safe.",
    features: [
      "Security audits and assessments",
      "Vulnerability testing",
      "Security architecture design",
      "Compliance consulting",
      "Incident response planning",
    ],
  },
  {
    title: "Business Security & Advisory",
    desc: "Strategic business consulting to help you navigate digital transformation.",
    Icon: BriefcaseBusiness,
    whyChooseUs:
      "We combine technical expertise with business insight to deliver strategic value.",
    features: [
      "Digital transformation strategy",
      "Risk management",
      "Process optimization",
      "Technology consulting",
      "Business continuity planning",
    ],
  },
  {
    title: "Big Data & Analytics",
    desc: "Turn your data into actionable insights and competitive advantages.",
    Icon: Database,
    whyChooseUs:
      "We help you unlock the power of your data with advanced analytics and AI.",
    features: [
      "Data warehousing",
      "Business intelligence",
      "Predictive analytics",
      "Data visualization",
      "Machine learning solutions",
    ],
  },
];

const ServiceCard = ({ title, desc, Icon, whyChooseUs, features }) => {
  return (
    <div className="group relative bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-orange-500/30 border border-transparent hover:border-orange-500 transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col justify-between min-h-[500px]">
      <div>
        <div className="flex items-center mb-4">
          <div className="bg-orange-500 p-3 rounded-lg text-white transform transition-transform duration-500 group-hover:rotate-[10deg]">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="ml-4 text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-gray-300 mb-4">{desc}</p>

        <div className="text-gray-400 text-sm mb-4">
          <h4 className="font-semibold text-white">Why Choose Us:</h4>
          <p>{whyChooseUs}</p>
        </div>

        <div className="text-gray-400 text-sm">
          <h4 className="font-semibold text-white">What We Offer:</h4>
          <ul className="list-disc pl-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fixed Learn More at the bottom */}
      <div className="mt-6 text-right">
        <a
          href="#"
          className="text-orange-500 flex items-center justify-end hover:text-orange-400 transition-all duration-300"
        >
          Learn more
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      {/* Subtle glowing effect around card */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-700 pointer-events-none"></div>
    </div>
  );
};

const SectionSection = () => {
  return (
    <>
      <section className="bg-[#0C0C0C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8">
            Our <span className="text-orange-500">Services</span>
          </h2>

          <p className="text-center text-lg text-gray-400 mb-12">
            Comprehensive digital solutions designed to help your business thrive.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SectionSection;

import React from "react";
import { Link } from "react-router-dom"; // <-- 1. IMPORT LINK
import {
  Code2,
  Smartphone,
  Palette,
  Video,
  ShieldCheck,
  BriefcaseBusiness,
  Database,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Custom, scalable web solutions",
    Icon: Code2,
  },
  {
    title: "App Development",
    desc: "Native and cross-platform apps",
    Icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, user-centric designs",
    Icon: Palette,
  },
  {
    title: "Video Editing",
    desc: "Professional video production",
    Icon: Video,
  },
  {
    title: "Cybersecurity",
    desc: "Comprehensive security solutions",
    Icon: ShieldCheck,
  },
  {
    title: "Business Advisory",
    desc: "Strategic business consulting",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Big Data",
    desc: "Data analytics and insights",
    Icon: Database,
  },
  {
    title: "Digital Security",
    desc: "Complete digital protection",
    Icon: Shield,
  },
];

const ServiceCard = ({ title, desc, Icon, featured }) => {
  return (
    // This div is now wrapped by a <Link> component
    <div
      className={[
        "group rounded-2xl border bg-[#1a1a1a]/80 p-6 md:p-8 text-center cursor-pointer",
        "border-neutral-800 hover:border-orange-500/60",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        "hover:shadow-[0_10px_40px_-10px_rgba(255,122,0,0.25)]",
        "transition-all duration-300 ease-out",
        "flex flex-col items-center justify-between min-h-[260px]",
        featured ? "ring-1 ring-orange-500/40" : "",
      ].join(" ")}
    >
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* ICON with rotation effect */}
        <div className="rounded-xl bg-neutral-800/80 p-3 w-fit mb-4 transition-transform duration-500 ease-out group-hover:rotate-[10deg] group-hover:scale-110">
          <Icon className="size-6 text-orange-500 transition-colors duration-300" />
        </div>

        {/* TITLE */}
        <h3 className="text-lg md:text-xl font-semibold text-neutral-100 mb-2 group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-neutral-400 text-sm leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Learn More Link */}
      <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium group-hover:text-orange-400 text-white transition-all duration-300">
        Learn more
        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

// Renamed component to match export
const ServicesSection = () => {
  return (
    <section className="w-full bg-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-12 py-20">
        {/* Badge */}
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1 text-sm text-neutral-300">
          <Sparkles className="size-4 text-orange-400" /> What We Offer
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-100">
          Our <span className="text-orange-500">Services</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400 leading-relaxed">
          Comprehensive digital solutions tailored to your business needs.
        </p>

        {/* Grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-stretch">
          {/* --- 2. WRAPPED EACH CARD IN A LINK --- */}
          {services.map((s) => (
            <Link to="/services" key={s.title}>
              <ServiceCard {...s} />
            </Link>
          ))}
          {/* --- END OF CHANGE --- */}
        </div>

        {/* CTA Button */}
        <div className="mt-14 flex justify-center">
          {/* --- 3. CHANGED BUTTON TO LINK --- */}
          <Link
            to="/services"
            className={[
              "inline-flex items-center gap-2 rounded-xl border border-orange-600/30",
              "bg-neutral-900 px-6 py-3 text-sm md:text-base font-semibold",
              "text-neutral-100 hover:bg-orange-600/10 hover:shadow-[0_10px_30px_-10px_rgba(255,122,0,0.35)]",
              "cursor-pointer transition-all duration-300",
            ].join(" ")}
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
          {/* --- END OF CHANGE --- */}
        </div>

        {/* Feature Bullets */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-400">
          {[
            "✔ 10+ Years Experience",
            "✔ 24/7 Support",
            "✔ 100% Secure",
          ].map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-center hover:text-orange-400 transition-colors duration-300"
            >
              <span className="text-green-500 text-base">✔</span>
              <span>{text.replace("✔ ", "")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
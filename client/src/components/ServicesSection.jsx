import React from "react";
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
  Sparkles
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
    <div
      className={[
        "group rounded-2xl border bg-neutral-900/60 p-6 md:p-7",
        "border-neutral-800 hover:border-orange-500/60",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        "hover:shadow-[0_8px_40px_-8px_rgba(255,122,0,0.25)]",
        "transition-all duration-300 ease-out",
        featured ? "ring-1 ring-orange-500/40" : "",
      ].join(" ")}
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-neutral-800/80 p-3">
          <Icon className="size-6 text-orange-500" />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-neutral-100 line-clamp-1">
          {title}
        </h3>
      </div>

      <p className="mt-4 text-neutral-400 line-clamp-2">{desc}</p>

      <div className="mt-5 flex items-center gap-2 text-sm group-hover:text-orange-400 text-white group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all">
        Learn more <ArrowRight className="size-4" />
      </div>
    </div>
  );
};

const SectionSection = () => {
  return (
    <section className="w-full bg-neutral-950 text-neutral-200 ">
      {/* container */}
      <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-12 py-16 md:py-20">
        {/* badge */}
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1 text-sm text-neutral-300">
          <Sparkles className="size-4 text-orange-400" /> What We Offer
        </div>

        {/* heading */}
        <h2 className="mt-6 text-center text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-100 ">
          Our <span className="text-neutral-100">Services</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400 ">
          Comprehensive digital solutions tailored to <br className="md:hidden"/> your business needs
        </p>

        {/* grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            className={[
              "inline-flex items-center gap-2 rounded-xl border border-orange-600/30",
              "bg-neutral-900 px-5 py-3 text-sm md:text-base font-semibold",
              "text-neutral-100 hover:bg-orange-600/10",
              "shadow-[0_10px_30px_-10px_rgba(255,122,0,0.35)]",
              "transition-all"
            ].join(" ")}
          >
            View All Services <ArrowRight className="size-4" />
          </button>
        </div>

        {/* feature bullets (optional small row under CTA) */}
        <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-neutral-400 sm:grid-cols-3">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="i">✔</span> 10+ Years Experience
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="i">✔</span> 24/7 Support
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="i">✔</span> 100% Secure
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSection;

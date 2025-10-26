import * as React from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Button = ({ className, children, size = "md", ...props }) => {
  let paddingClass = "px-4 py-2 text-sm";

  if (size === "lg") {

    paddingClass = "px-10 py-7 text-lg";
  }

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-medium transition-all duration-500 ease-out text-white h-11 rounded-md text-lg px-8 py-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 bg-[length:200%_200%] hover:bg-[position:right_center] hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(255,102,0,0.4)] hover:border-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,255,255,0.15)_0%,transparent_50%,rgba(255,255,255,0.15)_100%)] before:animate-[shine_3s_linear_infinite] before:bg-[length:200%_100%] before:bg-[position:-200%_center] before:opacity-4 cursor-pointer",
        paddingClass
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const ReadySection = () => {
  return (
    <section className="py-24 bg-[#0C0C0C] text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Ready to Get Started?
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your digital presence with
            secure, innovative solutions tailored to your needs.
          </p>

          <Button size="lg" className="group">
            <a
              href="#contact"
              className="flex items-center gap-2 text-white no-underline"
            >
              Contact Us Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReadySection;

import React from "react";
import herobg from "../assets/herobg.png";

const Header = () => {
  return (
    <section className="relative pt-15 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      <div className="relative inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-block animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                Trusted by 500+ Businesses
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Secure Your Digital{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text inline-block animate-in fade-in duration-1000 delay-300 text-orange-400">
              Future Today
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 text-gray-70">
            MokeSpace delivers cutting-edge digital solutions with
            enterprise-grade security. From web development to cybersecurity
            consulting, we're your trusted technology partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md bg-primary hover:bg-primary/90 text-lg px-8 py-6   transition-all duration-300">
              <a className="flex items-center gap-2" href="/contact">
                Hire Us
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
                  className="lucide lucide-arrow-right h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </button>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 hover:border-primary">
              <a className="flex items-center gap-2" href="/join">
                Join as Freelancer
              </a>
            </button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 flex-wrap animate-in fade-in duration-1000 delay-1000">
            <div className="flex items-center gap-2">
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
                className="lucide lucide-circle-check h-5 w-5 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm text-muted-foreground">
                10+ Years Experience
              </span>
            </div>

            <div className="flex items-center gap-2">
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
                className="lucide lucide-circle-check h-5 w-5 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm text-muted-foreground">
                24/7 Support
              </span>
            </div>

            <div className="flex items-center gap-2">
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
                className="lucide lucide-circle-check h-5 w-5 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm text-muted-foreground">100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Header;

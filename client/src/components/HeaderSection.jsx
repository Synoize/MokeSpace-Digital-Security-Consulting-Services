import React from "react";
import { CircleCheckBig } from "lucide-react";
import { ArrowRight } from "lucide-react";

const HeaderSection = () => {
  return (
    <section className="pt-35 pb-16 overflow-hidden min-h-[90vh] flex items-centerw-full w-full bg-[#1E1E1E] text-white p-4 ">
      <div className="relative inset-0 z-0"></div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-block animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20  bg-">
              <span className="text-sm font-medium text-primary ">
                Trusted by 500+ Businesses
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 mb-12">
            Secure Your Digital{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text inline-block animate-in fade-in duration-1000 delay-300 text-orange-400 ">
              Future Today
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 text-gray-70 font-light tracking-widest ">
            MokeSpace delivers cutting-edge digital solutions with
            enterprise-grade security. From web development to cybersecurity
            consulting, we're your trusted technology partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 ">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-11 rounded-md bg-primary hover:bg-primary/90 text-lg py-6  transition-all duration-300 cursor-pointer group md:mr-6">
              Hire Us
              <ArrowRight className="group-hover:translate-x-2 transition-all duration-500 ease-out"/>
            </button>

            <button className="relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-medium transition-all duration-500 ease-out text-white h-11 rounded-md text-lg px-8 py-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 bg-[length:200%_200%] hover:bg-[position:right_center] hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(255,102,0,0.4)] hover:border-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,255,255,0.15)_0%,transparent_50%,rgba(255,255,255,0.15)_100%)] before:animate-[shine_3s_linear_infinite] before:bg-[length:200%_100%] before:bg-[position:-200%_center] before:opacity-4 cursor-pointer">
              Join as Freelancer
            </button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-12 flex-wrap animate-in fade-in duration-1000 delay-1000 ">
            <div className="flex items-center gap-2">
              <CircleCheckBig className="text-orange-400" />
              <span className="text-sm text-muted-foreground">
                10+ Years Experience
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CircleCheckBig className="text-orange-400" />
              <span className="text-sm text-muted-foreground">
                24/7 Support
              </span>
            </div>

            <div className="flex items-center gap-2 ">
              <CircleCheckBig className="text-orange-400" />
              <span className="text-sm text-muted-foreground ">
                100% Secure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;

import * as React from "react";

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Users = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ArrowRight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Card = ({ className, children }) => (
  <div className={cn("rounded-xl border border-orange-500/30 bg-[#1a1a1a] text-white shadow-sm overflow-hidden", className)}>
    {children}
  </div>
);

const Button = ({ className, children, size = 'md', ...props }) => {
    let paddingClass = 'px-4 py-2';
    if (size === 'lg') {
        paddingClass = 'px-8 py-6';
    }

    return (
        <button
            className={cn(
                "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-medium transition-all duration-500 ease-out text-white h-11 rounded-md text-lg px-8 py-6 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 bg-[length:200%_200%] hover:bg-[position:right_center] hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(255,102,0,0.4)] hover:border-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,255,255,0.15)_0%,transparent_50%,rgba(255,255,255,0.15)_100%)] before:animate-[shine_3s_linear_infinite] before:bg-[length:200%_100%] before:bg-[position:-200%_center] before:opacity-4 cursor-pointer",
                paddingClass,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const FreelancerNetSection = () => {
  return (
    <section className="py-24 bg-[#1E1E1E] text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative p-12 md:p-16 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent border-orange-500/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-50"></div>
          
          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
            
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/20 border-2 border-orange-500/30">
              <Users className="h-10 w-10 text-orange-500" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Join Our Freelancer Network
            </h2>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Earn extra income by working on exciting projects. Flexible hours, competitive rates, 
              and opportunities to grow your portfolio with industry-leading clients.
            </p>
            
            <Button size="lg" className="group">
              <a href="#apply" className="flex items-center gap-2 text-white no-underline">
                Apply Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FreelancerNetSection;



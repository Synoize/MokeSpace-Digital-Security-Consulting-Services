import * as React from "react";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ----------------- Utility -----------------
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ----------------- Card Components -----------------
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border text-card-foreground shadow-md transition-all duration-300 ease-out",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-center justify-center", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-center justify-center flex-grow", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-400 mt-1", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// ----------------- Stats Section -----------------
const StatsSection = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  const stats = [
    { icon: Briefcase, value: 500, label: "Projects Completed", suffix: "+" },
    { icon: Users, value: 1000, label: "Happy Clients", suffix: "+" },
    { icon: Award, value: 50, label: "Awards Won", suffix: "+" },
    { icon: TrendingUp, value: 98, label: "Success Rate", suffix: "%" },
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter animation
  const Counter = ({ end, duration, suffix }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(end * percentage));
        if (percentage < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 bg-[#0C0C0C] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="flex flex-col items-center justify-center p-8 text-center bg-[#131313] border border-neutral-800 
                           hover:border-orange-500/60 hover:shadow-[0_0_30px_rgba(255,102,0,0.15)] 
                           transition-all duration-500 ease-out min-h-[200px] cursor-pointer group "
              >
                <CardHeader>
                  <Icon
                    className="h-10 w-10 sm:h-12 sm:w-12 group-hover:text-orange-500 mx-auto mb-4 
                               transition-transform duration-500 ease-out 
                               group-hover:scale-110 group-hover:rotate-[10deg]"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-4xl md:text-5xl font-extrabold group-hover:text-orange-500 mb-1">
                    <Counter end={stat.value} duration={2000} suffix={stat.suffix} />
                  </h3>
                  <CardDescription className="text-gray-400 font-medium">
                    {stat.label}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

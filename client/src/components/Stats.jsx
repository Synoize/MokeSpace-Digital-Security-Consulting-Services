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
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, duration, suffix }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (!isVisible) return;

      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
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
      className="py-16 sm:py-20 lg:py-24 bg-[#0C0C0C] text-[#FF6B00]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 sm:p-8 text-center bg-card/50 backdrop-blur-sm border-border 
                           hover:border-primary transition-all duration-500 
                           hover:shadow-[0_0_30px_rgba(255,102,0,0.2)] group
                           bg-[#131313] cursor-pointer"
              >
                <CardHeader>
                  <Icon
                    className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 
                                   group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                  />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                    <Counter
                      end={stat.value}
                      duration={2000}
                      suffix={stat.suffix}
                    />
                  </div>
                  <CardDescription className="font-medium text-sm sm:text-base">
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

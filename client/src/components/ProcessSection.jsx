import * as React from "react";
import { Search, Palette, Code, Rocket, Zap } from "lucide-react";


const { useState } = React; 

const cn = (...classes) => classes.filter(Boolean).join(' ');



const App = () => {

  const ACCENT_COLOR_HEX = '#ff8c42';
  const ACCENT_COLOR_CLASS = 'text-[#ff8c42]';

  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "We analyze your requirements, understand your goals, and define the project scope through detailed consultation.",
      number: "01",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Our designers create intuitive, beautiful interfaces that align with your brand and engage your users.",
      number: "02",
    },
    {
      icon: Code,
      title: "Develop",
      description: "Expert developers build robust, scalable solutions using cutting-edge technologies and best practices.",
      number: "03",
    },
    {
      icon: Rocket,
      title: "Deploy",
      description: "We launch your project with comprehensive testing, optimization, and ongoing support for success.",
      number: "04",
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-black min-h-screen font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          
          {/* Badge: Our Process */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-black border border-[#ff8c42] mb-4">
            <Rocket className={cn("h-4 w-4 transform ", ACCENT_COLOR_CLASS)} />
            <span className={cn("text-sm font-medium", ACCENT_COLOR_CLASS)}>Our Process</span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            How We Work
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A proven 4-step process that delivers exceptional results every time
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            // FIX: Use React state for reliable hover effect with arbitrary hex values
            const [isHovered, setIsHovered] = useState(false);

            // Determine border color: If hovered, use orange. Otherwise, transparent.
            const currentBorderColor = isHovered 
              ? ACCENT_COLOR_HEX 
              : 'transparent';

            return (
              <div // Replaced Card component with simple div
                key={index}
                // Event handlers to manage hover state
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                
                // Apply dynamic border color via style attribute
                style={{ 
                  borderColor: currentBorderColor, 
                  borderWidth: '4px',
                  transition: 'border-color 0.3s ease' // Added for smooth transition
                }}
                // Applied Card component's original classes here
                className={cn(
                  "p-6 flex flex-col group h-full cursor-pointer",
                  "rounded-xl border border-gray-800 bg-[#1a1a1a] text-gray-100 shadow-xl transition-all duration-300",
                )}
              >
                
                {/* Top Section (Icon and Number) */}
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-lg bg-[#333333] flex items-center justify-center">
                    <Icon className={cn("h-6 w-6", ACCENT_COLOR_CLASS)} />
                  </div>
                  
                  {/* Large Number */}
                  <div className="text-5xl font-extrabold text-[#333333] select-none">
                    {step.number}
                  </div>
                </div>

                {/* Title (Replaced CardTitle with h3) */}
                <h3 
                    className="text-2xl font-semibold leading-none tracking-tight text-white mb-3"
                >
                  {step.title}
                </h3>

                {/* Description (Replaced CardDescription with p) */}
                <p className="text-base text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default App;

import * as React from "react";
import { Search, Palette, Code, Rocket } from "lucide-react";


const { useState } = React; 

const cn = (...classes) => classes.filter(Boolean).join(' ');


const ProcessSection = () => {

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

  // Custom styling to define the connector line appearance
  const ConnectorStyle = () => (
    <style jsx="true">{`
      .process-card {
        position: relative;
      }
      /* Horizontal Line for Desktop (hidden on mobile/small screens) */
      .process-card:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -1.5rem; /* half of the gap-6 (24px) */
        width: 1.5rem;
        height: 3px;
        background-color: #333333; /* Dark gray line */
        transform: translateY(-50%);
        transition: background-color 0.3s ease;
        display: none; /* Default hidden */
      }
      /* Show horizontal line on medium screens and up */
      @media (min-width: 1024px) {
        .process-card:not(:last-child)::after {
          display: block;
        }
      }
      
      /* Horizontal Line Animation on Hover */
      .process-card:hover:not(:last-child)::after {
        background-color: rgb(249 115 22); /* orange-500 */
      }
    `}</style>
  );

  return (
    <section className="py-20 md:py-32 bg-black min-h-screen font-sans">
      <ConnectorStyle />
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          
          {/* Badge: Our Process */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-black border border-orange-500 mb-4">
            <Rocket className="h-4 w-4 transform text-orange-500" />
            <span className="text-sm font-medium text-orange-500">Our Process</span>
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

        {/* Process Steps Grid - Set to relative for connector positioning */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={index}
                // Added connector-card class for custom CSS
                className={cn(
                  "p-6 flex flex-col group h-full cursor-pointer process-card",
                  // Set initial border to transparent and size 4
                  "rounded-xl border-2 border-transparent bg-[#1a1a1a] text-gray-100 shadow-xl transition-all duration-300",
                  // Added Tailwind hover class
                  "hover:border-orange-500",
                )}
              >
                
                {/* Top Section (Icon and Number) */}
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-lg bg-[#333333] flex items-center justify-center">
                    <Icon className="h-6 w-6 text-orange-500" />
                  </div>
                  
                  {/* Large Number */}
                  <div className="text-5xl font-extrabold text-[#333333] select-none">
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <h3 
                    className="text-2xl font-semibold leading-none tracking-tight text-white mb-3"
                >
                  {step.title}
                </h3>

                {/* Description */}
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

export default ProcessSection;







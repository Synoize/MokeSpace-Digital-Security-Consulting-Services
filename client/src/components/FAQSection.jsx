import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(' ');

const FAQSection = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does MokeSpace offer?",
      answer: "We offer comprehensive digital solutions including web development, app development, UI/UX design, cybersecurity, video editing, business advisory, big data analytics, and digital security consulting."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes! We provide 24/7 support and maintenance services. Our team ensures your project runs smoothly with regular updates, bug fixes, and technical assistance."
    },
    {
      question: "What is your development process?",
      answer: "We follow a proven 4-step process: Discover (understanding requirements), Design (creating interfaces), Develop (building solutions), and Deploy (launching with support). This ensures quality and timely delivery."
    },
    {
      question: "How do you ensure project security?",
      answer: "Security is our priority. We implement enterprise-grade security measures, conduct regular audits, follow best practices, and ensure compliance with industry standards for all projects."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-12 bg-black text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-orange-500 mb-4">
              <HelpCircle className={cn("h-4 w-4", 'text-orange-500')} />
              <span className={cn("text-sm font-medium", 'text-orange-500')}>FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Got questions? We've got answers
            </p>
          </div>

          <div className="w-full space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = index === activeIndex;
              return (
                <div
                  key={index}
                  className={cn(
                    "rounded-xl px-6 transition-all duration-300",
                    "bg-[#1a1a1a] border border-gray-700",
                    "hover:border-orange-500",
                    "transform hover:scale-[1.01] hover:shadow-2xl"
                  )}
                >
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className={cn(
                      "group flex flex-1 items-center justify-between w-full py-4 text-left text-lg font-semibold transition-colors duration-300 cursor-pointer", // <-- ADDED cursor-pointer
                      isOpen ? 'text-orange-500' : 'text-white',
                      !isOpen && 'hover:text-orange-400'
                    )}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${index}`}
                  >
                    {faq.question}

                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0",
                        isOpen ? 'text-orange-500' : 'text-gray-400',
                        !isOpen && 'group-hover:text-orange-400'
                      )}
                    />
                  </button>

                  <div
                    id={`faq-content-${index}`}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isOpen ? '500px' : '0',
                    }}
                  >
                    <p 
                        className={cn(
                            "text-base text-gray-400 leading-relaxed transition-opacity duration-500 pb-4", // Moved padding here
                            isOpen ? 'opacity-100' : 'opacity-0'
                        )}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
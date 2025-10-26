import React from 'react';
import { Link } from 'react-router-dom';
import {
  // Icons for Hero & Why Join
  Users,
  DollarSign,
  LineChart,
  Clock,
  Briefcase,
  Award,
  
  // Icons for Skills
  Code2,
  Smartphone,
  Palette,
  PenTool,
  ShieldCheck,
  BriefcaseBusiness,
  Camera,
  Megaphone,
  BrainCircuit,
  Database,
  ListChecks,
  FileText,
  ArrowRight,
} from 'lucide-react';
import Footer from '../components/Footer';

// --- 1. Hero Section ---
const HeroSection = () => {
  return (
    <section className="bg-neutral-950 text-neutral-100 py-20 md:py-32 pt-32 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-orange-600/20 text-orange-400 mb-8 transition-transform duration-300 hover:rotate-[10deg]">
          <Users className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Join Our <span className="text-orange-500">Freelancer Network</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Turn your skills into income. Work on exciting projects with flexible hours and competitive pay.
        </p>
      </div>
    </section>
  );
};

// --- 2. Why Join Section ---
const whyJoinBenefits = [
  { icon: DollarSign, title: "Competitive Income", description: "Earn competitive rates for your skills and expertise on every project." },
  { icon: LineChart, title: "Portfolio Growth", description: "Work on diverse, challenging projects to expand your portfolio." },
  { icon: Clock, title: "Flexible Schedule", description: "Work on your own time and choose projects that fit your schedule." },
  { icon: Briefcase, title: "Real Projects", description: "Collaborate on meaningful projects for actual clients." },
  { icon: Users, title: "Networking", description: "Connect with other talented professionals and grow your network." },
  { icon: Award, title: "Recognition", description: "Build your reputation and get recognized for excellent work." },
];

const WhyJoinSection = () => {
  return (
    <section className="bg-neutral-950 text-neutral-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Why Join MokeSpace?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyJoinBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-neutral-800 hover:border-orange-500/60 shadow-lg hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-md bg-orange-600/20 text-orange-400 mb-4 transition-transform duration-300 group-hover:rotate-[10deg]">
                <benefit.icon className="w-6 h-6" />
              </div>
              {/* --- 1. MODIFIED THIS LINE --- */}
              <h3 className="text-xl font-semibold text-neutral-50 mb-2 transition-colors duration-300 group-hover:text-orange-400">
                {benefit.title}
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 3. Skills Section (UPDATED) ---
const skillsWeNeed = [
  { icon: Code2, title: "Web Development", description: "Frontend, Backend, Full-stack" },
  { icon: Smartphone, title: "App Development", description: "iOS, Android, React Native, Flutter" },
  { icon: Palette, title: "UI/UX Design", description: "Interface design, User experience" },
  { icon: PenTool, title: "Graphic Design", description: "Branding, Visual design" },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Security audits, Penetration testing" },
  { icon: BriefcaseBusiness, title: "Business Advisory", description: "Strategy, Consulting" },
  { icon: Camera, title: "Video Editing", description: "Post-production, Motion graphics" },
  { icon: Megaphone, title: "Digital Marketing", description: "SEO, SMM, Content Marketing" },
  { icon: BrainCircuit, title: "AI & ML", description: "Machine Learning, AI Solutions" },
  { icon: Database, title: "Data Analytics", description: "Business Intelligence, Data Visualization" },
  { icon: ListChecks, title: "Project Management", description: "Agile, Scrum, Project Planning" },
  { icon: FileText, title: "Copywriting", description: "Content Creation, Technical Writing" },
];

const SkillsSection = () => {
  return (
    <section className="bg-neutral-950 text-neutral-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Skills We're Looking For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillsWeNeed.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-5 rounded-xl border border-neutral-800 flex items-start gap-4 transition-all duration-300 hover:border-orange-500/60 hover:shadow-orange-500/10 group"
            >
              <div className="inline-flex p-2 rounded-md bg-orange-600/20 text-orange-400 flex-shrink-0 transition-transform duration-300 group-hover:rotate-[10deg]">
                <skill.icon className="w-5 h-5" />
              </div>
              <div>
                {/* --- 2. MODIFIED THIS LINE --- */}
                <h3 className="text-lg font-semibold text-neutral-50 mb-1 transition-colors duration-300 group-hover:text-orange-400">
                  {skill.title}
                </h3>
                <p className="text-neutral-400 text-sm">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. How It Works Section ---
const howItWorksSteps = [
  { number: 1, title: "Submit Your Application", description: "Fill out our application form with your skills, experience, and portfolio." },
  { number: 2, title: "Review Process", description: "Our team will review your application and get back to you within 5 business days." },
  { number: 3, title: "Start Working", description: "Once approved, you'll get access to available projects and can start working immediately." },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-neutral-950 text-neutral-100 py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          How It Works
        </h2>
        <div className="space-y-8">
          {howItWorksSteps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-neutral-800 flex items-start gap-4 transition-all duration-300 hover:border-orange-500/60 hover:shadow-orange-500/10 group"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-500 text-white font-bold text-lg flex-shrink-0 transition-transform duration-300 group-hover:rotate-[10deg]">
                {step.number}
              </div>
              <div>
                {/* --- 3. MODIFIED THIS LINE --- */}
                <h3 className="text-xl font-semibold text-neutral-50 mb-2 transition-colors duration-300 group-hover:text-orange-400">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. Call to Action (CTA) Section (FIXED BUTTON) ---
const CtaSection = () => {
  return (
    <section className="bg-neutral-950 text-neutral-100 py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-xl border border-orange-500/60 text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-4">
            Ready to Start?
          </h2>
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
            Join hundreds of talented freelancers already working with MokeSpace. Apply now and start your journey!
          </p>
          
          <Link
            to="/apply"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg 
                       bg-gradient-to-r from-orange-500 to-yellow-500 
                       text-white font-semibold text-lg 
                       transition-all duration-300 
                       hover:shadow-[0_0_25px_rgba(255,165,0,0.6)] hover:scale-105"
          >
            Apply Now
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <p className="mt-4 text-neutral-500 text-sm">
            Application takes less than 5 minutes to complete
          </p>
        </div>
      </div>
    </section>
  );
};


// --- 6. Main Page Component ---
const JoinUs = () => {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <HeroSection />
      <WhyJoinSection />
      <SkillsSection />
      <HowItWorksSection />
      <CtaSection />
      <Footer/>
    </div>
  );
};

export default JoinUs;
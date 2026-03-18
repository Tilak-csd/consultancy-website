import React from 'react';
import { UserCheck, School, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Student Screening",
      desc: "We conduct pre-assessments to recommend the perfect course and institution fitting your eligibility.",
      icon: <UserCheck size={26} />,
    },
    {
      id: 2,
      title: "University Selection",
      desc: "Navigating global options can be daunting; we help you find the best-fit university for your goals.",
      icon: <School size={26} />,
    },
    {
      id: 3,
      title: "Test Preparation",
      desc: "Achieve the marks needed for top-tier admissions with guidance from our expert IELTS and TOEFL instructors.",
      icon: <BookOpen size={26} />,
    },
    {
      id: 4,
      title: "Visa Application",
      desc: "Meticulous documentation and expert support to ensure high success rates in your visa filing process.",
      icon: <ShieldCheck size={26} />,
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-[#0000FF] font-bold text-xs uppercase tracking-[0.3em]">
            Step-by-Step Guide
          </h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#000033]">
            How We <span className="text-[#0000FF]">Work</span>
          </h3>
          <div className="h-1.5 w-16 bg-[#00CFFF] mx-auto rounded-full" />
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="group relative bg-white p-10 rounded-[2.5rem] transition-all duration-500 border border-gray-50
              /* Multi-layered Box Shadow */
              shadow-[0_15px_40px_-12px_rgba(0,0,51,0.08)] 
              hover:shadow-[0_25px_50px_-12px_rgba(0,0,255,0.15)]
              hover:-translate-y-2"
            >
              {/* Step Number Background Decor */}
              <span className="absolute top-6 right-8 text-8xl font-black text-gray-50 group-hover:text-blue-50 transition-colors pointer-events-none select-none">
                {step.id}
              </span>

              {/* Icon Container */}
              <div className="relative z-10 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#0000FF]/5 flex items-center justify-center text-[#0000FF] group-hover:bg-[#0000FF] group-hover:text-white transition-all duration-500 shadow-inner">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 space-y-4">
                <h4 className="text-[#000033] text-xl font-bold tracking-tight">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Interactive Element */}
              <button className="cursor-pointer mt-8 flex items-center gap-2 text-[#00CFFF] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;
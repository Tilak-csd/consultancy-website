import React from 'react';
import { UserCheck, School, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Student Screening",
      desc: "Pre-assessments to recommend the perfect course and institution fitting your eligibility.",
      icon: <UserCheck size={22} />,
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      id: "02",
      title: "University Selection",
      desc: "Finding the best-fit university global options for your specific career goals.",
      icon: <School size={22} />,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: "03",
      title: "Test Preparation",
      desc: "Expert IELTS and TOEFL instructors to help you achieve top-tier admission marks.",
      icon: <BookOpen size={22} />,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: "04",
      title: "Visa Application",
      desc: "Meticulous documentation and support to ensure high success rates in your filing.",
      icon: <ShieldCheck size={22} />,
      gradient: "from-[#0000FF] to-[#00CFFF]",
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FCFDFF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        
        {/* Header Section - Tightened spacing */}
        <div className="text-center mb-12">
          <h2 className="text-[#0000FF] font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
            Process Flow
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-[#000033] mb-4">
            How We <span className="text-[#0000FF]">Work</span>
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-[#0000FF] to-[#00CFFF] mx-auto rounded-full" />
        </div>

        {/* Process Cards - Optimized Padding & Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="group relative bg-white p-6 rounded-3xl transition-all duration-300 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle Step Indicator */}
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-lg shadow-blue-200 transition-transform group-hover:scale-110`}>
                  {step.icon}
                </div>
                <span className="text-3xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">
                  {step.id}
                </span>
              </div>

              {/* Text Content - Compressed line heights */}
              <div className="space-y-2">
                <h4 className="text-[#000033] text-lg font-bold tracking-tight">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm leading-snug">
                  {step.desc}
                </p>
              </div>

              {/* Interactive Footer - Smaller and cleaner */}
              <div className="mt-5 pt-4 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <button className="flex items-center gap-1.5 text-[#0000FF] text-[11px] font-bold uppercase tracking-wider">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>

              {/* Decorative Corner Gradient (Invisible until hover) */}
              <div className={`absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;
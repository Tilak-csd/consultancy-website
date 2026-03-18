import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center bg-[#FFFFFF] overflow-hidden pt-[70px]">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00CFFF]/5 skew-x-12 translate-x-20 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0000FF]/5 border border-[#0000FF]/10 text-[#0000FF] font-bold text-xs tracking-widest">
                            <span className="flex h-2 w-2 rounded-full bg-[#0000FF] animate-pulse"></span>
                            ADMISSIONS OPEN 2026-27
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-black text-[#000033] leading-tight">
                            Dream Big. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0000FF] to-[#00CFFF]">Study Global.</span>
                        </h1>

                        <p className="text-md text-gray-500 max-w-lg font-medium leading-relaxed">
                            We provide end-to-end consultancy for students aiming for top-tier global universities. Empowering your academic journey with integrity and expertise.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <button className="cursor-pointer flex items-center gap-2 bg-[#0000FF] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#000033] transition-all shadow-xl shadow-blue-200 group">
                                Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="cursor-pointer px-8 py-3.5 rounded-xl font-bold text-sm text-[#000033] border border-gray-200 hover:border-[#000033] transition-all">
                                Our Services
                            </button>
                        </div>

                        <div className="pt-10 flex items-center gap-12 border-t border-gray-100">
                            <div>
                                <p className="text-4xl font-black text-[#000033]">100%</p>
                                <p className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mt-1">Visa Success</p>
                            </div>
                            <div className="w-[1px] h-12 bg-gray-200" />
                            <div>
                                <p className="text-4xl font-black text-[#000033]">200+</p>
                                <p className="text-xs font-bold text-[#00CFFF] uppercase tracking-widest mt-1">Partners</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image with Floating Card */}
                    <div className="relative">
                        <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white transform lg:rotate-3">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
                                alt="Students"
                                className="w-full h-[450px] object-cover"
                            />
                        </div>
                        
                        {/* Fixed Floating Card: Using absolute position relative to image container */}
                        <div className="absolute -bottom-4 -left-8 bg-white p-5 rounded-3xl shadow-2xl z-20 border border-gray-50 min-w-[220px]">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#00CFFF] rounded-2xl text-white shadow-lg shadow-cyan-200">
                                    <Globe size={28} />
                                </div>
                                <div>
                                    <p className="text-[#000033] font-extrabold text-lg leading-none">Global</p>
                                    <p className="text-gray-400 text-[10px] font-bold mt-1 uppercase tracking-tighter">Opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
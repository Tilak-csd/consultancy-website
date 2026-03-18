import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import PageHero from '../components/PageHero';

const ContactPage = () => {
    return (
        <div className="bg-[#FFFFFF] min-h-screen">

            {/* Hero and Form Hybrid Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
                <PageHero title={"Contact Us"} currentPage={"Contact"} />
                <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Hero Content (Left Side) */}
                    <div className="h-full flex flex-col justify-around mb-16 lg:mb-0">
                        <div>
                            <h1 className="text-[#000033] text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
                                Get in <span className="text-[#0000FF]">Touch</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-8">
                                I’d like to hear from you! If you have any inquiries or just want to say hi, please use the contact form!
                            </p>
                        </div>

                        {/* Direct Contact Links */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0000FF] hover:bg-[#0000FF] hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#00CFFF] hover:bg-[#00CFFF] hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0000FF] hover:bg-[#0000FF] hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Interactive Form (Right Side) */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-2xl shadow-blue-50">
                        <form className="space-y-6">

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="firstName" className="text-xs font-semibold text-[#000033]/70 uppercase tracking-wider">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-3 border border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-[#00CFFF] focus:border-[#00CFFF] outline-none" />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="lastName" className="text-xs font-semibold text-[#000033]/70 uppercase tracking-wider">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-3 border border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-[#00CFFF] focus:border-[#00CFFF] outline-none" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-semibold text-[#000033]/70 uppercase tracking-wider">Email <span className="text-[#00CFFF]">*</span></label>
                                <input type="email" id="email" required className="w-full px-4 py-3 border border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-[#00CFFF] focus:border-[#00CFFF] outline-none" />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-xs font-semibold text-[#000033]/70 uppercase tracking-wider">Message</label>
                                <textarea id="message" rows="5" className="w-full px-4 py-3 border border-gray-100 rounded-lg text-sm focus:ring-2 focus:ring-[#00CFFF] focus:border-[#00CFFF] outline-none resize-none"></textarea>
                            </div>

                            <div className="pt-2">
                                <button type="submit" className="w-full bg-[#0000FF] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2.5 hover:bg-[#000033] transition-colors shadow-lg shadow-blue-200">
                                    Send Message <Send size={18} />
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </section>

            {/* Location & Map Section */}
            <section className="bg-slate-50 py-16 lg:py-10 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

                        {/* Detail Column 1 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100">
                            <MapPin size={24} className="text-[#00CFFF] mb-4" />
                            <h3 className="text-[#000033] text-lg font-bold mb-3">Our Office</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Putalisadak-30, Kathmandu, Nepal
                            </p>
                        </div>

                        {/* Detail Column 2 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100">
                            <Mail size={24} className="text-[#00CFFF] mb-4" />
                            <h3 className="text-[#000033] text-lg font-bold mb-3">Email Us</h3>
                            <a href="mailto:info@globalstudyconsultancy.com" className="text-gray-400 hover:text-[#00CFFF] text-sm transition-colors truncate block">
                                info@globalstudyconsultancy.com
                            </a>
                        </div>

                        {/* Detail Column 3 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100">
                            <Phone size={24} className="text-[#00CFFF] mb-4" />
                            <h3 className="text-[#000033] text-lg font-bold mb-3">Call Us</h3>
                            <div className="text-gray-400 text-sm space-y-1">
                                <p>+977 01-5342969, 01-4242969</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 h-96 w-full bg-gray-100 rounded-3xl overflow-hidden shadow-inner relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.413247492924!2d85.3218903!3d27.7045152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190779770857%3A0xf639a06f36603a12!2sGlobal%20Study%20Consultancy!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp"
                            className="absolute top-0 left-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Global Study Consultancy Location"
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactPage;
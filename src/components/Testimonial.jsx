import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Niroj Paudel",
    location: "Tokyo, Japan",
    text: "Global Study Consultancy made my dream of studying in Japan a reality. Their JLPT preparation classes were top-notch, and the visa process was seamless. I highly recommend them to every Nepalese student!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    name: "Sita Rajbanshi",
    location: "Osaka, Japan",
    text: "The counseling I received at Global Study was life-changing. They helped me choose the right university and guided me through every document. Professional and trustworthy!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5
  },
  {
    name: "Arjun Thapa",
    location: "Nagoya, Japan",
    text: "I was worried about the interview, but the mock sessions here gave me so much confidence. Now I am successfully studying in Nagoya thanks to the team!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-10 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <h2 className="text-[#000033] text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Success Stories from <span className="text-[#0000FF]">Japan</span>
          </h2>
          <p className="text-[#000033]/70 text-lg max-w-2xl mx-auto">
            See what our students have to say about their journey from Nepal to the land of the rising sun.
          </p>
          <div className="mt-4 flex justify-center gap-1">
            <div className="w-16 h-1 bg-[#0000FF] rounded-full"></div>
            <div className="w-4 h-1 bg-[#00CFFF] rounded-full"></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="relative group bg-[#FFFFFF] p-8 rounded-2xl border border-gray-100 shadow-xl shadow-blue-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 text-[#00CFFF]/20 group-hover:text-[#00CFFF]/40 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#00CFFF] text-[#00CFFF]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#000033] leading-relaxed mb-8 italic relative z-10">
                "{item.text}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full border-2 border-[#00CFFF] object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#000033] text-lg leading-none mb-1">
                    {item.name}
                  </h4>
                  <span className="text-[#0000FF] text-sm font-medium">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action footer */}
        <div className="mt-16 text-center">
          <button className="cursor-pointer bg-[#0000FF] hover:bg-[#000033] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-200 transition-all flex items-center gap-2 mx-auto">
            Start Your Own Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
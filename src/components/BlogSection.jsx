import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: "Understanding the Certificate of Eligibility (COE) Process",
    excerpt: "The COE is the most crucial document for your Japanese student visa. Here is a step-by-step guide on how to secure it successfully...",
    date: "March 15, 2026",
    author: "Admissions Team",
    image: "https://japan-trails.com/media/wp-content/uploads/2025/09/9-1.webp",
    tag: "Visa Guide"
  },
  {
    title: "Top 5 Cities in Japan for International Students",
    excerpt: "While Tokyo is popular, cities like Osaka, Fukuoka, and Sapporo offer unique benefits and lower costs of living for Nepalese students...",
    date: "March 10, 2026",
    author: "Global Consultant",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    tag: "Student Life"
  },
  {
    title: "How to Ace Your JLPT N5 Exam: Proven Tips",
    excerpt: "Passing the JLPT N5 is your first step toward Japan. We've compiled the most effective vocabulary and grammar strategies for beginners...",
    date: "March 05, 2026",
    author: "Language Instructor",
    image: "https://japaneselanguagecourses.com/assets/images/blogs/blog_39811718881823.jpg",
    tag: "Test Prep"
  }
];

const BlogSection = () => {
  return (
    <section className="py-12 md:py-20 bg-[#FDFDFF]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        
        {/* Header - Improved Hierarchy & Mobile Centering */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="text-left">
            <h2 className="text-[#000033] text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Latest from our <span className="text-[#0000FF]">Blog</span>
            </h2>
            <p className="text-[#000033]/60 text-xs md:text-sm mt-2 uppercase tracking-[0.2em] font-bold">
              Insights & Guidance for Study in Japan
            </p>
          </div>
          <button className="w-fit text-[#0000FF] hover:text-[#000033] text-sm font-extrabold transition-all flex items-center gap-1.5 group border-b-2 border-[#0000FF]/10 hover:border-[#0000FF] pb-1">
            View All Articles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blog Grid - Adjusted gap for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {blogs.map((post, index) => (
            <article 
              key={index} 
              className="flex flex-col group bg-white rounded-2xl transition-all duration-300 border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,51,0.08)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0000FF] text-white text-[9px] font-black px-2.5 py-1 rounded-full tracking-widest uppercase shadow-lg shadow-blue-500/30">
                  {post.tag}
                </div>
              </div>

              {/* Content Container - Better Padding */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] text-slate-400 mb-3 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#00CFFF]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={13} className="text-[#00CFFF]" />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-[#000033] text-xl font-extrabold mb-3 leading-tight group-hover:text-[#0000FF] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3 font-medium">
                  {post.excerpt}
                </p>

                {/* Refined Learn More */}
                <div className="mt-auto pt-4 border-t border-slate-50">
                  <button className="inline-flex items-center gap-2 text-[#0000FF] text-[13px] font-black uppercase tracking-wider group/btn">
                    Read Article 
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-[#0000FF] group-hover/btn:text-white transition-all">
                       <ArrowRight size={14} />
                    </div>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
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
    <section className="py-16 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header - More Compact */}
        <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-[#000033] text-2xl md:text-3xl font-bold tracking-tight">
              Latest from our <span className="text-[#0000FF]">Blog</span>
            </h2>
            <p className="text-[#000033]/60 text-sm mt-1 uppercase tracking-wider font-medium">
              Insights & Guidance for Study in Japan
            </p>
          </div>
          <button className="text-[#0000FF] hover:text-[#00CFFF] text-sm font-bold transition-colors flex items-center gap-1 group">
            All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((post, index) => (
            <article 
              key={index} 
              className="flex flex-col group bg-white hover:bg-slate-50/50 rounded-xl transition-all duration-300"
            >
              {/* Image - Smaller aspect ratio */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0000FF] text-white text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">
                  {post.tag}
                </div>
              </div>

              {/* Content - Tighter spacing */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[11px] text-[#000033]/50 mb-2 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#00CFFF]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} className="text-[#00CFFF]" />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-[#000033] text-lg font-bold mb-2 leading-snug group-hover:text-[#0000FF] transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-[#000033]/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Smaller Learn More Link */}
                <div className="mt-auto">
                  <button className="inline-flex items-center gap-1 text-[#0000FF] text-sm font-bold hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
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
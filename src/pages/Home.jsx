import React from 'react';
import Hero from '../components/HeroSection';
import WorkProcess from '../components/WorkProcess';
import TestimonialSection from '../components/Testimonial'
import BlogSection from '../components/BlogSection';

const Home = () => {
  return (
    <main className="bg-[#FFFFFF] selection:bg-[#00CFFF] selection:text-[#000033]">
      <Hero />
      <WorkProcess />
      <TestimonialSection />
      <BlogSection />
      {/* Other sections like Services, Testimonials, Footer would go here */}
    </main>
  );
};

export default Home;
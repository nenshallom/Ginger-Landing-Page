import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>2026 FARMING GUIDE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900leading-[1.1] mb-6">
            Turn Your Soil Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-700">Green Gold.</span>
          </h1>
          
          <p className="text-xl text-white font-bold mb-8 leading-relaxed">
            Stop guessing and start growing. Get the exact blueprint used by top organic farmers to produce 2x more ginger per hectare.
          </p>

          <button 
            onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 mt-10 text-black bg-yellow-500 font-bold rounded-2xl shadow-2xl hover:bg-green-700 hover:text-white transition-all transform hover:-translate-y-1 hover:scale-[1.02]"
          >
            Get Free Handbook
          </button>
        </div>

        {/* Updated Image Section */}
        <div className="relative group flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-green-600 rounded-[2rem] rotate-3 opacity-10 blur-2xl"></div>
          <div className="relative max-w-[400px] w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden border-8 border-white transform transition-transform duration-500 hover:scale-[1.02]">
            {/* Replace the src below with your actual book cover image path later */}
            <img 
              src="/cover.jpg" 
              alt="Ginger Farming Handbook Cover"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
import React from "react";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">

        
        
        <div className="md:w-1/2 flex flex-col items-start">
          
          <div className="flex items-center gap-2 bg-[#F3E8FF] px-4 py-2 rounded-full mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] border-2 border-white shadow-[0_0_5px_rgba(124,58,237,0.5)]"></div>
            <span className="text-[#7C3AED] text-sm font-semibold">
              New: AI-Powered Tools Available
            </span>
          </div>


          
          <h1 className="text-[48px] lg:text-[72px] font-bold text-[#1E293B] leading-[1.1] mb-6 tracking-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>


          
          <p className="text-[#64748B] text-lg max-w-lg leading-relaxed mb-4">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
          </p>

          
          <p className="text-[#94A3B8] text-sm font-medium mb-10">Explore Products</p>


          
          <div className="flex flex-wrap gap-4 items-center">
            {/* Solid Button */}
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-9 py-4 rounded-full font-bold text-lg transition-all">
              Explore Products
            </button>

            
           
            <button className="flex items-center gap-2 bg-white border border-[#7C3AED] text-[#7C3AED] px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all">
              <img 
                src="/assets/Play.png" 
                alt="Play" 
                className="w-5 h-5" 
              />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>


        
        <div className="md:w-1/2 flex justify-end">
          <div className="relative">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-100 blur-[80px] rounded-full opacity-40 -z-10"></div>
            <img 
              src="/assets/banner.png" 
              alt="Banner Visual" 
              className="w-full max-w-145 h-auto rounded-4xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
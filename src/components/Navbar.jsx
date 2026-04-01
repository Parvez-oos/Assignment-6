import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-5 bg-white sticky top-0 z-50">
      {/* Brand Logo - Distinct Purple */}
      <div className="text-[32px] font-bold text-[#7C3AED] tracking-tight cursor-pointer">
        DigiTools
      </div>


      {/* Navigation Links - Medium Gray, Specific Spacing */}
      <div className="hidden lg:flex items-center gap-10 font-semibold text-[#374151]">
        {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
          <a 
            key={item} 
            className="hover:text-[#7C3AED] transition-colors cursor-pointer text-[15px]"
          >
            {item}
          </a>
        ))}
      </div>


      {/* Right Side Actions */}
      <div className="flex items-center gap-8">
        {/* Shopping Cart Icon with Badge */}
        <div 
          className="relative cursor-pointer group flex items-center" 
          onClick={onCartClick}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6 text-[#111827]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#EF4444] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </div>
        

        {/* Login Link */}
        <button className="text-[#111827] font-bold text-[15px] hover:text-[#7C3AED]">
          Login
        </button>

        {/* The Exact Gradient Button from Image */}
        <button className="bg-linear-to-r from-[#6366F1] to-[#A855F7] text-white px-8 py-3 rounded-full font-bold text-[15px] shadow-lg shadow-purple-200 hover:opacity-90 transition-opacity active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
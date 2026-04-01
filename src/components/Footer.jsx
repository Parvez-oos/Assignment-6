import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-gray-800 pb-12 mb-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">DigiTools</h2>
          <p className="text-sm leading-relaxed">
            Premium digital assets, resources, and tools to help creators and professionals build faster.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            <li><a href="#" className="hover:text-white transition">Changelog</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* ✅ NEW: Resources (Figma requirement) */}
        <div>
          <h4 className="text-white font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Docs</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Guides</a></li>
            <li><a href="#" className="hover:text-white transition">API Status</a></li>
          </ul>
        </div>

        {/* ✅ Social Media (with real icons) */}
        <div>
          <h4 className="text-white font-bold mb-4">Social</h4>
          <div className="flex space-x-4">
            <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-violet-600 transition">
              <FaLinkedinIn className="text-white text-sm" />
            </div>
            <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-violet-600 transition">
              <FaTwitter className="text-white text-sm" />
            </div>
            <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-violet-600 transition">
              <FaFacebookF className="text-white text-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
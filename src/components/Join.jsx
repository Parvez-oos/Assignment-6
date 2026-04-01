import React from "react";

const Join = () => {
  return (
    <div className="bg-linear-to-r from-violet-600 via-violet-500 to-purple-600 py-20 px-4 text-center text-white">
      <h2 className="text-4xl font-extrabold mb-4">Ready To Transform Your Workflow?</h2>
      <p className="text-violet-100 mb-8 max-w-2xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-white text-violet-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition">
          Get Started Now
        </button>
        <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-violet-700 transition">
          View Pricing
        </button>
      </div>
      <p className="mt-6 text-sm text-violet-200">14-day free trial • No credit card required</p>
    </div>
  );
};

export default Join;
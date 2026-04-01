import React from "react";

const steps = [
  {
    id: "01",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
    icon: "/assets/user.png",
  },
  {
    id: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: "/assets/package.png",
  },
  {
    id: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: "/assets/rocket.png",
  },
];

const Steps = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-14">
          Start using premium digital tools in minutes, not hours.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-10 rounded-3xl border border-gray-100 text-center transition hover:shadow-md flex flex-col justify-between min-h-80"
            >
              
              
              <div className="absolute top-4 right-4 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {step.id}
              </div>

             
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-violet-100">
                <img src={step.icon} alt={step.title} className="w-8 h-8" />
              </div>

              
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
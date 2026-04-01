import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      
      <div 
        className="absolute top-0 left-0 w-full h-40 opacity-10" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #0ea5e9, #0ea5e9 1px, transparent 1px, transparent 10px)' }}
      ></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-[42px] md:text-[52px] font-bold text-[#1E293B] mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-16 text-lg">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-4xl p-10 flex flex-col text-left transition-all border border-gray-100 h-full ${
                plan.isPopular 
                ? "bg-[#8B3EFF] text-white shadow-2xl shadow-purple-200" 
                : "bg-white text-[#1E293B] shadow-sm"
              }`}
            >
              
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-[13px] font-bold px-5 py-1.5 rounded-full shadow-sm z-30">
                  Most Popular
                </div>
              )}

              <div className="grow">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-base mb-10 ${plan.isPopular ? "text-purple-100" : "text-gray-400"}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline mb-12">
                  <span className="text-6xl font-bold tracking-tight">${plan.price}</span>
                  <span className={`text-xl ml-1 font-medium ${plan.isPopular ? "text-purple-200" : "text-gray-400"}`}>
                    /Month
                  </span>
                </div>

                <ul className="space-y-5 mb-14">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[16px]">
                      <svg
                        className={`w-5 h-5 shrink-0 ${plan.isPopular ? "text-white" : "text-[#22C55E]"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.isPopular ? "text-white" : "text-[#475569]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              
              <button
                className={`w-full py-4 rounded-full font-bold text-lg transition-all shadow-lg mt-auto ${
                  plan.isPopular
                    ? "bg-white text-[#8B3EFF] hover:bg-gray-50"
                    : "bg-[#8B3EFF] text-white hover:bg-[#7828F6]"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
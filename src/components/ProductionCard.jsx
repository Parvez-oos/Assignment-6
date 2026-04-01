import React from "react";

const ProductionCard = ({ product, addToCart, isAdded }) => {
 
  const getBadgeStyle = (tag) => {
    switch (tag) {
      case "Best Seller":
        return "bg-orange-50 text-orange-500";
      case "Popular":
        return "bg-purple-50 text-purple-500";
      case "New":
        return "bg-emerald-50 text-emerald-500";
      case "Trending":
        return "bg-yellow-50 text-yellow-500";
      case "Best Value":
        return "bg-sky-50 text-sky-500";
      case "Essential":
        return "bg-red-50 text-red-500";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all flex flex-col h-full">
      
      
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center p-2.5 shadow-sm border border-gray-50">
          <img src={product.icon} alt={product.name} className="w-full h-full object-contain" />
        </div>
        <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${getBadgeStyle(product.tag)}`}>
          {product.tag}
        </span>
      </div>
      
     
      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
      <p className="text-gray-500 text-[13px] leading-relaxed mb-6 grow">
        {product.description}
      </p>
      
      
      <div className="flex items-baseline mb-6">
        <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm font-medium ml-1">{product.period}</span>
      </div>

      
      <ul className="space-y-3 mb-8">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-[13px] text-gray-500 font-medium">
            <svg className="w-4 h-4 text-green-500 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      
      <button
        onClick={() => addToCart(product)}
        disabled={isAdded}
        className={`w-full py-3.5 rounded-full text-sm font-semibold transition-colors mt-auto ${
          isAdded 
            ? "bg-green-50 text-green-600 border border-green-200 cursor-not-allowed" 
            : "bg-[#8b3eff] text-white hover:bg-[#7828f6]"
        }`}
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductionCard;
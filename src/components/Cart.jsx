import React from "react";

const Cart = ({ cartItems, removeFromCart, proceedToCheckout, setActiveTab }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
     
      <div className="mb-6">
        <button 
          onClick={() => setActiveTab("products")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#8b3eff] font-semibold transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Shop
        </button>
      </div>

      <div className="bg-white rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">
        <h3 className="text-2xl font-bold text-[#111827] mb-8">Your Cart</h3>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">Your cart is currently empty.</p>
          </div>
        ) : (
          <div className="space-y-4 mb-10">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-6 bg-[#F9FAFB] rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
              >
                <div className="flex items-center space-x-6">
                  
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm p-3 flex items-center justify-center border border-gray-50">
                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  

                  <div>
                    <h4 className="text-lg font-bold text-[#111827] mb-1">{item.name}</h4>
                    <p className="text-gray-500 font-medium">${item.price}</p>
                  </div>
                </div>

                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#FF4D8D] font-bold text-sm hover:text-[#e6457e] transition-colors px-4 py-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        
        {cartItems.length > 0 && (
          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="flex justify-between items-center mb-10">
              <span className="text-gray-400 font-medium text-lg">Total:</span>
              <span className="text-[32px] font-bold text-[#111827]">${total}</span>
            </div>

            <button 
              onClick={proceedToCheckout}
              className="w-full bg-[#8b3eff] hover:bg-[#7828f6] text-white py-5 rounded-full text-lg font-bold transition-all shadow-lg shadow-purple-100"
            >
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
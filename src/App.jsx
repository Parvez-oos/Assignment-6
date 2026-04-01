import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Join from "./components/Join";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const addToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.info("Item is already in your cart.");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Item removed from cart!");
  };

  const proceedToCheckout = () => {
    if (cart.length > 0) {
      toast.success("Proceeding to checkout successfully!");
      setCart([]);
    } else {
      toast.warning("Your cart is empty!");
    }
  };

  return (
    <div className="font-sans text-gray-800">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar 
  cartCount={cart.length} 
  onCartClick={() => setActiveTab("cart")} 
/>
      <Banner />
      <Stats />


      {/* Main Section Toggle */}

      <section className="py-16 bg-gray-50 flex flex-col items-center min-h-125">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-3">Premium Digital Tools</h2>
          <p className="text-gray-500">
           Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
          </p>
        </div>


        {/* Custom Toggle Switch */}

        <div className="flex bg-white shadow-md rounded-full p-1 mb-10 w-fit border border-gray-100">
          <button
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === "products" ? "bg-violet-600 text-white" : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
          <button
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === "cart" ? "bg-violet-600 text-white" : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("cart")}
          >
            Cart ({cart.length})
          </button>
        </div>


        {/* Dynamic Rendering based on Tab */}
        
        <div className="w-full max-w-6xl px-4">
          {activeTab === "products" ? (
  <Products products={products} cart={cart} addToCart={addToCart} />
) : (
  <Cart 
    cartItems={cart} 
    removeFromCart={removeFromCart} 
    proceedToCheckout={proceedToCheckout}
    setActiveTab={setActiveTab}
  />
)}
        </div>
      </section>

      <Steps />
      <Pricing />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
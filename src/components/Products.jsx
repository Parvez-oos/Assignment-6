import React from "react";
import ProductionCard from "./ProductionCard";

const Products = ({ products, cart, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductionCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          isAdded={cart.some(item => item.id === product.id)} 
        />
      ))}
    </div>
  );
};

export default Products;
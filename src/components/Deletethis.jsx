import React, { useState } from "react";
import CartModal from "./CartModal";

export default function Deletethis() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = [
    { id: 1, name: "iPhone 12", price: 999.99, quantity: 1, imageUrl: "https://via.placeholder.com/100" },
    { id: 2, name: "Samsung Galaxy S21", price: 799.99, quantity: 2, imageUrl: "https://via.placeholder.com/100" },
  ];

  const removeQuantity = (id) => {
    // Logic to remove quantity
  };

  const addQuantity = (id) => {
    // Logic to add quantity
  };

  const removeFullItemFromCart = (id) => {
    // Logic to remove full item from cart
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">Shopping Cart</h1>
      <button
        onClick={() => setIsCartOpen(true)}
        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition"
      >
        Open Cart
      </button>

      {/* Shopping Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeQuantity={removeQuantity}
        addQuantity={addQuantity}
        removeFullItemFromCart={removeFullItemFromCart}
      />
    </div>
  );
}


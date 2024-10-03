import React from "react";

const CartModal = ({ isOpen, onClose, cartItems, removeQuantity, addQuantity, removeFullItemFromCart }) => {
  if (!isOpen) return null; // Only show the modal if it's open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Responsive modal width and height */}
      <div className="bg-white dark:bg-gray-800 w-full max-w-md mx-4 sm:mx-8 lg:mx-auto rounded-lg shadow-lg p-6 overflow-y-auto max-h-[80vh]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Your Shopping Cart</h2>

        {/* Cart Items */}
        <div className="flex flex-col space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b dark:border-gray-700 pb-4">
                {/* Product Image */}
                <img
                  src={item.imageUrl}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-sm mb-2 sm:mb-0"
                  alt={item.name}
                />

                <div className="flex flex-col sm:flex-grow sm:mx-4">
                  {/* Product Name */}
                  <span className="font-semibold text-gray-900 dark:text-white">{item.name}</span>
                  {/* Price */}
                  <span className="text-gray-700 dark:text-gray-400">€{(item.price * item.quantity).toFixed(2)}</span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 my-2 sm:my-0">
                  <button
                    onClick={() => removeQuantity(item.id, item.price)}
                    className="inline-flex items-center justify-center p-1 text-sm font-medium h-8 w-8 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                  </button>

                  <input
                    type="number"
                    id={`scQuantity${item.id}`}
                    className="bg-gray-50 w-12 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={item.quantity}
                    readOnly
                  />

                  <button
                    onClick={() => addQuantity(item.id, item.price)}
                    className="inline-flex items-center justify-center h-8 w-8 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>

                {/* Remove Button as 'X' */}
                <button
                  className="text-red-600 dark:text-red-500 hover:underline sm:ml-4"
                  onClick={() => removeFullItemFromCart(item.id)}
                >
                  <span className="sm:hidden">X</span>
                  <span className="hidden sm:inline">Remove</span>
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 py-6">
              Your cart is empty.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;

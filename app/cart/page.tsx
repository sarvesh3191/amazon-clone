import React from "react";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      image: "/placeholder-image.png", // Replace with actual image path
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      quantity: 1,
      image: "/placeholder-image.png", // Replace with actual image path
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100  text-blue-700 cp-4">
      <h1 className="text-2xl font-bold text-blue-700  mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center bg-white p-4 rounded shadow mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-blue-700 mb-4">Order Summary</h2>
            <p className="text-gray-600 mb-2">
              Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </p>
            <p className="text-gray-600 mb-4">Total Price: ${calculateTotal()}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
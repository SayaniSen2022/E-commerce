import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
const HomePage = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$29.99", image: "/product1.jpg" },
    { id: 2, name: "Product 2", price: "$39.99", image: "/product2.jpg" },
    { id: 3, name: "Product 3", price: "$49.99", image: "/product3.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <Navbar />
      {/* Product List */}
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <Link href={`/product/${product.id}`}>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

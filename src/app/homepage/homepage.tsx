"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = ["/lnd-bnr.webp", "/lnd-bnr2.webp", "/lnd-bnr3.webp"];
const products = [
  {
    id: 1,
    name: "Blueberry Check Top",
    price: "$32",
    image: "/p1.webp",
  },
  {
    id: 2,
    name: "Something Blue Dress",
    price: "$44",
    image: "/p2.webp",
  },
  {
    id: 3,
    name: "Sweet As Pie Dress",
    price: "$42",
    image: "/p3.webp",
  },
  {
    id: 4,
    name: "Thank Me Later Cardigan",
    price: "$42.99",
    image: "/p4.webp",
  },
  {
    id: 5,
    name: "Raise A Toast Dress",
    price: "$42.99",
    image: "/p4.webp",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    { id: 1, name: "Product 1", price: "$29.99", image: "/p1.webp" },
    { id: 2, name: "Product 2", price: "$39.99", image: "/p2.webp" },
    { id: 3, name: "Product 3", price: "$49.99", image: "/p3.webp" },
    { id: 4, name: "Product 4", price: "$49.99", image: "/p4.webp" },
    { id: 5, name: "Product 5", price: "$49.99", image: "/p1.webp" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <Link href="#" className="block">
        <div className="relative w-screen h-[720px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex justify-center items-center"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={images[currentIndex]}
                alt="banner"
                width={1960}
                height={720}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Link>
      {/* Hero Section Ends*/}

      {/* New Arrivals */}
      <div>
        <div className="py-10 px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">
            NEW ARRIVALS
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            className="w-full max-w-6xl mx-auto overflow-visible"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="text-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* New Arrivals Ends */}
    </div>
  );
};

export default HomePage;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-white text-black text-center pt-10">
        <div className="flex justify-between items-center px-6">
          <div>
            <Image
              src="/LND.webp"
              alt="logo"
              width={120}
              height={50}
              className="h-15 w-auto mx-auto"
            />
          </div>
          <div>
            <input className="border-2 p-2 rounded" placeholder="Search..." />
          </div>

          <div className="w-15">
            <ul className="flex gap-4">
              <li>
                <a href="#">User</a>
              </li>
              <li>
                <select name="currency" id="currency">
                  <option value="1">USD</option>
                  <option value="2">INR</option>
                </select>
              </li>
              <li>Cart</li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="flex justify-center gap-4 uppercase text-black text-sm pt-9 pb-2">
            <li className="hover:underline underline-offset-4 decoration-solid cursor-pointer">
              Home
            </li>
            <li
              className="relative hover:underline underline-offset-4 decoration-solid cursor-pointer"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                Shop
                <span className="pl-1">
                  <IoIosArrowDown />
                </span>
              </div>

              {isOpen && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md text-sm">
                  <ul className="py-2 pl-2 text-left">
                    <li className="px-2 py-2 hover:bg-gray-100">Beauty</li>
                    <li className="px-2 py-2 hover:bg-gray-100">Apparel</li>
                    <li className="px-2 py-2 hover:bg-gray-100">Accessories</li>
                    <li className="px-2 py-2 hover:bg-gray-100">Jewellery</li>
                    <li className="px-2 py-2 hover:bg-gray-100">Sale</li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hover:underline underline-offset-4 decoration-solid cursor-pointer">
              Collections
            </li>
            <li className="hover:underline underline-offset-4 decoration-solid cursor-pointer">
              Contact Us
            </li>
            <li className="hover:underline underline-offset-4 decoration-solid cursor-pointer">
              Final Sale
            </li>
            <li className="hover:underline underline-offset-4 decoration-solid cursor-pointer">
              Gift Cards
            </li>
            <li className="hover:underline underline-offset-4 decoration-solid cursor-pointer">
              Shop Our Live Sales
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

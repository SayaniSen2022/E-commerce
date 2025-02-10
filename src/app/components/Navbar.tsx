import React from "react";
import Image from "next/image";

const Navbar = () => {
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
          <ul className="flex justify-center gap-4 uppercase text-black pt-9 pb-2">
            <li>Home</li>
            <li>Shop</li>
            <li>Collections</li>
            <li>Contact Us</li>
            <li>Final Sale</li>
            <li>Gift Cards</li>
            <li>Shop Our Live Sales</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

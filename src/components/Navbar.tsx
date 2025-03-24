"use client";

import React, { useReducer, useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IconContext } from "react-icons";
import Link from "next/link";

type Action =
  | { type: "OPEN"; menu: string }
  | { type: "CLOSE" }
  | { type: "TOGGLE_SUBMENU"; submenu: string };

const dropDownReducer = (
  state: { openDropdown: string | null; openSubmenu: string | null },
  action: Action
) => {
  switch (action.type) {
    case "OPEN":
      return { openDropdown: action.menu, openSubmenu: null };
    case "CLOSE":
      return { openDropdown: null, openSubmenu: null };
    case "TOGGLE_SUBMENU":
      return {
        ...state,
        openSubmenu:
          state.openSubmenu === action.submenu ? null : action.submenu,
      };
    default:
      return state;
  }
};

const Navbar = () => {
  const { data: session } = useSession(); //Get logged in user info
  console.log(session);
  const [isScrolled, setIsScrolled] = useState(false);
  const [state, dispatch] = useReducer(dropDownReducer, {
    openDropdown: null,
    openSubmenu: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-white shadow-md sticky top-0 left-0 w-full z-50 text-black text-center pt-10">
        <div className="flex justify-between items-center px-6">
          <Link href="/">
            <Image
              src="/LND.webp"
              alt="logo"
              width={120}
              height={50}
              className="h-15 w-auto mx-auto"
            />
          </Link>
          <div>
            <input className="border-2 p-2 rounded" placeholder="Search..." />
          </div>

          <div className="w-15">
            <ul className="flex gap-4">
              <li>
                {session ? (
                  <>
                    <span>Welcome, {session.user?.name}!</span>
                    <button
                      className="bg-red-500 px-3 py-1 rounded"
                      onClick={() => signOut()}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link href="/login" className="flex items-center gap-2">
                    <div>
                      <IconContext.Provider value={{ size: 18 }}>
                        <CiUser className="fa-4x" />
                      </IconContext.Provider>
                    </div>
                    <div>Sign In</div>
                  </Link>
                )}
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
              onMouseEnter={() => dispatch({ type: "OPEN", menu: "shop" })}
              onMouseLeave={() => dispatch({ type: "CLOSE" })}
            >
              <div className="flex items-center">
                Shop
                <span className="pl-1">
                  <FaChevronDown />
                </span>
              </div>

              {state.openDropdown === "shop" && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md text-sm">
                  <ul className="py-2 pl-2 text-left">
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Beauty</a>
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Accessories</a>
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Jewellery</a>
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Sale</a>
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Apparel</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative hover:underline underline-offset-4 decoration-solid cursor-pointer"
              onMouseEnter={() =>
                dispatch({ type: "OPEN", menu: "collections" })
              }
              onMouseLeave={() => dispatch({ type: "CLOSE" })}
            >
              <div className="flex items-center">
                Collections
                <span className="pl-1">
                  <FaChevronDown />
                </span>
              </div>
              {state.openDropdown === "collections" && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md text-sm">
                  <ul className="py-2 pl-2 text-left">
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Kindle Cases</a>
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Final Few</a>
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Holidays</a>
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Curvy</a>
                    </li>
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Petite</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="hover:underline underline-offset-4 decoration-solid cursor-pointer"
              onMouseEnter={() => dispatch({ type: "OPEN", menu: "contact" })}
              onMouseLeave={() => dispatch({ type: "CLOSE" })}
            >
              <div className="flex items-center">
                Contact Us
                <span className="pl-1">
                  <FaChevronDown />
                </span>
              </div>
              {state.openDropdown === "contact" && (
                <div className="absolute mt-0 w-48 bg-white shadow-lg rounded-md text-sm">
                  <ul className="py-2 pl-2 text-left">
                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">FAQs</a>
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent dropdown from closing when submenu toggles
                        dispatch({ type: "TOGGLE_SUBMENU", submenu: "return" });
                      }}
                    >
                      Return Policy <FaChevronRight />
                    </li>

                    {/* Winter Wear Submenu */}
                    {state.openSubmenu === "return" && (
                      <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-md">
                        <ul className="py-2">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Jackets
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            Sweaters
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">Boots</li>
                        </ul>
                      </div>
                    )}

                    <li className="px-2 py-2 hover:bg-gray-100">
                      <a href="#">Reviews</a>
                    </li>
                  </ul>
                </div>
              )}
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

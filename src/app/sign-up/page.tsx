//signup form
"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import Link from "next/link";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-5">
      <Logo />
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="bg-white border border-gray-100 shadow-lg rounded-lg p-8 w-96">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create Your Account
          </h2>
          <form className="space-y-2">
            <div>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter your first and last name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password..."
                id="password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white text-lg p-2 rounded-md font-semibold hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?
            <Link href="/login" className="text-blue-500 hover:underline pl-1">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;

//login form
"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";

export const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Login successful!");
      router.push(data.redirect);
    } else {
      setMessage(data.error || "Something went wrong");
    }
  };

  return (
    <div className="mt-5">
      <Logo />
      <div className="flex justify-center mt-5 mb-10">
        <div className="bg-white border border-gray-100 shadow-lg rounded-lg p-8 w-96 h-fit">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Sign In
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                id="username"
                onChange={handleChange}
                placeholder="Enter your username..."
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter your password..."
                id="password"
                name="password"
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link
                href="/forgot-password"
                className="text-xs pl-1 text-black underline"
              >
                Forgot your password?
              </Link>
            </div>
            {message && (
              <p
                className={`text-center ${
                  message.includes("successful")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-lg p-2 rounded-md font-semibold hover:bg-green-600"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            New here?
            <Link href="/sign-up" className="text-blue-500 hover:underline">
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;

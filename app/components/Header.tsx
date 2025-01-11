"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const isHomeRoute = pathname === "/"; // Check if current route is home
  console.log("🚀 ~ Header ~ isHomeRoute:", isHomeRoute);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/#shop" },
    { name: "About us", href: "/#about-us" },
    { name: "Blog", href: "/#blog" },
  ];

  const cartCount = 3;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonClass = scrolled
    ? "border-gray-800 text-gray-800"
    : isHomeRoute
    ? "border-white text-white"
    : "border-black text-black";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md h-[70px]"
            : "bg-transparent h-[100px]"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-3 h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-auto">
              <Image
                src="/images/logo-header.png"
                alt="Fresh Harvest Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          </Link>

          <nav className="hidden sm:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative hover:text-green-100 font-questrial text-[14px]  text-gray-100 text-left underline-offset-2 decoration-slice`}
              >
                {item.name}
                {/* Active Indicator */}
                {pathname === item.href && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-green-700 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center space-x-6">
            <div
              className={`relative flex items-center cursor-pointer ${
                scrolled
                  ? "text-gray-800 hover:text-green-700"
                  : isHomeRoute
                  ? "text-white hover:text-gray-300"
                  : "text-green-100"
              }`}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.17115 6.72115C5.92126 5.97127 6.93849 5.55001 7.99915 5.55001C9.0598 5.55001 10.077 5.97127 10.8271 6.72115L11.9991 7.89215L13.1711 6.72115C13.5401 6.33911 13.9815 6.03438 14.4695 5.82475C14.9575 5.61511 15.4824 5.50477 16.0135 5.50015C16.5447 5.49554 17.0714 5.59674 17.563 5.79787C18.0545 5.99899 18.5012 6.296 18.8767 6.67157C19.2523 7.04714 19.5493 7.49375 19.7504 7.98534C19.9516 8.47692 20.0528 9.00364 20.0481 9.53476C20.0435 10.0659 19.9332 10.5908 19.7236 11.0788C19.5139 11.5668 19.2092 12.0082 18.8271 12.3772L11.9991 19.2062L5.17115 12.3772C4.42126 11.627 4 10.6098 4 9.54915C4 8.4885 4.42126 7.47126 5.17115 6.72115Z"
                  fill="currentColor"
                />
              </svg>
              <span className="ml-2 font-questrial text-[14px] font-normal leading-[24px] tracking-tighter text-left">
                Favorites
              </span>
            </div>

            <div
              className={`relative flex items-center cursor-pointer ${
                scrolled
                  ? "text-gray-800 hover:text-green-700"
                  : isHomeRoute
                  ? "text-white hover:text-gray-300"
                  : "text-green-100"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l3.4-8H6.4L5.2 5H3m4 13a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0z"
                />
              </svg>
              <span className="ml-2 font-questrial text-[14px] font-normal leading-[24px] tracking-tighter text-left">
                Cart
              </span>
              {/* Badge */}
              {cartCount > 0 && (
                <span className="absolute -top-3 right-6 bg-red-500 font-questrial text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <Link
              href="/sign-in"
              className={`px-4 py-2 font-questrial text-[14px] font-normal border hover:border-transparent rounded-md hover:bg-orange-600 hover:text-white transition ${buttonClass}`}
            >
              Sign In
            </Link>
          </div>
          <div className="sm:hidden flex">
            <div
              className={`relative flex items-center cursor-pointer me-6 ${
                scrolled
                  ? "text-gray-800 hover:text-green-700"
                  : isHomeRoute
                  ? "text-white hover:text-gray-300"
                  : "text-green-100"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l3.4-8H6.4L5.2 5H3m4 13a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0z"
                />
              </svg>

              {/* Badge */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 font-questrial text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>

            <button
              className={`flex items-center justify-center ${
                scrolled
                  ? "text-gray-800 hover:text-green-700"
                  : isHomeRoute
                  ? "text-white hover:text-gray-300"
                  : "text-green-100"
              }`}
              onClick={() => setIsDrawerOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18C3.71667 18 3.47917 17.9042 3.2875 17.7125C3.09583 17.5208 3 17.2833 3 17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H20C20.2833 16 20.5208 16.0958 20.7125 16.2875C20.9042 16.4792 21 16.7167 21 17C21 17.2833 20.9042 17.5208 20.7125 17.7125C20.5208 17.9042 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-[9999] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Image
                  src="/images/logo-header.png"
                  alt="Fresh Harvest Logo"
                  width={100}
                  height={40}
                />
              </div>
              {/* Close Button */}
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 focus:outline-none"
                aria-label="Close Drawer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-8 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-800 font-questrial text-[16px]"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

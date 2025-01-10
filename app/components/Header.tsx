"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

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
    : "border-white text-white";

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
                className={`relative hover:text-green-700 font-questrial text-[14px] font-normal leading-[24px] tracking-tighter text-gray-800 text-left underline-offset-2 decoration-slice`}
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
                  : "text-white hover:text-gray-300"
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
                  : "text-white hover:text-gray-300"
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
                <span className="absolute -top-2 right-8 bg-red-500 font-questrial text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
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

          <button
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded bg-green-500 text-white"
            onClick={() => setIsDrawerOpen(true)}
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
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
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 right-4 p-2 focus:outline-none"
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

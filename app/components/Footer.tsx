"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Fresh Harvest Logo"
              width={40}
              height={40}
            />
            <span className="text-lg font-bold text-gray-900">
              Fresh Harvest
            </span>
          </div>
          {/* App Downloads */}
          <div>
            <span className="block text-gray-600 text-sm mb-2">Download App:</span>
            <div className="flex space-x-2">
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={120}
                height={40}
              />
              <Image
                src="/images/google-play.png"
                alt="Google Play"
                width={120}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="flex justify-between md:justify-around">
          <div>
            <h4 className="text-gray-900 font-medium mb-4">Quick links 1</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Detail Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-medium mb-4">Quick links 2</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Favorites
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sign in
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Contact Us */}
        <div>
          <h4 className="text-gray-900 font-medium mb-4">Contact us</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-center space-x-2">
              <span>📞</span>
              <span>1234 5678 90</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>📧</span>
              <span>Freshharvests@gmail.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <span>📍</span>
              <span>Tanjung Sari Street, Pontianak, Indonesia</span>
            </li>
          </ul>
          {/* Accepted Payment Methods */}
          <div className="mt-6">
            <h5 className="text-gray-900 font-medium mb-2">
              Accepted Payment Methods:
            </h5>
            <div className="flex space-x-2">
              <Image
                src="/images/visa.png"
                alt="Visa"
                width={40}
                height={40}
              />
              <Image
                src="/images/paypal.png"
                alt="PayPal"
                width={40}
                height={40}
              />
              <Image
                src="/images/apple-pay.png"
                alt="Apple Pay"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            © Copyright 2024, All Rights Reserved by Banana Studio
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span>🌐</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span>📘</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <span>📸</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

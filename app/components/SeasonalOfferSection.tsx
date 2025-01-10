import React from "react";
import Image from "next/image";

const SeasonalOfferSection = () => {
  return (
    <section className="relative bg-white">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.33), rgba(255, 255, 255, 0.33)), url('/images/sec-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Left Bottom Transparent Image */}
      <div className="absolute bottom-0 left-0">
        <Image
          src="/images/food-art-left.png" // Replace with your actual image
          alt="Left Bottom Decoration"
          width={300}
          height={300}
          className="opacity-50"
        />
      </div>

      {/* Right Top Transparent Image */}
      <div className="absolute top-0 right-0">
        <Image
          src="/images/food-art-right.png" // Replace with your actual image
          alt="Right Top Decoration"
          width={300}
          height={300}
          className="opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center py-16">
        {/* Offer Text */}
        <div className="lg:w-1/2 p-8">
          <div className="bg-green-100 inline-block px-4 py-1 rounded mb-4">
            <span className="text-green-700 font-medium">Special Offer</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Seasonal Fruit Bundle
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Discount up to{" "}
            <span className="text-orange-500 font-bold">80% OFF</span>
          </p>

          {/* Countdown Timer */}
          <div className="flex space-x-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">03</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">18</div>
              <div className="text-sm text-gray-600">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">54</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">21</div>
              <div className="text-sm text-gray-600">Seconds</div>
            </div>
          </div>

          {/* Promo Code */}
          <div className="bg-green-700 text-white inline-block px-6 py-3 rounded-lg">
            CODE : FRUIT28
          </div>
        </div>

        {/* Fruit Images */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          {/* Fruit Image */}
          <Image
            src="/images/oranges.png" // Replace with actual fruit image
            alt="Seasonal Fruits"
            width={500}
            height={500}
            className="z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default SeasonalOfferSection;

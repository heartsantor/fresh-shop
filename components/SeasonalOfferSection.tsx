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
          width={500}
          height={0}
          className="opacity-50"
        />
      </div>

      {/* Right Top Transparent Image */}
      <div className="absolute top-0 right-0">
        <Image
          src="/images/food-art-right.png" // Replace with your actual image
          alt="Right Top Decoration"
          width={500}
          height={0}
          className="opacity-50"
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image
          src="/images/blur-leaf.png" // Replace with your actual image
          alt="Right Top Decoration"
          width={176}
          height={0}
        />
      </div>
      <div className="absolute top-[6%] md:top-[10%] right-4 md:right-[30%]">
        <Image
          src="/images/leaf-left-top.png" // Replace with your actual image
          alt="Right Top Decoration"
          width={90}
          height={0}
        />
      </div>
      <div className="absolute bottom-[5%] right-0">
        <Image
          src="/images/big-leaf-right-crop.png" // Replace with your actual image
          alt="Right Top Decoration"
          width={90}
          height={0}
        />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center py-16">
        {/* Offer Text */}
        <div className="w-full lg:p-8 text-center md:text-left">
          <div className="bg-green-10  inline-block px-4 py-1 rounded mb-2">
            <span className="text-green-100 font-medium">Special Offer</span>
          </div>
          <h1 className="text-[48px] md:text-[80px] font-rubik font-medium text-black mb-2">
            Seasonal Fruit Bundle
          </h1>
          <p className="text-[32px] md:text-heading-2 font-medium text-black mb-6">
            Discount up to{" "}
            <span className="text-primary block md:inline">80% OFF</span>
          </p>

          {/* Countdown Timer */}
          <div className="flex space-x-4 mb-8 justify-center md:justify-start">
            {[
              { value: "03", label: "Days" },
              { value: "18", label: "Hour" },
              { value: "54", label: "Min" },
              { value: "21", label: "Second" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-time p-4 md:p-6"
              >
                <div className="text-[40px] font-normal  text-gray-900">
                  {item.value}
                </div>
                <div className="text-xs font-normal text-[18px] text-gray-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Promo Code */}
          <div className="bg-green-700 text-white inline-block px-8 py-4 rounded-full shadow-time mb-4 md:mb-0">
            <span className="text-[24px] md:text-[32px] font-semibold">
              CODE :
            </span>{" "}
            <span className="text-yellow-400 text-[24px] md:text-[32px] font-semibold">
              FRUIT28
            </span>
          </div>
        </div>

        {/* Fruit Images */}
        <div className="absolute right-0 lg:w-[46%]  justify-center items-center hidden md:flex">
          <Image
            src="/images/oranges.png"
            alt="Seasonal Fruits"
            width={800}
            height={0}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SeasonalOfferSection;

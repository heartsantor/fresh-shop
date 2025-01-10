import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative py-16 bg-white">
      {/* Floating Leaf Decoration */}
      <div className="absolute top-0 left-0">
        <Image
          src="/images/leaf.png"
          alt="Leaf Decoration"
          width={100}
          height={100}
        />
      </div>

      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section: Image and Decor */}
        <div className="lg:w-1/2 relative flex justify-center">
          {/* Farmer Image */}
          <Image
            src="/images/farmer.png"
            alt="Farmer with vegetables"
            width={400}
            height={400}
            className="z-10"
          />

          {/* Circle Background */}
          <div className="absolute bg-green-100 w-[300px] h-[300px] rounded-full -z-10"></div>

          {/* Arrow Decoration */}
          <Image
            src="/images/offer-arrow.png"
            alt="Arrow Decoration"
            width={50}
            height={50}
            className="absolute bottom-16 right-10"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <div className="inline-block px-4 py-1 bg-green-100 rounded-lg mb-4">
            <span className="text-green-700 font-medium">About us</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Fresh Harvest
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <button className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

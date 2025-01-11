"use client";

import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  image: string;
  testimonial: string;
  name: string;
  profession: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  testimonial,
  name,
  profession,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-8 lg:py-12 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Image */}
      <div className="relative">
        <Image src={image} alt={name} width={287} height={396} />
        <Image
          src="/images/offer-arrow.png"
          alt="Arrow Decoration"
          width={50}
          height={50}
          className="absolute -top-[8%] -right-[8%]"
        />
      </div>
      {/* Testimonial */}
      <div className=" bg-[#F4F6F6] rounded-[24px]  p-8  w-full lg:w-1/2">
        <p className="text-gray-700 text-[20px] font-normal mb-4">
          {testimonial}
        </p>
        <h4 className="font-bold text-gray-900 text-[18px]">
          {name} - <span className="text-black font-normal">{profession}</span>
        </h4>
      </div>
    </div>
  );
};

export default TestimonialCard;

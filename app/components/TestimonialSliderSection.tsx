"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

const TestimonialSliderSection: React.FC = () => {
  const testimonials = [
    {
      image: "/images/customer1.png",
      testimonial: `"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.`,
      name: "Jane Doe",
      profession: "Professional Chef",
    },
    {
      image: "/images/customer1.png",
      testimonial: `"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.`,
      name: "John Smith",
      profession: "Fitness Trainer",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative py-14 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="relative text-center mb-6">
          <div className="absolute top-4 left-0 md:left-10 ">
            <Image
              src="/images/leaf-left.png"
              alt="Leaf Left"
              width={66}
              height={0}
            />
          </div>
          <div className="absolute top-0 right-0 md:right-10">
            <Image
              src="/images/leaf-right.png"
              alt="Leaf Right"
              width={66}
              height={0}
            />
          </div>
          <div className="text-center">
            <div className="inline-block px-3 py-1 bg-[#749B3F1A] rounded-tl-lg">
              <span className="text-[#749B3F] font-bold text-[14px] md:text-[20px] font-questrial tracking-tighter">
                Testimonial
              </span>
            </div>

            <h2 className="text-[#212337] my-4 font-rubik text-[32px] md:text-[48px] font-medium text-center">
              What Our <span className="block md:inline">Customers Say</span>
            </h2>

            <p className="text-[#4A4A52] mx-auto font-questrial text-md font-normal text-center w-[90%] md:max-w-[600px] mb-0">
              Don't just take our word for it—here's what some of our customers
              have to say about their experience with Fresh Harvest:
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Dots */}
        <div className="flex justify-center space-x-4 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition transform duration-300 ${
                activeIndex === index
                  ? "bg-[#749B3F] scale-105"
                  : "bg-gray-300 scale-100"
              }`}
              onClick={() => swiperRef.current?.slideToLoop(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSliderSection;

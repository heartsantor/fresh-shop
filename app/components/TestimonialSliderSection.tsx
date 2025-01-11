"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSliderSection = () => {
  return (
    <section className="relative py-40 bg-white overflow-hidden">
      {/* Leaf Decorations */}
      <div className="container mx-auto">
        <div className="relative text-center mb-6">
          <div className="absolute top-4 left-10">
            <Image
              src="/images/leaf-left.png"
              alt="Leaf Left"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute top-0 right-10">
            <Image
              src="/images/leaf-right.png"
              alt="Leaf Right"
              width={100}
              height={100}
            />
          </div>
          <div className="text-center">
            <div className="inline-block px-3 py-1 bg-[#749B3F1A] rounded-tl-lg">
              <span className="text-[#749B3F] font-bold text-md font-questrial  tracking-tighter">
                Testimonial
              </span>
            </div>

            <h2 className="text-[#212337] my-4 font-rubik text-[48px] font-medium leading-[56.88px] tracking-[-0.02em] text-center">
              What Our Customers Say
            </h2>

            <p className="text-[#4A4A52] mx-auto font-questrial text-md font-normal text-center max-w-[600px] mb-0">
              Don’t just take our word for it—here’s what some of our customers
              have to say about their experience with Fresh Harvest:
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Image */}
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="/images/customer1.png"
                    alt="Customer Testimonial"
                    width={160}
                    height={160}
                  />
                </div>
                {/* Testimonial */}
                <div className="bg-gray-100 rounded-lg p-8 shadow-md w-full lg:w-1/2">
                  <p className="text-gray-700 text-lg mb-4">
                    "I absolutely love Fresh Harvest! The quality of their
                    produce is outstanding. It’s always fresh, flavorful, and
                    delicious. The convenience of ordering online and having it
                    delivered to my doorstep saves me so much time. Fresh
                    Harvest has become my go-to for all my fruit and vegetable
                    needs."
                  </p>
                  <h4 className="font-bold text-gray-900">Jane Doe</h4>
                  <p className="text-gray-600 text-sm">Professional Chef</p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Image */}
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="/images/customer1.png"
                    alt="Customer Testimonial"
                    width={160}
                    height={160}
                  />
                </div>
                {/* Testimonial */}
                <div className="bg-gray-100 rounded-lg p-8 shadow-md w-full lg:w-1/2">
                  <p className="text-gray-700 text-lg mb-4">
                    "Fresh Harvest has been a game changer for my family. The
                    variety of fresh produce they offer is unmatched, and their
                    delivery service is incredibly reliable. I highly recommend
                    them to anyone who values quality and convenience."
                  </p>
                  <h4 className="font-bold text-gray-900">John Smith</h4>
                  <p className="text-gray-600 text-sm">Fitness Trainer</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Pagination Dots */}
        <div className="mt-16 flex justify-center">
          <div className="swiper-pagination custom-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSliderSection;

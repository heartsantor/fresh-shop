"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface ProductImageCarouselProps {
  images: string[];
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  images,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative w-full border border-[#0000001A] rounded-lg">
      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-auto flex justify-center items-center p-4">
              <Image
                src={image}
                alt={`Product Image ${index + 1}`}
                width={500} // Adjust width
                height={0} // Adjust height
                className="object-contain rounded-lg w-[100%]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Dots */}
      <div className="flex justify-center space-x-4 absolute right-0 left-0 bottom-5 z-20">
        {images.map((_, index) => (
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
  );
};

export default ProductImageCarousel;

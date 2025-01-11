"use client";

import React from "react";
import ProductImageCarousel from "@/app/components/Product/ProductImageCarousel";
import ProductDescriptionTabs from "@/app/components/Product/ProductDescriptionTabs";
import RelatedProducts from "@/app/components/RelatedProducts";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  reviewsCount: number;
  description: string;
  longDescription: string;
  imageUrls: string[];
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const rating = 4.5;
  const reviewsCount = 120;

  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 !== 0; // Check for a half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="container mx-auto">
      <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Image Carousel */}
        <div className="md:col-span-5">
          <ProductImageCarousel images={product.imageUrls} />
        </div>

        {/* Product Info */}
        <div className="md:col-span-7">
          <div className="inline-block px-2 py-1 bg-[#749B3F1A] rounded-md">
            <span className="text-[#749B3F] font-bold text-[14px] md:text-[20px] font-questrial tracking-tighter">
              {product.category}
            </span>
          </div>
          <h1 className="text-[32px] md:text-[48px] font-medium text-gray-900 md:mt-4 m-0">
            {product.name}
          </h1>
          <div className="flex items-center md:mt-2">
            {/* Full Stars */}
            {[...Array(fullStars)].map((_, index) => (
              <span key={`full-${index}`} className="text-yellow-400 text-lg">
                ★
              </span>
            ))}
            {/* Half Star */}
            {halfStar && (
              <span className="text-yellow-400 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="inline"
                >
                  <path d="M12 15.39l-3.76 2.27.99-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 3.83 4.38.38-3.32 2.88.99 4.28L12 15.39z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    fill="none"
                  />
                </svg>
              </span>
            )}
            {/* Empty Stars */}
            {[...Array(emptyStars)].map((_, index) => (
              <span key={`empty-${index}`} className="text-gray-300 text-lg">
                ★
              </span>
            ))}
            {/* Rating Number */}
            <span className="ml-2 text-gray-900 font-medium">
              {rating.toFixed(1)}
            </span>
            {/* Review Count */}
            <span className="ml-2 text-sm text-gray-500">
              ({reviewsCount} review{reviewsCount > 1 && "s"})
            </span>
          </div>
          <p className="text-[32px] font-medium text-primary mt-1 md:mt-4">
            {product.price}
          </p>
          <p className="text-gray-100 font-normal font-questrial text-[18px] mt-2 md:mt-6">
            {product.description}
          </p>

          {/* Quantity and Buttons */}
          <div className="mt-6 space-y-4">
            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-100 text-[18px] font-rubik">
                Quantity
              </span>
              <div className="flex items-center border rounded-md">
                <button className="px-4 py-2 text-gray-100 border-r hover:bg-green-10">
                  -
                </button>
                <input
                  type="number"
                  value="1"
                  className="w-12 text-center border-0 focus:ring-0 focus:outline-none"
                  readOnly
                />
                <button className="px-4 py-2 text-gray-600 border-l hover:bg-green-10">
                  +
                </button>
              </div>
              <span className="text-gray-100 text-sm">/kg</span>
            </div>

            {/* Buttons */}
            <div className="flex items-center md:space-x-4 flex-col md:flex-row">
              {/* Save as Favorite Button */}
              <button className="flex items-center px-6 py-4 bg-gray-20 text-gray-700 rounded-md hover:bg-gray-200 transition md:min-w-[280px] justify-center w-full mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
                Save as favorite
              </button>

              {/* Add to Cart Button */}
              <button className="flex items-center justify-center px-6 py-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition md:min-w-[280px] w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13l-2-9H3m4 9l1.5 6h9l1.5-6m-9 6a1.5 1.5 0 11-3 0m9 0a1.5 1.5 0 11-3 0"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="px-4 md:col-span-2">
        <ProductDescriptionTabs
          description={product.longDescription}
          reviewsCount={product.reviewsCount}
        />
      </div>
      <div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;

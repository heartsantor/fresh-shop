"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";

import ProductTabs from "./ProductTabs";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading: productsLoading } = useSelector(
    (state: RootState) => state.products
  );
  const { categories, loading: categoriesLoading } = useSelector(
    (state: RootState) => state.categories
  );

  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => {
          const category = categories.find(
            (cat) => cat.id === product.categoryId
          );
          return category && category.categoryName === activeTab;
        });

  // useEffect(() => {
  //   const initializeData = () => {
  //     dispatch(fetchCategories());
  //     dispatch(fetchProducts());
  //   };

  //   initializeData();
  // }, [dispatch]);

  if (productsLoading || categoriesLoading) {
    return <div>Loading...</div>; // Avoid rendering mismatched HTML
  }

  return (
    <section className="relative py-10 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="relative text-center mb-6">
          <div className="absolute top-4 left-0 md:left-20">
            <Image
              src="/images/leaf-left.png"
              alt="Leaf Left"
              width={66}
              height={0}
            />
          </div>
          <div className="absolute top-0 right-1 md:right-20">
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
                Our Products
              </span>
            </div>

            <h2 className="text-[#212337] my-4 font-rubik text-[32px] md:text-[48px] font-medium text-center">
              Our Fresh Products
            </h2>

            <p className="text-[#4A4A52] mx-auto font-questrial text-md font-normal text-center w-[90%] md:max-w-[600px] mb-0">
              We pride ourselves on offering a wide variety of fresh and
              flavorful fruits, vegetables, and salad ingredients.
            </p>
          </div>
        </div>

        <ProductTabs
          tabs={["All", ...categories.map((category) => category.categoryName)]}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.productName}
              price={`$${product.price}`}
              image={product.images[0]}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

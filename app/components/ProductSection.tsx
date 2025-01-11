"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductTabs from "./ProductTabs";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Mushroom",
    price: "$2.3",
    category: "Vegetables",
    image: "/items/mushroom.png",
  },
  {
    id: 2,
    name: "Mustard",
    price: "$1.3",
    category: "Vegetables",
    image: "/items/mustard.png",
  },
  {
    id: 3,
    name: "Orange",
    price: "$4.2",
    category: "Fruits",
    image: "/items/orange.png",
  },
  {
    id: 4,
    name: "Pomegranate",
    price: "$11.2",
    category: "Fruits",
    image: "/items/pomegranate.png",
  },
  {
    id: 5,
    name: "Kiwi",
    price: "$5.3",
    category: "Fruits",
    image: "/items/kiwi.png",
  },
  {
    id: 6,
    name: "Coconut",
    price: "$6.3",
    category: "Fruits",
    image: "/items/coconut.png",
  },
  {
    id: 7,
    name: "Guava",
    price: "$2.2",
    category: "Fruits",
    image: "/items/guava.png",
  },
  {
    id: 8,
    name: "Eggplant",
    price: "$1.2",
    category: "Vegetables",
    image: "/items/eggplant.png",
  },
];

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <section className="relative py-40 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
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
                Our Products
              </span>
            </div>

            <h2 className="text-[#212337] my-4 font-rubik text-[48px] font-medium leading-[56.88px] tracking-[-0.02em] text-center">
              Our Fresh Products
            </h2>

            <p className="text-[#4A4A52] mx-auto font-questrial text-md font-normal text-center max-w-[600px] mb-0">
              We pride ourselves on offering a wide variety of fresh and
              flavorful fruits, vegetables, and salad ingredients.
            </p>
          </div>
        </div>

        <ProductTabs
          tabs={["All", "Fruits", "Vegetables", "Salad"]}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
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

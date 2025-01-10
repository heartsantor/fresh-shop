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
    <section className="relative py-16 bg-gray-50">
      {/* Floating Leaves */}
      <div className="absolute top-0 left-0">
        <Image
          src="/images/leaf-left.png"
          alt="Leaf Left"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute top-0 right-0">
        <Image
          src="/images/leaf-right.png"
          alt="Leaf Right"
          width={100}
          height={100}
        />
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-green-100 rounded-lg">
            <span className="text-green-700 font-medium">Our Products</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 my-4">
            Our Fresh Products
          </h2>
          <p className="text-gray-600">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </p>
        </div>

        {/* Tabs */}
        <ProductTabs
          tabs={["All", "Fruits", "Vegetables", "Salad"]}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />

        {/* Products Grid */}
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

        {/* See All Products Button */}
        <div className="mt-12 text-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600">
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

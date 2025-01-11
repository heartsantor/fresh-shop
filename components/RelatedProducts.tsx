import React from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Mushroom",
    price: "$2.3",
    category: "Vegetables",
    image: "/items/mushroom.png",
  },
  {
    id: "2",
    name: "Mustard",
    price: "$1.3",
    category: "Vegetables",
    image: "/items/mustard.png",
  },
  {
    id: "3",
    name: "Orange",
    price: "$4.2",
    category: "Fruits",
    image: "/items/orange.png",
  },
  {
    id: "4",
    name: "Pomegranate",
    price: "$11.2",
    category: "Fruits",
    image: "/items/pomegranate.png",
  },
];

const RelatedProducts = () => {
  return (
    <section className="relative py-10 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="relative text-center mb-6">
          <div className="text-center">
            <div className="inline-block px-3 py-1 bg-[#749B3F1A] rounded-tl-lg">
              <span className="text-[#749B3F] font-bold text-[14px] md:text-[20px] font-questrial tracking-tighter">
                Our Products
              </span>
            </div>

            <h2 className="text-[#212337] my-4 font-rubik text-[32px] md:text-[48px] font-medium text-center">
              Related products
            </h2>

            <p className="text-[#4A4A52] mx-auto font-questrial text-md font-normal text-center w-[90%] md:max-w-[600px] mb-0">
              We pride ourselves on offering a wide variety of fresh and
              flavorful fruits, vegetables, and salad ingredients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;

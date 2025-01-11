"use client";

import React from "react";
import Image from "next/image";
import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    description: "Discover the freshest seasonal produce and tips to enjoy them.",
    date: "May 23, 2024",
    image: "/images/blog1.png",
  },
  {
    id: 2,
    title:
      "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    description: "Elevate your salad game with these expert tips.",
    date: "May 23, 2024",
    image: "/images/blog2.png",
  },
  {
    id: 3,
    title:
      "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    description:
      "Learn how to meal prep like a pro for a healthier, easier lifestyle.",
    date: "May 23, 2024",
    image: "/images/blog3.png",
  },
];

const BlogSection = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Leaf Decorations */}
      <div className="absolute top-[-20px] left-[-30px]">
        <Image
          src="/images/leaf-right.png"
          alt="Leaf Decoration"
          width={100}
          height={100}
        />
      </div>
      <div className="absolute top-[-20px] right-[-30px]">
        <Image
          src="/images/leaf-right.png"
          alt="Leaf Decoration"
          width={100}
          height={100}
        />
      </div>

      {/* Header */}
      <div className="container mx-auto text-center mb-12 px-4">
        <div className="inline-block px-4 py-1 bg-green-100 rounded-lg mb-4">
          <span className="text-green-700 font-medium">Our Blog</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Fresh Harvest Blog
        </h2>
        <p className="text-gray-600">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

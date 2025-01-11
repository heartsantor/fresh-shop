"use client";

import React from "react";
import Image from "next/image";
import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    description:
      "Discover the freshest seasonal produce and tips to enjoy them.",
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
    <section className="relative pt-16 pb-16 md:pb-40 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="relative text-center mb-10">
   
          <div className="absolute top-0 right-[14%] hidden md:block">
            <Image
              src="/images/leaf-right.png"
              alt="Leaf Right"
              width={66}
              height={0}
            />
          </div>
          <div className="text-center">
            <div className="inline-block px-3 py-1 bg-[#749B3F1A] rounded-tl-lg">
              <span className="text-[#749B3F] font-bold text-md font-questrial  tracking-tighter">
                Our Blog
              </span>
            </div>

            <h2 className="text-[#212337] my-4 font-rubik text-[48px] font-medium leading-[56.88px] tracking-[-0.02em] text-center">
              Fresh Harvest Blog
            </h2>

            <p className="text-[#4A4A52] mx-auto font-questrial text-md font-normal text-center max-w-[600px] mb-0">
              Welcome to the Fresh Harvest Blog, your go-to resource for all
              things related to fresh produce, healthy eating, and culinary
              inspiration.
            </p>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

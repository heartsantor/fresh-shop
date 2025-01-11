"use client";

import React from "react";
import Image from "next/image";

interface BlogCardProps {
  id: number;
  title: string;
  date: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, image }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden transition-all hover:shadow-lg">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="py-4 flex flex-col">
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <a
          href="#"
          className="text-orange-500 font-medium flex items-center gap-2 hover:underline"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5l6 6-6 6M5.5 10.5h13"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

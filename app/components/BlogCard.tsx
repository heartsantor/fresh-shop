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
      <div className="p-4 flex flex-col">
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <a
          href="#"
          className="text-orange-500 font-medium flex items-center gap-2 hover:underline"
        >
          Read More
          <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

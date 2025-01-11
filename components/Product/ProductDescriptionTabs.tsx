"use client";

import React, { useState } from "react";

interface Props {
  description: string;
  reviewsCount: any;
}

const ProductDescriptionTabs: React.FC<Props> = ({
  description,
  reviewsCount,
}) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-8">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-6 py-2 text-sm font-medium rounded-md ${
            activeTab === "description"
              ? "bg-green-100 text-white"
              : "bg-white text-gray-600 border border-gray-300"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-6 py-2 text-sm font-medium rounded-md ${
            activeTab === "reviews"
              ? "bg-green-100 text-white"
              : "bg-white text-gray-600 border border-gray-300"
          }`}
        >
          Reviews (1)
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "description" && (
        <div className="bg-gray-20 rounded-lg p-6 md:w-[70%]">
          <p className="text-gray-100text-sm leading-6">{description}</p>
        </div>
      )}
      {activeTab === "reviews" && (
        <div>This is the Reviews section. Add reviews here.</div>
      )}
    </div>
  );
};

export default ProductDescriptionTabs;

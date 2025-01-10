import React from "react";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const ProductTabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`px-6 py-2 rounded-lg ${
            activeTab === tab
              ? "bg-[#749B3F] text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ProductTabs;

"use client";
import React, { useState } from "react";
import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2, ArrowRight, ArrowLeft } from "lucide-react";

export default function Category() {
  const [activeCategory, setActiveCategory] = useState(3);
  const categories = [
    { icon: Smartphone, name: "Phones" },
    { icon: Monitor, name: "Computers" },
    { icon: Watch, name: "SmartWatch" },
    { icon: Camera, name: "Camera" },
    { icon: Headphones, name: "HeadPhones" },
    { icon: Gamepad2, name: "Gaming" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-red-800 rounded-sm"></div>
        <span className="text-red-800 font-semibold">Categories</span>
      </div>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-semibold text-black">Browse By Category</h2>
        <div className="flex gap-2">
          <button className="w-12 h-12 bg-gray-light rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
            <ArrowLeft className="h-6 w-6 text-black" />
          </button>
          <button className="w-12 h-12 bg-gray-light rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
            <ArrowRight className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          const isActive = activeCategory === index;
          return (
            <div
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`border-2 rounded-sm p-6 flex flex-col items-center justify-center h-36 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                isActive
                  ? "border-red-800 bg-red-800 text-white"
                  : "border-gray-300 hover:border-red-800 hover:bg-red-800 hover:text-white"
              }`}
            >
              <IconComponent className="h-12 w-12 mb-4" />
              <span className="text-center font-medium">{category.name}</span>
            </div>
          );
        })}
      </div>
      <div className="border-b border-gray-200 mt-16"></div>
    </div>
  );
}

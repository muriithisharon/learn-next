"use client";
import React from "react";
import Image from "next/image";

export default function NewArrival() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-5 h-10 bg-red-800 rounded-sm"></div>
        <span className="text-red-800 font-semibold">Featured</span>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-semibold text-black">New Arrival</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black text-white rounded-sm p-8 relative overflow-hidden h-[600px] flex flex-col justify-end">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/ps5-slim-goedkope-playstation_large 1.png"
              alt="PlayStation 5"
              width={500}
              height={320}
              className=""
              priority={true}
            />
          </div>
          <div className="relative z-10 max-w-md">
            <h3 className="text-2xl font-semibold mb-4">PlayStation 5</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="text-white underline underline-offset-8 font-medium hover:no-underline transition-all">
              Shop Now
            </button>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div className=" text-white rounded-sm p-8 relative overflow-hidden h-[285px] flex items-end">
            <div className="absolute right-1 top-8 bottom-8 w-120 flex items-center justify-center">
              <Image
                src="/images/attractive-woman-wearing-hat-posing-black-background 1.png"
                alt="Women&#39;s Collection"
                width={780}
                height={224}
                className=""
                priority={true}
              />
            </div>
            <div className="relative z-10 max-w-xs">
              <h3 className="text-2xl font-semibold mb-4">Women&#39;s Collections</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Featured woman collections that give you another vibe.
              </p>
              <button className="text-white underline underline-offset-8 font-medium hover:no-underline transition-all">
                Shop Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black text-white rounded-sm p-6 relative overflow-hidden h-[285px] flex flex-col justify-end">
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-50 h-30 flex items-center justify-center">
                <Image
                  src="/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
                  alt="Speakers"
                  width={208}
                  height={128}
                  className="object-contain"
                  priority={true}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Speakers</h3>
                <p className="text-gray-300 mb-3 text-sm">
                  Amazon wireless speakers
                </p>
                <button className="text-white underline underline-offset-4 text-sm font-medium hover:no-underline transition-all">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="text-white rounded-sm p-6 relative overflow-hidden h-[285px] flex flex-col justify-end">
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-57 h-35 flex items-center justify-center">
                <Image
                  src="/images/im4l-removebg-preview.png"
                  alt="Perfume"
                  width={258}
                  height={128}
                  className=""
                  priority={true}
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">Perfume</h3>
                <p className="text-gray-300 mb-3 text-sm">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="text-white underline underline-offset-4 text-sm font-medium hover:no-underline transition-all">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

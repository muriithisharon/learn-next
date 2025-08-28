"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, Eye, Star, ArrowLeft, ArrowRight } from "lucide-react";

export function FlashSales() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const products = [
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            price: 120,
            originalPrice: 200,
            discount: 40,
            rating: 5,
            reviews: 88,
            image: "/images/g92-2-500x500 1.png"
        },
        {
            id: 2,
            name: "AK-900 Wired Keyboard",
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 4,
            reviews: 75,
            image: "/images/ak-900-01-500x500 1.png"
        },
        {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            price: 370,
            originalPrice: 400,
            discount: 30,
            rating: 5,
            reviews: 99,
            image: "/images/g27cq4-500x500 1.png"
        },
        {
            id: 4,
            name: "S-Series Comfort Chair",
            price: 375,
            originalPrice: 400,
            discount: 25,
            rating: 4,
            reviews: 99,
            image: "/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
        },
        {
            id: 5,
            name: "RGB Mechanical Keyboard",
            price: 85,
            originalPrice: 120,
            discount: 30,
            rating: 4,
            reviews: 156,
            image: "/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
        },
        {
            id: 6,
            name: "Wireless Gaming Mouse",
            price: 45,
            originalPrice: 70,
            discount: 35,
            rating: 5,
            reviews: 203,
            image: "/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
        },
        {
            id: 7,
            name: "USB-C Charging Cable",
            price: 15,
            originalPrice: 25,
            discount: 40,
            rating: 4,
            reviews: 89,
            image: "/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
        },
        {
            id: 8,
            name: "Bluetooth Headphones",
            price: 130,
            originalPrice: 180,
            discount: 28,
            rating: 5,
            reviews: 267,
            image: "/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
        }
    ];

    const itemsPerSlide = 4;
    const maxSlides = Math.ceil(products.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % maxSlides);
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
    };
    const getCurrentProducts = () => {
        const startIndex = currentSlide * itemsPerSlide;
        return products.slice(startIndex, startIndex + itemsPerSlide);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-5 h-10 bg-red-800 rounded-sm"></div>
                <span className="text-red-800 font-semibold">Today&#39;s</span>
            </div>
            <div className="flex items-end justify-between mb-8">
                <div className="flex items-end gap-12">
                    <h2 className="text-4xl font-semibold text-black">Flash Sales</h2>
                    <div className="flex items-center gap-4">
                        <div className="text-center">
                            <div className="text-sm text-black mb-1">Days</div>
                            <div className="text-3xl font-bold text-black">{String(timeLeft.days).padStart(2, '0')}</div>
                        </div>
                        <div className="text-red-800 text-2xl">:</div>
                        <div className="text-center">
                            <div className="text-sm text-black mb-1">Hours</div>
                            <div className="text-3xl font-bold text-black">{String(timeLeft.hours).padStart(2, '0')}</div>
                        </div>
                        <div className="text-red-800 text-2xl">:</div>
                        <div className="text-center">
                            <div className="text-sm text-black mb-1">Minutes</div>
                            <div className="text-3xl font-bold text-black">{String(timeLeft.minutes).padStart(2, '0')}</div>
                        </div>
                        <div className="text-red-800 text-2xl">:</div>
                        <div className="text-center">
                            <div className="text-sm text-black mb-1">Seconds</div>
                            <div className="text-3xl font-bold text-black">{String(timeLeft.seconds).padStart(2, '0')}</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 bg-gray-light rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentSlide === 0}
                    >
                        <ArrowLeft className="h-6 w-6 text-black" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 bg-gray-light rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentSlide === maxSlides - 1}
                    >
                        <ArrowRight className="h-6 w-6 text-black" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {getCurrentProducts().map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        <div className="relative bg-gray-200 rounded-sm p-8 mb-4 h-64 flex items-center justify-center">
                            <div className="absolute top-3 left-3 bg-red-800 text-white px-3 py-1 rounded-sm text-sm">
                                -{product.discount}%
                            </div>
                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-800 hover:text-white transition-colors">
                                    <Heart className="h-4 w-4" />
                                </button>
                                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-800 hover:text-white transition-colors">
                                    <Eye className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="w-55 h-65 rounded-lg flex items-center justify-center overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={150}
                                    height={200}
                                    className="object-contain"
                                    priority={true}
                                />
                            </div>
                            <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                Add To Cart
                            </button>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-medium text-black">{product.name}</h3>
                            <div className="flex items-center gap-3">
                                <span className="text-red-700 font-medium">${product.price}</span>
                                <span className="text-gray-500 line-through">${product.originalPrice}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-500 text-sm">({product.reviews})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-3 mb-8">
                {[...Array(maxSlides)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-red-800' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
            <div className="text-center">
                <button className="bg-red-800 text-white px-12 py-3 rounded-sm hover:bg-red-hover transition-colors">
                    View All Products
                </button>
            </div>
        </div>
    );
}
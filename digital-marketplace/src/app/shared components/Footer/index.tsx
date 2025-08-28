"use client";
import Image from "next/image";
import React from "react";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Exclusive</h3>
            <div className="space-y-4">
              <h4 className="text-xl font-medium">Subscribe</h4>
              <p className="text-gray-300">Get 10% off your first order</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-white rounded-sm px-4 py-3 pr-12 text-white placeholder-gray-400"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Send className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6">Support</h3>
            <div className="space-y-4 text-gray-300">
              <p>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6">Account</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">My Account</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Login / Register</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Cart</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Wishlist</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Shop</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6">Quick Link</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Terms Of Use</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">FAQ</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-6">Download App</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">Save $3 with App New User Only</p>
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-white rounded-sm flex items-center justify-center">
                  <Image 
                    src={"/images/qrcode.png"}
                    alt="QR Code"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="space-y-1">
                  <div className="w-28 h-10 flex items-center">
                    <Image
                        src="/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                        alt="Download on Google Play Store"
                        width={122}
                        height={40}
                    />                  </div>
                  <div className="w-30 h-10 flex items-center">
                    <Image
                      src="/images/download-appstore.png"
                      alt="Get it on the App Store"
                      width={112}
                      height={40}
                    />                  </div>
                </div>
              </div>
              <div className="flex gap-6 pt-4">
                <Facebook className="h-6 w-6 text-white hover:text-blue-400 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-white hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-white hover:text-pink-400 cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-white hover:text-blue-600 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center text-gray-400">
            <p>&copy; Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
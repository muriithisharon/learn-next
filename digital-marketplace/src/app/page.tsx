import React from 'react';
// import BestSeller from './home page/Best Seller/Page';
import Categories from './home page/Category/page';
import { FlashSales } from "./home page/Flash sale/page";
import NewArrival from './home page/New Arrival/page';
import OurProducts from './home page/Our Products/page';
import { Footer } from "./shared components/Footer";
import { Header } from "./shared components/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <FlashSales/>
      <Categories/>
      {/* <BestSeller/> */}
      <OurProducts/>
      <NewArrival/>
      <Footer/>
    </div>
  );
}
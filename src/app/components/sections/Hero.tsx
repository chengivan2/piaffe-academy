"use client";


import React from "react";
import Header from "../Header";
import heroContent from "./HeroContent";


export default function Hero() {
  return (
    <section className="relative min-w-full min-h-[100vh] bg-[url('/equestrian-horse-jump.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#0d0d0d] opacity-20"></div>
      <Header />
      <div className="relative z-10 flex flex-col justify-center h-full px-8 pt-32 pb-16 max-w-3xl">
        <h1 className="text-white text-6xl font-extrabold leading-tight mb-2">
          {heroContent.heading}
        </h1>
        <p className="text-white text-lg mb-6 font-medium">
          {heroContent.subheading}
        </p>
        <p className="text-white text-base mb-8 max-w-lg">
          {heroContent.description}
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition mb-8 w-fit">
          {heroContent.bookNow}
        </button>
        <div className="flex items-center gap-2">
          <span className="text-white text-sm rotate-[-90deg] whitespace-nowrap">
            {heroContent.scrollText}
          </span>
          <span className="text-white text-xl">↓</span>
        </div>
      </div>
    </section>
  );
}

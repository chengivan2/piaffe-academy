"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative min-w-full min-h-[100vh] flex items-center justify-center bg-[url('/two-horses.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/80 bg-opacity-20 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-16">
        <div className="mb-6 flex flex-col items-center">
          <span className="cta-big-percent text-white text-5xl md:text-7xl font-black drop-shadow-lg tracking-tight">
            20%
          </span>
          <span className="cta-small-percent text-white text-2xl md:text-3xl font-bold drop-shadow-md tracking-tight">
            10%
          </span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          We've Doubled Our Discount!
        </h2>
        <p className="text-white text-lg md:text-xl mb-6 max-w-xl drop-shadow">
          Take advantage of our limited-time offer and save even more on
          world-class equestrian care and services. Don't miss out!
        </p>
        <button
          type="button"
          title="Claim Your Discount"
          className="bg-[#000068] text-black font-semibold px-8 py-4 rounded shadow hover:bg-gray-200 transition text-lg"
        >
          Claim Your Discount
        </button>
      </div>
    </section>
  );
}

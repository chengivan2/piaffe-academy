"use client";

import React from "react";
import Header from "../Header";
import heroContent from "./HeroContent";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-w-full min-h-[100vh] bg-[url('/equestrian-horse-jump.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#0d0d0d] opacity-20"></div>
      <Header />
      <div className="relative z-10 flex flex-col justify-center h-full px-8 pt-32 pb-16 max-w-3xl">
        <motion.h1
          className="text-white text-6xl font-extrabold leading-tight mb-2"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1 }}
        >
          {heroContent.heading}
        </motion.h1>
        <motion.p
          className="text-white text-lg mb-6 font-medium"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1, delay: 0.2 }}
        >
          {heroContent.subheading}
        </motion.p>
        <motion.p
          className="text-white text-base mb-8 max-w-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1, delay: 0.4 }}
        >
          {heroContent.description}
        </motion.p>
        <motion.button
          className="bg-white text-black font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition mb-8 w-fit"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1, delay: 0.6 }}
        >
          {heroContent.bookNow}
        </motion.button>
      </div>
    </section>
  );
}

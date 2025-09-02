"use client";

import React from "react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-w-full min-h-[100vh] bg-[url('/equestrian-horse-jump.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#0d0d0d] opacity-20"></div>

      <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-4 py-4 md:px-12 md:py-8">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-white text-lg font-bold"
        >
          PA
        </motion.div>
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="md:hidden"
        >
          <button className="text-white text-2xl p-2" aria-label="Open menu">
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </motion.div>
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="hidden md:flex gap-6 lg:gap-8 text-white text-xs md:text-sm font-medium"
        >
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Sanctuary
          </a>
          <a href="#" className="hover:underline">
            Horses
          </a>
          <a href="#" className="hover:underline">
            Gallery
          </a>
        </motion.nav>
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex items-center gap-2 md:gap-3"
        >
          <span className="text-white text-[10px] md:text-xs font-medium">
            +254 712 435 678
          </span>
          <motion.button
            type="button"
            title="Search Piaffe Academy"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </motion.button>
        </motion.div>
      </header>
    </section>
  );
}

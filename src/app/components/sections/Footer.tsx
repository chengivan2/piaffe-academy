"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center py-8 px-4 bg-transparent">
  <div className="footer-pill relative w-full max-w-3xl rounded-full overflow-hidden shadow-lg flex items-center justify-between px-8 py-6">
        <Image
          src="/equestrian-horse-jump.jpg"
          alt="Footer Background"
          fill
          className="object-cover absolute inset-0 z-0 opacity-30"
          unoptimized
        />
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-semibold text-gray-800">© 2025 Piaffe Academy. All rights reserved.</span>
          <span className="text-md text-gray-600">Equestrian Excellence & Legacy</span>
        </div>
      </div>
    </footer>
  );
}

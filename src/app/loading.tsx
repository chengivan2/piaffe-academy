"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <Image
        src="/equestrian-horse-turn-gif.gif"
        alt="Loading..."
        width={1240}
        height={1080}
        className="object-contain w-full h-full"
        priority
        unoptimized
      />
    </div>
  );
}

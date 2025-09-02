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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <Image
        src="/equestrian-horse-turn-gif.gif"
        alt="Loading..."
        width={600}
        height={400}
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
}

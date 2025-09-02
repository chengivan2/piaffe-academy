"use client";

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
      <img
        src="/equestrian-horse-turn-gif.gif"
        alt="Loading..."
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

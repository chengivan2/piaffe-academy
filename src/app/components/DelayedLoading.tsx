"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface DelayedLoadingProps {
  children: React.ReactNode;
  minDuration?: number;
}

export default function DelayedLoading({ children, minDuration = 3000 }: DelayedLoadingProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, minDuration);
    return () => clearTimeout(timer);
  }, [minDuration]);

  return showContent ? (
    children
  ) : (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <Image
        src="/equestrian-horse-turn-gif.gif"
        alt="Loading..."
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
        priority
        unoptimized
      />
    </div>
  );
}

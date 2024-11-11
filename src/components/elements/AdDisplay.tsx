// components/AdDisplay.tsx
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface AdDisplayProps {
  adImages: StaticImageData[]; // Allow StaticImageData array
  switchInterval: number;
}

export default function AdDisplay({ adImages, switchInterval }: AdDisplayProps) {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const adTimer = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % adImages.length);
    }, switchInterval);

    return () => clearInterval(adTimer);
  }, [adImages, switchInterval]);

  return (
    <Image
      src={adImages[currentAdIndex]}
      alt="Advertisement"
      width={1000}
      height={1000}
      className="w-full object-cover"
    />
  );
}

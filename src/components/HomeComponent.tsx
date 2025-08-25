'use client'
import { homeContent } from "@/content.json";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomeComponent = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev < homeContent.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev > 0 ? prev - 1 : homeContent.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <Image
        src={homeContent[slide].imgUrl}
        alt="home image"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          {homeContent[slide].message.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg md:text-2xl text-gray-200">
          {homeContent[slide].message.content}
        </p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-4 py-2 rounded-full shadow-md"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-4 py-2 rounded-full shadow-md"
      >
        Next
      </button>
    </div>
  );
};

export default HomeComponent;

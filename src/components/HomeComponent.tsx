'use client'
import { homeContent } from "@/content.json";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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
    <div className="relative min-h-screen overflow-hidden sm:m-4 m-2 rounded-2xl">
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
        <h2 className="text-4xl font-bold max-w-2xl text-white drop-shadow-lg">
          {homeContent[slide].message.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg md:text-2xl text-gray-200">
          {homeContent[slide].message.content}
        </p>
        <Link href="/academics" className="bg-amber-300 mt-10 px-10 py-4 flex font-bold justify-self-center rounded-full text-white hover:bg-amber-500 transition-all duration-500 hover:translate-y-2">
        Explore All
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-10 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/50 p-1 text-black text-4xl shadow-md"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-10 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/50 p-1 text-black text-4xl shadow-md"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default HomeComponent;

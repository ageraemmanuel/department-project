'use client'

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const events = [
  {
    id: 1,
    title: "Junior Programmers coding challenge",
    content: "comming up on 25/11/2025.",
    link: '/dev-challenge'
  },
  {
    id: 2,
    title: "100lv vs 200 coding challenge",
    content: "comming up on 25/10/2025.",
    link: '/dev-challenge'
  },

];

export default function DashboardEventSlider() {

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // for animation direction

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev === 0 ? events.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  useEffect(() => {
    const interVal = setInterval(prevSlide, 5000);
    return () => { clearInterval(interVal) }
  }, [index]);

  return (
    <div className="relative p-4 w-full max-w-3xl mx-auto overflow-hidden mb-10 ">
      <AnimatePresence
        custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.5 },
            opacity: { duration: 0.3 },
          }}
          className="absolute top-0 left-0 w-full bg-gradient-to-br from-amber-300 to-amber-500 p-4 rounded-md"
        >
          <h2 className="text-gray-900 font-bold text-2xl my-4">
            {events[index].title}
          </h2>
          <p className="text-gray-700 mb-4">{events[index].content}</p>
          <Link
            className="text-amber-500 bg-white rounded-full flex justify-self-center py-2 px-8 hover:bg-gray-50 hover:translate-0.5 transition-all duration-500"
            href={events[index].link}
            dir={`link to ${events[index].title}`}>
            Register Now
          </Link>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-4 sm:mt-45 mt-50 justify-center">
        <button onClick={prevSlide} className="p-2 border border-gray-100 bg-gray-300 cursor-pointer rounded-full">
        </button>
        <button onClick={nextSlide} className="p-2 border border-gray-100 bg-gray-300 cursor-pointer rounded-full">
        </button>
      </div>
    </div>
  );
}

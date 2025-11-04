'use client'
import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    { id: 1, imgSrc: assets.ss1 },
    { id: 2, imgSrc: assets.ss2 },
    { id: 3, imgSrc: assets.ss3 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => setCurrentSlide(index);

  return (
    <div className="overflow-hidden  relative w-full mt-6">
      {/* SLIDER CONTAINER */}
      <div
        className="flex mb-2 transition-transform duration-1000 ease-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex items-center justify-center bg-white  sm:py-10 px-3 sm:px-8 rounded-xl min-w-full"
          >
            <Image
              className="rounded-lg shadow-lg object-cover"
              src={slide.imgSrc}
              alt={`Slide ${index + 1}`}
              width={900}
              height={450}
              priority
            />
          </div>
        ))}
      </div>

      {/* ✅ SINGLE DOT LAYER (Always Visible) */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {sliderData.map((_, i) => (
          <div
            key={i}
            onClick={() => handleSlideChange(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === i
                ? "bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)] scale-110"
                : "bg-gray-400/50 hover:bg-gray-500/70"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import games from "@/constants/games";

const GameCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = (currentIndex - 1 + games.length) % games.length;
  const nextIndex = (currentIndex + 1) % games.length;

  const handlePrev = () => {
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="flex">
      {/* Lower layer with previous and next images */}
      <div className="absolute inset-0 flex justify-between items-center">
        <Image
          src={games[prevIndex].photo}
          alt={`Previous`}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <Image
          src={games[nextIndex].photo}
          alt={`Next`}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Upper layer with the current image */}
      <Image
        src={games[currentIndex].photo}
        alt={`Current`}
        layout="fill"
        objectFit="cover"
        className="rounded-md shadow-lg"
      />

      {/* Navigation buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 flex items-center justify-between w-full">
        <button onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8 text-white cursor-pointer"
          >
            {/* Add your left arrow SVG path data here */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8 text-white cursor-pointer"
          >
            {/* Add your right arrow SVG path data here */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {games.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GameCarousel;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import games from "@/constants/games";
import { useRouter } from "next/navigation";

const GameCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = (currentIndex - 1 + games.length) % games.length;
  const nextIndex = (currentIndex + 1) % games.length;
  const router = useRouter();
  const handlePrev = () => {
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    setCurrentIndex(nextIndex);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  const handleGameClicked = (id: number) => {
    //to do: function to check is this user logged in or not and check are they bought it or no
    router.push(`/StorePage/Buy/${id}`);
  };
  return (
    <div className="relative">
      <div className="flex w-full h-[480px]">
        <div className="absolute flex items-center px-10 w-full h-full justify-between">
          <div className="relative flex items-center justify-center cursor-pointer">
            <Image
              src={games[prevIndex].photo}
              alt={`Previous`}
              width={1000}
              height={1000}
              className="opacity-50 object-cover h-[380px] rounded-3xl"
            />
          </div>
          <div className="relative flex items-center justify-center cursor-pointer">
            <Image
              src={games[nextIndex].photo}
              alt={`Previous`}
              width={1000}
              height={1000}
              className="opacity-50 object-cover h-[380px] rounded-3xl"
            />
          </div>
        </div>

        <div
          className="relative w-full px-36 cursor-pointer"
          onClick={() => handleGameClicked(currentIndex)}
        >
          <Image
            src={games[currentIndex].photo}
            alt={`Current`}
            width={1440}
            height={1000}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 flex items-center justify-between w-full">
          <button onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8 text-white cursor-pointer"
            >
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {games.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-[#B00101]" : "bg-black"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCarousel;

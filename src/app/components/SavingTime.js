"use client";
import React, { useState, useEffect } from "react";

export default function SavingTime() {
  const [imagePath, setImagePath] = useState("/images/laptop-landing-16.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImagePath("/images/mobile-landing-16.png"); // Mobile image path
      } else {
        setImagePath("/images/laptop-landing-16.png"); // Default desktop image path
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="testimonial" className="container-fluid mx-auto mt-40 max-w-6xl px-4 md:mt-72">
      <div className="relative flex flex-col overflow-hidden">
        <div className="z-2 pb-32">
          <div className="justify-content-center flex flex-col">
            <div className="container mb-28 flex flex-col items-center gap-6">
              <div className="text-dark text-center text-4xl font-semibold leading-10">Start saving time today!</div>
              <div className="text-center text-base font-normal leading-6 text-gray-700">
                Join an ever-growing community, and get started with Afforai free of charge!
              </div>
              <button
                type="button"
                className="rounded-lg bg-gradient-to-r from-purple-950 to-purple-800 px-4 py-1 text-white hover:opacity-80 focus:border-blue-300 focus:outline-none focus:ring md:px-3 md:py-2"
              >
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
        <div className="z-1 absolute bottom-40 w-fit overflow-hidden rounded-3xl md:bottom-0 md:rounded-xl">
          <img src={imagePath} className="img-fluid w-full" alt="Laptop illustration" />
        </div>
      </div>
    </div>
  );
}

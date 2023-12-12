"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LANDING_PAGES } from "../constants";

export default function Productivity() {
  const [imagePath, setImagePath] = useState(LANDING_PAGES.laptop);

  useEffect(() => {
    // Check window width and update image path accordingly
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImagePath(LANDING_PAGES.mobile); // Mobile image path
      } else {
        setImagePath(LANDING_PAGES.laptop); // Default desktop image path
      }
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto mt-40 max-w-screen-xl px-4 md:mt-72">
      <div className="mb-10 flex flex-col justify-center md:mb-20 md:flex-row">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-start md:items-center">
            <div className="mb-2 rounded-lg border-2 border-solid border-purple-600 px-4 py-2 text-xs text-purple-600">
              10x your productivity
            </div>
            <div className="mb-2 max-w-2xl text-left text-xl font-semibold text-black md:text-center md:text-5xl">
              Save yourself from stress & streamline your workflow
            </div>
            <div className="mb-2 max-w-2xl text-left text-sm font-normal leading-6 text-gray-600 md:text-center md:text-lg">
              The average worker spends 9 hours per week looking through & gathering information from thick stacks of
              documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 flex items-center justify-center">
        <Image src={imagePath} width={800} height={600} className="w-full md:w-3/4" alt="Laptop Graphic" />
      </div>
    </div>
  );
}

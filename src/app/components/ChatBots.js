"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ChatBots() {
  const [imagePath, setImagePath] = useState("/images/laptop-landing-11.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImagePath("/images/mobile-landing-11.png"); // Mobile image path
      } else {
        setImagePath("/images/laptop-landing-11.png"); // Default desktop image path
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto mt-40 max-w-screen-lg px-4 md:mt-72">
      <div className="flex flex-col md:flex-row">
        <div className="md:1/2 flex w-full items-center">
          <div className="container flex flex-col gap-4 px-3">
            <div>
              <div className="inline-flex items-center justify-center rounded-lg border-2 border-solid border-purple-600 px-4 py-2 text-xs text-purple-600">
                Most versatile
              </div>
            </div>
            <h3 className="text-dark mb-4 text-xl font-semibold md:text-4xl">
              Create multiple chatbots for different purposes
            </h3>
            <div className="text-sm font-normal text-gray-700 md:text-lg">
              Legal documents? Summarizing a book? Extracting data from a website? We allow you to create multiple
              chatbots at one time, so you can use Afforai for a whole range of purposes.
            </div>
            <div className="md:flex-shrink-1 hidden flex-row gap-4 space-x-4">
              <button
                type="button"
                className="rounded-lg bg-gradient-to-r from-purple-950 to-purple-800 px-6 py-2 text-white hover:opacity-80 focus:border-blue-300 focus:outline-none focus:ring"
              >
                Get started
              </button>
              <button type="button" className="rounded-lg bg-gray-200 px-6 py-2 text-gray-600">
                View pricing
              </button>
            </div>
          </div>
        </div>
        <Image
          src={imagePath}
          className="w-full p-5 md:w-1/2"
          width={700}
          height={755}
          alt="Afforai masters the documents you upload"
        />
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="md:py-8 md:px-10 md:flex-row items-center fixed top-0 z-20 justify-center w-full">
      <div className="p-5 bg-transparent backdrop-filter backdrop-blur-lg border-b md:border border-black border-opacity-10 md:rounded-2xl max-w-screen-lg w-full mx-auto">
        {/* Desktop Version */}
        <div className="hidden md:flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image src="/images/logo.png" width={23} height={25} alt="logo" />
              <span className="font-medium">Afforai</span>
            </div>
          </Link>

          <div className="flex items-center space-x-5 font-medium text-sm">
            <Link href="/affiliates">Affiliates</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/help">Help Center</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <button className="text-xs px-2 md:px-6 md:py-2 rounded-lg bg-gray-200 text-gray-600 border-1 border-gray-300">
                Login
              </button>
            </Link>
            <Link href="/">
              <button
                type="button"
                className="text-xs bg-gradient-to-r from-purple-950 to-purple-800 px-4 md:px-3 py-1 md:py-2 text-white rounded-lg hover:opacity-80 focus:outline-none focus:ring focus:border-blue-300"
              >
                Try for free
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image src="/images/logo.png" width={23} height={25} alt="logo" />
              <span className="font-semibold">Afforai</span>
            </div>
          </Link>

          <div className="flex items-center space-x-2">
            <Link href="/">
              <button className="px-6 py-2 rounded-lg bg-gray-200 text-gray-600">
                Login
              </button>
            </Link>
            <Link href="/">
              <button
                type="button"
                className="bg-gradient-to-r from-purple-950 to-purple-800 px-4 md:px-3 py-2 text-white text-sm rounded-lg hover:opacity-80 focus:outline-none focus:ring focus:border-blue-300"
              >
                Try for free
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="text-gray-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <Link href="/affiliates">
              <div className="py-2">Affiliates</div>
            </Link>
            <Link href="/pricing">
              <div className="py-2">Pricing</div>
            </Link>
            <Link href="/testimonials">
              <div className="py-2">Testimonials</div>
            </Link>
            <Link href="/help">
              <div className="py-2">Help Center</div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

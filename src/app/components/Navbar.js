"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-20 mx-0 w-full items-center justify-center md:flex-row md:px-2 md:py-8">
      <div className="mx-auto w-full max-w-screen-xl border-b border-black border-opacity-10 bg-transparent p-5 backdrop-blur-lg backdrop-filter md:rounded-2xl md:border">
        {/* Desktop Version */}
        <div className="hidden items-center justify-between md:flex">
          <Link href="/">
            <div className="flex cursor-pointer items-center space-x-2">
              <Image src="/images/logo.png" width={23} height={25} alt="logo" />
              <span className="font-medium">Afforai</span>
            </div>
          </Link>

          <div className="flex items-center space-x-5 text-sm font-medium">
            <Link href="/affiliates">Affiliates</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/help">Help Center</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <button className="border-1 rounded-lg border-gray-300 bg-gray-200 px-2 text-xs text-gray-600 md:px-6 md:py-2">
                Login
              </button>
            </Link>
            <Link href="/">
              <button
                type="button"
                className="rounded-lg bg-gradient-to-r from-purple-950 to-purple-800 px-4 py-1 text-xs text-white hover:opacity-80 focus:border-blue-300 focus:outline-none focus:ring md:px-3 md:py-2"
              >
                Try for free
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="flex items-center justify-between md:hidden">
          <Link href="/">
            <div className="flex cursor-pointer items-center space-x-2">
              <Image src="/images/logo.png" width={23} height={25} alt="logo" />
              <span className="font-semibold">Afforai</span>
            </div>
          </Link>

          <div className="flex items-center space-x-2">
            <Link href="/">
              <button className="rounded-lg bg-gray-200 px-6 py-2 text-gray-600">Login</button>
            </Link>
            <Link href="/">
              <button
                type="button"
                className="rounded-lg bg-gradient-to-r from-purple-950 to-purple-800 px-4 py-2 text-sm text-white hover:opacity-80 focus:border-blue-300 focus:outline-none focus:ring md:px-3"
              >
                Try for free
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="text-gray-600 focus:outline-none" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden">
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

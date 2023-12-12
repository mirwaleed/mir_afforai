"use client";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";
import { Swiper, SwiperSlide } from "swiper/react";
import lifeTimeDeal from "../../../public/svgs/lifetime-deal.svg";
import summarizeKey from "../../../public/svgs/summarize-key.svg";
import searchForAnswer from "../../../public/svgs/search-for-answer.svg";
import askLang from "../../../public/svgs/ask-lang.svg";
import askInAnyLang from "../../../public/svgs/ask-in-any-lang.svg";
import searchForAnswers from "../../../public/svgs/search-answer.svg";
import compareDocument from "../../../public/svgs/compare-document.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Brain() {
  const size = useWindowSize();

  return (
    <div className="container mx-auto mt-32 px-4 py-4 md:mt-32">
      <div className="relative flex flex-col gap-10 overflow-hidden">
        <div className="line-height-rel-100 z-2 flex flex-col items-center gap-8">
          <div
            className="shadow-box mx-auto inline-flex w-full items-center justify-center 
          space-x-2 rounded-xl border-2 border-solid border-gray-800 bg-gradient-to-r from-orange-500 to-yellow-300 py-1 text-sm font-semibold text-gray-800 shadow-lg backdrop-blur-md md:w-auto md:px-2"
          >
            <Image src="/images/appsumo.png" width={26} height={30} alt="AppSumo" />
            <span>Now on AppSumo</span>
            <Link
              href="https://appsumo.8odi.net/3eR3xn"
              target="_blank"
              className="via-opacity-50 to-opacity-50 flex items-center justify-center space-x-1 rounded-md border border-solid border-gray-800 bg-gradient-to-r from-transparent p-2"
            >
              <span>Get Lifetime Deal</span>
              <div className="-rotate-90 transform">
                <Image priority src={lifeTimeDeal} alt="..." />
              </div>
            </Link>
          </div>
          <h1 className="w-full max-w-6xl text-start text-4xl font-semibold text-gray-900 md:text-center md:text-5xl">
            Your second brain <br /> for maximizing productivity
          </h1>
          <div className="max-w-3xl text-start text-sm font-normal text-gray-600 md:text-center md:text-lg">
            Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce
            trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract
            the key findings you need.
          </div>
          {size.width <= 768 && (
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={10000}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper w-full"
            >
              <SwiperSlide>
                <div className="bg-gray-250 mx-auto flex w-auto items-center space-x-2 rounded-md border border-solid border-gray-300 p-2 text-center md:w-full">
                  <div>
                    <Image priority src={summarizeKey} alt="..." />
                  </div>
                  Summarize Key Findings
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-250 mx-auto flex w-auto items-center space-x-2 rounded-md border border-solid border-gray-300 p-2 text-center md:w-full">
                  <div>
                    <Image priority src={searchForAnswer} alt="..." />
                  </div>
                  Search For Answers
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gray-250 mx-auto flex w-auto items-center space-x-2 rounded-md border border-solid border-gray-300 p-2 text-center md:w-full">
                  <div>
                    <Image priority src={askLang} alt="..." />
                  </div>
                  Ask in Any Language
                </div>
              </SwiperSlide>
            </Swiper>
          )}

          {size.width > 768 && (
            <div className="leading-rel-100 flex w-full justify-center space-x-4 text-sm text-gray-600">
              <div className="bg-gray-250 flex items-center space-x-2 rounded-md border border-solid border-gray-300 p-2">
                <div>
                  <Image priority src={summarizeKey} alt="..." />
                </div>
                Summarize Key Findings
              </div>
              <div className="bg-gray-250 flex items-center space-x-2 rounded-md border border-solid border-gray-300 p-2">
                <div>
                  <Image priority src={compareDocument} alt="..." />
                </div>
                Compare Between Documents
              </div>
              <div className="bg-gray-250 flex items-center space-x-2 rounded-md border border-solid border-gray-300 p-2">
                <div>
                  <Image priority src={searchForAnswers} alt="..." />
                </div>
                Search For Answers
              </div>
              <div className="bg-gray-250 flex items-center space-x-2 rounded-md border border-solid border-gray-300 p-2">
                <div>
                  <Image priority src={askInAnyLang} alt="..." />
                </div>
                Ask in Any Language
              </div>
            </div>
          )}

          <div className="flex w-full flex-col justify-center gap-4 md:flex-row">
            <button
              type="button"
              className="w-full rounded-lg bg-gradient-to-r from-purple-950 to-purple-800 px-6 py-2 text-white hover:opacity-80 focus:border-blue-300 focus:outline-none focus:ring md:w-fit"
            >
              Try for free
            </button>
            <button type="button" className="w-full rounded-lg bg-gray-200 px-6 py-2 text-gray-600 md:w-fit">
              View pricing
            </button>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-10 hidden md:block">
          <Image
            src="/images/laptop-landing-1.png"
            width={1200}
            height={1100}
            className="img-fluid"
            alt="Laptop Graphic"
          />
        </div>
        <div className="z-1 absolute mx-12 mt-80 hidden w-auto overflow-hidden rounded-2xl md:block">
          <Image src="/images/laptop-landing-3.png" width={1400} height={1200} alt="Laptop Graphic" />
        </div>
      </div>
    </div>
  );
}

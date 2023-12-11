"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Testimonials() {
  const size = useWindowSize();

  return (
    <div className="container-fluid w-full mt-40 md:mt-72 mx-auto max-w-screen-lg">
      <div className="row mb-4">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center container">
            <a
              href="https://www.producthunt.com/products/afforai/"
              target="_blank"
              className="mb-2"
            >
              <picture>
                <source srcSet="/images/ph-review.webp" type="image/webp" />
                <img
                  src="/images/ph-reviews.png"
                  className="img-fluid"
                  alt="Product Hunt Review 4.9/5"
                  width="170px"
                />
              </picture>
            </a>
            <div className="text-center mb-2 text-gray-800 font-semibold text-3xl leading-7">
              See what our users say
            </div>
            <div className="text-center mb-2 text-gray-500 font-normal text-base leading-6">
              Loved by thousands, all around the World
            </div>
          </div>
        </div>
      </div>

      <div className="row my-8 w-full">
        <Swiper
          slidesPerView={size.width > 768 ? 2 : 1}
          spaceBetween={size.width > 768 ? 10 : 5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={10000}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full"
        >
          <SwiperSlide className="w-full">
            <div className="flex gap-2 w-full">
              <div className="flex flex-col rounded-lg mx-auto w-full md:max-w-2xl p-4 md:p-12 border border-gray-300">
                <div className="text-wrap text-gray-800 text-base border-b border-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  similique, ipsam esse tenetur autem obcaecati recusandae quae
                  consequuntur placeat corporis ab, sunt fugiat voluptas
                  molestiae dolores voluptates reiciendis unde nisi!
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-gray-600 text-sm">
                      Anatolii, Founder of Savvy Planning Systems
                    </div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="md:inline-flex items-center rounded-lg px-3 md:px-2 py-1 bg-pink-200 border border-red-400"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img
                        src="/images/producthunt.svg"
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="text-red-500 text-xs font-semibold">
                        View on Product Hunt
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="flex gap-2 w-full">
              <div className="flex flex-col rounded-lg mx-auto w-full md:max-w-2xl p-4 md:p-12 border border-gray-300">
                <div className="text-wrap text-gray-800 text-base border-b border-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  similique, ipsam esse tenetur autem obcaecati recusandae quae
                  consequuntur placeat corporis ab, sunt fugiat voluptas
                  molestiae dolores voluptates reiciendis unde nisi!
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-gray-600 text-sm">
                      Anatolii, Founder of Savvy Planning Systems
                    </div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="md:inline-flex items-center rounded-lg px-3 md:px-2 py-1 bg-pink-200 border border-red-400"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img
                        src="/images/producthunt.svg"
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="text-red-500 text-xs font-semibold">
                        View on Product Hunt
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="flex gap-2 w-full">
              <div className="flex flex-col rounded-lg mx-auto w-full md:max-w-2xl p-4 md:p-12 border border-gray-300">
                <div className="text-wrap text-gray-800 text-base border-b border-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  similique, ipsam esse tenetur autem obcaecati recusandae quae
                  consequuntur placeat corporis ab, sunt fugiat voluptas
                  molestiae dolores voluptates reiciendis unde nisi!
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-gray-600 text-sm">
                      Anatolii, Founder of Savvy Planning Systems
                    </div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="md:inline-flex items-center rounded-lg px-3 md:px-2 py-1 bg-pink-200 border border-red-400"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img
                        src="/images/producthunt.svg"
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="text-red-500 text-xs font-semibold">
                        View on Product Hunt
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="row my-8 w-full">
        <Swiper
          slidesPerView={size.width > 768 ? 2 : 1}
          spaceBetween={size.width > 768 ? 10 : 5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={10000}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper relative z-10"
        >
          <SwiperSlide>
            <div className="row flex gap-2 mx-4">
              <div className="flex flex-col rounded-lg mx-auto w-full md:max-w-2xlh-auto p-4 md:p-12 border border-gray-300">
                <div className="flex-grow-1 text-wrap text-gray-800 text-base border-b border-gray-300">
                  Great tool for text analysis and emphasizing the main idea of
                  a document. Especially when you need a quick answer without
                  tons of epithets that beautifully describe something that can
                  be actually described in a few words:)
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-gray-600 text-sm">
                      Anatolii, Founder of Savvy Planning Systems
                    </div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="md:inline-flex items-center rounded-lg px-3 md:px-2 py-1 bg-pink-200 border border-red-400"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img
                        src="/images/producthunt.svg"
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="text-red-500 text-xs font-semibold">
                        View on Product Hunt
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row flex gap-2 mx-4">
              <div className="flex flex-col rounded-lg mx-auto w-full md:max-w-2xlh-auto p-4 md:p-12 border border-gray-300">
                <div className="flex-grow-1 text-wrap text-gray-800 text-base border-b border-gray-300">
                  Great tool for text analysis and emphasizing the main idea of
                  a document. Especially when you need a quick answer without
                  tons of epithets that beautifully describe something that can
                  be actually described in a few words:)
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-gray-600 text-sm">
                      Anatolii, Founder of Savvy Planning Systems
                    </div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="md:inline-flex items-center rounded-lg px-3 md:px-2 py-1 bg-pink-200 border border-red-400"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img
                        src="/images/producthunt.svg"
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="text-red-500 text-xs font-semibold">
                        View on Product Hunt
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row flex gap-2 mx-4">
              <div className="flex flex-col rounded-lg mx-auto w-full md:max-w-2xlh-auto p-4 md:p-12 border border-gray-300">
                <div className="flex-grow-1 text-wrap text-gray-800 text-base border-b border-gray-300">
                  Great tool for text analysis and emphasizing the main idea of
                  a document. Especially when you need a quick answer without
                  tons of epithets that beautifully describe something that can
                  be actually described in a few words:)
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-gray-600 text-sm">
                      Anatolii, Founder of Savvy Planning Systems
                    </div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="md:inline-flex items-center rounded-lg px-3 md:px-2 py-1 bg-pink-200 border border-red-400"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img
                        src="/images/producthunt.svg"
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="text-red-500 text-xs font-semibold">
                        View on Product Hunt
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

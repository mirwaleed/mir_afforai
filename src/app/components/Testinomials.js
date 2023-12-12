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
    <div className="container-fluid mx-auto mt-40 w-full max-w-screen-lg md:mt-72">
      <div className="row mb-4">
        <div className="flex flex-col justify-center">
          <div className="container flex flex-col items-center">
            <a href="https://www.producthunt.com/products/afforai/" target="_blank" className="mb-2">
              <picture>
                <source srcSet="/images/ph-review.webp" type="image/webp" />
                <img src="/images/ph-reviews.png" className="img-fluid" alt="Product Hunt Review 4.9/5" width="170px" />
              </picture>
            </a>
            <div className="mb-2 text-center text-3xl font-semibold leading-7 text-gray-800">
              See what our users say
            </div>
            <div className="mb-2 text-center text-base font-normal leading-6 text-gray-500">
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
            <div className="flex w-full gap-2">
              <div className="mx-auto flex w-full flex-col rounded-lg border border-gray-300 p-4 md:max-w-2xl md:p-12">
                <div className="text-wrap border-b border-gray-300 text-base text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla similique, ipsam esse tenetur autem
                  obcaecati recusandae quae consequuntur placeat corporis ab, sunt fugiat voluptas molestiae dolores
                  voluptates reiciendis unde nisi!
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-sm text-gray-600">Anatolii, Founder of Savvy Planning Systems</div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="items-center rounded-lg border border-red-400 bg-pink-200 px-3 py-1 md:inline-flex md:px-2"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img src="/images/producthunt.svg" alt="Product Hunt logo" height="16" />
                      <span className="text-xs font-semibold text-red-500">View on Product Hunt</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="flex w-full gap-2">
              <div className="mx-auto flex w-full flex-col rounded-lg border border-gray-300 p-4 md:max-w-2xl md:p-12">
                <div className="text-wrap border-b border-gray-300 text-base text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla similique, ipsam esse tenetur autem
                  obcaecati recusandae quae consequuntur placeat corporis ab, sunt fugiat voluptas molestiae dolores
                  voluptates reiciendis unde nisi!
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-sm text-gray-600">Anatolii, Founder of Savvy Planning Systems</div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="items-center rounded-lg border border-red-400 bg-pink-200 px-3 py-1 md:inline-flex md:px-2"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img src="/images/producthunt.svg" alt="Product Hunt logo" height="16" />
                      <span className="text-xs font-semibold text-red-500">View on Product Hunt</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="flex w-full gap-2">
              <div className="mx-auto flex w-full flex-col rounded-lg border border-gray-300 p-4 md:max-w-2xl md:p-12">
                <div className="text-wrap border-b border-gray-300 text-base text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla similique, ipsam esse tenetur autem
                  obcaecati recusandae quae consequuntur placeat corporis ab, sunt fugiat voluptas molestiae dolores
                  voluptates reiciendis unde nisi!
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-sm text-gray-600">Anatolii, Founder of Savvy Planning Systems</div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="items-center rounded-lg border border-red-400 bg-pink-200 px-3 py-1 md:inline-flex md:px-2"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img src="/images/producthunt.svg" alt="Product Hunt logo" height="16" />
                      <span className="text-xs font-semibold text-red-500">View on Product Hunt</span>
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
            <div className="row mx-4 flex gap-2">
              <div className="md:max-w-2xlh-auto mx-auto flex w-full flex-col rounded-lg border border-gray-300 p-4 md:p-12">
                <div className="flex-grow-1 text-wrap border-b border-gray-300 text-base text-gray-800">
                  Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a
                  quick answer without tons of epithets that beautifully describe something that can be actually
                  described in a few words:)
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-sm text-gray-600">Anatolii, Founder of Savvy Planning Systems</div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="items-center rounded-lg border border-red-400 bg-pink-200 px-3 py-1 md:inline-flex md:px-2"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img src="/images/producthunt.svg" alt="Product Hunt logo" height="16" />
                      <span className="text-xs font-semibold text-red-500">View on Product Hunt</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row mx-4 flex gap-2">
              <div className="md:max-w-2xlh-auto mx-auto flex w-full flex-col rounded-lg border border-gray-300 p-4 md:p-12">
                <div className="flex-grow-1 text-wrap border-b border-gray-300 text-base text-gray-800">
                  Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a
                  quick answer without tons of epithets that beautifully describe something that can be actually
                  described in a few words:)
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-sm text-gray-600">Anatolii, Founder of Savvy Planning Systems</div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="items-center rounded-lg border border-red-400 bg-pink-200 px-3 py-1 md:inline-flex md:px-2"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img src="/images/producthunt.svg" alt="Product Hunt logo" height="16" />
                      <span className="text-xs font-semibold text-red-500">View on Product Hunt</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row mx-4 flex gap-2">
              <div className="md:max-w-2xlh-auto mx-auto flex w-full flex-col rounded-lg border border-gray-300 p-4 md:p-12">
                <div className="flex-grow-1 text-wrap border-b border-gray-300 text-base text-gray-800">
                  Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a
                  quick answer without tons of epithets that beautifully describe something that can be actually
                  described in a few words:)
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/0-0.png"
                      className="h-10 w-10 rounded-full"
                      alt="Anatolii, Founder of Savvy Planning Systems"
                      width={50}
                      height={50}
                    />
                    <div className="text-sm text-gray-600">Anatolii, Founder of Savvy Planning Systems</div>
                  </div>
                  <Link
                    href="https://www.producthunt.com/products/afforai/"
                    target="_blank"
                    className="items-center rounded-lg border border-red-400 bg-pink-200 px-3 py-1 md:inline-flex md:px-2"
                  >
                    <div className="inline-flex items-center gap-1">
                      <img src="/images/producthunt.svg" alt="Product Hunt logo" height="16" />
                      <span className="text-xs font-semibold text-red-500">View on Product Hunt</span>
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

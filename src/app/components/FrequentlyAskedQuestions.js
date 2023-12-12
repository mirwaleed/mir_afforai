"use client";
import Link from "next/link";
import { useState } from "react";
import { FAQS } from "../constants";

export default function Faqs() {
  const [faqs, setFaqs] = useState(FAQS);

  const toggleAnswer = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        visible: i === index ? !faq.visible : false,
      }))
    );
  };

  return (
    <div id="testimonial" className="container-fluid mx-auto mt-36 max-w-screen-xl px-4 md:mt-72">
      <div className="row mb-12">
        <div className="col">
          <div className="container flex flex-col items-center">
            <div className="text-dark mb-3 text-center text-4xl font-semibold leading-10">FAQs</div>
            <div className="text-center text-base font-normal leading-6 text-gray-700">
              For more information, check out our{" "}
              <Link href="https://help.afforai.com/" className="text-purple-700 underline">
                Help Center
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mx-4">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 flex flex-col rounded-lg border border-gray-300 p-3 ">
              <div className="text-base font-normal text-gray-700">
                <div className="flex cursor-pointer pb-2" onClick={() => toggleAnswer(index)}>
                  <div className="flex-grow">{faq.question}</div>
                  <div className="text-2xl">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className={`${faq.visible ? "rotate-180" : ""}`}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                    </svg>
                  </div>
                </div>
                <div className={faq.visible ? "block" : "hidden"}>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

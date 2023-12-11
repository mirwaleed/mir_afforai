"use client";
import Link from "next/link";
import { useState } from "react";

export default function FAQs() {
  const [faqs, setFaqs] = useState([
    {
      question: "Is Afforai free?",
      answer:
        "Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits.",
      visible: false,
    },
    {
      question: "What are subscription credits versus permanent credits?",
      answer:
        "Subscription credits come from monthly payments, while permanent credits come from top-ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.",
      visible: false,
    },
    {
      question:
        "Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?",
      answer:
        "Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.",
      visible: false,
    },
    {
      question: "Does Afforai support uploading images and video?",
      answer:
        "Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.",
      visible: false,
    },
    {
      question: "Does Afforai support collaboration between accounts?",
      answer:
        "Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.",
      visible: false,
    },
    {
      question: "Is my data secured?",
      answer:
        "Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.",
      visible: false,
    },
  ]);

  const toggleAnswer = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        visible: i === index ? !faq.visible : false,
      }))
    );
  };

  return (
    <div
      id="testimonial"
      className="container-fluid max-w-6xl mx-auto mt-36 md:mt-72 px-4"
    >
      <div className="row mb-12">
        <div className="col">
          <div className="flex flex-col items-center container">
            <div className="text-center mb-3 text-dark font-semibold text-4xl leading-10">
              FAQs
            </div>
            <div className="text-center text-gray-700 font-normal text-base leading-6">
              For more information, check out our{" "}
              <Link
                href="https://help.afforai.com/"
                className="text-purple-700 underline"
              >
                Help Center
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mx-2 md:mx-32">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg mb-6 p-3 border border-gray-300 "
            >
              <div className="text-gray-700 font-normal text-base">
                <div
                  className="flex pb-2 cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
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
                <div className={faq.visible ? "block" : "hidden"}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

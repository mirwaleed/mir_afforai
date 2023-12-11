import Image from "next/image";
import Link from "next/link";

export default function Brain() {
  return (
    <>
      <div className="py-4 container mx-auto mt-32 md:mt-32 px-4">
        <div className="flex flex-col gap-10 relative overflow-hidden">
          <div className="flex flex-col items-center gap-8 line-height-rel-100 z-2">
            <div className="inline-flex items-center px-2 py-1 space-x-2 rounded-xl border-2 border-solid border-gray-800 bg-gradient-to-r to-yellow-300 from-orange-500 shadow-box backdrop-blur-md text-gray-800 text-sm font-semibold shadow-lg">
              <Image
                src="/images/appsumo.png"
                width={26}
                height={30}
                alt="AppSumo"
              />
              <span>Now on AppSumo</span>
              <Link
                href="https://appsumo.8odi.net/3eR3xn"
                target="_blank"
                className="flex items-center justify-center p-2 space-x-1 rounded-md border border-solid border-gray-800 bg-gradient-to-r from-transparent via-opacity-50 to-opacity-50"
              >
                <span>Get Lifetime Deal</span>
                <div className="transform -rotate-90">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="angle-down">
                      <path
                        id="angle-up-small_2"
                        d="M5.3338 5.99981C5.50446 5.99981 5.67515 6.06512 5.80515 6.19512L8.00046 8.39044L10.1958 6.19512C10.4564 5.93446 10.8778 5.93446 11.1385 6.19512C11.3992 6.45579 11.3992 6.87717 11.1385 7.13783L8.47182 9.8045C8.21115 10.0652 7.78978 10.0652 7.52911 9.8045L4.86244 7.13783C4.60178 6.87717 4.60178 6.45579 4.86244 6.19512C4.99244 6.06512 5.16313 5.99981 5.3338 5.99981Z"
                        fill="#333"
                      ></path>
                    </g>
                  </svg>
                </div>
              </Link>
            </div>
            <h1 className="text-left md:text-center text-gray-900 font-semibold text-3xl md:text-5xl max-w-6xl">
              Your second brain for <br />
              maximizing productivity
            </h1>
            <div className="text-left md:text-center text-gray-600 font-normal text-sm md:text-lg max-w-3xl">
              Afforai is an AI chatbot that searches, summarizes, and translates
              info from multiple sources to produce trustworthy research. Feed
              lengthy research documents to stacks of dry compliance
              requirements and extract the key findings you need.
            </div>
            <div className="flex justify-center space-x-4 w-full text-gray-600 text-sm leading-rel-100">
              <div className="flex items-center p-2 space-x-2 rounded-md border border-solid border-gray-300 bg-gray-250">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="check">
                      <path
                        id="check_2"
                        d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z"
                        fill="#525252"
                      ></path>
                    </g>
                  </svg>
                </div>
                Summarize Key Findings
              </div>
              <div className="flex items-center p-2 space-x-2 rounded-md border border-solid border-gray-300 bg-gray-250">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="check">
                      <path
                        id="check_2"
                        d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z"
                        fill="#525252"
                      ></path>
                    </g>
                  </svg>
                </div>
                Compare Between Documents
              </div>
              <div className="flex items-center p-2 space-x-2 rounded-md border border-solid border-gray-300 bg-gray-250">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="check">
                      <path
                        id="check_2"
                        d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z"
                        fill="#525252"
                      ></path>
                    </g>
                  </svg>
                </div>
                Search For Answers
              </div>
              <div className="flex items-center p-2 space-x-2 rounded-md border border-solid border-gray-300 bg-gray-250">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="check">
                      <path
                        id="check_2"
                        d="M7.49999 14.7915C7.49916 14.7915 7.49832 14.7915 7.49749 14.7915C7.33082 14.7906 7.17166 14.724 7.05416 14.6048L3.72083 11.2198C3.47833 10.974 3.48166 10.5782 3.72749 10.3357C3.97333 10.094 4.36999 10.0965 4.61166 10.3423L7.5025 13.279L15.3908 5.39064C15.635 5.14648 16.0308 5.14648 16.275 5.39064C16.5192 5.63481 16.5192 6.03067 16.275 6.27484L7.94166 14.6082C7.82499 14.7257 7.66583 14.7915 7.49999 14.7915Z"
                        fill="#525252"
                      ></path>
                    </g>
                  </svg>
                </div>
                Ask in Any Language
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
              <button
                type="button"
                className="w-full md:w-fit bg-gradient-to-r from-purple-950 to-purple-800 px-6 py-2 text-white rounded-lg hover:opacity-80 focus:outline-none focus:ring focus:border-blue-300"
              >
                Try for free
              </button>
              <button
                type="button"
                className="w-full md:w-fit px-6 py-2 rounded-lg bg-gray-200 text-gray-600"
              >
                View pricing
              </button>
            </div>
          </div>
          <div className="hidden md:block z-10 mx-auto mt-10 relative">
            <Image
              src="/images/laptop-landing-1.png"
              width={1200}
              height={1100}
              className="img-fluid"
              alt="Laptop Graphic"
            />
          </div>
          <div className="hidden md:block absolute z-1 w-auto overflow-hidden rounded-2xl mx-12 mt-80">
            <Image
              src="/images/laptop-landing-3.png"
              width={1400}
              height={1200}
              alt="Laptop Graphic"
            />
          </div>
        </div>
      </div>
    </>
  );
}

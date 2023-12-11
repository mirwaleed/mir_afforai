import Image from "next/image";

export default function Modes() {
  return (
    <div className="max-w-screen-lg mx-auto mt-40 md:mt-72 px-4 w-full">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src="/images/laptop-landing-12.png"
          className="hidden md:block w-1/2 p-1"
          width={740}
          height={671}
          alt="Afforai supports questions answer with Google and Deep Document Search"
        />

        <div className="w-full md:1/2">
          <div className="flex flex-col gap-4 container">
            <div className="inline-flex w-48 justify-center items-center px-4 py-2 rounded-lg border-2 border-solid border-purple-600 text-purple-600 text-xs">
              Different Modes Available
            </div>

            <h3 className="text-dark font-semibold text-xl md:text-4xl">
              Customize your assistant with a range of different modes
            </h3>

            <div className="text-gray-700 font-normal text-base md:text-lg leading-6">
              Further power your questions with additional modes. Afforai allows
              you to switch between three different modes, each of which has
              unique ways of utilizing our AI tools to answer your question(s).
            </div>
            <Image
              src="/images/laptop-landing-12.png"
              className="block md:hidden w-full p-4"
              width={740}
              height={671}
              alt="Afforai supports questions answer with Google and Deep Document Search"
            />
            <div className="flex flex-col gap-2 pr-5 mr-3">
              {/* Fast Mode */}
              <div className="flex gap-3 items-top">
                <img
                  src="/images/fast-forward.svg"
                  alt="fast mode"
                  className="h-6"
                />
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-purple-900 text-lg font-semibold">
                      Fast Mode (default)
                    </span>
                    <span className="px-2 py-1 rounded-full bg-purple-200 text-purple-800 font-bold text-xs">
                      1 credit
                    </span>
                  </div>
                  <div className="text-sm text-gray-700">
                    Quickly ask a question and receive an answer from the AI.
                    This mode is most suited for applications that require only
                    a small part of the documents to be scanned (ex. FAQ
                    Chatbot, Search).
                  </div>
                </div>
              </div>

              {/* Powerful Mode */}
              <div className="flex gap-3 items-top">
                <img
                  src="/images/power-off.svg"
                  alt="powerful mode"
                  className="h-6"
                />
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-purple-900 text-lg font-semibold">
                      Powerful Mode
                    </span>
                    <span className="px-2 py-1 rounded-full bg-purple-200 text-purple-800 font-bold text-xs">
                      4 credits
                    </span>
                  </div>
                  <div className="text-sm text-gray-700">
                    Get answers of extra high quality from the AI. This mode is
                    most suited for applications that require inferences as well
                    as the full documents to be scanned (ex. Textual Data
                    Analysis, Search with Inference, Report Generation).
                  </div>
                </div>
              </div>

              {/* Google Mode */}
              <div className="flex gap-3 items-top">
                <img
                  src="/images/search-plus.svg"
                  alt="google search mode"
                  className="h-6"
                />
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-purple-900 text-lg font-semibold">
                      Google Mode
                    </span>
                    <span className="px-2 py-1 rounded-full bg-purple-200 text-purple-800 font-bold text-xs">
                      5 credits
                    </span>
                  </div>
                  <div className="text-sm text-gray-700">
                    Supplement your answers with the top 3 results from Google
                    Search. This adds extra reliability to back up our already
                    incredibly accurate answers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

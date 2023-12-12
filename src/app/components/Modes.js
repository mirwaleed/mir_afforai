import Image from "next/image";

export default function Modes() {
  return (
    <div className="mx-auto mt-40 w-full max-w-screen-lg px-4 md:mt-72">
      <div className="flex flex-col items-center md:flex-row">
        <Image
          src="/images/laptop-landing-12.png"
          className="hidden w-1/2 p-1 md:block"
          width={740}
          height={671}
          alt="Afforai supports questions answer with Google and Deep Document Search"
        />

        <div className="md:1/2 w-full">
          <div className="container flex flex-col gap-4">
            <div className="inline-flex w-48 items-center justify-center rounded-lg border-2 border-solid border-purple-600 px-4 py-2 text-xs text-purple-600">
              Different Modes Available
            </div>

            <h3 className="text-dark text-xl font-semibold md:text-4xl">
              Customize your assistant with a range of different modes
            </h3>

            <div className="text-base font-normal leading-6 text-gray-700 md:text-lg">
              Further power your questions with additional modes. Afforai allows you to switch between three different
              modes, each of which has unique ways of utilizing our AI tools to answer your question(s).
            </div>
            <Image
              src="/images/laptop-landing-12.png"
              className="block w-full p-4 md:hidden"
              width={740}
              height={671}
              alt="Afforai supports questions answer with Google and Deep Document Search"
            />
            <div className="mr-3 flex flex-col gap-2 pr-5">
              {/* Fast Mode */}
              <div className="items-top flex gap-3">
                <img src="/images/fast-forward.svg" alt="fast mode" className="h-6" />
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-lg font-semibold text-purple-900">Fast Mode (default)</span>
                    <span className="rounded-full bg-purple-200 px-2 py-1 text-xs font-bold text-purple-800">
                      1 credit
                    </span>
                  </div>
                  <div className="text-sm text-gray-700">
                    Quickly ask a question and receive an answer from the AI. This mode is most suited for applications
                    that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).
                  </div>
                </div>
              </div>

              {/* Powerful Mode */}
              <div className="items-top flex gap-3">
                <img src="/images/power-off.svg" alt="powerful mode" className="h-6" />
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-lg font-semibold text-purple-900">Powerful Mode</span>
                    <span className="rounded-full bg-purple-200 px-2 py-1 text-xs font-bold text-purple-800">
                      4 credits
                    </span>
                  </div>
                  <div className="text-sm text-gray-700">
                    Get answers of extra high quality from the AI. This mode is most suited for applications that
                    require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search
                    with Inference, Report Generation).
                  </div>
                </div>
              </div>

              {/* Google Mode */}
              <div className="items-top flex gap-3">
                <img src="/images/search-plus.svg" alt="google search mode" className="h-6" />
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-lg font-semibold text-purple-900">Google Mode</span>
                    <span className="rounded-full bg-purple-200 px-2 py-1 text-xs font-bold text-purple-800">
                      5 credits
                    </span>
                  </div>
                  <div className="text-sm text-gray-700">
                    Supplement your answers with the top 3 results from Google Search. This adds extra reliability to
                    back up our already incredibly accurate answers.
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

import Image from "next/image";

export default function ChatBots() {
  return (
    <>
      <div className="container max-w-screen-lg mx-auto mt-40 md:mt-72 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:1/2 flex items-center">
            <div className="flex flex-col px-3 container gap-4">
              <div>
                <div className="inline-flex justify-center items-center px-4 py-2 rounded-lg border-2 border-solid border-purple-600 text-purple-600 text-xs">
                  Most versatile
                </div>
              </div>
              <h3 className="text-dark font-semibold text-xl md:text-4xl mb-4">
                Create multiple chatbots for different purposes
              </h3>
              <div className="text-gray-700 font-normal text-sm md:text-lg">
                Legal documents? Summarizing a book? Extracting data from a
                website? We allow you to create multiple chatbots at one time,
                so you can use Afforai for a whole range of purposes.
              </div>
              <div className="hidden md:flex-shrink-1 flex-row gap-4 space-x-4">
                <button
                  type="button"
                  className="bg-gradient-to-r from-purple-950 to-purple-800 px-6 py-2 text-white rounded-lg hover:opacity-80 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Get started
                </button>
                <button
                  type="button"
                  className="px-6 py-2 rounded-lg bg-gray-200 text-gray-600"
                >
                  View pricing
                </button>
              </div>
            </div>
          </div>
          <Image
            src="/images/laptop-landing-11.png"
            className="w-full md:w-1/2 p-5"
            width={700}
            height={755}
            alt="Afforai masters the documents you upload"
          />
        </div>
      </div>
    </>
  );
}

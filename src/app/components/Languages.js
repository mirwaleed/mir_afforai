import Image from "next/image";

export default function Languages() {
  return (
    <>
      <div className="container mx-auto max-w-6xl mt-40 md:mt-72 px-4">
        <div className="flex items-center flex-col md:flex-row space-x-16 w-full">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col justify-center gap-6">
              <div className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg text-xs w-56 text-center">
                Multiple Language Supported
              </div>
              <h3 className="text-dark font-semibold text-xl md:text-4xl">
                Regardless of where you are from, Afforai is for you
              </h3>
              <div className=" text-gray-700 font-normal text-base md:text-lg leading-6">
                We support more than 100 Languages, meaning you can seamlessly
                use our services regardless of where you are from. Our Cross
                Language Querying feature also allows flawless translation of
                documents.
              </div>
            </div>
          </div>
          <Image
            src="/images/laptop-landing-13.png"
            className="w-full md:w-1/2 mt-5 p-2"
            width={1037}
            height={755}
            alt="Afforai supports over 100 languages and allows users to upload and ask questions in most languages"
          />
        </div>
      </div>
    </>
  );
}

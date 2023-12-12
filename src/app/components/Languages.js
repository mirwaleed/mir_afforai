import Image from "next/image";

export default function Languages() {
  return (
    <div className="container mx-auto mt-40 max-w-6xl px-4 md:mt-72">
      <div className="flex w-full flex-col items-center space-x-16 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-center gap-6">
            <div className="w-56 rounded-lg border border-purple-600 px-4 py-2 text-center text-xs text-purple-600">
              Multiple Language Supported
            </div>
            <h3 className="text-dark text-xl font-semibold md:text-4xl">
              Regardless of where you are from, Afforai is for you
            </h3>
            <div className=" text-base font-normal leading-6 text-gray-700 md:text-lg">
              We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you
              are from. Our Cross Language Querying feature also allows flawless translation of documents.
            </div>
          </div>
        </div>
        <Image
          src="/images/laptop-landing-13.png"
          className="mx-auto mt-5 w-full md:w-1/2 md:p-2"
          width={1037}
          height={755}
          alt="Afforai supports over 100 languages and allows users to upload and ask questions in most languages"
        />
      </div>
    </div>
  );
}

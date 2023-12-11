import Image from "next/image";

export default function Productivity() {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl mt-40 md:mt-72 px-4">
        <div className="flex flex-col md:flex-row justify-center mb-10 md:mb-20">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col items-start md:items-center">
              <div className="px-4 py-2 rounded-lg border-2 border-solid border-purple-600 text-purple-600 text-xs mb-2">
                10x your productivity
              </div>
              <div className="text-left md:text-center max-w-2xl text-black font-semibold text-xl md:text-5xl mb-2">
                Save yourself from stress & streamline your workflow
              </div>
              <div className="text-left md:text-center max-w-2xl text-gray-600 font-normal text-sm md:text-lg leading-6 mb-2">
                The average worker spends 9 hours per week looking through &
                gathering information from thick stacks of documents. With
                Afforai, you can save yourself 8 hours per week (plus a lot of
                headaches).
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-10">
          <Image
            src="/images/laptop-landing-5.png"
            width={800}
            height={600}
            className="w-full md:w-3/4"
            alt="Laptop Graphic"
          />
        </div>
      </div>
    </>
  );
}

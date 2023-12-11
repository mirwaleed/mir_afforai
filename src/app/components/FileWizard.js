import Image from "next/image";

export default function FileWizard() {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl mt-40 md:mt-72 px-4">
        <div className="flex flex-col-reverse md:flex-row">
          <Image
            src="/images/laptop-landing-14.png"
            className="w-full md:w-1/2 md:p-20"
            width={900}
            height={500}
            alt="Translate, convert, summarize your files with File Wizard"
          />
          <div className="w-full md:w-1/2">
            <div className="mb-8">
              <div className="border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-md text-xs inline-flex justify-content-center align-items-center">
                Get more out of your files
              </div>
            </div>
            <h3 className="text-dark font-semibold text-xl md:text-4xl mb-4">
              File Wizard - a game-changing new feature
            </h3>
            <div className="text-gray-700 font-normal text-base mb-8 max-w-md">
              Convert your files with less effort than ever. Afforai’s File
              Wizard feature allows you to transform your files in limitless
              different ways. We can translate, summarize, or explain your
              upload in no time.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

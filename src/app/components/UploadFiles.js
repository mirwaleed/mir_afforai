import Image from "next/image";
export default function UploadFiles() {
  return (
    <>
      <div className="container mx-auto max-w-6xl mt-40 md:mt-72 px-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-start md:items-center gap-8">
            <div className="border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-md text-xs">
              Seamless Integrations - Coming Soon
            </div>
            <div className="text-left md:text-center max-w-2xl">
              <h3 className="text-dark font-semibold text-xl md:text-4xl mb-4">
                Upload Files directly from Google Drive, One Drive & Dropbox
              </h3>
              <div className="text-gray-700 font-normal text-base mb-8">
                Afforai allows you to upload files directly from Google Drive,
                One Drive & Dropbox, meaning your experience will be smooth
                sailing regardless of your preferred platform.
              </div>
            </div>
          </div>
          <Image
            src="/images/laptop-landing-15.png"
            className="w-full md:w-1/2 p-4"
            width={900}
            height={500}
            alt="Seamless Integrations"
          />
        </div>
      </div>
    </>
  );
}

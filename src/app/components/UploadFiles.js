import Image from "next/image";

export default function UploadFiles() {
  return (
    <div className="container mx-auto mt-40 max-w-6xl px-4 md:mt-72">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start gap-8 md:items-center">
          <div className="rounded-md border-2 border-purple-600 px-4 py-2 text-xs text-purple-600">
            Seamless Integrations - Coming Soon
          </div>
          <div className="max-w-2xl text-left md:text-center">
            <h3 className="text-dark mb-4 text-xl font-semibold md:text-4xl">
              Upload Files directly from Google Drive, One Drive & Dropbox
            </h3>
            <div className="mb-8 text-base font-normal text-gray-700">
              Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your
              experience will be smooth sailing regardless of your preferred platform.
            </div>
          </div>
        </div>
        <Image
          src="/images/laptop-landing-15.png"
          className="w-full p-4 md:w-1/2"
          width={900}
          height={500}
          alt="Seamless Integrations"
        />
      </div>
    </div>
  );
}

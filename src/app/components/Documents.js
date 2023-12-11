export default function Documents() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto mt-28 md:mt-64 mb-44 ">
        <div className="flex flex-col justify-center md:w-1/2">
          <div className="container px-5 md:px-32">
            <div className="mb-2 text-black font-semibold text-xl md:text-3xl leading-130 w-full">
              Say goodbye to long, tiresome documents
            </div>
            <div className="mb-4 text-justify md:me-5 text-gray-600 font-normal text-sm md:text-lg leading-130">
              Afforai seamlessly translates documents, files, spreadsheets &
              websites, filtering out what you don't need & answering your
              specific questions within seconds.
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center text-green-500 font-medium">
                <img
                  src="/images/check-circle.svg"
                  className="me-3 h-5 md:h-6"
                  alt="checkmark"
                />
                <span className="text-sm md:text-base">
                  A whip smart research assistant
                </span>
              </div>
              <div className="flex items-center text-green-500 font-medium">
                <img
                  src="/images/check-circle.svg"
                  className="me-3 h-5 md:h-6"
                  alt="checkmark"
                />
                <span className="text-sm md:text-base">
                  We speak every language
                </span>
              </div>
              <div className="flex items-center text-green-500 font-medium">
                <img
                  src="/images/check-circle.svg"
                  className="me-3 h-5 md:h-6"
                  alt="checkmark"
                />
                <span className="text-sm md:text-base">
                  Reliable data citation for answers
                </span>
              </div>
              <div className="flex items-center text-green-500 font-medium">
                <img
                  src="/images/check-circle.svg"
                  className="me-3 h-5 md:h-6"
                  alt="checkmark"
                />
                <span className="text-sm md:text-base">
                  Fort-Knox level data security
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:w-1/3 ">
          <picture>
            <source srcSet="/images/laptop-landing-4.png" type="image/webp" />
            <img
              src="/images/laptop-landing-4.png"
              className="img-fluid w-11/12"
              alt="Afforai masters the documents you upload"
            />
          </picture>
        </div>
      </div>
    </>
  );
}

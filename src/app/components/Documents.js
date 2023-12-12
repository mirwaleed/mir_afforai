export default function Documents() {
  return (
    <div className="mx-auto mb-44 mt-28 flex flex-col items-center justify-center md:mt-64 md:flex-row ">
      <div className="flex flex-col justify-center md:w-1/4">
        <div className="container px-5">
          <div className="leading-130 mb-2 w-full text-xl font-semibold text-black md:text-3xl">
            Say goodbye to long, tiresome documents
          </div>
          <div className="leading-130 mb-4 text-justify text-sm font-normal text-gray-600 md:me-5 md:text-lg">
            Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don't need &
            answering your specific questions within seconds.
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center font-medium text-green-500">
              <img src="/images/check-circle.svg" className="me-3 h-5 md:h-6" alt="checkmark" />
              <span className="text-sm md:text-base">A whip smart research assistant</span>
            </div>
            <div className="flex items-center font-medium text-green-500">
              <img src="/images/check-circle.svg" className="me-3 h-5 md:h-6" alt="checkmark" />
              <span className="text-sm md:text-base">We speak every language</span>
            </div>
            <div className="flex items-center font-medium text-green-500">
              <img src="/images/check-circle.svg" className="me-3 h-5 md:h-6" alt="checkmark" />
              <span className="text-sm md:text-base">Reliable data citation for answers</span>
            </div>
            <div className="flex items-center font-medium text-green-500">
              <img src="/images/check-circle.svg" className="me-3 h-5 md:h-6" alt="checkmark" />
              <span className="text-sm md:text-base">Fort-Knox level data security</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:w-1/3">
        <picture>
          <source srcSet="/images/laptop-landing-4.png" type="image/webp" />
          <img
            src="/images/laptop-landing-4.png"
            className="mx-auto w-11/12 md:w-9/12"
            alt="Afforai masters the documents you upload"
          />
        </picture>
      </div>
    </div>
  );
}

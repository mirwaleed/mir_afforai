export default function ChooseUs() {
  return (
    <div className="container-fluid mx-auto mt-40 max-w-screen-xl px-4 md:mt-72">
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="col-span-12 flex flex-col items-center gap-8 md:col-span-8 md:col-start-3">
          <div className="inline-flex items-center justify-center rounded-lg border-2 border-solid border-purple-600 px-4 py-2 text-xs text-purple-600">
            Why choose us?
          </div>
          <div className="text-center text-3xl font-semibold leading-9 text-black md:text-4xl">Built for the user</div>
          <div className="text-md max-w-md text-center font-normal leading-6 text-gray-700">
            Afforai is where exceptional customer focus meets exceptional technology.
          </div>
        </div>
      </div>
      <div className="m-4 grid grid-cols-1 gap-4 pb-4 md:grid-cols-12">
        <div className="col-span-12 md:col-span-4 md:col-start-2">
          <div className="w-full overflow-hidden rounded-lg border border-gray-300">
            <div className="border-b border-gray-300 bg-gray-200">
              <picture>
                <source srcSet="/images/laptop-landing-6.png" type="image/webp" />
                <img
                  src="/images/laptop-landing-6.png"
                  className="img-fluid"
                  alt="Afforai supports multiple languages"
                />
              </picture>
            </div>
            <div className="flex-grow-1 flex flex-col px-3 pb-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-gray-700">Cross Language Querying</span>
                <span className="rounded-full bg-purple-200 px-2 py-1 text-[8px] text-purple-800">NEW</span>
              </div>
              <div className="text-xs text-gray-500">
                Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from,
                you can be assured we can help.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="w-full overflow-hidden rounded-lg border border-gray-300">
            <div className="border-b border-gray-300 bg-gray-200">
              <picture>
                <source srcSet="/images/laptop-landing-7.png" type="image/webp" />
                <img
                  src="/images/laptop-landing-7.png"
                  className="img-fluid"
                  alt="Afforai supports multiple languages"
                />
              </picture>
            </div>
            <div className="flex-grow-1 flex flex-col px-3 pb-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-gray-700">Multiple file types supported</span>
              </div>
              <div className="text-xs text-gray-500">
                Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as
                your own text & links from Websites. The possibilities are limitless!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 grid grid-cols-1 gap-4 pb-4 pt-4 md:grid-cols-12">
        <div className="col-span-12 pr-2 md:col-span-6 md:col-start-2">
          <div className="mb-4 w-full overflow-hidden rounded-lg border border-gray-300">
            <div className="border-b border-gray-300 bg-gray-200">
              <picture>
                <source srcSet="/images/laptop-landing-8.png" type="image/webp" />
                <img
                  src="/images/laptop-landing-8.png"
                  className="img-fluid"
                  alt="Afforai supports multiple languages"
                />
              </picture>
            </div>
            <div className="flex-grow-1 flex flex-col px-3 pb-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-gray-700">Valuable Data Citation</span>
                <span className="rounded-full bg-purple-200 px-2 py-1 text-[8px] text-purple-800">NEW</span>
              </div>
              <div className="text-xs text-gray-500">
                Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you
                never lose your time validating information again.
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-lg border border-gray-300">
            <div className="border-b border-gray-300 bg-gray-200">
              <picture>
                <source srcSet="/images/laptop-landing-10.png" type="image/webp" />
                <img src="/images/laptop-landing-10.png" className="img-fluid" alt="Built in Document Viewer" />
              </picture>
            </div>
            <div className="flex-grow-1 flex flex-col px-3 pb-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-gray-700">Built in Document Viewer</span>
              </div>
              <div className="text-xs text-gray-500">
                Never switch tabs again. Afforai’s document viewer means that you can have your uploaded files right
                next to your chatbot, giving you the ability to search the file, and refer to it for data citations.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 pl-2 md:col-span-4">
          <div className="h-full w-full overflow-hidden rounded-lg border border-gray-300">
            <div className="border-b border-gray-300 bg-gray-200">
              <picture>
                <source srcSet="/images/laptop-landing-9.png" type="image/webp" />
                <img
                  src="/images/laptop-landing-9.png"
                  className="img-fluid"
                  alt="Afforai is secured with the power of the cloud"
                />
              </picture>
            </div>
            <div className="flex-grow-1 flex flex-col px-3 pb-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-gray-700">Unbreakable Security</span>
              </div>
              <div className="text-xs text-gray-500">
                Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us.{" "}
                <a href="/security" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  Learn more
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

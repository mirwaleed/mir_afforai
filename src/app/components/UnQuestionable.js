export default function UnQuestionable() {
  return (
    <div className="container-fluid mx-auto mt-40 max-w-6xl px-4 md:mt-72">
      <div className="md:flex md:flex-col md:items-center md:gap-8">
        <div className="mb-4 text-left text-4xl font-semibold md:text-center">
          Unquestionable accuracy & reliability
        </div>

        <div className="mb-8 max-w-2xl text-left text-base font-normal text-gray-700 md:text-center">
          We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy &
          reliability of our answers.
        </div>
      </div>

      <div className="md:flex md:justify-center md:px-8">
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Trusted by users */}
          <div className="md:w-1/3 md:pr-2">
            <div className="h-100 overflow-hidden rounded-md border border-gray-300">
              <div className="border-b border-gray-300 bg-gray-300">
                <picture>
                  <source srcSet="/images/laptop-landing-17.png" type="image/webp" />
                  <img
                    src="/images/laptop-landing-17.png"
                    className="img-fluid"
                    alt="Security, Reliable, and Trustworthy"
                  />
                </picture>
              </div>
              <div className="flex flex-col px-3 pb-4 pt-2">
                <div className="inline-flex items-center gap-2">
                  <span className="text-dark text-base font-semibold">Trusted by users all over the World</span>
                </div>
                <div className="text-xs text-gray-700">
                  Afforai is used all around the World, saving thousands of people time and money with our speed &
                  accuracy.
                </div>
              </div>
            </div>
          </div>

          {/* Information filtering */}
          <div className="md:w-1/3 md:px-2">
            <div className="h-100 overflow-hidden rounded-md border border-gray-300">
              <div className="border-b border-gray-300 bg-gray-300">
                <picture>
                  <source srcSet="/images/laptop-landing-18.png" type="image/webp" />
                  <img
                    src="/images/laptop-landing-18.png"
                    className="img-fluid"
                    alt="Afforai gives out the best answer with most accurate citations"
                  />
                </picture>
              </div>
              <div className="flex flex-col px-3 pb-4 pt-2">
                <div className="inline-flex items-center gap-2">
                  <span className="text-dark text-base font-semibold">Information filtering</span>
                </div>
                <div className="text-xs text-gray-700">
                  Afforai gives you the highest quality answers and filters out any irrelevant information.
                </div>
              </div>
            </div>
          </div>

          {/* Built-in Comprehension Model */}
          <div className="md:w-1/3 md:pl-2">
            <div className="h-100 overflow-hidden rounded-md border border-gray-300">
              <div className="border-b border-gray-300 bg-gray-300">
                <picture>
                  <source srcSet="/images/laptop-landing-19.png" type="image/webp" />
                  <img
                    src="/images/laptop-landing-19.png"
                    className="img-fluid"
                    alt="Afforai AI comprehends documents, not repeating them"
                  />
                </picture>
              </div>
              <div className="flex flex-col px-3 pb-4 pt-2">
                <div className="inline-flex items-center gap-2">
                  <span className="text-dark text-base font-semibold">Built-in Comprehension Model</span>
                </div>
                <div className="text-xs text-gray-700">
                  Our powerful comprehension model increases the power of our data retrieval.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

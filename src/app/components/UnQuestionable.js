export default function UnQuestionable() {
  return (
    <>
      <div className="container-fluid max-w-6xl mx-auto mt-40 md:mt-72 px-4">
        <div className="md:flex md:flex-col md:items-center md:gap-8">
          <div className="text-left font-semibold text-4xl mb-4 md:text-center">
            Unquestionable accuracy & reliability
          </div>

          <div className="text-gray-700 font-normal text-base mb-8 max-w-2xl text-left md:text-center">
            We pride ourselves on the quality of our chatbot’s responses, and go
            the extra mile to ensure the accuracy & reliability of our answers.
          </div>
        </div>

        <div className="md:flex md:justify-center md:px-8">
          <div className="flex flex-col md:flex-row gap-5">
            {/* Trusted by users */}
            <div className="md:w-1/3 md:pr-2">
              <div className="rounded-md h-100 border border-gray-300 overflow-hidden">
                <div className="bg-gray-300 border-b border-gray-300">
                  <picture>
                    <source
                      srcSet="/images/laptop-landing-17.png"
                      type="image/webp"
                    />
                    <img
                      src="/images/laptop-landing-17.png"
                      className="img-fluid"
                      alt="Security, Reliable, and Trustworthy"
                    />
                  </picture>
                </div>
                <div className="flex flex-col px-3 pt-2 pb-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-base font-semibold text-dark">
                      Trusted by users all over the World
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">
                    Afforai is used all around the World, saving thousands of
                    people time and money with our speed & accuracy.
                  </div>
                </div>
              </div>
            </div>

            {/* Information filtering */}
            <div className="md:w-1/3 md:px-2">
              <div className="rounded-md h-100 border border-gray-300 overflow-hidden">
                <div className="bg-gray-300 border-b border-gray-300">
                  <picture>
                    <source
                      srcSet="/images/laptop-landing-18.png"
                      type="image/webp"
                    />
                    <img
                      src="/images/laptop-landing-18.png"
                      className="img-fluid"
                      alt="Afforai gives out the best answer with most accurate citations"
                    />
                  </picture>
                </div>
                <div className="flex flex-col px-3 pt-2 pb-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-base font-semibold text-dark">
                      Information filtering
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">
                    Afforai gives you the highest quality answers and filters
                    out any irrelevant information.
                  </div>
                </div>
              </div>
            </div>

            {/* Built-in Comprehension Model */}
            <div className="md:w-1/3 md:pl-2">
              <div className="rounded-md h-100 border border-gray-300 overflow-hidden">
                <div className="bg-gray-300 border-b border-gray-300">
                  <picture>
                    <source
                      srcSet="/images/laptop-landing-19.png"
                      type="image/webp"
                    />
                    <img
                      src="/images/laptop-landing-19.png"
                      className="img-fluid"
                      alt="Afforai AI comprehends documents, not repeating them"
                    />
                  </picture>
                </div>
                <div className="flex flex-col px-3 pt-2 pb-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-base font-semibold text-dark">
                      Built-in Comprehension Model
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">
                    Our powerful comprehension model increases the power of our
                    data retrieval.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

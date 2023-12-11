export default function Satisfaction() {
  return (
    <>
      <div className="container-fluid max-w-screen-lg mx-auto mt-40 md:mt-72 px-4">
        <div className="md:flex md:items-center">
          <div className="md:w-6/12">
            <div className="flex flex-col px-3 pe-md-5 container gap-6">
              <div>
                <div className="inline-flex justify-content-center align-items-start p-2 border-2 border-solid border-purple-600 rounded-md bg-gray-100 text-purple-600 text-xs">
                  My promise to you
                </div>
              </div>
              <div className="pe-md-5 text-dark font-semibold text-4xl leading-10">
                100% money back guaranteed if you are not satisfied
              </div>
              <div className="pe-md-3 text-gray-700 font-normal text-base leading-6">
                We crafted Afforai with total belief in our ability to make a
                chatbot that is not only powerful and reliable but able to
                maximize your satisfaction as a user. This is why we have
                implemented a money-back guarantee if you find yourself not
                satisfied with the capabilities of Afforai.
              </div>
            </div>
          </div>
          <div className="flex items-end md:w-4/12 ml-20 p-5">
            <picture>
              <source
                srcSet="/images/laptop-landing-20.png"
                type="image/webp"
              />
              <img
                src="/images/laptop-landing-20.png"
                className="img-fluid"
                alt="100% money back guarantee"
              />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

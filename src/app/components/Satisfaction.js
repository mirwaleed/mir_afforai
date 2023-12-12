export default function Satisfaction() {
  return (
    <div className="container-fluid mx-auto mt-40 max-w-screen-lg px-4 md:mt-72">
      <div className="md:flex md:items-center">
        <div className="mb-10 md:w-6/12">
          <div className="pe-md-5 container flex flex-col gap-6 px-3">
            <div>
              <div className="justify-content-center align-items-start inline-flex rounded-md border-2 border-solid border-purple-600 bg-gray-100 p-2 text-xs text-purple-600">
                My promise to you
              </div>
            </div>
            <div className="pe-md-5 text-dark text-4xl font-semibold leading-10">
              100% money back guaranteed if you are not satisfied
            </div>
            <div className="pe-md-3 text-base font-normal leading-6 text-gray-700">
              We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and
              reliable but able to maximize your satisfaction as a user. This is why we have implemented a money-back
              guarantee if you find yourself not satisfied with the capabilities of Afforai.
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full items-end md:ml-20 md:w-4/12 md:p-5">
          <picture>
            <source srcSet="/images/laptop-landing-20.png" type="image/webp" />
            <img src="/images/laptop-landing-20.png" className="img-fluid" alt="100% money back guarantee" />
          </picture>
        </div>
      </div>
    </div>
  );
}

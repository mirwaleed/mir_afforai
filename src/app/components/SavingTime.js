export default function SavingTime() {
  return (
    <>
      <div
        id="testimonial"
        className="container-fluid max-w-6xl mx-auto mt-40 md:mt-72 px-4"
      >
        <div className="flex flex-col relative overflow-hidden">
          <div className="pb-32 z-2">
            <div className="flex flex-col justify-content-center">
              <div className="flex flex-col items-center container gap-6 mb-28">
                <div className="text-center text-dark font-semibold text-4xl leading-10">
                  Start saving time today!
                </div>
                <div className="text-center text-gray-700 font-normal text-base leading-6">
                  Join an ever-growing community, and get started with Afforai
                  free of charge!
                </div>
                <button
                  type="button"
                  className="bg-gradient-to-r from-purple-950 to-purple-800 px-4 md:px-3 py-1 md:py-2 text-white rounded-lg hover:opacity-80 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Get Started for Free
                </button>
              </div>
            </div>
          </div>
          <div className="absolute z-1 bottom-40 md:bottom-0 w-fit rounded-xl overflow-hidden">
            <img
              src="/images/laptop-landing-16.png"
              className="img-fluid"
              alt="Laptop illustration"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

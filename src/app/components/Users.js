import Image from "next/image";

export default function Users() {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto md:mb-16 mt-20 md:mt-44 gap-6">
        <p className="text-center text-gray-600 text-sm md:text-base">
          Loved by <span className="text-purple-700">20,000+</span> users around
          the world
        </p>
        <Image
          src="/images/laptop-landing-2.png"
          alt="users"
          width={450}
          height={100}
          className="w-72 md:w-96"
        />
      </div>
    </>
  );
}

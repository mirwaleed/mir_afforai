import Image from "next/image";

export default function Users() {
  return (
    <div className="mx-auto mt-20 flex max-w-screen-xl flex-col items-center justify-center gap-6 md:mb-16 md:mt-44">
      <p className="text-center text-sm text-gray-600 md:text-base">
        Loved by <span className="text-purple-700">20,000+</span> users around the world
      </p>
      <Image src="/images/laptop-landing-2.png" alt="users" width={450} height={100} className="w-72 md:w-96" />
    </div>
  );
}

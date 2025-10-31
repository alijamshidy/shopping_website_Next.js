"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Not_found = () => {
  const pathName = usePathname();
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-black/90">
      <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-2">
        Page Not Found!
      </h2>
      <p className="text-lg text-gray-200 mb-6">
        Sorry, the page{" "}
        <span className="text-xl font-bold text-red-500">{pathName}</span>{" "}
        you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href={`/`}
        className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-medium hover:bg-blue-600 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default Not_found;

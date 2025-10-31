import Link from "next/link";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
export const metadata = {
  title: "Storebrand - Premium Products",
  description: "E-commerce store built with Next.js",
};
const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="grow pt-24">
        <Link
          href={`/products`}
          className="text-blue-500">
          Go to Products
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default page;

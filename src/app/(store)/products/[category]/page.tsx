import { categories, Product, productsList } from "@/app/data/products";
import Link from "next/link";
import ProductCard from "./../../../components/ProductCard";

const page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const categorySlug = (await params)?.category?.toLowerCase();
  const categoryProducts: Product[] = productsList.filter(
    product => product.category.toLowerCase() === categorySlug
  );
  const categoryInfo = categories.find(
    cat => cat?.slug?.toLowerCase() === categorySlug
  );
  const categoryName = categoryInfo?.name || (await params)?.category;
  const categoryColor = categoryInfo?.color || "#003d5b";
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Category Banner */}
      <div className="bg-linear-to-r from-[#003d5b] to-[#00798c] rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-3">{categoryName}</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Explore our selection of premium {categoryName.toLowerCase()}{" "}
            designed for exceptional performance
          </p>
        </div>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            categorySlug={categorySlug}
            categoryColor={categoryColor}
          />
        ))}
      </div>
      {/* Back navigation */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <Link
          href={`/products`}
          className="inline-flex items-center text-[#00798c] hover:text-[#003d5b]">
          <i className="bx bx-left-arrow-alt mr-2 text-xl"></i>Back to All
          Categories
        </Link>
      </div>
    </div>
  );
};

export default page;

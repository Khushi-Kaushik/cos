"use client";
import { useState, useEffect, useMemo } from "react";
import Sidebar from "./filterSidebar";
import ProductCard from "./ProductCard";

import { RectangleGroupIcon, QueueListIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useUserContext } from "@/app/provider/UserContextProvider";
import Link from "next/link";

export default function Products() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const { products, setProducts, filteredProducts, setFilteredProducts } =
    useUserContext();
  const { category } = useUserContext();
  const [sortOption, setSortOption] = useState("");
  const [filters, setFilters] = useState({
    priceRange: [0, Infinity],
    minPopularity: 0,
  });

  // Sorting logic
  const handleSort = (option: string) => {
    setSortOption(option);
    const sortedProducts = [...products];
    switch (option) {
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        sortedProducts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "popular":
        sortedProducts.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };

  // Filtering logic (useMemo to prevent unnecessary computations)
  const finalProducts = useMemo(() => {
    const { priceRange, minPopularity } = filters;
    return products.filter((product: any) => {
      return (
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        // product.popularity >= minPopularity &&
        (!category || product.category === category)
      );
    });
  }, [products, filters, category]);

  // Update filteredProducts whenever finalProducts changes
  useEffect(() => {
    setFilteredProducts(finalProducts);
  }, [finalProducts, setFilteredProducts]);

  // Update filters
  const handleFilterChange = (filterName: string, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        onPriceRangeChange={(range: any) => handleFilterChange("priceRange", range)}
        onPopularityChange={(minPopularity: any) =>
          handleFilterChange("minPopularity", minPopularity)
        }
      />

      {/* Main Section */}
      <main className="flex-1 py-6 mt-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-base font-medium" style={{ fontFamily: "Hanken Grotesk" }}>
            Shop / All Collection {category ? ` / ${category}` : ""}
          </h1>
          <div className="flex space-x-4 items-center">
           {/* View Toggle */}
           <button
              onClick={() => setView("grid")}
              className={`px-3 py-1 rounded ${
                view === "grid"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <RectangleGroupIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-1 rounded ${
                view === "list"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <Squares2X2Icon className="w-6 h-6" />
            </button>

            {/* Sorting Options */}
            <select
              className="border rounded p-2"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Select Sorting Options</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price - Low to High</option>
              <option value="price-desc">Price - High to Low</option>
              <option value="popular">Most Popular</option>
            </select>

           
          </div>
        </header>

        {/* Product List */}
        {view === "grid" ? (
          <div className="grid grid-cols-3 gap-6 mt-10">
            {filteredProducts.map((product: any) => (
              <ProductCard
                key={product._id}
                image={product.image}
                name={product.name}
                price={`Rs. ${product.price}/-`}
                id={product._id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product: any) => (
              <Link href={`/shop/${product._id}`} key={product._id}>
                <div className="flex items-center justify-between border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Product Image */}
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                    width={100}
                    height={100}
                  />

                  {/* Product Details */}
                  <div className="flex-1 px-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-black">{`Rs. ${product.price}/-`}</p>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="bg-[#A50705] text-white px-4 py-2 rounded" style={{fontFamily: "Hanken Grotesk"}}>
                    ADD TO CART
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

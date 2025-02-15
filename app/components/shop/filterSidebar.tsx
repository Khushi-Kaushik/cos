"use client";
import { useUserContext } from "@/app/provider/UserContextProvider";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


// Comprehensive filter configuration
const filterConfig = {
  all: {
    clothing: [
      "Dresses",
      "Tops",
      "Bottoms",
      "Outerwear",
      "IndianWear",
      "Loungewear & Sleepwear",
      "Activewear",
      "TshirtsAndShirts",
      "Suits",
    ],
    footwear: ["Sneakers", "Boots", "Heels", "Flats", "Sandals", "Loafers", "Dress Shoes", "Brogues"],
    accessories: [
      "Bags",
      "Jewellery",
      "Scarves & Shawls",
      "Hats",
      "Belts",
      "Sunglasses",
      "Watches",
      "Gloves",
      "Ties & Bow Ties",
      "Cufflinks",
    ],
    byAgeGroup: [
      "Baby (0-2 years)",
      "Toddler (2-4 years)",
      "Little Kids (4-7 years)",
      "Big Kids (7-12 years)",
    ],
    price: [
      "Below Rs. 1000",
      "Rs. 1000 - Rs. 5000",
      "Rs. 5000 - Rs. 10,000",
      "Above Rs. 10,000",
      "Below Rs. 1500",
      "Rs. 1500 - Rs. 7000",
      "Rs. 7000 - Rs. 15,000",
      "Above Rs. 15,000",
    ],
    brand: ["Nike", "Adidas", "Zara", "H&M", "Puma", "Levis", "Gap", "Raymond"],
    color: ["Red", "Blue", "Green", "Black", "White", "Grey"],
    condition: ["New", "Gently Used", "Pre-loved"],
    sustainability: [
      "Eco-friendly",
      "Recycled Materials",
      "Vegan",
      "Organic Cotton",
      "Bamboo",
      "Hemp",
      "Upcycled Items",
      "Vegan Leather",
      "Faux Fur",
      "EcoBrands",
    ],
  },

    women: {
      clothing: {
      Dresses: [
        "Maxi Dresses",
        "Midi Dresses",
        "Mini Dresses",
        "Formal/Evening Dresses",
        "Casual Dresses",
      ],
      Tops: [
        "T-Shirts",
        "Blouses",
        "Tank Tops",
        "Shirts",
        "Knitwear",
        "Sweatshirts & Hoodies",
        "Co-ord Sets",
      ],
      Bottoms: [
        "Pants",
        "Jeans",
        "Trousers",
        "Leggings",
        "Shorts",
        "Skirts",
      ],
      Outerwear: [
        "Jackets",
        "Blazers",
        "Overcoats",
        "Puffers",
        "Raincoats",
      ],
      IndianWear: [
        "Sarees",
        "Salwar Kameez",
        "Lehengas",
        "Kurtis",
        "Dupattas",
      ],
      "Loungewear & Sleepwear": ["Pyjamas", "Loungewear Sets", "Robes"],
      Activewear: [
        "Sports Bras",
        "Leggings",
        "Tracksuits",
        "Shorts",
        "Workout Tops",
        "Swimwear (One-piece, Bikinis, Cover-ups)",
      ],
    },
    footwear: ["Sneakers", "Boots", "Heels", "Flats", "Sandals", "Loafers"],
    accessories: [
      "Bags",
      "Jewellery",
      "Scarves & Shawls",
      "Hats",
      "Belts",
      "Sunglasses",
      "Watches",
    ],
    price: ["Below Rs. 1000", "Rs. 1000 - Rs. 5000", "Rs. 5000 - Rs. 10,000", "Above Rs. 10,000"],
    brand: ["Nike", "Adidas", "Zara", "H&M"],
    color: ["Red", "Blue", "Green", "Black", "White"],
    condition: ["New", "Gently Used", "Pre-loved"],
    sustainability: ["Eco-friendly", "Recycled Materials", "Vegan"],
  },
  men: {
    clothing: {
      TshirtsAndShirts: [
        "T-Shirts",
        "Polo Shirts",
        "Shirts",
        "Hoodies & Sweatshirts",
        "Knitwear",
      ],
      Bottoms: ["Pants", "Jeans", "Trousers", "Shorts"],
      Outerwear: ["Jackets", "Blazers", "Overcoats", "Puffers", "Bomber Jackets"],
      IndianWear: [
        "Kurtas",
        "Sherwanis",
        "Nehru Jackets",
        "Dhoti Pants",
      ],
      Activewear: [
        "Sports Tops",
        "Track Pants",
        "Shorts",
        "Sweatshirts",
        "Hoodies",
        "Swimwear",
      ],
      Suits: ["Formal Suits", "Blazers", "Tuxedos", "Dress Shirts"],
    },
    footwear: [
      "Sneakers",
      "Boots",
      "Dress Shoes",
      "Loafers",
      "Sandals",
      "Brogues",
    ],
    accessories: [
      "Bags",
      "Watches",
      "Belts",
      "Ties & Bow Ties",
      "Hats",
      "Sunglasses",
      "Cufflinks",
    ],
    price: ["Below Rs. 1500", "Rs. 1500 - Rs. 7000", "Rs. 7000 - Rs. 15,000", "Above Rs. 15,000"],
    brand: ["Puma", "Levis", "Gap", "Raymond"],
    color: ["Black", "Grey", "Blue", "White"],
    condition: ["New", "Pre-loved"],
    sustainability: ["Recycled Materials", "Organic Cotton"],
  },
  kids: {
    byAgeGroup: ["Baby (0-2 years)", "Toddler (2-4 years)", "Little Kids (4-7 years)", "Big Kids (7-12 years)"],
    clothing: {
      Tops: ["T-Shirts", "Shirts", "Hoodies", "Knitwear", "Co-ord Sets"],
      Bottoms: ["Pants", "Shorts", "Skirts", "Jeans"],
      Outerwear: ["Jackets", "Puffers", "Raincoats"],
      IndianWear: [
        "Boys (Kurta Pyjama Sets, Dhoti Kurta Sets)",
        "Girls (Lehenga Choli, Salwar Kameez, Kurtis)",
        "Kids Unisex (Festive Kurtas, Printed Kurta Sets)",
      ],
      Activewear: ["Sports Sets", "Tracksuits", "Shorts", "Swimwear"],
    },
    footwear: ["Sneakers", "Boots", "Sandals", "Formal Shoes"],
    accessories: [
      "Hats",
      "Backpacks",
      "Belts",
      "Hair Accessories (for girls)",
      "Gloves",
    ],
  },
  accessories: {
    bags: [
      "Handbags",
      "Backpacks",
      "Totes",
      "Clutches",
      "Messenger Bags",
      "Crossbody Bags",
    ],
    jewellery: [
      "Necklaces",
      "Bracelets",
      "Rings",
      "Earrings",
      "Brooches",
      "Watches",
    ],
    scarvesAndShawls: ["Wool Scarves", "Silk Scarves", "Shawls"],
    hatsAndCaps: ["Beanies", "Sun Hats", "Fedoras", "Baseball Caps"],
    belts: ["Leather Belts", "Fabric Belts", "Statement Belts"],
    sunglassesAndEyewear: ["Round Frame Sunglasses", "Aviators", "Cat-Eye Sunglasses"],
    watches: ["Analog Watches", "Smartwatches"],
    gloves: ["Leather Gloves", "Wool Gloves", "Fingerless Gloves"],
  },
  "Sustainable Picks": {
    recycledMaterials: ["Clothing made from recycled fabrics"],
    upcycledItems: ["Repurposed products given a second life"],
    ecoFriendlyMaterials: ["Organic Cotton", "Bamboo", "Hemp"],
    veganMaterials: ["Vegan Leather", "Faux Fur"],
    ecoBrands: ["Brands focusing on eco-friendly practices"],
  },
};


const Sidebar = ({onPriceRangeChange, onPopularityChange}: {onPriceRangeChange: (range: any) => void, onPopularityChange: (minPopularity: any) => void}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedSubSection, setExpandedSubSection] = useState<string | null>(null);
  const { category, filteredProducts } = useUserContext();


  console.log(category);
  // Dynamically load filters based on the selected category
  const filters = filterConfig[category.toLowerCase() as keyof typeof filterConfig] || filterConfig.all;

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const toggleSubSection = (subSection: string) => {
    setExpandedSubSection((prev) => (prev === subSection ? null : subSection));
  };

  const formatName = (name: string) => {
    return name
      .replace(/([A-Z])/g, ' $1') 
      .replace(/^./, (str) => str.toUpperCase()) 
      .trim();
  };

  return (
    <aside className="w-1/5 py-4 pr-8 bg-white">
      {/* Products Count */}
      <h2 className="text-sm  text-[--main] my-10 font-medium" style={{fontFamily: "Hanken Grotesk"}}>{filteredProducts.length} Products</h2>

      {/* Filters */}
      <div className="space-y-6 w-full">
        {Object.entries(filters).map(([filterType, options]) => (
          <div key={filterType}>
            {/* Main Section Button */}
            <button
              onClick={() => toggleSection(filterType)}
              className={`w-full text-left px-2 pt-4 border-t border-black text-black text-sm font-semibold flex justify-between items-center ${
                expandedSection === filterType ? "" : ""
              }`}
              style={{ fontFamily: "Hanken Grotesk" }}
            >
              {formatName(filterType)}
              <span>{expandedSection === filterType ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </button>
            {expandedSection === filterType && (
              <ul className="mt-2 space-y-2 pl-4">
                {Array.isArray(options) ? (
                  options.map((option: string) => (
                    <li key={option}>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-blue-500 rounded" />
                        <span className="text-black text-xs">{formatName(option)}</span>
                      </label>
                    </li>
                  ))
                ) : (
                  Object.entries(options).map(([key, value]) => (
                    <li key={key}>
                      {/* Subcategory Section */}
                      <button
                        onClick={() => toggleSubSection(key)}
                        className={`w-full text-left text-xs font-medium flex justify-between items-center px-2 py-1 ${
                          expandedSubSection === key ? "bg-gray-50 rounded" : ""
                        }`}
                      >
                        {formatName(key)}
                        <span>{expandedSubSection === key ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                      </button>
                      {expandedSubSection === key && (
                        <ul className="mt-2 space-y-2 pl-4">
                          {Array.isArray(value) &&
                            value.map((subOption: string) => (
                              <li key={subOption}>
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="checkbox"
                                    className="w-4 h-4 text-green-500 rounded"
                                  />
                                  <span className="text-gray-600 text-xs">{formatName(subOption)}</span>
                                </label>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

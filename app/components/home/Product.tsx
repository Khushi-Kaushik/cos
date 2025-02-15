// ArrivalsGrid.tsx
import React from 'react';

interface Product {
  price: string;
  name: string;
  brand: string;
  condition: string;
  image: string;
}

const products: Product[] = [
  {
    price: '₹650/-',
    name: 'Bolso',
    brand: 'Shein',
    condition: 'Fair Condition',
    image: 'https://via.placeholder.com/300x300?text=Bolso',
  },
  {
    price: '₹54,225/-',
    name: '',
    brand: 'Gucci',
    condition: 'Fair Condition',
    image: 'https://via.placeholder.com/300x300?text=Gucci+Bag',
  },
  {
    price: '₹26,000/-',
    name: 'Sneakers',
    brand: 'Louis Vuitton',
    condition: 'Good Condition',
    image: 'https://via.placeholder.com/300x300?text=LV+Sneakers',
  },
  {
    price: '₹1,849/-',
    name: 'Seth Rollins',
    brand: 'WWE',
    condition: 'Excellent Condition',
    image: 'https://via.placeholder.com/300x300?text=WWE+T-Shirt',
  },
  {
    price: '₹899/-',
    name: 'Winter Beanie',
    brand: 'Under Armour',
    condition: 'Fair Condition',
    image: 'https://via.placeholder.com/300x300?text=Beanie',
  },
  {
    price: '₹56,000/-',
    name: '',
    brand: 'Celine',
    condition: 'Excellent Condition',
    image: 'https://via.placeholder.com/300x300?text=Celine+Bag',
  },
];

const ArrivalsGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold text-red-800 mb-8">New Arrivals</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg border-4 border-red-800"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
              <p className="text-white text-xl font-bold">{product.price}</p>
              <p className="text-white">{product.name}</p>
              <p className="text-white text-sm">
                by <span className="font-semibold">{product.brand}</span>
              </p>
              <p className="text-white text-sm font-light">
                {product.condition}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrivalsGrid;

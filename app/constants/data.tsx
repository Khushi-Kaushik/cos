
import first from '../assets/arrival/image.png';
import second from '../assets/arrival/image1.png';
import third from '../assets/arrival/image2.png';
import fourth from '../assets/arrival/image3.svg';
import fifth from '../assets/arrival/image4.svg';


import Card1 from "../assets/community/card1.png";
import Card2 from "../assets/community/card2.png";
import Card3 from "../assets/community/card3.png";
import Card4 from "../assets/community/card4.png";
import Card5 from "../assets/community/card5.png";
import Card6 from "../assets/community/card6.png";
import Card7 from "../assets/community/card7.png";
import Card8 from "../assets/community/card8.png";
import Card9 from "../assets/community/card9.png";
export const communityData = [
  {
      title: "Every piece has a story",
      description: "",
      link: "/community/inner",
      image: Card1,
      tag: "SUSTAINABILITY",
  },
  {
      title: "Planet-Friendly Wardrobe",
      description: "Fast fashion might offer convenience and low prices, but its toll on the planet is undeniable.",
      link: "/community/inner",
      image: Card2,
      tag: "THRIFTOPEDIA",
  },
  {
      title: "Gen Z's influence on making thrifting mainstream",
      description: "",
      link: "/community/inner",
      image: Card3,
      tag: "NEWS",
  },
  {
      title: "Every piece has a story",
      description: "",
      link: "/community/inner",
      image: Card4,
      tag: "SUSTAINABILITY",
  },
  {
      title: "Gen Z's influence on making thrifting mainstream",
      description: "",
      link: "/community/inner",
      image: Card5,
      tag: "NEWS",
  },
  {
      title: "Gen Z's influence on making thrifting mainstream",
      description: "",
      link: "/community/inner",
      image: Card6,
      tag: "NEWS",
  },
  {
      title: "Every piece has a story",
      description: "",
      link: "/community/inner",
      image: Card7,
      tag: "SUSTAINABILITY",
  },
  {
      title: "Gen Z's influence on making thrifting mainstream",
      description: "",
      link: "/community/inner",
      image: Card8,
      tag: "NEWS",
  },
  {
      title: "Gen Z's influence on making thrifting mainstream",
      description: "",
      link: "/community/inner",
      image: Card9,
      tag: "NEWS",
  },
]


export const productsData = [
  // Women's Clothing
  { id: 1, image: third, name: 'Midi Bodycon', category: 'Women', subcategory: 'Clothing', type: 'Midi Dresses', price: 500, popularity: 4, date: '2023-11-10' },
  { id: 2, image: second, name: 'Black Belt', category: 'Women', subcategory: 'Accessories', type: 'Belts', price: 1500, popularity: 5, date: '2023-11-12' },
  { id: 3, image: first, name: 'Maxi Summer Dress', category: 'Women', subcategory: 'Clothing', type: 'Maxi Dresses', price: 1200, popularity: 3, date: '2023-11-09' },
  { id: 4, image: fifth, name: 'Jacquemus Bag', category: 'Women', subcategory: 'Accessories', type: 'Bags', price: 5000, popularity: 2, date: '2023-11-15' },
  { id: 5, image: second, name: 'Formal Blazer', category: 'Women', subcategory: 'Clothing', type: 'Blazers', price: 3500, popularity: 4, date: '2023-11-11' },
  { id: 6, image: fourth, name: 'Activewear Leggings', category: 'Women', subcategory: 'Activewear', type: 'Leggings', price: 2500, popularity: 1, date: '2023-11-14' },

  // Men's Clothing
  { id: 7, image: first, name: 'Formal Suit', category: 'Men', subcategory: 'Clothing', type: 'Formal Suits', price: 7500, popularity: 5, date: '2023-11-13' },
  { id: 8, image: second, name: 'Bomber Jacket', category: 'Men', subcategory: 'Outerwear', type: 'Bomber Jackets', price: 4500, popularity: 4, date: '2023-11-18' },
  { id: 9, image: third, name: 'Slim Fit Jeans', category: 'Men', subcategory: 'Clothing', type: 'Jeans', price: 2000, popularity: 3, date: '2023-11-16' },
  { id: 10, image: fourth, name: 'Sports Hoodie', category: 'Men', subcategory: 'Activewear', type: 'Hoodies', price: 1800, popularity: 2, date: '2023-11-20' },
  { id: 11, image: fifth, name: 'Dress Shoes', category: 'Men', subcategory: 'Footwear', type: 'Dress Shoes', price: 3200, popularity: 4, date: '2023-11-19' },

  // Kids' Clothing
  { id: 12, image: first, name: 'Toddler T-Shirt', category: 'Kids', subcategory: 'Clothing', type: 'T-Shirts', ageGroup: 'Toddler', price: 500, popularity: 4, date: '2023-11-14' },
  { id: 13, image: second, name: 'Kids Puffer Jacket', category: 'Kids', subcategory: 'Clothing', type: 'Puffers', ageGroup: 'Big Kids', price: 2500, popularity: 5, date: '2023-11-22' },
  { id: 14, image: third, name: 'Girls Festive Lehenga', category: 'Kids', subcategory: 'Indian Wear', type: 'Lehenga Choli', ageGroup: 'Little Kids', price: 3000, popularity: 5, date: '2023-11-23' },
  { id: 15, image: fourth, name: 'Boys Kurta Set', category: 'Kids', subcategory: 'Indian Wear', type: 'Kurta Pyjama Sets', ageGroup: 'Big Kids', price: 1200, popularity: 3, date: '2023-11-25' },

  // Accessories
  { id: 16, image: fifth, name: 'Smartwatch', category: 'Accessories', subcategory: 'Watches', type: 'Smartwatches', price: 8000, popularity: 5, date: '2023-11-26' },
  { id: 17, image: first, name: 'Aviator Sunglasses', category: 'Accessories', subcategory: 'Sunglasses & Eyewear', type: 'Aviators', price: 1500, popularity: 4, date: '2023-11-24' },
  { id: 18, image: second, name: 'Leather Gloves', category: 'Accessories', subcategory: 'Gloves', type: 'Leather Gloves', price: 900, popularity: 3, date: '2023-11-21' },

  // Sustainable Picks
  { id: 19, image: third, name: 'Organic Cotton T-Shirt', category: 'Sustainable Picks', subcategory: 'Eco-Friendly Materials', type: 'Organic Cotton', price: 700, popularity: 5, date: '2023-11-28' },
  { id: 20, image: fourth, name: 'Vegan Leather Wallet', category: 'Sustainable Picks', subcategory: 'Vegan Materials', type: 'Vegan Leather', price: 1200, popularity: 4, date: '2023-11-29' },
];


export const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

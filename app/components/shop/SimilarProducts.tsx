"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import ProductCard from '../home/ProductCard';
import first from '../../assets/shop/image1.svg';
import second from '../../assets/shop/image2.svg';
import third from '../../assets/shop/image3.svg';
import fourth from '../../assets/shop/image4.svg';

const products = [
  { image: third, name: 'Midi Bodycon', price: 'Rs. 500/-' },
  { image: second, name: 'Black Belt', price: 'Rs. 500/-' },
  { image: first, name: 'Kids Night Dress Set', price: 'Rs. 500/-' },
  { image: fourth, name: 'Jacquemus Bag', price: 'Rs. 500/-' },
  { image: second, name: 'Black Belt', price: 'Rs. 500/-' },
  { image: fourth, name: 'Shoes', price: 'Rs. 500/-' },
];

const SimilarProducts: React.FC = () => {
  return (
    <div className="bg-white py-10 px-6">
     
    </div>
  );
};

export default SimilarProducts;

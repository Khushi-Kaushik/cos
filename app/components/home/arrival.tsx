"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import ProductCard from './ProductCard';
import first from '../../assets/arrival/image.png';
import second from '../../assets/arrival/image1.png';
import third from '../../assets/arrival/image2.png';
import fourth from '../../assets/arrival/image3.svg';
import fifth from '../../assets/arrival/image4.svg';

const products = [
  { image: third, name: 'Midi Bodycon', price: 'Rs. 500/-' },
  { image: second, name: 'Black Belt', price: 'Rs. 500/-' },
  { image: first, name: 'Kids Night Dress Set', price: 'Rs. 500/-' },
  { image: fifth, name: 'Jacquemus Bag', price: 'Rs. 500/-' },
  { image: second, name: 'Black Belt', price: 'Rs. 500/-' },
  { image: fourth, name: 'Shoes', price: 'Rs. 500/-' },
];

const NewArrivalsSlider: React.FC = () => {
  return (
    <section className="bg-white py-4 px-6 mx-[2%]">
      <h2 className="text-[40px] font-medium mb-6 text-center"
      style={{
        fontFamily: 'Hanken Grotesk',
      }}
      >New Arrivals</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard image={product.image} name={product.name} price={product.price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivalsSlider;

"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import TrendingProductCard from './TrendingProductCard';
import cardigan from '../../assets/trending/image1.png'
import jeans from '../../assets/trending/image2.png'
import shoes from '../../assets/trending/image3.png'

const products = [
  { image: cardigan, name: 'Cardigans' },
  { image: jeans, name: 'Jeans' },
  { image: shoes, name: 'Shoes' },
  { image: jeans, name: 'Jeans' },
];

const TrendingProductsSlider: React.FC = () => {
  return (
    <section className="bg-white py-8 px-6 mx-[2%] ">
      <h2 className="text-[40px] font-medium text-[#000000] capitalize text-center mb-6"
      style={{
        fontFamily: 'Hanken Grotesk',
      }}
      >Trending Products</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <TrendingProductCard image={product.image} name={product.name} />
          </SwiperSlide>
        ))}
      </Swiper>


    </section>
  );
};

export default TrendingProductsSlider;

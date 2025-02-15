// "use client";
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';
// import TestimonialCard from './TestimonialCard';
// import person1 from '../../assets/testimonial/person1.svg';
// import person2 from '../../assets/testimonial/person2.svg';
// import person3 from '../../assets/testimonial/person1.svg';

// const testimonials = [
//   {
//     image: person1,
//     text: "Such a treasure trove! Every item feels like a unique find, and I love that I'm shopping sustainably. Great prices for quality pieces!",
//     author: "Anamika S",
//     rating: 4,
//   },
//   {
//     image: person2,
//     text: "I love the quality and uniqueness of every piece I find here! Sustainable fashion that's stylish and affordable—this is my go-to shop!",
//     author: "Shristi S",
//     rating: 5,
//   },
//   {
//     image: person3,
//     text: "Beautifully crafted items with attention to detail! I feel great shopping here, knowing my choices are better for the planet.",
//     author: "Priya K",
//     rating: 5,
//   },
// ];

// const TestimonialSlider: React.FC = () => {
//   return (
//     <section className="py-10 px-6 mx-[2%]">
//       <h2
//         className="text-[40px] font-medium text-center text-black mb-6"
//         style={{
//           fontFamily: 'Hanken Grotesk',
//         }}
//       >
//         Reviews
//       </h2>
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={2}
//         loop={true}
//         navigation
//         modules={[Navigation]}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           1024: { slidesPerView: 2 },
//         }}
//         className="w-full "
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <TestimonialCard
//               // image={testimonial.image}
//               text={testimonial.text}
//               author={testimonial.author}
//               rating={testimonial.rating}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
     
//       <style jsx>{`
//         .swiper-button-next,
//         .swiper-button-prev {
//           color: rgba(0, 0, 0, 0.5);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TestimonialSlider;





"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    text: "Such a treasure trove! Every item feels like a unique find, and I love that I'm shopping sustainably. Great prices for quality pieces!",
    author: "Anamika S",
    rating: 4,
  },
  {
    text: "I love the quality and uniqueness of every piece I find here! Sustainable fashion that's stylish and affordable—this is my go-to shop!",
    author: "Shristi S",
    rating: 5,
  },
  {
    text: "Beautifully crafted items with attention to detail! I feel great shopping here, knowing my choices are better for the planet.",
    author: "Priya K",
    rating: 5,
  },
];

const TestimonialSlider: React.FC = () => {
  return (
    <section className="py-10 px-6 mx-[2%]">
      <h2
        className="text-[40px] font-medium text-center text-black mb-6"
        style={{ fontFamily: 'Hanken Grotesk' }}
      >
        Reviews
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full "
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#F5F3F1] p-6 rounded-lg shadow-md">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-red-800 text-2xl ${i < testimonial.rating ? '' : 'opacity-30'}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-[#470100] text-lg ">"{testimonial.text}"</p>
              <p className="text-[#470100] font-light underline mt-4">{testimonial.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4">
        {[...Array(4)].map((_, i) => (
          <span key={i} className={`mx-1 h-3 w-3 rounded-full ${i === 0 ? 'bg-red-800' : 'bg-gray-300'}`} />
        ))}
      </div>
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;


'use client';
import Image from "next/image";
import Image1 from "../../../assets/shop/image1.svg";
import Image2 from "../../../assets/shop/image2.svg";
import Image3 from "../../../assets/shop/image3.svg";
import Image4 from "../../../assets/shop/image4.svg";
import kyati from "../../../assets/shop/kyati.svg";
import first from "../../../assets/shop/image1.svg";
import second from "../../../assets/shop/image2.svg";
import third from "../../../assets/shop/image3.svg";
import fourth from "../../../assets/shop/image4.svg";
import location from "../../../assets/icons/location.svg";

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import arrowright from '../../../assets/icons/arrowright.svg'
import acceesory from '../../../assets/accessory.png'

import ProductCard from "@/app/components/home/ProductCard";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useUserContext } from "@/app/provider/UserContextProvider";
import { FaMapMarkerAlt } from "react-icons/fa";
import ImageZoom from "@/app/components/shop/InnerZoom";
import { useEffect, useState } from "react";


const products = [
  { image: third, name: 'Midi Bodycon', price: 'Rs. 500/-' },
  { image: second, name: 'Black Belt', price: 'Rs. 500/-' },
  { image: first, name: 'Kids Night Dress Set', price: 'Rs. 500/-' },
  { image: fourth, name: 'Jacquemus Bag', price: 'Rs. 500/-' },
  { image: second, name: 'Black Belt', price: 'Rs. 500/-' },
  { image: fourth, name: 'Shoes', price: 'Rs. 500/-' },
];



interface Product {
  id: string;
  title: string;
  price: string;
  size: string;
  brand: string;
  condition: string;
  color: string;
  location: string;
  views: number;
  interested: number;
  uploaded: string;
  description: string;
  images: string[];
  seller: {
    name: string;
    reviews: number;
    location: string;
    profileImage: string;
  };
}

interface ProductPageProps {
  product: Product;
}


// const product = {
//   id: 1,
//   title: "Yellow Baggy Trousers",
//   price: "Rs. 1500/-",
//   size: "M",
//   brand: "Allen Solly",
//   condition: "Gently Used",
//   color: "Yellow",
//   location: "Kolkata, India",
//   views: 50,
//   interested: 3,
//   uploaded: "16 Hours Ago",
//   description:
//     "This medium size yellow trouser has been worn by me only 3 times, I am willing to pass this over as I have reduced weight and this is big for me now.",
//   images: [
//     "https://res.cloudinary.com/dmafmaoif/image/upload/v1731927583/pexels-alejandro-jimenez-2059871690-29235576_y6mxja.svg",
//     "https://res.cloudinary.com/dmafmaoif/image/upload/v1731927583/pexels-alejandro-jimenez-2059871690-29235576_y6mxja.svg",
//     "https://res.cloudinary.com/dmafmaoif/image/upload/v1731927583/pexels-alejandro-jimenez-2059871690-29235576_y6mxja.svg",
//     "https://res.cloudinary.com/dmafmaoif/image/upload/v1731927583/pexels-alejandro-jimenez-2059871690-29235576_y6mxja.svg",
//   ],
//   seller: {
//     name: "Khyati9",
//     reviews: 50,
//     location: "Kolkata, India",
//     profileImage: kyati,
//   },
// };



const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/api/products/" + id);
      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed to fetch product");
      }

      setProduct(data);
    }

    fetchData();
  }, []);


  const { category } = useUserContext();

  if (!product)
    return "Loading..."

  return (
    <>
      <div className="p-8">


        {/* Main Content */}
        <div className="flex space-x-8">
          <div className="w-4/5 grid grid-cols-2 gap-1">
            {product.images?.length > 0 ? (
              product.images.map((image: string, index: number) => (

                <ImageZoom imageSrc={image} key={index} zoomLevel={3} />

              ))
            ) : (
              <p>No images available</p>
            )}

            <div className="text-lg text-[#000000] my-4">
              Home / Shop / All Collection {category ? `/ ${category}` : ''} / Trousers
            </div>

          </div>

          <div className="w-2/5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold">{product.name}</h1>
              <p className="text-[--main] text-lg font-medium">{product.price}</p>
            </div>
            <hr className="my-2 border-gray-300" />

            <div className="text-lg font-normal">
              <p>
                <strong className="font-medium">Size:</strong> {product.size.map(size => <span className="border border-zinc-700 rounded-md px-2 mx-1">{size}</span>)}
              </p>
              <p>
                <strong className="font-medium">Brand:</strong> {product.brand}
              </p>
              <p>
                <strong className="font-medium">Condition:</strong> {product.condition}
              </p>
              <p>
                <strong className="font-medium">Color:</strong> {product.color}
              </p>
              <p>
                {/* <strong className="font-medium">Location:</strong> {product.location} */}
              </p>
              <p>
                {/* <strong className="font-medium">Views:</strong> {product.views} */}
              </p>
              <p>
                {/* <strong className="font-medium">Interested:</strong> {product.interested} Members */}
              </p>
              <p>
                {/* <strong className="font-medium">Uploaded:</strong> {product.uploaded} */}
              </p>
            </div>

            <hr className="my-2 border-gray-300" />

            <div className="text-lg font-normal">
              <strong className="font-normal text-lg">Product Description:</strong>
              <p className="mt-2 text-lg">{product.description}</p>
              <a href="#" className="text-[--main] hover:underline mt-24 underline">
                ...more
              </a>
            </div>

            <hr className="my-2 border-gray-300" />

            {/* Seller Info */}
            <div className="flex flex-col">
              <div className="flex items-center  space-x-4">
                {/* <Image
                  src={product.seller.profileImage}
                  alt="Seller Profile"
                  className="w-12 h-12 rounded-full"
                  width={100}
                  height={100}
                /> */}
                {/* <div className="flex items-center justify-between w-full">
                  <div>
                    <p className="text-lg font-semibold">{product.seller.name}</p>
                    <p className="text-base text-[--main] font-medium">{product.seller.reviews} Reviews</p>
                  </div>
                  <div className="ml-auto flex items-center space-x-1 text-gray-500 text-sm"  >
                    <Image src={arrowright} alt="arrowright" width={22} height={22} />
                  </div>
                </div> */}
              </div>



              <div className=" flex mt-4  items-start text-gray-500 text-sm">
                <Image src={location} alt="location" width={22} height={22} />
                {/* <p className="text-lg">{product.seller.location}</p> */}
              </div>
            </div>

            <hr className="my-2 border-gray-300" />
            {/* Buttons */}
            <div className="mt-4 space-y-4">
              <button className="w-full bg-[--main] text-white p-4 font-semibold">
                ADD TO CART
              </button>
              <button className="w-full border border-[--main] text-[--main] p-4 font-semibold">
                Make an Offer
              </button>
              <button className="w-full border border-[--main] text-[--main] p-4 font-semibold">
                Add to Favourite
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className="flex justify-center flex-col items-center p-8 mt-12">
        <h2 className="text-[40px] font-medium text-gray-800 mb-6 text-center"
          style={{
            fontFamily: 'Hanken Grotesk',
          }}
        >Similar Products</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard image={product.image} name={product.name} price={product.price} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className="flex justify-center flex-col items-center p-8 mt-12">
        <h2 className="text-[40px] font-medium text-gray-800 mb-6 text-center"
          style={{
            fontFamily: 'Hanken Grotesk',
          }}
        >Sellor Other Products</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard image={product.image} name={product.name} price={product.price} />
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
      <Link href="/shop">
        <h1 className="text-black underline text-center text-xl font-light mt-12">
          View All Other Products (56)
        </h1>
      </Link>
    </>
  );
};



export default ProductPage;

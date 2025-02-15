import Image from 'next/image';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import jagamaus from '../../assets/brands/jagamaus.svg';
import brandtwo from '../../assets/brands/brand22.png';
import gucci from '../../assets/brands/gucci.svg';
import zara from '../../assets/brands/zara.png';

interface ArrowProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="!absolute -left-6 top-1/2 -translate-y-1/2 z-10"
      aria-label="Previous slide"
    >
      <FaChevronLeft className="text-white/50 text-3xl" />
    </button>
  );
};

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="!absolute -right-6 top-1/2 -translate-y-1/2 z-10"
      aria-label="Next slide"
    >
      <FaChevronRight className="text-white/50 text-3xl" />
    </button>
  );
};

const Brands = () => {
  // Slick slider settings with responsive design
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Default to show 3 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,  // Add center mode
    centerPadding: '0px',  // No padding to keep logos perfectly centered
    responsive: [
      {
        breakpoint: 768,  // For screens smaller than 768px (tablet/mobile)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: true,  // Enable vertical scrolling
          verticalSwiping: true,  // Enable vertical swiping
          arrows: false,  // Hide arrows on mobile
          centerMode: false,  // Disable center mode on mobile
        },
      },
    ],
  };

  const brands = [
    { id: 1, name: 'Jacquemus', image: jagamaus },
    { id: 2, name: 'H&M', image: brandtwo },
    { id: 3, name: 'Gucci', image: gucci },
    { id: 4, name: 'Zara', image: zara },
    { id: 5, name: 'H&M', image: jagamaus },
    { id: 6, name: 'Zara', image: zara },
  ];

  return (
    <div className="relative md:w-full bg-[#A50705] p-[30px] rounded-[22px] mx-auto">
      <Slider {...settings}>
        {brands.map((brand) => (
          <div key={brand.id} className="flex justify-center items-center px-4">
            <Image
              src={brand.image}
              alt={brand.name}
              width={150}
              height={50}
              className="object-contain md:h-16 h-10"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brands;

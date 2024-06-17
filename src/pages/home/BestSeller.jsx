import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const bestSeller = products.filter((item) => item.status === "Best Sellers");
  //   console.log(bestSeller)
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="text-center">
        <h2 className="title">Best Seller</h2>
        <p className="text-Black/75 capitalize md:w-2/3 mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          vero magni itaque libero modi quibusdam dignissimos cumque tempora
          expedita aliquid! Sapiente, eum quaerat? Unde dolorum tenetur
          laudantium, odio deserunt cum!
        </p>
      </div>
      {/* Best seller product card */}

      <div className="mb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {bestSeller.map((product) => (
            <SwiperSlide key={product.id}>
              <Link>
                <img
                  src={product.image}
                  alt=""
                  className="w-full mx-auto hover:scale-105 transition-all duration-200"
                />
              </Link>
              <div className="mt-4 px-4">
                <h4 className="text-base font-semibold mb-2">
                  {product.title}
                </h4>

                <div className="flex justify-between">
                  <p className="text-black/50 ">{product.category}</p>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;

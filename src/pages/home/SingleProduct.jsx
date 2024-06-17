import React, { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  // console.log(id)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = data.filter((p) => p.id == id);
        // console.log(data)
        setProducts(product[0]);
      } catch (error) {
        console.log("Error fetching data");
      }
    };
    fetchData();
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [id]);

  const { title, category, price, image, status } = products;
  return (
    <div className="sm:mt-10 mt-4 max-w-screen-2xl container mx-auto  xl:px-28 px-4 mb-10">
      <div className="p-3 max-w-7xl m-auto">
        <div className="">
          <a href="/" className="text-gray-600">
            Home
          </a>
          <a href="/buy" className="font-bold text-Black">
            {" "}
            / Shops
          </a>
        </div>
        <div className=" mt-4 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img src={image} alt="" className="w-full" />
            </div>
            {/*product details */}
            <div>
              <h1 className="title lg:-ms-4">{title}</h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                facilis nobis ipsum voluptatem accusamus repudiandae ab omnis
                quas minima sapiente, laboriosam adipisci, repellendus quod
                commodi illum nemo assumenda beatae sint!
              </p>

              <span className="my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>

              <p className="text-xl text-red-500 font-semibold sm:text-2xl">
                {price}
              </p>

              <div className="mt-4">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label className="font-semi-bold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500"
                  />
                </div>
                <div className="w-full text-left my-4">
                  <button
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold
                   border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white border hover:border-red-500 hover:text-red-500 lg:m-0 md:px-6"
                  >
                    <span>Confirmed Order</span>
                    <FaArrowAltCircleLeft />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-black/75 mt-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              et harum laborum numquam voluptas ipsum accusantium eos aliquam.
              Doloribus repellendus, obcaecati optio tempore aperiam distinctio
              sapiente consectetur harum at quae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

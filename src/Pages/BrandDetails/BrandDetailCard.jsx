import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandDetailCard = ({ brand, products }) => {
  const { slider1, slider2, slider3 } = brand;


  return (
    <div>
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* products */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-[40px] mb-[40px]">
        {products?.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border"
          >
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-[450px]  rounded-xl bg-clip-border">
              <img  className="w-full h-full" src={product.image} alt={product.name} />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {product.name}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {product.brandName}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  ${product.price}
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                Type: {product.type}
              </p>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                Ratings: {product.rating}
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link to={`/details/${product._id}`}>
                <button
                  className="btn btn-primary block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Details
                </button>
              </Link>
              <Link to={`/updateBrand/${product._id}`}>
                <button
                  className="btn btn-secondary block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetailCard;

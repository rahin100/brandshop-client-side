/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ProductDetailsCard = ({ brand }) => {
  const { image, name, brandname, type, price, shortdescription, rating } =
  brand;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">{name}!</h1>
            <p className="py-6">
              {shortdescription}
            </p>
            <p className="text-2xl mb-[20px]">Price:${price}</p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllBrand = ({ singleData }) => {
  const {_id, brandName, brandImage } = singleData;

  return (
    <Link to={`/brandDetails/:${_id}`}>
      <div>
        <div className="card w-[500px] bg-base-100 shadow-xl">
          <figure>
            <img className="w-[500px] h-[350px]" src={brandImage} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-5xl">{brandName}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllBrand;

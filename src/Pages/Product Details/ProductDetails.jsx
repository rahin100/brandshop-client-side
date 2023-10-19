import { useLoaderData, useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [brand, setBrand] = useState({})
  const brandDetails = useLoaderData();
  console.log(brandDetails);

  const {_id} = useParams()
  console.log(_id)

  useEffect(()=>{
    const findBrand = brandDetails?.find((brand)=>brand._id === _id)
    setBrand(findBrand)
    console.log(findBrand)
  },[_id,brandDetails])
  console.log(brand)



  return (
    <div>
      
        <ProductDetailsCard key={brand._id} brand={brand}></ProductDetailsCard>
      
    </div>
  );
};

export default ProductDetails;

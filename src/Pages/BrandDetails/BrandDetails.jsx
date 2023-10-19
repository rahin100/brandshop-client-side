import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailCard from "./BrandDetailCard";
import { useEffect, useState } from "react";

const BrandDetail = () => {
  const [brand,setBrand] = useState({})

  const allData = useLoaderData();
  console.log(allData);

  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    const findBrand = allData?.find((brand)=>brand.id === id)
    setBrand(findBrand)
    console.log(findBrand)
  },[id,allData])
  
  console.log(brand)

  return (
    <div>
      
        <BrandDetailCard
          key={brand.id}
          brand={brand}
        ></BrandDetailCard>
      
    </div>
  );
};

export default BrandDetail;

import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailCard from "./BrandDetailCard";
import { useEffect, useState } from "react";

const BrandDetail = () => {
  const [brand, setBrand] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  
  const allData = useLoaderData();
  // console.log(allData);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const findBrand = allData?.find((brand) => brand.id === id);
    setBrand(findBrand);
    console.log(findBrand);
  }, [id, allData]);
  console.log(brand)

  useEffect(() => {
    fetch("http://localhost:5000/brand") 
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);

        // Filter the products based on the brandName
        const filteredBrands = data.filter(products => products.brandname === brand.brandName);
        setFilteredProducts(filteredBrands);
        console.log('yes match',filteredBrands)
      })
  }, [brand.brandName]);

  console.log(filteredProducts);
  console.log(products)

  return (
    <div>
      <BrandDetailCard key={brand._id} brand={brand} filteredProducts={filteredProducts}></BrandDetailCard>
    </div>
  );
};

export default BrandDetail;

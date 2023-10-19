import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailCard from "./BrandDetailCard";
import { useEffect, useState } from "react";

const BrandDetail = () => {
  const [brand, setBrand] = useState({});
  const [products, setProducts] = useState([]);

  const allData = useLoaderData();
  console.log(allData);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const findBrand = allData?.find((brand) => brand.id === id);
    setBrand(findBrand);
    console.log(findBrand);
  }, [id, allData]);

  useEffect(() => {
    fetch(`http://localhost:5000/brand`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, [brand.brandName]); // Only fetch when brandName changes

  return (
    <div>
      <BrandDetailCard key={brand._id} brand={brand} products={products}></BrandDetailCard>
    </div>
  );
};

export default BrandDetail;



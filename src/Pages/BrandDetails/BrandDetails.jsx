import { useLoaderData } from "react-router-dom";
import BrandDetailCard from "./BrandDetailCard";

const BrandDetail = () => {
  const allData = useLoaderData();
  console.log(allData);

  if (!Array.isArray(allData)) {
    // Data is loading or empty
    return <div>Loading...</div>; // You can use a loading spinner or a more detailed loading message
  }

  return (
    <div>
      {allData.map((singleData) => (
        <BrandDetailCard
          key={singleData._id}
          singleData={singleData}
        ></BrandDetailCard>
      ))}
    </div>
  );
};

export default BrandDetail;

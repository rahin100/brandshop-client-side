import { useLoaderData } from "react-router-dom";
import AllBrand from "./AllBrand";

const AllBrandData = () => {
  const allData = useLoaderData();
  console.log(allData);

  return (
    <div className="grid grid-cols-3 gap-7 mb-[100px]">
      {allData?.map((singleData) => (
        <AllBrand key={singleData._id} singleData={singleData}></AllBrand>
      ))}
    </div>
  );
};

export default AllBrandData;

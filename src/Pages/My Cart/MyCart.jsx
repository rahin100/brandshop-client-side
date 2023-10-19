import { useLoaderData } from "react-router-dom";
import MyCartDetails from "./MyCartDetails";

const MyCart = () => {
    const cartData = useLoaderData()
    console.log(cartData)
    return (
        <div className="grid grid-cols-3 gap-7 my-10">
            {
                cartData?.map((cart)=><MyCartDetails key={cart._id} cart={cart}></MyCartDetails>)
            }
            
        </div>
    );
};

export default MyCart;
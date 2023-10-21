import { useLoaderData } from "react-router-dom";
import MyCartDetails from "./MyCartDetails";
import { useState } from "react";

const MyCart = () => {

    const cartData = useLoaderData()
    console.log(cartData)
    const [loadCart, setLoadCart]=useState(cartData)

    

    const deleteCart = (deletedItemId) =>{
        const updateCart = loadCart?.filter((item)=> item._id !== deletedItemId)
        setLoadCart(updateCart)
        console.log(updateCart)
    }


    console.log(loadCart)

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 my-10">
            {
                // cartData?.map((cart)=><MyCartDetails key={cart._id} cart={cart}></MyCartDetails>)

                loadCart?.map((cartItem)=>(
                    <MyCartDetails key={cartItem._id} cartItem={cartItem} deleteCart={deleteCart} ></MyCartDetails>
                ))

            }
            
        </div>
    );
};

export default MyCart;
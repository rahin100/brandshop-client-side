import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";

import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/Product Details/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: async () =>{
              const res = await fetch("/brand.json")
              const data = await res.json()
              return data;
            }
        
        },
        {
          path:'/addProduct',
          element:<AddProduct></AddProduct>

        },
        {
          path: '/brandDetails/:id',
          element: <BrandDetails />,
          loader: async () =>{
            const res = await fetch("/brand.json")
            const data = await res.json()
            return data;
          }
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path: "/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:'/details/:_id',
          element:<ProductDetails></ProductDetails>,
          loader: async () =>{
            const res = await fetch("http://localhost:5000/brand")
            const data = await res.json()
            return data;
          }

        }
    ]
  }

]);

export default router
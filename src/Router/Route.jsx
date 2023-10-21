import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/Product Details/ProductDetails";
import MyCart from "../Pages/My Cart/MyCart";
import UpdateProduct from "../Pages/UpdatedProducts/UpdateProduct";

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
          element:<PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>

        },
        {
          path: '/brandDetails/:id',
          element: <BrandDetails />,
          loader: async () =>{
            const res = await fetch("/brand.json")
            const data = await res.json()
            return data;
          },
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
          element:<PrivateRoute>
            <ProductDetails></ProductDetails>,
          </PrivateRoute>,
          loader: async () =>{
            const res = await fetch("http://localhost:5000/brand")
            const data = await res.json()
            return data;
          }

        },
        {
          path:"/cart",
          element: <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>,
          loader:async () =>{
            const res = await fetch("http://localhost:5000/cart")
            const data = await res.json()
            return data;
          }
        },
        {
          path:"/updateBrand/:_id",
          element:<PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>,
          loader: async ({ params }) => {
            const res = await fetch(`http://localhost:5000/brand/${params._id}`);
            const data = await res.json();
            return data;
          }
          
        }

    ]
  }

]);

export default router
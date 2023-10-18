import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";

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
              const res = await fetch("http://localhost:5000/users")
              const data = await res.json()
              return data;
            }
        
        },
        {
          path:'/addProduct',
          element:<AddProduct></AddProduct>

        }
    ]
  }

]);

export default router
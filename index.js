import React ,{lazy, Suspense} from "react";
import  ReactDOM from "react-dom";
import App from "./components/app";
import Help from "./components/Help/Help";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Restaurants from "./components/Homepage/Restaurants";
import Homepage from "./components/Homepage/Homepage";
import Shimmer from "./components/Homepage/shimmer";
import Cart from "./components/body/Cart/cart";
import RestaurantMenu from "./components/body/Restaurant-View/RestaurantMenu";
import Collection from "./components/body/Collection/collection";

// const  RestaurantMenu = lazy(()=>import("/components/body/Restaurant-View/RestaurantMenu"))



const root =  ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element : <Homepage/>
                
            }
            ,
            {
                path:"/restaurant/:resId",
                element : <RestaurantMenu/>
                
            },
            {
                path:"/cart",
                element : <Cart/>
            },
            {
                path:"/collections/:params",
                element:<Collection/>
            }
        ]
    },
 
 

])
root.render(<RouterProvider router ={router}/>)

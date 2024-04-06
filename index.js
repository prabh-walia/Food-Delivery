import React ,{lazy, Suspense} from "react";
import  ReactDOM from "react-dom";
import App from "./components/app";
import Help from "./components/Help/Help";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Restaurants from "./components/Homepage/Restaurants";
import Homepage from "./components/Homepage/Homepage";
import Shimmer from "./components/Homepage/shimmer";




const  RestaurantMenu = lazy(()=>import("/components/body/Restaurant-View/RestaurantMenu"))



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
                element : <Suspense ><RestaurantMenu/></Suspense>
                
            }
        ]
    },
    {
        path:"/help",
        element : <Help/>
        
    },

])
root.render(<RouterProvider router ={router}/>)

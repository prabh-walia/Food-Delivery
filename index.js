import React from "react";
import  ReactDOM from "react-dom";
import App from "./components/app";
import Help from "./components/Help/Help";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Restaurants from "./components/Homepage/Restaurants";
import Homepage from "./components/Homepage/Homepage";
import RestaurantMenu from "./components/body/Restaurant-View/RestaurantMenu";
var number = 100


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
                
            }
        ]
    },
    {
        path:"/help",
        element : <Help/>
        
    },

])
root.render(<RouterProvider router ={router}/>)

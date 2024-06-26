
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../utils/data/userContext";
import { themeContext } from "../../utils/data/themeContext";
import { useSelector } from "react-redux";
export default MenuItems = () =>{
    const user = useContext(userContext);
    const theme = useContext(themeContext)

    const cartItem = useSelector((store)=>store.cart.item);
    const uniqueCartItems = Array.from(new Set(cartItem));



    const fetchLocationName = async (lat,lng) => {
      console.log("in fth nam");
      await fetch(
        'https://www.mapquestapi.com/geocoding/v1/reverse?key=API-Key&location='+lat+'%2C'+lng+'&outFormat=json&thumbMaps=false',
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(
            'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
          );
        });
    };

    return (
    <div className="navItems "><ul className="flex">
  
        <li className="">Search</li>
        <li>
           <Link to="/help">Help</Link> </li>
        <li >Offers</li>
       <li><Link to="/cart">Cart({uniqueCartItems.length})</Link> </li>
        <li>{user.userLoggedIn|| "login"}</li>
        <li onClick={()=>theme.changeTheme()}>{theme.theme}</li>
    </ul>
    </div>)
}
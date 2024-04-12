
import { Link } from "react-router-dom"
import { useContext } from "react";
import { userContext } from "../../utils/data/userContext";
import { themeContext } from "../../utils/data/themeContext";
import { useSelector } from "react-redux";
export default MenuItems = () =>{
    const user = useContext(userContext);
    const theme = useContext(themeContext)
    const cartItems = useSelector((store)=>store.cart.item);
    console.log("cat item-",cartItems);
    return (
    <div className="navItems"><ul className="flex">
        <li className="">Search</li>
        <li>
           <Link to="/help">Help</Link> </li>
        <li >Offers</li>
       <li><Link to="/cart">Cart({cartItems.length})</Link> </li>
        <li>{user.userLoggedIn|| "login"}</li>
        <li onClick={()=>theme.changeTheme()}>{theme.theme}</li>
    </ul>
    </div>)
}
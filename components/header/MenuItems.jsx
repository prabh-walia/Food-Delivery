
import { Link } from "react-router-dom"
export default MenuItems = () =>{

    return (
    <div className="navItems"><ul>
        <li>Search</li>
        <li>
           <Link to="/help">Help</Link> </li>
        <li >Offers</li>
       <li>Cart</li>
        <li>Logout</li>
    </ul>
    </div>)
}
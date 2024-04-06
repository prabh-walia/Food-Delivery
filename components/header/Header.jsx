import Logo from "./Logo"
import MenuItems from "./MenuItems"
export default Header= (props) =>{

console.log("props=",props);

    return (
        <div className="header">
   
        <Logo/>
    
        <MenuItems/>
        </div>
    )
}
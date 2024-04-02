import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { restaurants } from "../../../utils/data/restaurants";
export default Restaurant =()=>{
   const ImagesCDN ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

    const [inc,setInc] = useState(0);
    
    return (
    <div className="res-container">
    <div style={{display:"flex"}}>
     <div className="heading"> Top restaurants chains in Indore</div>
     <div className="prev-next-buttons" >

     <div className="slide-button"  onClick={()=>inc>=4&&setInc(inc-4)}>&gt;</div>
            <div className="slide-button" style={{marginLeft:"0.1em"}} onClick={()=>inc<=restaurants.length-inc&&setInc(inc+4)}>&lt;</div>         
</div>          

</div>
 <div className="restaurant" >
     {
     restaurants.slice(inc,inc+4).map((item,index)=>(
        <div>
         <RestaurantCard restaurant = {item} index={index} cdn={ImagesCDN}/>
        </div>
     ))
     }

</div>
 
       

    </div>
    )
}




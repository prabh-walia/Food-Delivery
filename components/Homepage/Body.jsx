import Category from "./Category"
import Restaurants from "./Restaurants"
import Restaurant from "./Restaurant"
import { useEffect, useState } from "react"
import { CategoryShimmer } from "./shimmer"

export default Body=()=>{
const [res,setRes]=useState(false);
const [loading, setLoading] = useState(true);
useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
useEffect(()=>{
 console.log("res true=>",res)
},[res])
    return (
        <div className="Body">
  
   {res?<Category/>:<CategoryShimmer/>}
             <div className="px-28">
      
             <Restaurants loaded={setRes}/>
             
</div>
             {/* <Restaurant/> */}
      
             


        </div>
    )
}
import Category from "./Category"
import Restaurants from "./Restaurants"
import Restaurant from "./Restaurant"
import { useEffect, useState } from "react"
import { CategoryShimmer } from "./shimmer"

export default Body=()=>{
const [res,setRes]=useState(false);
const [loading, setLoading] = useState(true);
const [categories,setCategories ]= useState([])
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
const setCategory=(cat)=>{
    setCategories(cat)
}
    return (
        <div className="Body">
  
   {res?<Category categories= {categories}/>:<CategoryShimmer/>}
             <div className="px-28">
      
             <Restaurants loaded={setRes} getCategories={setCategory}/>
             
</div>
             {/* <Restaurant/> */}
      
             


        </div>
    )
}
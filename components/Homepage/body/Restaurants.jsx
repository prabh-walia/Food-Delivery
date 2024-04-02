import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "../shimmer"
import shimmer from "../shimmer"
export default Restaurants =()=>{
   const ImagesCDN ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"


    const [Restaurants,setRestaurant] = useState([])
    const [filteredRestaurants,setFilteredRestaurant] = useState([])
    const [ searchterm,setSearch]=useState('');

    const fetchData = async ()=>{
        console.log("cal;ing");
      let res =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      console.log("res");
       const json =await res.json();
       console.log("json=",json)
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      
    }
    useEffect(()=>{
        console.log('term',searchterm);
        search(searchterm);
      },[searchterm])
      
      useEffect(()=>{
        console.log("use effct");
      fetchData();
      },[])
   const  filter=()=>{
       setRestaurant( Restaurants.filter(e=>e.info.avgRating>4.2));
    }
    const search = (term) => {

        const filteredRestaurants = Restaurants.filter((restaurant) =>
          restaurant.info.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredRestaurant(filteredRestaurants);
      };
      
    const handleInputChange = (e) => {
          
        setSearch(e.target.value)
      
      };
  
    return Restaurants.length===0?<Shimmer/>:(
    <div className="res-container">
    <div style={{display:"flex"}}>
     <div className="heading"> Restaurants in Indore</div>
        

</div>
<div className="options">
    <div className="searchbar">
        <input  type="text" name="res" id="restSearch" placeholder="Search"  onChange={(e)=>handleInputChange(e)} />
    </div>
<div className="filter" onClick={()=>filter()}>
   Filter
</div>
<div className="filter" onClick={()=>filter()}>
   Sort
</div>
</div>

 <div className="restaurant" >
  
     {
        
     filteredRestaurants?.map((item,index)=>(
        <div>
         <RestaurantCard restaurant = {item?.info} index={index} cdn={ImagesCDN}/>
         {console.log("item",item)}
        </div>
     ))
     }

</div>
 
       

    </div>
    )
}




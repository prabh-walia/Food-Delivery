import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./shimmer"
import filters from "./Filters"
import Filters from "./Filters"

export default Restaurants =()=>{
   const ImagesCDN ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"


    const [Restaurants,setRestaurant] = useState([])
    const [filteredRestaurants,setFilteredRestaurant] = useState([])
    const [ searchterm,setSearch]=useState('');
    const [filterDialogOpen,setFilterDialog]=useState(false)
    const myMap = new Map();
    const [filters,setFilters]=useState({});
    myMap.set("Sort",["Rating","Delivery Time"])
    myMap.set("Cuisines",["Afghani","North Indian","Asian","Cafe","Briyani","Chinese","South Indian"])
    myMap.set("Ratings",["4.5+","4.0+","3.5+"])
    const fetchData = async ()=>{
        console.log("calling");
      let res =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

       const json =await res.json();

      setRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

      setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      
    }
    useEffect(()=>{

        search(searchterm);
      },[searchterm])
      
      useEffect(()=>{

      fetchData();
      },[])

   const  filter=()=>{
       setFilterDialog(true)
      //  setRestaurant( Restaurants.filter(e=>e.info.avgRating>4.2));
    }
    const getfilters=(filters)=>{
      setFilters(filters)
    }
    useEffect(()=>{
      setFilterDialog(false);
      
    },[filters])
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

         {
         filterDialogOpen===true && <div style={{position:"fixed",top:"22%",left:"25%"}}>
          <Filters data={myMap} sendFilters = {getfilters} ></Filters>
          </div>
          }

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
        
        </div>
     ))
     }

</div>
 
       

    </div>
    )
}




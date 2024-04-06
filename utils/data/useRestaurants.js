import { useState,useEffect } from "react"
export const useRestaurants =()=>{
    const [Restaurants,setRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
      let res =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

       const json =await res.json();

      setRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

     
      
    }

    


    return  [Restaurants,setRestaurant]
}
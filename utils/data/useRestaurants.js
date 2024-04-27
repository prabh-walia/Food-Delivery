import { useState,useEffect } from "react"

export const useRestaurants =(lat,long)=>{
  
    const [Restaurants,setRestaurant] = useState([]);
    const [filteredRes,setFilteredRes]= useState([])
    const [categories,setCategories]=useState([])
    const [title,setTitle]= useState(null)
  
    console.log("latt-",lat)
    useEffect(() => {
      if (lat && long) {
        fetchData(lat, long);
      }
    }, [lat, long]);


    const fetchData = async (lat,long)=>{
      console.log("lat in fety-",lat)
      const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      const res = await fetch(url);


       const json =await res.json();

      setRestaurant(json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRes(json.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
      setCategories(json.data.cards[0].card?.card?.gridElements?.infoWithStyle?.info)
      console.log("s",json.data.cards[1].card?.card?.header?.title);
      setTitle(json.data.cards[1].card?.card?.header?.title)

      
    }

    


    return  [Restaurants,setRestaurant,filteredRes,setFilteredRes,categories,title]
}
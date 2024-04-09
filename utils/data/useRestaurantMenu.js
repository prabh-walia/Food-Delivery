import { useState,useEffect } from "react";
export const  useRestaurantMenu =(resId)=>{
    const [resInfo,setResInfo]= useState({});
    const [offers,setOffers]=useState([]);
    const [menuCategory,setMenuCategory] = useState([])
    
    useEffect(()=>{
        fetchData();

    
       },[])
       fetchData= async ()=>{
        let url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER";
        const result = await fetch(url);
        const json =await  result.json();

        setResInfo(json);
        setOffers(json?.data?.cards[3]?.card.card?.gridElements.infoWithStyle.offers)
        const category=  json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
           return  c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
         
                            })
                            console.log("cat=",category);
                            setMenuCategory(category)
    }




    return [resInfo,offers,menuCategory];
}
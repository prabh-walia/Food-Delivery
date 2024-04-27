import { useState,useEffect } from "react"
import { useLocations } from "./useLocation";
import { useLocation, useParams } from "react-router-dom";
export const useCategory =()=>{
    const [lat,long] = useLocations();
    const location = useLocation();
    const { params } = useParams()
    const [Category ,setCategory] = useState()
  const queryParams = new URLSearchParams(location.search);

  const queryparams = queryParams.toString()
  const tags= queryparams.substring(queryparams.indexOf("tags"));
  
  

     
    useEffect(()=>{
        
     fetchData(lat, long);
    },[lat, long])
    
const fetchData = async (lat, long)=>{
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&collection=${params}&${tags}&offset=0&page_type=null`

    const res = await  fetch(url);
    const response = await  res.json();
    setCategory(response)
    console.log("rsponse =>",response);

}
    return [ Category ]
}
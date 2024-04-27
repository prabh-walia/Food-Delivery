import { useState, useEffect } from "react";
export const useLocations=()=>{
    const [currentLocation, setCurrentLocation] = useState(null);
    useEffect(() => {
        // Check if geolocation is supported
        if ("geolocation" in navigator) {
          // Request location
          navigator.geolocation.getCurrentPosition(function (position) {
            // Get latitude and longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
    
            // Set the current location state
            setCurrentLocation({ latitude, longitude });
 
  
          });
        }
      }, []);
    console.log("latiutude",currentLocation?.latitude)
    return [currentLocation?.latitude,currentLocation?.longitude]

}
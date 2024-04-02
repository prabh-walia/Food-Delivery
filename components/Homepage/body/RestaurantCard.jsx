
export default RestaurantCard=({restaurant,index,cdn})=>{

    const imageStyle = {
        height:"3em",

    }
    console.log("res",restaurant);

    return (

        <div className="res-card">
            <div className="res-image" >
            <img style={{width:"100%" , height:"100%", borderRadius:"5%"}} src={cdn + restaurant.cloudinaryImageId} alt="" />

            </div>
            <div className="res-name" style={{padding:"0.4em",fontWeight:"600",fontFamily:"sans-serif",fontSize:"1.3em"}}>
                {restaurant.name}
   
            </div>

            <div className="res-rating" style={{paddingLeft:"0.4em",fontFamily:"sans-serif",fontSize:"0.9em"}}>
            rating :{restaurant.avgRating}
                
                </div>
                          <div className="res-time"style={{paddingLeft:"0.4em",fontFamily:"sans-serif",fontSize:"0.9em"}}>
            {restaurant.sla.slaString}
                </div>
                <div className="res-cusines"style={{paddingLeft:"0.4em", color:"#01100",fontSize:"0.8em",fontFamily:"sans-serif"}}>
                {restaurant.cuisines.join(", ")}
                
                </div>
                

        </div>

    )
}
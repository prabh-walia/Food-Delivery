
export default RestaurantCard=({restaurant,index,cdn})=>{

    const imageStyle = {
        height:"3em",

    }


    return (

        <div className="res-card">
            <div className="res-image" >
            <img style={{width:"100%" , height:"100%", borderRadius:"5%"}} src={cdn + restaurant.cloudinaryImageId} alt="" />

            </div>
            <div className="res-name" style={{padding:"0.4em",fontWeight:"600",fontFamily:"sans-serif",fontSize:"1.3em",color:"#000",textDecoration: 'none'}}>
                {restaurant.name}
   
            </div>

            <div className="res-rating" style={{paddingLeft:"0.4em",fontFamily:"sans-serif",fontSize:"0.9em",color:"#000"}}>
            rating :{restaurant.avgRating}
                
                </div>
                          <div className="res-time"style={{paddingLeft:"0.4em",fontFamily:"sans-serif",fontSize:"0.9em",color:"#5e5d5d"}}>
            {restaurant.sla.slaString}
                </div>
                <div className="res-cusines"style={{paddingLeft:"0.4em", color:"#5e5d5d",fontSize:"0.8em",fontFamily:"sans-serif",color:"#000"}}>
                {restaurant.cuisines.join(", ")}
                
                </div>
                

        </div>

    )
}
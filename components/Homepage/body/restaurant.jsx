export default Restaurant =()=>{
   const ImagesCDN ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    const restaurants = [
        {
            name:"Pizza Hut",
            imageId:"6e04be27387483a7c00444f8e8241108",
            deliveryTime:40,
            category:["Pizza"],
            ratings:4
        }
        ,
        {
            name:"UBQ ",
            imageId:"ousldxwz6z3cypd2pygf",
            deliveryTime:30,
            category:["North Indian","Briyani"],
            ratings:4
        },
        {
            name:"The Good Bowl",
            imageId:"6e04be27387483a7c00444f8e8241108",
            deliveryTime:45,
            category:["South Indian","Dosa"],
            ratings:4
        },
        {
            name:"Barbeque Nation",
            imageId:"yllayyaltqyeear9nh2e",
            deliveryTime:35,
            category:["North Indian","Briyani"],
            ratings:4
        },

    ]

    return (
    <div className="res-container">
    
     <div className="heading"> Top restaurants chains in Indore</div>
 <div className="restaurant" >
     {
     restaurants.map((item,index)=>(
        <div>
         <RestaurantCard restaurant = {item} index={index} cdn={ImagesCDN}/>
        </div>
     ))
     }

</div>
 
       

    </div>
    )
}


RestaurantCard=({restaurant,index,cdn})=>{

    const imageStyle = {
        height:"3em",

    }

    return (

        <div className="res-card">
            <div className="res-image" >
            <img style={{width:"100%" , height:"100%", borderRadius:"5%"}} src={cdn + restaurant.imageId} alt="" />

            </div>
            <div className="res-name" style={{padding:"0.4em",fontWeight:"600",fontFamily:"sans-serif",fontSize:"1.3em"}}>
                {restaurant.name}
   
            </div>

            <div className="res-rating" style={{paddingLeft:"0.4em",fontFamily:"sans-serif",fontSize:"0.9em"}}>
            rating :{restaurant.ratings}
                
                </div>
                          <div className="res-time"style={{paddingLeft:"0.4em",fontFamily:"sans-serif",fontSize:"0.9em"}}>
            {restaurant.deliveryTime} mins
                </div>
                <div className="res-cusines"style={{paddingLeft:"0.4em", color:"#01100",fontSize:"0.8em",fontFamily:"sans-serif"}}>
                {restaurant.category.join(", ")}
                
                </div>

        </div>

    )
}

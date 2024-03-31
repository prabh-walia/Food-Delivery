

export default Category =()=>{
 
    const categoryImages = [
        {
            name :"Pizza",
            file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
        },
        {
            name :"Cakes",
            file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"
        },
        {
            name :"Burger",
            file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
        },
        {
            name :"North Indian",
            file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
        },
        {
            name :"Paratha",
            file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png"
        },
        {
            name :"Dosa",
            file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"
        },
        {
            name :"Cakes",
            file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"
        },
    
    ]
    return (
        <div className="category">
            <div className="heading"> Whats on your mind ? </div>
            <div className="categoryImages">
              
              {
               categoryImages.map((item,index)=>(
       
                <FoodCategory item ={item} index={index}/>

               )) 
              }
              
            
           </div>
        </div>
    )
}


const FoodCategory=(props)=>{

console.log("props-",props)
    const style = {
        width:"10em",
        height:"10em",
        padding:"0.9em"
    }
    return (
   
            
            <div><img style={style} key={props.index}  src={props.item.file} alt="" /></div>
   
    )
}
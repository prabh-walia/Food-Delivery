import { useState } from "react"
import { Link } from "react-router-dom";


export default Category =(props)=>{
 console.log("categorues=,props",props.categories)
    // const categoryImages = [
    //     {
    //         name :"Burger",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
    //     },
    //     {
    //         name :"Pizza",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
    //     },
    //     {
    //         name :"Cakes",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"
    //     },
    //     {
    //         name :"Burger",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
    //     },
    //     {
    //         name :"North Indian",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
    //     },
    //     {
    //         name :"Paratha",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png"
    //     },
    //     {
    //         name :"Cakes",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"
    //     },
    //     {
    //         name :"Dosa",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"
    //     },
    //     {
    //         name :"Cakes",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"
    //     },
    //     {
    //         name :"Paratha",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png"
    //     },
    //     {
    //         name :"Burger",
    //         file:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
    //     },

    
    // ]
    const [inc,setInc] = useState(0);
    return (
        <div className="px-28 pt-28"> 
        <div className="category">
            <div className="flex">
            <div className="heading"> Whats on your mind ? </div>
            <div className="prev-next-buttons" >

            <div className="slide-button"  onClick={()=>inc>=7&&setInc(inc-7)}>&lt;</div>
            <div className="slide-button" style={{marginLeft:"0.1em"}} onClick={()=>inc<=props.categories.length-inc&&setInc(inc+7)}>&gt;</div>         

            </div>
            </div>
            <div className="categoryImages gap-5">
           
              {
               props.categories.slice(inc,inc+7).map((item,index)=>(
                <div className="foodCategoryContainer  " key={index}>
                <FoodCategory item ={item} index={index}/>
                </div>

               )) 
              }
    
              
            
           </div>
        </div>
        </div>
    )
}


const FoodCategory=(props)=>{

    const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"
           const link = props.item.action.link
       
           const startIndex = link.indexOf("collections");
            const tagsString = link.substring(startIndex);      
    return (
   
            
           <Link to={"/"+tagsString}> <div><img className=" h-40  w-36 mix-blend-multiply" key={props.index}  src={imageUrl+props.item.imageId} alt="" /></div></Link>
   
    )
}
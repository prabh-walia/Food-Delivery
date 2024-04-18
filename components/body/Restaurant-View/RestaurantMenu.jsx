import { useState , useEffect } from "react"
import DealCard from "./deal";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import MenuCard from "./MenuCard";
import { useRestaurantMenu } from "../../../utils/data/useRestaurantMenu";
import MenuCategory from "./menu-category";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default RestaurantMenu =()=>{
    const cart = useSelector((store)=>store.cart.item)
    const Cart = Array.from(new Set(cart));
    const { resId } = useParams()

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };

    const [resInfo,offers,categories] = useRestaurantMenu(resId)
    console.log("categories =",categories);

    return Object.keys(resInfo).length==0?<Shimmer/>:(
        <div style={{paddingLeft:"15em",paddingRight:"15em"}}>
        <div className="res_container"> 

        <div className="res_title" >
           {resInfo?.data?.cards[0]?.card?.card?.text}
        </div>
          <div className="res_head">
                  <div className="head_rating">

                     <span>
                     {
                         resInfo?.data?.cards[2]?.card?.card?.info.avgRating +"  ("+resInfo?.data?.cards[2]?.card?.card?.info.totalRatingsString +" )"
                      }
                     </span>
                    
                         <span style={{marginLeft:"3em"}}>
                         {
                          resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage
                      }
                         </span>
                      
                     
                  </div>
                  <div className="cuisine" >
                      

                      {
                       resInfo?.data?.cards[2]?.card?.card?.info?.cuisines.join(" , ")
                      }
                      </div>
                      <div className="delivery_time">
                          {
                               resInfo?.data?.cards[2]?.card?.card?.info?.sla.slaString
                          }
                      </div>

          </div>
          <div className="deals">
              <div className="deal_title"style={{fontSize:"1em",marginTop:"0.4em"}}>
                  Deals for you
              </div>
              <div className="deal_body" >
            {  offers?.map((offer)=>(
             <DealCard data = {offer}/>
              ))
            }


              </div>

          </div>

          <div className="menu">
              <div className="menu_head">
                  <div className="menu_title">
                      MENU
                  </div>

              </div>
              <div className="category_menu">
                { 
             categories?.map((category,index)=>(
     <MenuCategory  category={category} index={index} showItem={toggleAccordion} show={activeIndex==index?true:false}/>
             
             ))
                
                }
              </div>

          </div>
            
        </div>
        
        <div className="flex justify-center"> { cart.length>0&&<div className=" text-sm font-semibold px-4 text-slate-50 flex justify-between items-center fixed  w-1/2 h-12  bg-lime-600 bottom-0 z-10">
            <span> {Cart.length} item added</span>
            <Link to={"/cart"}><span className=" cursor-pointer"> VIEW CART</span></Link>
            </div>}</div>

        </div>
    )
}
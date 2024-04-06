import { useState , useEffect } from "react"
import Deal from "./deal";
import { useParams } from "react-router-dom";
import Shimmer from "../../Homepage/shimmer";
import MenuCard from "./MenuCard";
export default RestaurantMenu =()=>{

    const [resInfo,setResInfo]= useState({});
    const [offers,setOffers]=useState([]);
    const { resId } = useParams()

    useEffect(()=>{
     fetchData();
 
    },[])
    useEffect(()=>{
        console.log("resinfo=",resInfo );

    },[resInfo])


    fetchData= async ()=>{
        let url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER";
        const result = await fetch(url);
        const json =await  result.json();

        setResInfo(json);
        setOffers(json?.data?.cards[3]?.card.card?.gridElements.infoWithStyle.offers)
    }
    

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
             <Deal data = {offer}/>
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
              <div className="menu_list">
                     {
                          resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((menu,index)=>(

                     <MenuCard  data ={menu}/>
                          ))
                     }
              </div>
          </div>
            
        </div>
        </div>
    )
}
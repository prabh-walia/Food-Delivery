import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import { useCategory } from "../../../utils/data/useCategory";
import { ImagesCDN } from "../../../utils/data/constants";
import Shimmer from "../../Homepage/shimmer";
import { Link } from "react-router-dom";
export default  Collection =()=>{


const [ col ] = useCategory()
const [res,setres]=useState()
const[filterRes,setFilterRes]=useState(res)
useEffect(()=>{
    setres(col?.data?.cards.filter((card)=>card?.card?.relevance))
    setFilterRes(col?.data?.cards.filter((card)=>card?.card?.relevance))

},[col])
 const [selected,setSelected]=useState([]);
console.log("col=>",col);  
useEffect(()=>{
    console.log("doneo");
 selected.map((filter)=>{
    if(filter=="Pure Veg"){
        setFilterRes(res.filter((res)=>res.card.card.info.veg==true))
        console.log(res[0].card.card.info.veg==true);
         }
         if(filter=="Less than 30 mins"){
            setFilterRes(res.filter((res)=>res.card?.card?.sla?.deliveryTime<=30))
              }
              if(filter =="Rs300-Rs600"){
                setFilterRes(res.filter((res)=>parseInt(res?.card?.card?.info?.costForTwo?.replace(/[^\d]/g, ''))<601&&parseInt(res.card.card.info.costForTwo?.replace(/[^\d]/g, ''))>299))
                console.log("matdch", res[0]?.card?.card?.info?.costForTwo)
       
              }
              if(filter =="Less than Rs300"){
                setFilterRes(res.filter((res)=>parseInt(res.card.card?.info?.costForTwo?.match(/\d+/)[0])<300))
              
       
              }
          
 })
 if(selected.length==0){
    console.log("selected==");
    setFilterRes(res)
  }
},[selected]) 
selectFilter=(widget)=>{

  if(selected.filter((s)=>s==widget).length==0){
    setSelected([...selected,widget])
    applyFilter(widget)
    console.log("select");
  }

}
applyFilter=(filter)=>{
    console.log("in filter a[[;u");

}

removeFilter =(event,widget)=>{
    console.log("rekove");
    event.stopPropagation();
    setSelected(selected.filter((s)=>s!=widget))
}
const filters= ["Pure Veg","Less than 30 mins","Rs300-Rs600","Less than Rs300"]

  console.log("ress=",res);


    return (
   
<div className="pt-28 pb-24 px-20">

{
!res?<Shimmer/>:
       <div>{
      col?.data?.cards.map((card) => (
        <div key={card?.card?.card?.title}> 
          {card?.card?.card?.title && (
            <div>
              <div className="p-2 text-3xl font-bold">
                {card?.card?.card?.title}
              </div>
              <div className="p-2 text-sm text-slate-700">
                {card?.card?.card?.description}
              </div>
            </div>
          )}
          {card?.card?.card?.sortConfigs && (
            <div className="flex pt-2 gap-4">
              {filters?.map((widget, index) => (
                <div key={index} onClick={(e)=>selectFilter(widget)} className={ selected.find((s)=>s==widget)?"p-2  bg-slate-100 border border-neutral-600 rounded-2xl px-3 cursor-pointer text-zinc-600 text-sm":"p-2 bg-white border-2 rounded-2xl px-3 cursor-pointer text-zinc-600 text-sm"}>
                    {widget }
                  {selected.find((s)=>s==widget)&& <span onClick={(event)=>removeFilter(event,widget)} className="px-2">&times;</span>}
                </div>
              ))}
            </div>
          )}
       
        </div>

     
      ))}
             <div className="flex gap-4 flex-wrap mt-5">
          {
               
              filterRes?.map((res,index)=>(
                    <div className="">
                        <Link  key={index} style={{textDecoration:"none"}} to={"/restaurant/"+res.card.card.info.id}> <RestaurantCard restaurant ={res.card.card.info} cdn={ImagesCDN}/></Link>
                    </div>
                ))
         
          }
          {
               res.length==0&&<div className=" align-middle">No result found</div>
          }
          </div>
          </div>
}
    </div>
    )

}
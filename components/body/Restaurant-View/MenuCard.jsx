import {useDispatch} from "react-redux";
import { addItem,removeItem } from "../../../utils/data/cartSlice";
import Counter from "./counter";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default MenuCard =(props)=>{
    const {data}=props;
    const dispatch= useDispatch();
    const [count,setCount]=useState(1)
    const set = new Set();
    const cartItems = useSelector((store)=>store.cart.item)
   const [added,setAdded] = useState(false);
    const ImagesCDN ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    const addToCart =(item)=>{
     dispatch(addItem(item))
     console.log("addto cartd");
     setAdded(true)
     setCount(count+1)
    }
    const removeItems =(item)=>{
        dispatch(removeItem(item))
        console.log("remove cartd");


        setCount(count-1)
       }
 useEffect(()=>{
  let items = cartItems.filter((item)=>item.card.info.name==data.card.info.name);
  setCount(items.length)

 },[])
 useEffect(()=>{
    count>0?setAdded(true):setAdded(false)
 },[count])
    return (
        <div className="menu_card">
            <div className="menu_info">
                <div className="menuItem_title">
                     {data?.card?.info?.name}
                </div>
                <div className="menuItem_price">
               <span>&#8377;</span>  {data?.card?.info?.price/100 ||data?.card?.info?.defaultPrice/100 }
                </div>
                <div className="menuItem_description max-h-12 text-wrap   overflow-ellipsis overflow-hidden" >
                {data?.card?.info?.description}
                </div>

            </div>
            <div className="menu_img_section">
                <img src={ImagesCDN+data?.card?.info?.imageId} alt=""  style={{width:"100%",height:"8em",borderRadius:"1em"}}/>
              {added==false?<div onClick={()=>addToCart(data)} className="submit" style={{background:"white",fontWeight:"600", color:"darkgreen",width:"7em",position:"relative",bottom:"2em",left:"10%",zIndex:"1",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
                  ADD
              </div>:
              <Counter count={count} data={data} addTocart= {addToCart} removeItem ={removeItems}/>
              }
                
            </div>
            
        </div>
    )
}
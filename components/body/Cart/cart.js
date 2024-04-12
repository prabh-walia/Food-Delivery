import { useSelector,useDispatch } from "react-redux"

import CartItem from "./cart-Item";
import { clearCart } from "../../../utils/data/cartSlice";
import { useState } from "react";
export default Cart =()=>{
const cart = useSelector((store)=>store.cart.item);
const dispatch = useDispatch();
const [paymentStatus,setPaymentStatus]=useState(false)
console.log("cart->",cart)
const total = cart.reduce((acc,item)=>{
  let price = item.card.info?.defaultPrice/100||item.card.info?.price/100
return acc+ price 

},0)
console.log("total=>",total);
const clearCartt =()=>{
    console.log("in clear cart");
  dispatch(clearCart())
}
 const initAudio = () => {
    const targetAudio = document.getElementsByClassName("audioBtn")[0];
    console.log("init audio , ",targetAudio);
    targetAudio.play();

    setPaymentStatus(true)
  };

 return (
    paymentStatus==false?<div className=" bg-zinc-100 h-max pb-60">
           <div className="w-full">
    <div className="pt-20 flex justify-center">
     
        <div className=" w-3/4 flex">
     

         <div className="left w-4/6 px-6 " >
           
           <div className="w-full bg-slate-50 mt-5 h-44 p-3 ">
           <div className=" text-gray-600 "> Delivery address</div>
            <div className="text-gray-500 text-sm pt-4 ">H No 153, Sector 15-A, Chandigarh-160015, INDIA</div>
           </div>
           <div className="w-full bg-slate-50 mt-8 h-44 p-3">
           <div className=" text-gray-600 ">Payment</div>
           <div className="text-gray-500 text-sm pt-4 ">Payment Mode - Online</div>
           <p className="text-gray-500 text-sm pt-4">UPI ID - 8292938297@upi</p>
            </div>
            <div>
            
            </div>
         </div>
         <div className=" w-1/3 pt-5 pb-6"> 
       
            <div className="cart  h-96 bg-slate-50 ">
                {cart.length>0&&<div className="text-end px-4 pt-2"><button  className=" text-sm p-2 m-1 border-red-400 border-2 text-red-500" onClick={()=>clearCartt()}>Clear</button></div>}
        <div className=" h-64 overflow-y-auto">{
            cart.map((item)=>(
              <CartItem data = {item}/>
                
            ))
        }
            {cart.length==0&&<div className="text-center  pt-44 text-slate-500">
            Cart is empty
        </div>}
        </div>
    
          
      {   cart.length>0&& <div className="w-full pt-3 px-3  border-t-2 flex items-center justify-between border-slate-100 " >
     <div> To Pay -<span>&#8377;</span> {total}</div>
     <div> <button onClick={()=>initAudio()}  className=" transition duration-150 ease-in-out w-28 h-10 rounded-md bg-lime-800 text-stone-200 hover:bg-lime-700 active:bg-lime-600 ">Checkout</button></div>
      </div>}
      <audio className="audioBtn">
        <source src="/Users/prabhdeepsingh/Desktop/React/project/WCSC5KW-message-notification.mp3"></source>
      </audio>
            </div>
          
         </div>
          

        
            </div>
        </div>
       <div className=" px-52"> </div>
    </div>
   
    </div>:
<div className="pb-40">
    <div className="flex justify-center items-center pt-56">
 
 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check transition-all duration-500 ease-in-out " width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 12l2 2l4 -4" />

</svg>
</div>
<div className="flex justify-center items-center">
    <div>Order Placed</div>
</div>
    </div>
  
    
    
 )
}
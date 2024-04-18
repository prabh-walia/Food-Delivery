import { useEffect,useState } from "react"
import { useSelector } from "react-redux"

export default CartItem =(props)=>{
    const cart = useSelector((store)=>store.cart.item)
    console.log("cart=",cart);
    const [count,setCount]=useState(1)
    useEffect(()=>{
        const items = cart.filter((item)=>item.card.info.id==props.data.card.info.id)
        setCount(items.length)
    },[])
console.log(props)
    return (
        <div>
                <div className="p-5 flex">
                   <div className="w-2/4  font-sans text-sm text-stone-600"> {props.data.card.info.name}</div>
                   <div className=" w-1/4 font-sans text-xs text-stone-500 text-center pt-2" >  {count}</div>
                   <div className="w-1/4 font-sans text-xs text-stone-500 text-center  pt-2"> <span>&#8377;</span> {(props.data.card.info.defaultPrice/100) *count||(props.data.card.info.price/100)*count }</div>
                </div>
        </div>
    )


}
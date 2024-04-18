import { useState } from "react"
export default Counter =(props)=>{
    console.log("props-",props);
 const [count,setCount]=useState(1);
  const increment=()=>{

      props.addTocart(props.data)
  }
  const decrement=()=>{
    
    props.removeItem(props.data)
    count>0&&setCount(count-1)
    

  }

    return (
        <div className="flex justify-center">
            <div className=" flex items-center counter bg-white relative bottom-8 w-28 h-11 rounded-xl shadow-lg">
                <div onClick={()=>decrement()} className="text-center decr w-1/3 text-lg text-green-800 font-bold cursor-pointer">-</div>
                <div className="text-center value w-1/3 text-lg  text-green-800 font-bold">{props.count }</div>
                <div   onClick={()=>increment()} className="text-center inc w-1/3 text-lg  text-green-800 font-bold cursor-pointer">+</div>
            </div>
        </div>
    )
}
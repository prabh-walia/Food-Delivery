export default CartItem =(props)=>{
console.log(props)
    return (
        <div>
                <div className="p-5 flex">
                   <div className="w-2/4  font-sans text-sm text-stone-600"> {props.data.card.info.name}</div>
                   <div className=" w-1/4 font-sans text-xs text-stone-500 text-center pt-2" >  {props.data.card.info.inStock}</div>
                   <div className="w-1/4 font-sans text-xs text-stone-500 text-center  pt-2"> <span>&#8377;</span> {props.data.card.info.defaultPrice/100 ||props.data.card.info.price/100 }</div>
                </div>
        </div>
    )


}
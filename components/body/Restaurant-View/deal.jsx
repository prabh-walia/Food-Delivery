export default DealCard=(props)=>{
const imgCdn= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
    return (
        <div>
            <div className="deal_card h-16">
             <div width="40%">
            <img className="w-8 h-8"src={imgCdn} alt="" />
             </div>
             <div className="offerInfo" >
             <div className="offer_name">
             {
                  props.data.info.header
                 
                         }
             </div>
                 <div className="coupon" >
{
            props.data.info.couponCode
}
                 </div>
                 
                      
           
             </div>
              
            </div>
        </div>
    )
}
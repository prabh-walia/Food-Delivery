export default MenuCard =(props)=>{
    const {data}=props;
    console.log("data=",data);
    const ImagesCDN ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

    return (
        <div className="menu_card">
            <div className="menu_info">
                <div className="menuItem_title">
                     {data?.card?.info?.name}
                </div>
                <div className="menuItem_price">
               <span>&#8377;</span>  {data?.card?.info?.price/100}
                </div>
                <div className="menuItem_description" >
                {data?.card?.info?.description}
                </div>

            </div>
            <div className="menu_img_section">
                <img src={ImagesCDN+data?.card?.info?.imageId} alt=""  style={{width:"100%",height:"8em",borderRadius:"1em"}}/>
              <div className="submit" style={{background:"white",fontWeight:"600", color:"darkgreen",width:"7em",position:"relative",bottom:"2em",left:"10%",zIndex:"1",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
                  ADD
              </div>
                
            </div>
        </div>
    )
}
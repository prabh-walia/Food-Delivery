import { useState , useEffect } from "react"
import MenuCard from "./MenuCard";
export default MenuCategory =(props)=>{

    return (
        <div>
                <div>

    
<div key={props.index} className="border-b border-gray-200">
          <button
            onClick={() => props.showItem(props.index)}
            className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
          >
            <span className="text-lg font-medium">{props.category?.card?.card?.title}</span>
            <svg
              className={`w-6 h-6 transform transition-transform ${
                props.show ? 'rotate-0' : 'rotate-180'
              }`}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          { props.show && (
            <div className="p-4">
                {
                    props.category.card?.card.itemCards.map((menu)=>(
                        <MenuCard  data ={menu}/>
                    ))
                }
         
            </div>
          )}
        </div>




      </div>

        </div>
    )
}
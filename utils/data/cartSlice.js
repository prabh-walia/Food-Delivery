import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice(
    {
        name:"cart",
        initialState:{
            item:[
                
            ]
        },
        reducers:{
            addItem:(state,action)=>{
              state.item.push(action.payload)
            },
            removeItem :(state,action)=>{
                const itemToremove = action.payload?.card.info.id;
                console.log("itemss",action.payload)
                state.item = state.item.filter((item)=>item.card.info.id!== itemToremove)

            },
            clearCart:(state)=>{
             state.item.length=0
            }
        }
    }
);
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem :(state,action)=>{

    //         const _=require("lodash");
    //  if(_.findIndex(state.items,(item)=> _.isEqual(item,action.payload))==-1)
    //         {
                state.items.push(action.payload);
            // }
        },
        removeItem :(state,action)=>{

            const _ = require("lodash"); 
            // _.remove(state.items,(item)=>(
            //     _.isEqual(item,action.payload)
            // ))
            const index=_.findIndex(state.items,(item)=> _.isEqual(item,action.payload));
            state.items.splice(index,1);

        },
        emptyCart: (state,action)=>{
            state.items.length =0;
        },
    },
});


export const {addItem,removeItem,emptyCart}=cartSlice.actions;

export default cartSlice.reducer;

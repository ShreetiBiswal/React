import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../ReduxStore/cartSlice";


const ItemList=({items,add})=>{

   const dispatch=useDispatch();

   const handleAddItem=(item)=>{

    dispatch(addItem(item));
   }

   const handleRemoveItem=(item)=>{

    dispatch(removeItem(item));
   }

    return(
        <div>
            {items.map((item)=>(
                <div data-testid="item" key={item?.card?.info?.id} className="border-gray-200 border-b-2 p-2 flex w-[100%] text-left">
                    <div className="w-9/12">
                    <div className="font-semibold">
                        <span className="my-2 p-2">{item?.card?.info?.name}</span>
                        <span>- ₹{
                        item?.card?.info?.price?item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100
                            }</span>
                    </div>
                    <p className="text-xs p-2">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-2">
                    <button
                    onClick={()=>{
                        add?handleAddItem(item):handleRemoveItem(item)
                    }}
                     className="absolute bg-black text-white px-2 rounded-e-lg">{add?"+Add":"-Remove item"}</button>
                        <img src={CDN_URL+item?.card?.info?.imageId}
                        className="w-11/12 h-32 rounded-md   object-cover"></img>
                    </div>
                 </div>
            ))}
        </div>
    )
}




export default ItemList;
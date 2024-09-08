import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { emptyCart } from "../ReduxStore/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch=useDispatch();

    return(
        <div className=" w-6/12 m-auto">
            <h1 className="font-bold underline text-3xl text-center m-2 p-2">Your Cart</h1>
            {cartItems.length===0?
            (<h1 className="text-center my-8 font-semibold text-2xl" >Cart is empty shop some more!!🚀</h1>):
            (<>
            <button
             className="py-2 px-1 m-1 mb-4 border-2 border-black bg-orange-300 w-24 hover:font-semibold rounded-md "
             onClick={()=>{
                dispatch(emptyCart())
             }}
              >Empty cart</button>
            <ItemList items={cartItems} add={false}></ItemList>
            </>)}
        </div>
    )
}

export default Cart;
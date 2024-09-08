import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { UserLogo } from "../utils/Logos";
import { CartLogo } from "../utils/Logos";
import { useSelector } from "react-redux";

const Header=()=>{

    const [btnTxt, setBtnTxt]=useState("Log in");

   const onlineStatus=useOnlineStatus();

   const {loggedUser}=useContext(UserContext);

   const cartItems=useSelector((store)=>store.cart.items);

    return (
        <div className="flex justify-between shadow-lg bg-orange-50 items-center ">
         <div className="">
             <img src={LOGO_URL} alt="logo" className="w-[100px] h-[100px] rounded-full">
             </img>
         </div>
         <div className="flex items-center">
             <ul className="flex items-center">
                <li className="p-4">{(onlineStatus)?"Online🟢":"Offline🔴"}</li>
                <li className="p-4 hover:font-semibold"><Link to="/">Home</Link></li> 
                <li className="p-4 hover:font-semibold"><Link to="/about">About Us</Link></li> 
                <li className="p-4 hover:font-semibold"><Link to="/contact">Contact Us</Link></li>
                <li className="p-4 hover:font-semibold"><Link to="/grocery">Grocery</Link></li>
                <li className="p-4 flex items-center">
                    <Link to="/cart"><CartLogo/></Link>
                <span data-testid="cartItems" className="ml-9 mb-6 absolute px-1 border-black border-[1px] rounded-full text-xs bg-black text-white">{cartItems.length}</span></li>
             </ul>
             <button className="mx-4 px-3 bg-orange-300 hover:font-semibold h-10 w-[90px]  border-black border-2 rounded-lg" onClick={
                 ()=>{
                     btnTxt=="Log in"?setBtnTxt("Log out"):setBtnTxt("Log in");
                 }
             }>{btnTxt}</button>
             <div>
                <UserLogo/>
                <div className="font-semibold p-2 text-xs">{loggedUser}</div>
             </div>
         </div>
        </div>
     )
}

export default Header;
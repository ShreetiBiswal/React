import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const User=()=>{

    const [userInfo,setUserInfo]=useState(null);


    useEffect(()=>{
        // const timer=setInterval(()=>{console.log("timer")},1000);

        getData();
        
        return ()=>{
            // clearInterval(timer);
            //same as component will unmount
        } ;
    },[]);

    const getData=async ()=>{
        
        const data= await fetch("https://api.github.com/users/ShreetiBiswal");
        const json =await data.json();
        setUserInfo(json);
    }

    if(userInfo===null){
        return <Shimmer/>;
    }

    const {name,location,id}=userInfo;

    const {loggedUser}=useContext(UserContext);

    return(
        <>
         <div className="m-4 p-4 bg-gray-100 border-gray-200 hover:bg-gray-50 border-2 font-semibold">
        <h3>{name?name:"functional comp"}</h3>
        <h4>address:-{location?location:"functaional loc"}</h4>
        <h4>id:{id}</h4>
        <h4>User-{loggedUser}</h4>
         </div>
        </>
    )
}

export default User;
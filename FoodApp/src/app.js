import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { lazy,Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./ReduxStore/appStore";
import Cart from "./components/Cart";

const root= ReactDOM.createRoot(document.getElementById("root"));

const Grocery=lazy(()=>import("./components/Grocery"));



const AppLayout=()=>{

    const[userName,setUserName]=useState("Default");

    useEffect(()=>{
        const data={
            name:"Shreeti",
        };
        setUserName(data.name);
        
    },[]);

    return (
       <Provider store={appStore}>
         <UserContext.Provider value={{loggedUser:userName, setUserName}}>
         <div className="app">
             <UserContext.Provider value={{loggedUser:"user9847"}}>
             <Header/>
             </UserContext.Provider>
             <Outlet/>
         </div>
        </UserContext.Provider>
       </Provider>

     )
}

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>

            },
            {
                path:"/about",
                element:<AboutUs/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}
                ><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            }

        ],
        errorElement:<Error/>
    },
    
]);



root.render(<RouterProvider  router={appRouter}/>);
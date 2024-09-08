import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body=()=>{


    

    const [lsitOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurants, setFilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

    const {loggedUser,setUserName}=useContext(UserContext);
  
    useEffect(()=>{
         getData();
    },[]);

    const getData=async ()=>{
       try{
       
        const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=20.2960587&lng=85.8245398");
        
        const json= await data.json();
        // console.log(json)
        setListOfRestaurants(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.success.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      
    }catch(err){
        
        function mockDataSetter(){
            setTimeout(()=>{
                setListOfRestaurants(resList);
                setFilteredRestaurants(resList);
            },2000);
        }

        mockDataSetter();
       }
    }

   const onlineStatus=useOnlineStatus();

   if(onlineStatus===false){
    return (<h1 className="text-8xl text-red-700">Check your internet</h1>)
   }
    
    return ( lsitOfRestaurants.length==0)?(<Shimmer/>):
    (
        <div className="p-4">
            <div className="flex items-center">
                
                <div className="m-2 p-2">
                   
                    <input className="border-[1px] border-black" value={searchText} onChange={(e)=>{

                        setSearchText(e.target.value);

                    }} data-testid="searchInput"></input>
                  
                    <button className="mr-[3px] border-[1px] border-black px-3 hover:font-semibold" onClick={()=>{
                       

                       setFilteredRestaurants(
                        lsitOfRestaurants.filter((res)=>{
                            
                            return  res.info.name.toLowerCase().includes(searchText.toLowerCase());
                          
                          })
                       );

                        }}>Search</button>
                </div>
               
                <button className="border-[1px] border-black bg-orange-300  px-3 h-[30px] rounded-sm "
                onClick={()=>{
                    const filteredList= filteredRestaurants.filter(
                        (res)=>(res.info.avgRating> 4)
                    );
                    setFilteredRestaurants(filteredList);
                }}
                >Top Rated</button>
          <div className="m-2 p-2">
                   <label className="p-1">User(About Us):</label>
                   <input className="border-[1px] border-black"
                   onChange={(e)=>{
                    setUserName(e.target.value);
                   }}></input>
                 
               </div>
            </div>
           
            <div className="flex flex-wrap gap-x-2 gap-y-1">
                {filteredRestaurants.map((restaurant)=>(
                    <Link className="res-card links" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                       {
                         restaurant.info.promoted?<RestaurantCardPromoted resData={restaurant.info} />:<RestaurantCard resData={restaurant.info} />
                       }
                        </Link>
                ))}
            </div>
        </div>
    )

};



export default Body;
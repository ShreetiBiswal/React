import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{

    const[expandIndex,setExpandIndex]=useState(null);

    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);

    if(resInfo===null){
        return <Shimmer/>
    }
    
    
    const{name,city,cuisines, costForTwoMessage,avgRating}=resInfo?.data.cards[2].card.card.info;
    
    const categorises=resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>(c?.card?.card?.["@type"]
        ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));
   
 
    return (
        <div className="p-4 text-center">
            <div className="my-4">
            <h1 className="font-bold text-4xl">{name}</h1>
            <h2 className="font-semibold mt-2">City-{city}</h2>
            <h4 className="font-semibold">{cuisines.join(",")}</h4>
            <h4 className="font-semibold">{costForTwoMessage}</h4>
            <h4 className="font-semibold">Average rating:-{avgRating}⭐</h4>
            </div>
            <div className="menu">
                
                {
                    categorises.map((category,index)=>{
                        return (<RestaurantCategory
                             key={category?.card?.card.title} data={category?.card?.card}
                             showItems={index===expandIndex} setExpandIndex={setExpandIndex} 
                             index={index}/>)
                    })
                }
            </div>
        </div>
    )
}

export default RestaurantMenu;
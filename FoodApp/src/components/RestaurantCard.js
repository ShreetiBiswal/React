import { CDN_URL } from "../utils/constants";

const RestaurantCard=({resData})=>{
    
  
  const {
    cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData;
   
    return (
        <div data-testid="resCard"
         className=" group h-[450px] w-[240px] border-[1px] border-gray-500 p-3 rounded-md bg-gray-300 hover:bg-gray-200 shadow-lg">
             <div>
             <img
                className="w-[200px] h-[200px] object-cover mb-2 rounded-full group-hover:border-[2px] group-hover:border-black"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />
             </div>

            <h3 className="font-bold">{name}</h3>
            <p className="text-sm">{cuisines.join(', ')}</p>
            <h4>{avgRating} ⭐</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>(
        <div>
            <label className="absolute bg-black text-white rounded-br-lg p-1">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
    );
};

export default RestaurantCard;
import ItemList from "./ItemList";


const RestaurantCategory=({data,showItems,setExpandIndex,index})=>{

    return (
        <div className="w-6/12 bg-gray-50 mx-auto my-2 p-2 shadow-lg ">
            <div className="flex justify-between cursor-pointer" onClick={()=>{
                if(showItems){
                    setExpandIndex(null);
                }else{
                    setExpandIndex(index);
                }
            }}>
            <span className="font-bold">{data?.title}({data?.itemCards.length})</span>  
            <span className="font-bold text-xl">{showItems?"^":"⌄"}</span>
            </div>
            <div>
                {showItems && < ItemList items={data.itemCards} add={true}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;
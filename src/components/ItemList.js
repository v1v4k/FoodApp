import { CDN_URL } from "../utils/constants";
const ItemList = ({items})=>{ 
    console.log(items);
    return(
            <div >
                {items?.map(item=>(
                    <div key={item?.card?.info?.id}
                        className="p-2 m-2 border-grey-200 border-b-2 text-left flex">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span>{item?.card?.info?.name}</span>
                                <span>₹{item?.card?.info?.price/100}</span>
                            </div>  
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12 p-2">
                            <div className=" absolute">
                                <button className="p-1 rounded-lg bg-black text-white shadow-lg ">
                                    Add+
                                </button>
                            </div>
                            <img className="w-36"
                                src={`${CDN_URL}${item?.card?.info?.imageId}`}/>
                           
                        </div>

                    </div>
                ))}

            </div>     
    )

}

export default ItemList;
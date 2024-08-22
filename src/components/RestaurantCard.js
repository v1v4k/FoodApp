import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData})=>{
    // const {resData} = props;
    
    const{id,name,
     cuisines,
     avgRating,sla
    }=resData?.info
     return(
         <div className="res-card h-90 w-40 p-4 m-4 rounded-lg bg-emerald-100 hover:cursor-pointer hover:bg-emerald-200">
             <img className="h-40 w-40 my-2 pb-2 rounded-lg" 
             src={`${CDN_URL}${resData.info.cloudinaryImageId}`}/>
             <h3 className="res-name font-bold">{name}</h3>
             <h4>{id}</h4>
             <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
             <h4>★ {avgRating}</h4>
             <h4>{sla.deliveryTime} mins</h4>
         </div>
     )
 }

 export const withPromotedLabel = (RestaurantCard)=>{
    return()=>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>          
        )
    }

 }

 export default RestaurantCard;
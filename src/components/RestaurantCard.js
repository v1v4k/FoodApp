import { resLogo } from "../utils/constants";
const RestaurantCard = ({resData})=>{
    // const {resData} = props;
    
    const{id,name,
     cuisines,
     avgRating,sla
    }=resData?.info
     return(
         <div className="res-card h-100 w-40 p-4 m-4 rounded-lg bg-emerald-100 hover:cursor-pointer hover:bg-emerald-200">
             <img className="h-40 w-40 my-2 pb-2 rounded-lg" 
             src={`${resLogo}${resData.info.cloudinaryImageId}`}/>
             <h3 className="res-name font-bold">{name}</h3>
             <h4>{id}</h4>
             <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
             <h4>★ {avgRating}</h4>
             <h4>{sla.deliveryTime} mins</h4>
         </div>
     )
 }

 export default RestaurantCard;
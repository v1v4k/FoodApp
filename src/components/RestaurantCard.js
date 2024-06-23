import { resLogo } from "../utils/constants";
const RestaurantCard = ({resData})=>{
    // const {resData} = props;
    
    const{name,
     cuisines,
     avgRating
    }=resData?.info
     return(
         <div className="res-card">
             <img className="res-logo" 
             src={`${resLogo}${resData.info.cloudinaryImageId}`}/>
             <h3 className="res-name">{name}</h3>
             <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
             <h4>★ {avgRating}</h4>
             <h4>{resData.info.sla.deliveryTime} mins</h4>
         </div>
     )
 }

 export default RestaurantCard;
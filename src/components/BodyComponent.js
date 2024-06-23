import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const BodyComponent = () =>{
    return(
        <div className="body-container">
            <div className="search-bar">Search</div>
            <div className="res-container">
                {resList.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
            </div>
        </div>
    )
}

export default BodyComponent;
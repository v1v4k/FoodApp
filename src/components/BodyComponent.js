import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return(
        <div className="body-container">
            <div className="filtert">
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=>res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
            </div>
        </div>
    )
}

export default BodyComponent;
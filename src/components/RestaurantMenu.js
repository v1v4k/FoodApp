import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import { useState, useContext } from "react";
import UserContext from "./UserContext";
const RestaurantMenu = () =>{
    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    const {loggedInUser} = useContext(UserContext);
    
    
    if(resMenu === null)
    {
            return <Shimmer/>;
    }
    const {name, cuisines, costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info;

    const {itemCards}= resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

    //console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

   const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   )

   //console.log(categories);
    
        
    return(
        <div className="res-menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines}{"-"}
                {costForTwoMessage}</p>
            <h2 className="bg-orange-500">User: {loggedInUser}</h2>
                {/* Categories accordions */}

                {categories.map((category, index) =>(<RestaurantCategories 
                    key={category.card.card.title} 
                    data={category?.card?.card}
                    showItems={index=== showIndex && true }
                    setShowIndex = {() => setShowIndex  (index)}
                    />
                    
                    ))}
                <RestaurantCategories />
            
        </div>
    )
}

export default RestaurantMenu;
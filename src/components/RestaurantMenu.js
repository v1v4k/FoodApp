import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
const RestaurantMenu = () =>{
    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);
    
    
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

   console.log(categories);
    
        
    return(
        <div className="res-menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines}{"-"}
                {costForTwoMessage}</p>
                {/* Categories accordions */}

                {categories.map(category=>(<RestaurantCategories 
                    key={category.card.card.title} 
                    data={category?.card?.card}
                    />
                    
                    ))}
                <RestaurantCategories />
            
        </div>
    )
}

export default RestaurantMenu;
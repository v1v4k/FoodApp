import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
const RestaurantMenu = () =>{
    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);
    
    
    if(resMenu === null)
    {
            return <Shimmer/>;
    }
    const {name, cuisines, costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info;

    const {itemCards}= resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
        
    return(
        <div className="res-menu">
            <h1>{name}</h1>
            <p>{cuisines}{"-"}
                {costForTwoMessage}</p>
            <ol>
                {itemCards.map(item=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} - RS.{(item.card.info.price)/100 ||
                        (item.card.info.defaultPrice)/100}
                        {/* console.log("res-{item.card.info.id}"); */}
                    </li>))}
            </ol>
        </div>
    )
}

export default RestaurantMenu;
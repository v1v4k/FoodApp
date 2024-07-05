import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menuApi } from "../utils/constants";
const RestaurantMenu = () =>{
    const [resMenu, SetResMenu]=useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const  fetchMenu = async()=>{
        const data =await fetch(menuApi+resId);
        const json = await data.json();
        //console.log(json);
        SetResMenu(json.data)
        //console.log(resMenu);
        
    };
    if(resMenu === null)
    {
            return <Shimmer/>;
    }
    const {name, cuisines, costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info;

    const {itemCards}= resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
        
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
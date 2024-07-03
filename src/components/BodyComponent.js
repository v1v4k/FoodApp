import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [listOfFilterRes, setListOfFilterRes] = useState([]);

    const [searchText, setSearchText] = useState("");


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfFilterRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return(listOfRestaurants.length===0)?<Shimmer/> :
    (
        <div className="body-container">
            <div className="filter">
                <input 
                    type="text" 
                    className="search-box" 
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)} 
                />
                <button className="searchBtn" 
                        onClick={()=>
                            {
                                const searchList = listOfRestaurants.filter(
                                    (res)=>
                                            res.info.name.toLowerCase().includes(searchText.toLowerCase())                                   
                                )

                                setListOfFilterRes(searchList)
                            }
            
                            }>Search</button>
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=>res.info.avgRating > 4
                    );
                    setListOfFilterRes(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfFilterRes.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
            </div>
        </div>
    )
}

export default BodyComponent;
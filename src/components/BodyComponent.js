import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [listOfFilterRes, setListOfFilterRes] = useState([]);

    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfFilterRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(onlineStatus===false){
        return (
                <h1>
                    Looks like you're Offline! Check your internet connection
                </h1>)
    }

    return(listOfRestaurants.length===0)?<Shimmer/> :
    (
        <div className="body-container bg-teal-50">
            <div className="filter ">
                <input 
                    type="text" 
                    className="search-box border border-solid border-black p-2 m-2 rounded-lg" 
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)} 
                />
                <button className="searchBtn p-2 m-2 rounded-lg bg-emerald-100 hover:bg-emerald-200" 
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
                className="filter-btn m-2 p-2 rounded-lg bg-emerald-100 hover:bg-emerald-200"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=>res.info.avgRating > 4.5
                    );
                    setListOfFilterRes(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap">
                {listOfFilterRes.map((restaurant)=>(
                    <Link to={"/restaurants/"+ restaurant.info.id}key={restaurant.info.id} ><RestaurantCard  resData={restaurant}/></Link>))}
            </div>
        </div>
    )
}

export default BodyComponent;
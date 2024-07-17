import { useEffect,useState } from "react";
import { menuApi } from "./constants";

const useRestaurantMenu =(resId)=>{
    const [resMenu, SetResMenu]=useState(null);

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
  
    return resMenu;
}

export default useRestaurantMenu;
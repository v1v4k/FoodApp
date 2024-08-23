import {headerLogo} from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () =>{
    const [loginButton, SetLoginButton] = useState("Login");
    useEffect(()=>{
       // console.log("useEffect is called");
    },[loginButton]);

    const onlineStatus = useOnlineStatus();
    
    //console.log("Header Rendered");

    const data = useContext(UserContext);

    //console.log(data.userName)

    // Subscribing to the store using a Selector

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems)
    

    
    return(
        <div className = "flex justify-between  bg-emerald-300">
            <div className="logo-container m-2 p-2">
                <img className="w-32 h-32" 
                alt="res-logo"
                src={headerLogo}/>
            </div>
            <div className="">
                <ul className="flex m-2 p-2">
                <li className="p-2 m-1 bg-orange-500 rounded-lg">
                        {data.loggedInUser}
                    </li>
                    <li className="p-2 m-1 bg-emerald-500 rounded-lg">
                        <Link to="/">🏠Home</Link>
                    </li>
                    <li className="p-2 m-1 bg-emerald-500 rounded-sm">
                        <Link to="/About">About</Link>
                    </li>
                    <li className="p-2 m-1 bg-emerald-500 rounded-sm">
                        <Link to="/Contact">☎️Contact</Link>  
                    </li>
                    <li className="p-2 m-1 bg-emerald-500 rounded-sm">
                        <Link to="/Cart">Cart🛒 ({cartItems.length} items)</Link>
                    </li>
                    <li className="p-2 m-1 bg-emerald-500 rounded-sm">
                        <Link to="/Grocery">🥑Grocery</Link>
                    </li>
                    <li className="p-2 m-1 bg-emerald-500 rounded-sm">
                        Online Status{onlineStatus?"🟢":"🔴"}
                    </li>
                    <li
                            className="p-2 m-1 bg-emerald-500 rounded-sm"
                            id="login-btn" 
                            onClick={()=>{
                                loginButton=="Logout"? SetLoginButton("Login") :
                                SetLoginButton("Logout")}}>{loginButton}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;
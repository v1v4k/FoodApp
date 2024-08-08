import {headerLogo} from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const HeaderComponent = () =>{
    const [loginButton, SetLoginButton] = useState("Login");
    useEffect(()=>{
       // console.log("useEffect is called");
    },[loginButton]);

    const onlineStatus = useOnlineStatus();
    
    //console.log("Header Rendered");

    

    
    return(
        <div className = "flex justify-between  bg-pink-100">
            <div className="logo-container m-2 p-2">
                <img className="w-32 h-32" 
                alt="res-logo"
                src={headerLogo}/>
            </div>
            <div className="">
                <ul className="flex m-2 p-2">
                    <li>
                        <Link to="/"><button className="p-2 m-1 bg-pink-300 rounded-sm">🏠Home</button></Link>
                    </li>
                    <li>
                        <Link to="/About"><button className="p-2 m-1 bg-pink-300 rounded-sm">About</button></Link>
                    </li>
                    <li>
                        <Link to="/Contact"><button className="p-2 m-1 bg-pink-300 rounded-sm">☎️Contact</button></Link>  
                    </li>
                    <li>
                        <button className="p-2 m-1 bg-pink-300 rounded-sm">Cart🛒</button>
                    </li>
                    <li>
                        <Link to="/Grocery"><button className="p-2 m-1 bg-pink-300 rounded-sm">🥑Grocery</button></Link>
                    </li>
                    <li>
                        <button className="p-2 m-1 bg-pink-300 rounded-sm">Online Status{onlineStatus?"🟢":"🔴"}</button>
                    </li>
                    <li>
                        <button
                            className="p-2 m-1 bg-pink-300 rounded-sm"
                            id="login-btn" 
                            onClick={()=>{
                                loginButton=="Logout"? SetLoginButton("Login") :
                                SetLoginButton("Logout")}}>{loginButton}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;
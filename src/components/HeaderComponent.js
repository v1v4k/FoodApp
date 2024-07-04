import {headerLogo} from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const HeaderComponent = () =>{
    const [loginButton, SetLoginButton] = useState("Login");
    useEffect(()=>{
       // console.log("useEffect is called");
    },[loginButton]);
    
    //console.log("Header Rendered");

    

    
    return(
        <div className = "header">
            <div className="logo-container">
                <img className="logo" 
                alt="res-logo"
                src={headerLogo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/"><button className="header-btns">🏠Home</button></Link>
                    </li>
                    <li>
                        <Link to="/About"><button className="header-btns">About</button></Link>
                    </li>
                    <li>
                        <Link to="/Contact"><button className="header-btns">☎️Contact</button></Link>  
                    </li>
                    <li>
                        <button className="header-btns">Cart🛒</button>
                    </li>
                    <li>
                        <button
                            className="header-btns" 
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
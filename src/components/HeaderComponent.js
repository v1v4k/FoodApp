import {headerLogo} from "../utils/constants";
import { useState } from "react";
const HeaderComponent = () =>{
    const [loginButton, SetLoginButton] = useState("Login");
    return(
        <div className = "header">
            <div className="logo-container">
                <img className="logo" 
                alt="res-logo"
                src={headerLogo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>🏠Home</li>
                    <li>About Us</li>
                    <li>☎️Contact Us</li>
                    <li>Cart🛒</li>
                    <button className="login-btn" onClick={()=>
                        (loginButton=="Logout"? SetLoginButton("Login") :
                        SetClickButton("Logout"))}>{loginButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;
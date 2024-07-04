import {headerLogo} from "../utils/constants";
import { useState, useEffect } from "react";
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
                        <button 
                            className="home-btn"
                            onClick={()=>{
                            
                            }}>🏠Home
                        </button>
                    </li>
                    <li>
                        <button 
                            className="about-btn"
                            onClick={()=>{
                            
                            }}>About Us
                        </button>
                    </li>
                    <li>
                        <button 
                            className="contact-btn"
                            onClick={()=>{

                            }}>☎️Contact Us
                        </button>
                    </li>
                    <li>
                        <button 
                            className="cart-btn"
                            onClick={()=>{

                            }}>Cart🛒
                        </button>
                    </li>
                    <li>
                        <button 
                            className="login-btn" 
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
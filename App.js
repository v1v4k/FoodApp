import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () =>{
    return(
        <div className = "header">
            <div className="logo-container">
                <img className="logo" 
                alt="res-logo"
                src="https://cdn.dribbble.com/users/6037986/screenshots/17617082/media/93f3804e39388fde16bb8621ae6af1b9.jpg?resize=1200x900&vertical=center"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props)=>{
    const {resName, cuisine} = props;
    
    return(
        <div className="res-card">
            <img className="res-logo" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/>
            <h3 className="res-name">{resName}</h3>
            <h4 className="res-cuisine">{cuisine}</h4>
            <h4>★ 4.1</h4>
            <h4>30-35 mins</h4>
        </div>
    )
}

const BodyComponent = () =>{
    return(
        <div className="body-container">
            <div className="search-bar">Search</div>
            <div className="res-container">
                <RestaurantCard resName="KFC" cuisine="Burgers, Fries"/>
                <RestaurantCard resName="Meghana Foods" cuisine="Indian, Biryani"/> 
            </div>
        </div>
    )
}

 const AppLayout = () =>{
    return (
        <div>
            <HeaderComponent/>
            <BodyComponent/> 
        </div>
    )
 }

const route = ReactDOM.createRoot(document.getElementById("root"));

route.render(<AppLayout/>);
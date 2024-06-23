import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";


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
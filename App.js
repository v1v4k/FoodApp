import React from "react";
import ReactDOM from "react-dom/client";

 const Title=()=>
 {
   return <h1>MVVR Group of Companies</h1>
} 


const name = <h3>Owned by Vivek Muthyala</h3>

const HeadingComponent = ()=>{
    
    return(<div className="container">
        <Title/>
        {Title()}
        <h2>A multinational Conglomerate </h2>
        {name}
    </div>)
   
}

const route = ReactDOM.createRoot(document.getElementById("root"));

route.render(<HeadingComponent/>);
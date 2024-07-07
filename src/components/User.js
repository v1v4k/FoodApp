import { useState } from "react";
const User = (props) =>{
    const [employee]=useState(0);
    const {name, call} = props;
    return(
        
        <div className="user">
            <h1>Name:{name}</h1>
            <h2>Emloyee Id:{employee}</h2>
            <h2>Contact: mvvr@foodie.com</h2>
            <h2>Phone:{call}</h2>
            <h3>Illinois</h3>
            
        </div>
    )
}
export default User;
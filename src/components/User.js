/* import { useState } from "react";
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
export default User; */

import { useState } from "react";
import { useEffect } from "react";

const User = ({name, location}) =>{

    const [count]=useState(0);
    useEffect(()=>{
        
    },[])

    return(
    <div className="border-solid border-orange-500 border-2 m-2 p-2">
        <h1>Name : {name}</h1>
        <h2>Count : {count}</h2>
        <h2>Location : {location}</h2>
        <h3>Contact : 9878654321</h3>
        <h3>Email : vivek@foodie.com</h3>
    </div>)
}

export default User;
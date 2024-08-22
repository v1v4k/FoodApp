import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props)
        //console.log("Parent Constructor");

    }
    
    componentDidMount(){

        //console.log("Parent Comp_Did_Mount");

    }
    render(){
        //console.log("Parent Render");
        return(
        <div className="about">
            <h1>About</h1>
            <h2>This is About Us</h2>
            <UserClass oldName={"First"} place = {"Hyderabad"}/>
            {/* <UserClass name = {"Second"} location = {"Chicago"} />
            <UserClass name = {"Third"} location = {"Silicon Valley"} /> */}
            
        </div>  
    )  
    }
}
export default About;
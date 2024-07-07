import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return(
        <div className="about">
            <h1>About</h1>
            <h2>This is About Us</h2>
            {/* <User name={" Vivek Reddy Muthyala"} call={"4204204201"}/> */}
            <UserClass name={"Vivek Reddy class"} location={"Chicago"} />
        </div>
        
    )  
}

export default About;
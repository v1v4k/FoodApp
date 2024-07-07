import React, { Component } from "react";
class  UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            employee : 420420,
            count: 0

        }
        
         
    }
  
    render()
    {
        const {name, location}=this.props;
        const {employee, count}=this.state;
       return(
        <div className="user">
            <h1>Name: {name}</h1>
            <h2>Employee Id:{employee}</h2>
            <h2>Count: {count}</h2>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1
                })
                
            }}>Increase My Count</button>
            <h2>Contact: vivek@foodie.com</h2>
            <h3>Location: {location}</h3>
        </div>
       ) 
        
    };

};

export default UserClass;
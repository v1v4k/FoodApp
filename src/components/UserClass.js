/* import React, { Component } from "react";
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

export default UserClass; */

import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: 0,
            count2: 1,

            userInfo:{
                id: "Default",
                name: "Dummy",
            },
        }
        console.log(this.props.oldName +" Child Constructor");
    }

    async componentDidMount(){

        console.log(this.props.oldName+" Child Comp_Did_Mount");

        const data = await fetch("https://api.restful-api.dev/objects/7");
        const json = await data.json();
        console.log(this.state.userInfo);

        this.setState({
            userInfo: json,
        });

       // console.log(json);
       console.log(this.state.userInfo.name);
       

    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

   

    render(){
        const {oldName, place}=this.props;
        const {count, count2} = this.state;

        const {id, name}= this?.state?.userInfo;


        

       console.log(this.props.oldName +" Child Render");
      // console.log(this.state.userInfo);
        return(
            <div className="border-solid border-green-500 border-2 m-2 p-2">
                <h1>Name : {oldName}</h1>
                <button
                    className="bg-green-500 p-2" 
                    onClick={()=>{
                        this.setState({
                        count: this.state.count+1,
                    })
                }}>IncreaseMyCount</button>
                <h2>Count : {count}</h2>
                <h2>Count : {count2}</h2>
                <h2>Place : {place}</h2>
                <h3>Contact : 3128654321</h3>
                <h3>Email : vikram@foodie.com</h3>
                <h1>New Name : {name}</h1>
                <h1>New Id :{id}</h1>
            </div>)
    }
}

export default UserClass;
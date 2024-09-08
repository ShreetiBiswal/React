import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component{
  constructor(){
    super();
    
  }

  render(){
    

    return(
      <div className="about">
        <h1 className="font-bold text-2xl m-2 p-2">About us:</h1>
        <UserClass/>
        <User/>
      </div>
    )
  }

  componentDidMount(){
   
  }
}
export default AboutUs;
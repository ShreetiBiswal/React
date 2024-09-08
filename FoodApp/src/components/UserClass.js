import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    
   constructor(){//pass props in constructor
    
    super();//pass the props here also
 
    this.state={
      userInfo:{
         name:"dummy name",
         location:"dummy loc",
         id:"abc"
      }
    }

   }


   

  async componentDidMount(){
      
      const data= await fetch("https://api.github.com/users/ShreetiBiswal");
      const json=await data.json();
      this.setState({userInfo:json});  
      this.timer= setInterval(()=>{
         // console.log("timer");
      },1000);
   }

   componentDidUpdate(){
      
   }

   //Used to clear anything after leaving page
   componentWillUnmount(){
     clearInterval(this.timer);
   }

   render(){
      
    const {name,location,id}=this.state.userInfo;
    return(
        <div className="m-4 p-4 bg-gray-100 border-gray-200 hover:bg-gray-50 border-2 font-semibold">
        <h3>name:-{name?name:"No name"}</h3>
        <h4>address:-{location?location:"not specified"}</h4>
        <h4>id:{id}</h4>
        <UserContext.Consumer>
         {
            ({loggedUser})=>(<h1>User:-{loggedUser}</h1>)
         }
         </UserContext.Consumer>
         </div>
    )
   }
}

export default UserClass;

/*
constuctor
 render
 componentDidMount - once after component is rendered first time
 componentDidUpdate-afer component is updated like through setState()
 componentWillUnmount- jsut before page is left
 */

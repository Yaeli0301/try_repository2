import react, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export default function  LogIn()
{
 const userContext=useContext(UserContext)
 const [userName,setUserName]=useState();
 const [userPassword,setUserPassword]=useState();
 const [error,setError]=useState();
 
 const handleLogIn=()=>{
  if(userContext.LogIn(userName,userPassword))
  {
    Navigate ('/Home');
  }
  else{
    setError("user name or password is not valid")
    Navigate('/SignUp')
  }
 }

 
 return(

    <>
    <input type="text" placeholder="enter name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
    <input type="text" placeholder="enter password" value={userPassword}  onChange={(e)=>setUserPassword(e.target.value)}/>
    <button onClick={handleLogIn()}> <strong>LogIn</strong></button>
    {error&&<p>{error}</p>}
    </>
 )


}
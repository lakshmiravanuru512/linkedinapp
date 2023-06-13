import { useState } from "react";
import { LoginAPI } from "../Api/AuthApi";
import "../index.css";
 function LoginComponent(){
    const[credentials, setCredentials]=useState({})
    const login=async ()=>{
        try{let result=await LoginAPI(credentials.email,credentials.password);
            console.log(result);}
            catch(err){
                console.log(err.error.message);
            }
    
    }
  return (
    <div>
        <h1>LoginComponent</h1>
        <input onChange={(event)=>setCredentials({...credentials,email:event.target.value})}  placeholder="Enter your email"/><br/>
        <input onChange={(event)=>setCredentials({...credentials,password:event.target.value})} placeholder="Enter your password"/><br/>
    <button onClick={login} className=" button"> Login To LinkedIn Page
        </button>
        </div>
  )
}

export default LoginComponent
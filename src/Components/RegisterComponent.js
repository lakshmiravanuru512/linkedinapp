import { useState } from "react";
import { GoogleSigninAPI, RegisterAPI } from "../Api/AuthApi";
import "../index.css";
import LinkedinLogo from "../assets/linkedinLogo.png";
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//import { navigate } from "../helpers/useNavigate";

 export function RegisterComponent(){
    let navigate=useNavigate();
     const[credentials, setCredentials]=useState({})
     const login=async ()=>{
        try{let result=await RegisterAPI(credentials.email,credentials.password);
            toast.success("Account Created");
            navigate("/home");
        }catch(err){
                 toast.error("Cannot create your account")
             }
    
     }
     const googleSignIn=()=>{
        let res=GoogleSigninAPI();
        console.log(res);
     }
  return (
    <div  >
        <img alt="logo" src={LinkedinLogo} className="linkedinLogo"/>
        <h1 className="heading">Make the most of your professional life</h1>
       
       <div className="auth-input">
         
        <input className="common-input"  
        onChange={(event)=>setCredentials({...credentials,email:event.target.value})} 
         placeholder="email or phone number"
         type="email"/><br/>
        <input  className="common-input" 
        onChange={(event)=>setCredentials({...credentials,password:event.target.value})}
         placeholder="password (6 or more characters)"
         type="password"/><br/>
    <button onClick={login} className=" button">Agree & join  </button>
            </div>
            <div>
            <hr className="hr-text" data-content="OR"></hr>
            <div className="google-btn-container">
            <GoogleButton className="google-btn"
            onClick={googleSignIn}/>
            <p className="sign-up">Already on Linkedin? <span className="join-now" onClick={()=>navigate("/")}>Sign in</span> </p>              
            </div>
            </div>
    </div>
  )
}


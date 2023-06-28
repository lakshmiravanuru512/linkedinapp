import { useState } from "react";
import { GoogleSigninAPI, LoginAPI } from "../Api/AuthApi";
import "../index.css";
import LinkedinLogo from "../assets/linkedinLogo.png";
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//import { navigate } from "../helpers/useNavigate";

 function LoginComponent(){
    let navigate=useNavigate();
     const[credentials, setCredentials]=useState({})
     const login=async ()=>{
        try{let result=await LoginAPI(credentials.email,credentials.password);
            toast.success("Signed In to the Linkedin");
            navigate("/home");
             localStorage.setItem("userEmail", login.user.email);
        }catch(err){
                 toast.error("Please Check Your emailid or password")
             }
    
     }
     const googleSignIn=()=>{
        let res=GoogleSigninAPI();
        navigate("/home");
     }
  return (
    <div  >
        <img alt="logo" src={LinkedinLogo} className="linkedinLogo"/>
        <h1 className="heading">Sign In</h1>
        <p className="subHeading">Stay updated on your professional world.</p>
       <div className="auth-input">
         
        <input className="common-input"  
        onChange={(event)=>setCredentials({...credentials,email:event.target.value})} 
         placeholder="email or phone"
         type="email"/><br/>
        <input  className="common-input" 
        onChange={(event)=>setCredentials({...credentials,password:event.target.value})}
         placeholder="Enter your password"
         type="password"/><br/>
    <button onClick={login} className=" button">Sign in  </button>
            </div>
            <div>
            <hr className="hr-text" data-content="OR"></hr>
            <div className="google-btn-container">
            <GoogleButton className="google-btn"
            onClick={googleSignIn}/>
            <p className="sign-up"> New to Linkedin? <span className="join-now" onClick={()=>navigate("/register")}>Join now</span> </p>              
            </div>
            </div>
    </div>
  )
}

export default LoginComponent
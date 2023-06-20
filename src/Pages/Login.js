import React,{useEffect,useState} from 'react';
import  LoginComponent  from '../Components/LoginComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { Loader } from '../Components/common/Loader';

export const Login = () => {
  const [loading, setLoading]=useState(true);
  const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (res)=>{
       if(!res?.accessToken){

        navigate("/home")
       }else{
        setLoading(false);
       }
    })
},[])
  return (
    loading?<Loader/> : <LoginComponent/>
  )
}

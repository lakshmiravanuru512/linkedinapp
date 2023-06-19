import React,{useEffect,useState} from 'react';
import { HomeComponent } from '../Components/HomeComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Components/common/Loader';

export const Home = () => {
    const[loading, setLoading]=useState(true);
    const navigate=useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (res)=>{
          if(!res?.accessToken){
            navigate("/");
          }else{
            setLoading(false);
          }
        })
    },[])
  return (
   !loading? <Loader/> : <HomeComponent/>
  )
}   

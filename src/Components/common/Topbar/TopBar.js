import React from 'react';
import linkedinLogo from "../../../assets/linkedinLogo.png";
import { AiOutlineHome,AiOutlineUserSwitch,AiOutlineSearch,AiFillMessage,AiOutlineBell} from 'react-icons/ai';
import {BsBriefcaseFill} from "react-icons/bs";
import user from "../../../assets/user_icon.png";
import { useNavigate } from 'react-router-dom';


export const TopBar = () => {
    const navigate=useNavigate();
    const goTo=(route)=>{
        navigate(route);
    }
  return (
    <div className='tobpar-main'>
        <img alt='logo' className='linkedinLogo' src={linkedinLogo}/>
        <div className='icons'>
            <AiOutlineSearch size={30} className='icon'/>
        <AiOutlineHome size={30} className='icon' onClick={()=>goTo("/home")}/>
        <AiOutlineUserSwitch size={30} className='icon'/>
        <AiFillMessage size={30} className='icon'/>
        <BsBriefcaseFill size={30} className='icon'/>
        <AiOutlineBell size={30} className='icon'/>
        </div>
        <img src={user} className='linkedinLogo user-logo ' alt='user' size={30} />
    </div>
  )
}

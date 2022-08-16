import React,{useState} from 'react'
import './Sidebar.css';
import {Grid} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BlueUserIcon from './../../Assets/dashboardicon/User_fill.png';
import WhiteUserIcon from './../../Assets/User_fill.png';
import { useNavigate } from "react-router-dom";
import WhiteHeartIcon from './../../Assets/Vector.png';
import BlueHeartIcon from './../../Assets/dashboardicon/Vector.png';

import WhiteCalendar from './../../Assets/Calendar/Calendar_Days.png';
import BlueCalendar from './../../Assets/dashboardicon/Calendar/Calendar_Days.png';

import WhiteFeedback from './../../Assets/Icon.png';
import BlueFeedback from './../../Assets/dashboardicon/Icon.png';

import WhiteNotification from './../../Assets/Communication/Bell.svg';
import BlueNotification from './../../Assets/dashboardicon/Communication/Bell.png';

import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = ({type}) => {
    let navigate = useNavigate();

    const [menuType,setMenuType] = useState(type)

  return (
    <div className='sidebar_Main'>
        
    <div className='menu_sub_div'>
        <MenuIcon className='sidebar_menu_icon' />
    </div>

    <div className='menuDiv avatarSidebarDiv' onClick={()=>{
        navigate('/')
        }}>
        <HomeIcon height={25} width={25}   />
        <p style={{marginTop:4}}>HOME</p>
    </div>

    <div className='menuDiv' onClick={()=>{
        setMenuType('profile')
        navigate('/Profile')
        }}>
        {
            menuType=='profile' ?
        <img src={BlueUserIcon} height={25} width={25}   />
        :
        <img src={WhiteUserIcon} height={25} width={25}   />
        }
        <p style={menuType=='profile' ? {marginTop:4,color:'#3DB2E2'} : {marginTop:4}}>PROFILE</p>
    </div>

    <div className='menuDiv' onClick={()=>{
        setMenuType('notification')
        navigate('/Notification')
        }}>
        {
            menuType=='notification' ?
            <img src={BlueNotification} height={25} width={25}   />
            :
            <img src={WhiteNotification} height={25} width={25}   />
        }
        <p style={menuType=='notification' ? {marginTop:4,color:'#3DB2E2'} : {marginTop:4}}>NOTIFICATION</p>     

    </div>

    <div className='menuDiv' onClick={()=>{
        setMenuType('calender')
        navigate('/TableView')
    }}>
        {
            menuType=='calender' ?
            <img src={BlueCalendar} height={25} width={25}  />
            :
            <img src={WhiteCalendar} height={25} width={25}  />
        }   
        <p style={menuType=='calender' ? {marginTop:4,color:'#3DB2E2'} : {marginTop:4}}>CALENDAR</p>          
        
    </div>

    <div className='menuDiv' onClick={()=>{
        setMenuType('heart')
        navigate('/EventBusiness')
    }}>
        {
            menuType=='heart' ?
            <img src={BlueHeartIcon} height={25} width={25}  />
            :
            <img src={WhiteHeartIcon} height={25} width={25}  />
        }   
        <p style={menuType=='heart' ? {marginTop:4,color:'#3DB2E2'} : {marginTop:4}}>FAVOURITE</p>               
        
    </div>

    <div className='menuDiv' onClick={()=>{
        setMenuType('feedback')
        navigate('/FeedbackComplaint')
    }}>  
    {
        menuType=='feedback' ?
        <img src={BlueFeedback} height={25} width={25}  />
        :
        <img src={WhiteFeedback} height={25} width={25}  />
    }  
        <p style={menuType=='feedback' ? {marginTop:4,color:'#3DB2E2',marginBottom:0} : {marginTop:4,marginBottom:0}}>FEEDBACK/</p><span style={menuType=='feedback' ? {marginTop:0,color:'#3DB2E2',} : {} }>COMPLAINT</span>            
        
    </div>

    <div className='menu_logoutDiv menuDiv' onClick={()=>{navigate('/')}}>        
    <LogoutIcon height={25} width={25}   />
        <p style={{marginTop:4}}>Log Out</p>                    
    </div>

    </div>
  )
}

export default Sidebar
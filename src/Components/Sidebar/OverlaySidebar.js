import MenuIcon from '@mui/icons-material/Menu';
import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './OverlaySidebar.css';
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    bgcolor: 'black',
    height:'85%',
    border: '2px solid #000',
    boxShadow: '4px 1px 6px 1px white',
    p: 4,
    borderRadius:5
  };


const OverlaySidebar = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let navigate = useNavigate();

    var currentActive = localStorage.getItem('currentActive')
    const [menuType,setMenuType] = useState(currentActive ? currentActive : 'profile')

    return (
    <div className='overlaySidebarMain'>

{/* beginning of modal */}

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>


        <div className='overlayMenuDiv overlayAvatarSidebarDiv' onClick={()=>{
        navigate('/')
        }}>
        <HomeIcon height={20} width={20}   />
        <p style={{marginTop:4,fontSize:15}}>HOME</p>
    </div>


        <div className='overlayMenuDiv' onClick={()=>{
        setMenuType('profile')
        navigate('/Profile')
        localStorage.setItem('currentActive','profile')
        }}>
        {
            menuType=='profile' ?
        <img src={BlueUserIcon} height={20} width={20}   />
        :
        <img src={WhiteUserIcon} height={20} width={20}   />
        }
        <p style={{marginTop:4,fontSize:15}}>Profile</p>
    </div>

    <div className='overlayMenuDiv' onClick={()=>{
        setMenuType('notification')
        localStorage.setItem('currentActive','notification')
        navigate('/Notification')
        }}>
        {
            menuType=='notification' ?
            <img src={BlueNotification} height={20} width={20}   />
            :
            <img src={WhiteNotification} height={20} width={20}   />
        }
        <p style={{marginTop:4,fontSize:15}}>Notification</p>     

    </div>

    <div className='overlayMenuDiv' onClick={()=>{
        setMenuType('calender')
        localStorage.setItem('currentActive','calender')
        navigate('/TableView')
    }}>
        {
            menuType=='calender' ?
            <img src={BlueCalendar} height={20} width={20}  />
            :
            <img src={WhiteCalendar} height={20} width={20}  />
        }   
        <p style={{marginTop:4,fontSize:15}}>Calendar</p>          
        
    </div>

    <div className='overlayMenuDiv' onClick={()=>{
        setMenuType('heart')
        localStorage.setItem('currentActive','heart')
        navigate('/EventBusiness')
    }}>
        {
            menuType=='heart' ?
            <img src={BlueHeartIcon} height={18} width={18}  />
            :
            <img src={WhiteHeartIcon} height={18} width={18}  />
        }   
        <p style={{marginTop:4,fontSize:15}}>Favourite</p>               
        
    </div>

    <div className='overlayMenuDiv' onClick={()=>{
        setMenuType('feedback')
        localStorage.setItem('currentActive','feedback')
        navigate('/FeedbackComplaint')
    }}>  
    {
        menuType=='feedback' ?
        <img src={BlueFeedback} height={18} width={18}  />
        :
        <img src={WhiteFeedback} height={18} width={18}  />
    }  
        <p style={{marginTop:4,fontSize:15}}>Feedback</p>            
        
    </div>

    <div className='overlayMenu_logoutDiv overlayMenuDiv' onClick={()=>{navigate('/')}}>        
    <LogoutIcon height={20} width={20}   />
        <p style={{marginTop:4,fontSize:15}}>Log Out</p>                    
    </div>


        </Box>
      </Modal>

{/* ending of modal */}

<div className='menu_sub_div1'>
        <MenuIcon className='overlaySidebar_menu_icon' onClick={handleOpen} />

    </div>
    <div className='overlayListMain'>
    <div className='menuDivOver avatarSidebarDivOver' onClick={()=>{
        navigate('/')
        }}>
        <HomeIcon height={20} width={20}   />
    </div>
    <div className='menuDivOver overlayShowedMenu' onClick={()=>{
        setMenuType('profile')
        navigate('/Profile')
        }}>
        {
            menuType=='profile' ?
        <img src={BlueUserIcon} height={20} width={20}   />
        :
        <img src={WhiteUserIcon} height={20} width={20}   />
        }
    </div>

    <div className='menuDivOver overlayShowedMenu' onClick={()=>{
        setMenuType('notification')
        navigate('/Notification')
        }}>
        {
            menuType=='notification' ?
            <img src={BlueNotification} height={20} width={20}   />
            :
            <img src={WhiteNotification} height={20} width={20}   />
        }

    </div>

    <div className='menuDivOver overlayShowedMenu' onClick={()=>{
        setMenuType('calender')
        navigate('/TableView')
    }}>
        {
            menuType=='calender' ?
            <img src={BlueCalendar} height={20} width={20}  />
            :
            <img src={WhiteCalendar} height={20} width={20}  />
        }   
        
    </div>

    <div className='menuDivOver overlayShowedMenu' onClick={()=>{
        setMenuType('heart')
        navigate('/EventBusiness')
    }}>
        {
            menuType=='heart' ?
            <img src={BlueHeartIcon} height={20} width={20}  />
            :
            <img src={WhiteHeartIcon} height={20} width={20}  />
        }   
        
    </div>

    <div className='menuDivOver overlayShowedMenu' onClick={()=>{
        setMenuType('feedback')
        navigate('/FeedbackComplaint')
    }}>  
    {
        menuType=='feedback' ?
        <img src={BlueFeedback} height={20} width={20}  />
        :
        <img src={WhiteFeedback} height={20} width={20}  />
    }  
        
    </div>

    <div className='menuDiv overlayShowedMenu overlayShowedMenuLogOut' onClick={()=>{navigate('/')}}>        
    <LogoutIcon height={20} width={20}   />
    </div>
    </div>
    </div>
  )
}

export default OverlaySidebar
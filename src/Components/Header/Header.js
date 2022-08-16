import React,{useState} from 'react'
import './Header.css';
import {Grid} from '@mui/material';
import HeaderImg from './../../Assets/ThingsToDoinChicagoLogoFull1.png'
import {Form} from 'react-bootstrap';
import InstaIcon from './../../Assets/instaIcon.png';
import FacebookIcon from './../../Assets/fbIcon.png';
import TikTokIcon from './../../Assets/tiktokIcon.png';
import LoginIcon from './../../Assets/login.png';
import SignUpIcon from './../../Assets/signup.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import avatar from './../../Assets/profilepicture.png'
import searchIcon from './../../Assets/search icon.svg'

const Header = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [windowWidth,setWidthWidth] = useState(window.outerWidth)
  const handleClose = () => setOpen(false);  
  let navigate = useNavigate();

  var logedIn = localStorage.getItem('logedIn');
  logedIn=parseInt(logedIn)
  localStorage.setItem('logedIn',0);
  // var windowWidth = window.outerWidth;
  window.onresize=function(){
    setWidthWidth(window.outerWidth);
  }

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
  };

  return (
    <div className='header_main'>

{/* modal beginning */}

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='headerModal'>
        <Grid container>

        <Grid item xs={12}>
              <div style={{width:'100%'}}>

              <div className='modal_header_search'>
                <Grid container>
              <Grid item md={11} sm={11} xs={11}>
                  <Form.Group  controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Search" 
    className='headerSearchInput'
    
    style={{
      border:'none',
      background:'transparent',
      height:30,
      width:'90%',
      marginLeft:25,
    }} />
  </Form.Group>
                  </Grid>
                  <Grid item md={1} sm={1} xs={1} >
  <img className='searchIconImg'  src={searchIcon} height={18} style={{marginTop:0,cursor:'pointer'}} />
                  </Grid>
                  </Grid>
              </div>


              <p style={{color:'#EF6F6F',fontSize:20,fontWeight:600}}>Subscribe</p>
              <img  src={InstaIcon} height={25} width={25} />
              <img  style={{marginLeft:15}} src={FacebookIcon} height={25} width={25} />
              <img  style={{marginLeft:15}} src={TikTokIcon} height={25} width={25} />
              <br/>
              {
               logedIn==0 &&
              
              <div 
              onClick={()=>
                navigate('/Login')
              }
              className='header_icon_last' style={{float:'left',marginTop:0,marginLeft:-5}} >
                <span style={{marginLeft:-2,position:'relative',top:1.2,fontWeight:'bold'}}>Sign up</span>
              </div>
              }
              {
               logedIn==0 &&

              <div 
              onClick={()=>
                navigate('/Login')
              }
              className='header_icon_last_two' style={{float:'left',marginLeft:25,marginTop:0}} >
              <span  style={{color:'#fff',marginLeft:-2,position:'relative',top:1.8}}>Login</span>
              </div>
}
              </div>
            </Grid>
          
            </Grid>
        </Box>
      </Modal>

{/* modal ended */}

        <Grid container style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Grid item xl={2} lg={2.5} md={2.3} sm={windowWidth>600 ? 2.3 : 10} xs={logedIn==1 ? 8 : 10}>
              <img src={HeaderImg} className='header_icon' height={100} width={280} onClick={()=>navigate('/')} />
            </Grid>
            {
    windowWidth>600 &&

            <Grid item xl={6} lg={5.4} md={6.1} sm={windowWidth>699 ? 6.1 : windowWidth>650 ?  6.1 : 6.1} xs={9}>
              <div className='header_search'>
                  <Form.Group  controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Search" 
    className='headerSearchInput'
    style={{
      border:'none',
      background:'transparent',
      height:30,
      width:'90%',
      marginLeft:15,
    }} />
  </Form.Group>
  <img className='searchIconImg'  src={searchIcon} height={18} style={{marginTop:0,cursor:'pointer'}} />

              </div>
            </Grid>
            }
            {
              (logedIn==1 && windowWidth<600) &&
              <Grid item xs={2}>
                <img src={avatar} className='headerAvatarDiv1' style={{marginTop:-10}} onClick={()=>navigate('/Profile')} />
              </Grid>
            }
            {
               windowWidth<601 &&
               <Grid item xs={2}>
                     <MenuIcon className='headerMenuIcon' onClick={handleOpen} />
                 </Grid>
}
{

    windowWidth>600 &&
            <Grid item xl={3.7} lg={3.8} md={3.5} sm={windowWidth>699 ? 3.5 :windowWidth>650 ? 3.5 : 3.5} xs={11}>
              <div className='subscription_div' style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
              <span className='subscribe_txt' style={{color:'#EF6F6F',fontSize:24}}>Subscribe</span>
              <div>
              <img className={logedIn==0 ? 'header_sub_icon first_header_sub_icon'  :'header_sub_icon first_header_sub_icon'} src={FacebookIcon} height={30} width={30} />
              <img className={logedIn==0 ? 'header_sub_icon' :'header_sub_icon'} src={InstaIcon} height={30} width={30} />
              <img className={logedIn==0 ? 'header_sub_icon' :'header_sub_icon'} src={TikTokIcon} height={30} width={30} />
              </div>
              <div>
              {
               logedIn==1 &&
                <img src={avatar} className='headerAvatarDiv' style={{marginLeft:20}}  onClick={()=>navigate('/Profile')} />
}
{
               logedIn==0 &&
             <div className='header_icon_last_two'  onClick={()=>navigate('/Login')}>
              <span  style={{color:'#fff',marginLeft:-2,position:'relative',top:0.5}}>Login</span>
              </div>
}


             {
               logedIn==0 &&
              <div className='header_icon_last'  onClick={()=>navigate('/Login')}>
                <span style={{marginLeft:-2,position:'relative',top:0.5,fontWeight:'bold'}} >Sign up</span>
              </div>
             }
              </div>
              </div>
            </Grid>
}
        </Grid>
    </div>
  )
}

export default Header
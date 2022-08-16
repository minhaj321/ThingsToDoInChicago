import React from 'react'
import './Notification.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import {Grid} from '@mui/material';
// import TextsmsSharpIcon from './../../Assets/sms.svg';
import CloseIcon from './../../Assets/Close_SM-1.png'
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import OverlaySidebar from './../../Components/Sidebar/OverlaySidebar';
import TextsmsSharpIcon from '@mui/icons-material/TextsmsSharp';

const Notification = () => {

    var windowWidth = window.outerWidth;

    var arr=[
        {title:'Birthday party' , msg:'for someone as sweet as you here wishing you a birthday party'},
        {title:'Jim visit' , msg:'There is a new jim opening next to your street'},
        {title:'Musical Event' , msg:'An event to bring music lovers from all around the world'},
        {title:'Kid party' , msg:'A party for kids with many games'},
        {title:'Food Festival' , msg:'I would like to invite you for the food festival'},
    ]

    return (
    <div>
        <Grid container>
        <Grid item xl={1} lg={1.3} md={1.6} sm={2} xs={1}>
              {
                windowWidth>599 &&
                <Sidebar type='notification' />
              }
              {
                windowWidth<600 &&
                <OverlaySidebar/>
              }
            </Grid>
            <Grid item md={10} sm={10} xs={11}>
                <div className='notificationMain'>
                    <Grid container>
                    <Grid item md={12} xs={12} sm={12} textAlign='left'>
                        <p style={{color:'#464444',fontSize:20,fontWeight:700}}>NOTIFICATIONS</p>
                    </Grid>
                    {
                        arr.map((v,i)=>(

                    <Grid item md={12} xs={12} textAlign='left' mt={4} sm={12}>
                        <div className='notificationCard'>
                            <Grid container>
                                <Grid item md={1} sm={1} xs={2}>
                                    <TextsmsSharpIcon className='msgIconNoti' style={{color:'#3db2e2',height:20,width:20,paddingLeft:8,paddingTop:8}} />
                                </Grid>
                                <Grid item md={9.8} sm={10} xs={9}>
                                    <p className='notificationDate'>DATE <FiberManualRecordSharpIcon style={{height:5}} className='noti_Date_dot' /> NOW</p>
                                    <p className='notificationTitle'>{v.title}</p>
                                    <p className='notificationMsgs'>{v.msg}</p>
                                </Grid>
                                <Grid item md={1.2} sm={1} xs={1} >
                                    <img src={CloseIcon} className='notification_close' height={30} width={30} /> 
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                        )
                        )
                    }

            </Grid>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Notification
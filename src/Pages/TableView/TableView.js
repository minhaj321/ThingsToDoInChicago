import React,{useState} from 'react'
import './TableView.css';
import {Grid} from '@mui/material';
import WhiteCalender from './../../Assets/Calendar/Calendar_Days.png'
import BlackCalender from './../../Assets/ical icon.svg'
import Sidebar from '../../Components/Sidebar/Sidebar';
import CalenderComp from './../../Components/CalenderComp/CalenderComp.js';
import OverlaySidebar from './../../Components/Sidebar/OverlaySidebar';
import EventImg from './../../Samples/i1.jpg'

const TableView = () => {

    const [typeCalender,setTypeCalender] = useState(true)
    const [windowWidth,setWindowWidth] = useState(window.outerWidth)
    
    window.onresize=function(){
        setWindowWidth(window.outerWidth)
    }

    return (
    <div>
        
        <Grid container>

        <Grid item xl={1} lg={1.3} md={1.6} sm={2} xs={1}>
              {
                windowWidth>599 &&
                <Sidebar type='calender' />
              }
              {
                windowWidth<600 &&
                <OverlaySidebar/>
              }
            </Grid>


            <Grid item md={10} sm={10} xs={11}>

                <div className='CalenderTableMain'>
                    <Grid container>
                    <Grid item md={10} sm={12} xs={12}  m={'auto'} >
                    <div style={{textAlign:'left'}}>
                {typeCalender &&
                    <span>This is your calender.Events that you add to your calender will show in this page .You can
                        <span style={{color:'#4DC4F1',cursor:'pointer'}}> sync this calender </span> to your ical or googleCalender
                    </span>
                }
            </div>

                    </Grid>
                    <Grid item md={11} mt={2} sm={12} xs={12} mb={2} textAlign='right'>
                        <div className='TableViewBtnGroup'>
          <div onClick={()=>setTypeCalender(true)}  className={!typeCalender ? 'CalenderViewBtn' : 'TableViewBtn' }>
                    <span style={{fontWeight:500,fontSize:16}} >
                        Calender View
                    </span>
                </div>
                <div   onClick={()=>setTypeCalender(false)}  className={typeCalender ? 'CalenderViewBtn' : 'TableViewBtn' }>
                    <span style={{fontWeight:500,fontSize:16}} >
                        Table View
                    </span>
                </div>
                </div>
          </Grid>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        {typeCalender ?
        <CalenderComp /> :
            [1,2,3,4].map((v,i)=>(

                        <Grid container mt={windowWidth>599 ? 1 : 2} >
                            <Grid item md={2} sm={2.5} xs={2} mt={windowWidth>599 ? 0.2 : 0}>
                                <div className='tableViewDateDiv'>
                                    <p className='tableViewDateDivYear'>2022</p>
                                    <p className='tableViewDateDivDate'>14</p>
                                    <p className='tableViewDateDivMonth'>{windowWidth>590 ? 'December' : 'Dec'}</p>
                                </div>
                            </Grid>

                            <Grid item md={10} sm={9.5} xs={10}>
                                <div className='tableViewEventDiv'>
                                    <Grid container style={{height:'100%',overflow:'hidden'}}>
                                        <Grid item lg={2} md={3} sm={3} xs={3}>
                                        <img src={EventImg} className='TableImg' style={{height:'93.5%',marginTop:'0%',width:'90%',marginLeft:'-9%',borderRadius:2}} />
                                        </Grid>
                                        <Grid item lg={6} md={4} sm={3} xs={3} textAlign={'left'} style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}} className='TableCOntenntDiv'>
                                            <p style={{marginBottom:0,fontWeight:500}}>{windowWidth>550 ? 'Event name' : 'Name...'}</p>
                                            <p style={{marginTop:0,color:'rgb(136, 135, 135)',fontSize:15}}>Address</p>
                                            <p style={{fontSize:17,fontWeight:600}}>{windowWidth>550 ? 'Event Type'  :'Type...'}</p>
                                        </Grid>
                                        
                                        <Grid item lg={4} md={5} sm={6} xs={6} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

          <div  className='AddToGoogleCalenderBtn'>
            <Grid container>
                <Grid item lg={2} md={3} sm={3} xs={3}>
                    <img  className='whiteCalIcon'  src={WhiteCalender} height={20} width={20} style={{float:'left',marginLeft:20}} />
                </Grid>
                <Grid item lg={10} md={9} sm={9} xs={9}>

                    <span className='googleBtnTable' style={{color:'white',fontWeight:500,fontSize:13}} >
                        Add to google Calender 
                    </span>
                </Grid>
            </Grid>
                </div>
                
                <div  className='AddToICalenderBtn'>
                <Grid container>
                <Grid item  lg={2} md={3} sm={3} xs={3}>
                <img  className='blackCalIcon' src={BlackCalender} height={18} width={18}  style={{float:'left',marginLeft:20}} />
                </Grid>
                <Grid item lg={10} md={9} sm={9} xs={9}>
                <span className='addToIcalTxt' style={{color:'black',fontWeight:500,fontSize:13}} >
                            Add to ICal 
                        </span>
                </Grid>
            </Grid>

                </div>

                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>

                        </Grid>
            ))
        }

                    </Grid>
                </div>

            </Grid>
        
        </Grid>

    </div>
  )
}

export default TableView
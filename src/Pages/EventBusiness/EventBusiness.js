import React,{useState} from 'react'
import './EventBusiness.css';
import {Grid} from '@mui/material';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Form } from 'react-bootstrap';
import BackIcon from './../../Assets/backward.png';
import ForwardIcon from './../../Assets/forward.png';
import CardComponent from './../../Components/Card/Card';
import OverlaySidebar from './../../Components/Sidebar/OverlaySidebar';
import IceImg from './../../Assets/amy-tran-GOsvNr-q2ko-unsplash1.png';
import Alice from './../../Assets/ruth-paradis-HUgKHsNumeQ-unsplash 2.png'

const EventBusiness = () => {

    const [type,setType] = useState(true)

    var windowWidth = window.outerWidth;
    

    return (
    
    <div>
        
        <Grid container>

        <Grid item xl={1} lg={1.3} md={1.6} sm={2} xs={1}>
              {
                windowWidth>599 &&
                <Sidebar type='heart' />
              }
              {
                windowWidth<600 &&
                <OverlaySidebar/>
              }
            </Grid>

            <Grid item md={10} sm={10} xs={11}>

                <div className='eventBusinessMain'>
                    <Grid container>
                    <Grid item md={12} sm={12} xs={12} textAlign='right'>
                        <div className='eventBusinessBtnGroup'>
          
          <div  onClick={()=>setType(!type)}   className={type ? 'eventsBtn' : 'eventsBtn shadow'  }>
              <div className={type ? 'subEventBtn' : 'subEventBtn subEventBtnToggle' }>
                    <span style={{fontWeight:480,fontSize:16}} >EVENTS</span>
              </div>
              <div className={type ? 'subEventBtn subEventBtn1': 'subEventBtn subEventBtn2Toggle' }>
                    <span style={{fontWeight:480,fontSize:16}} >BUSINESSES</span>
              </div>
                </div>

                <div  onClick={()=>setType(!type)}  className={type ? 'businessBtn shadow' : 'businessBtn' }>
                    {/* <div className='subBusinessBtn'>
                    <span style={{fontWeight:500,fontSize:16}} >Businesses</span>
                    </div> */}
                    <div className={type ? 'subBusinessBtn' : 'subBusinessBtn subBusinessBtnToggle' }>
                    <span style={{fontWeight:480,fontSize:16}} >BUSINESSES</span>
              </div>
              <div className={type ? 'subBusinesssubBusinessBtnBtn subBusinessBtn1': 'subBusinessBtn subBusinessBtn2Toggle' }>
                    <span style={{fontWeight:480,fontSize:16}} >EVENTS</span>
              </div>

                </div>
                </div>
          </Grid>

                        <Grid container mt={3}>
                            <Grid item md={4} sm={6} xs={12} className='evenBusiCrdMain'>
                                <CardComponent image={IceImg} showHeart={true}
                                            txt={'NYC Snow Tubing & Brewery sdasddsa'}
                                            showDis={false}
                                            price={'149$'} 

                                            fav={true}
                                            
                                            />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12} mt={windowWidth>430 ? 0 : 2} className='evenBusiCrdMain'>
                                <CardComponent image={Alice} showHeart={true}
                                            txt={'Alice in wonderland'}
                                            showDis={false}
                                            price={'700$'}/>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12} mt={windowWidth>770 ? 0 : 2} className='evenBusiCrdMain'>
                                <CardComponent image={Alice} showHeart={true}
                                            txt={'Alice in wonderland'}
                                            showDis={false}
                                            price={'700$'}
                                            />
                            </Grid>
{ 
windowWidth<770 && 
                            <Grid item md={4} sm={6} mt={2} xs={12} className='evenBusiCrdMain'>
                                <CardComponent image={Alice} showHeart={true}
                                            txt={'Alice in wonderland'}
                                            showDis={false}
                                            price={'700$'}
                                            />
                            </Grid>
                            }
                        </Grid>
                        <Grid container mt={3} mb={2}>
          <Grid item md={6} textAlign='right' pr={3} sm={6} xs={6}>
            <img className='eventBusinessBackIcon' src={BackIcon} height={40} width={40} />
          </Grid>
          <Grid item md={6} textAlign='left' sm={6} xs={6}>
          <img className='eventBusinessForIcon' src={ForwardIcon} height={40} width={40} />
          </Grid>
        </Grid>

                    </Grid>
                </div>

            </Grid>
        
        </Grid>

    </div>
  )
}

export default EventBusiness
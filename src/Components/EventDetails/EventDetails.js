import React,{useEffect,useState} from 'react'
import {Grid} from '@mui/material';
import './EventDetails.css';
import Header from '../Header/Header';
import FirstImg from './../../Assets/anton-8eG73NjiHao-unsplash11.png';
import VineImg from './../../Assets/yutacar-JKMnm3CIncw.jpg';
import CheeseImg from './../../Assets/cheeseImg1.png';
import IceCream from './../../Assets/iceCream1.png';
import ShareIcon from './../../Assets/shareIcon.png';
import LikeIcon from './../../Assets/heartPlusIcon.png';
import CalenderIcon from './../../Assets/ical icon.svg';
import SecondCalIcon from './../../Assets/cal icon.svg';
import Description from '../Description/Description';
import profilepicture from './../../Assets/china town icon.svg';
import MapPin from './../../Assets/Navigation/Map_Pin.svg';
import GroupIcon from './../../Assets/Group.png';
import FindInMap from './../FindInMap/FindInMap.js';
import CardImg from './../../Assets/bing-hao-_wqj9tC0WSE-unsplash9.png'
import {Typography} from '@mui/material'
import BreadCrum from './../../Components/BreadCrum/BreadCrum.js';
import { useNavigate } from "react-router-dom";
import ExploreCity from './../../Components/ExploreCity/ExploreCity.js';
import Footer from './../../Components/Footer/Footer.js';
import PlanTrip from './../../Components/PlanTrip/PlanTrip.js';
import SelectTIcketModal from './../SelectTIcketModal/SelectTIcketModal';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent.js';
import ImageModal from '../../Components/ImageModal/ImageModal.js';

const EventDetails = () => {

let navigate = useNavigate();
const [open, setOpen] = useState(false);
const [showBtnComp,setShowBtnComp] = useState(false);

const handleOpen = () => setOpen(true);
const [windowWidth,setWindowWidth] = useState(window.outerWidth);
const handleClose = () => {
  setOpen(false)
}
window.onresize = function(ev) {
    setWindowWidth(window.outerWidth)
}
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY+670) >= document.body.offsetHeight) {
        setShowBtnComp(false)
    }else{
        setShowBtnComp(true)
    }
};

useEffect(()=>{
    window.scrollTo(0,0)
    },[])


    const [open2, setOpen2] = useState(false);
    const [imgCount,setImgCount] = useState(1)
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);


    const handleModal =(val)=>{
        handleOpen2()
        setImgCount(val)
    }

  return (
    <div>
        {
open2 &&
            <div style={{zIndex:1,height:'100vh',width:'100vw',marginTop:'0vh',background:'black',opacity:0.6,position:'fixed'}}>
    </div>
    }

<ImageModal open={open2} setImgCount={setImgCount} imgCount={imgCount} setOpen={setOpen2} handleOpen={handleOpen2} handleClose={handleClose2} />

{
showBtnComp &&
<ButtonComponent handleOpen={handleOpen} />
        }
        <Header/>
        <div className='totalBackground total1' style={{height:115,width:'100%',background:'#F2F6FF',position:'absolute',zIndex:-1,top:'630px'}}></div>

        <div className='eventDetailsMain' style={{width:'85%',margin:'auto'}}>

        <Grid container textAlign={'left'}>
            
            <Grid item md={8.4} sm={8} xs={12} >
<div className='eventDetailsNewDiv' style={{width:'96%',marginLeft:'auto'}}>
<BreadCrum
      lst={[ {
        name:'back to homepage',
        url:'/'
      } ]}
      detailsPage={true}
      />

                <Grid container>
                    <Grid item md={6} sm={12} xs={12}>
                        <img className='eventDetailsImg1 eventDetailsImg11' onClick={()=>handleModal(0)} src={FirstImg} width={'99%'} height={432.5} />
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                        <Grid container>
                            <Grid item md={12} sm={6} xs={6}>
                                <img className='eventDetailsImg12' onClick={()=>handleModal(1)} width={'98%'} height={212} src={VineImg} />
                            </Grid>
                            <Grid item md={12} sm={6} xs={6} mt={windowWidth>899 ?  -0.7 : -0.6}>
                                <img  className='eventDetailsImg13' onClick={()=>handleModal(2)} width={'98%'} height={212} src={CheeseImg} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                    <Grid container>
                            <Grid item md={12} sm={6} xs={6}>
                                <img className='eventDetailsImg14' onClick={()=>handleModal(2)} width={'98%'} height={212} src={CheeseImg} />
                            </Grid>
                            <Grid item md={12} sm={6} xs={6} mt={windowWidth>899 ?  -0.7 : -0.6}>
                                <img className='eventDetailsImg15' onClick={()=>handleModal(3)} width={'98%'} height={212} src={IceCream} />
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid container style={{paddingBottom:20,marginTop:5}}>
                <Grid item>
                    {/* <div className='detailsShareAddDiv'> */}
                        <div style={{textAlign:'left'}}>
                        <h2  style={{color:'#373737',marginTop:0,fontSize:30,marginLeft:5,fontWeight:798,letterSpacing:-0.5}} className='Doll33IEvent'><span className='D33'>$33</span> ChiTown Drive-In New Movies Announced</h2>
                        <Grid container style={{marginTop:windowWidth>1210 ? -15 : 0}}>
                            <Grid item  lg={windowWidth>1210 ? 2 : 2.3} md={windowWidth>1030 ? 2.2 : 3} sm={windowWidth>899 ?5 : 3} xs={3}>
                                <div className='detailsShareDiv sha1'>
                                    <img src={ShareIcon} height={25} className='shareIcon'  />
                                    <span className='shareTxt'> Share</span>
                                </div>
                            </Grid>
                            <Grid item lg={windowWidth>1210 ? 3.9 : 4.4} md={windowWidth>1030 ? 4.2 : 3.8} ml={1} sm={windowWidth>899 ? 5 : 5} xs={6.5}>
                            <div className='detailsFavouriteDiv fav1'>
                                    <img src={LikeIcon} height={25} className='favouriteIcon'  />
                                    <span className='favouriteTxt'> Add to favourites</span>
                                </div>

                            </Grid>
                            <Grid item lg={windowWidth>1210 ?3.7 : 4.4} md={windowWidth>1030 ? 4 : 4.2} ml={windowWidth>899 ? 1 : 0} sm={5} xs={windowWidth>426 ? 4 : 6} mt={windowWidth>899 ? 0 : 1}>
                            <div className='detailsCalenderDiv cal1'>
                                    <img src={SecondCalIcon} height={25} className='eventDETcalenderIcon'  />
                                    <span className='calenderTxt'> Add to Calender</span>
                                </div>

                            </Grid>
                            </Grid>
                        </div>
                    {/* </div> */}
                </Grid>
                </Grid>


                <Description/>
                {
                    windowWidth>599 &&
                <h1 style={{fontSize:24,color:'#333333',marginBottom:10,marginTop:30}}>Find it on map</h1>
                }
                
                </div>
            </Grid>
            <Grid item md={3.6} sm={4} xs={12} mt={5} >
                <div  className='detailsSecondDiv secondDivOfChange' style={{width:'60%',background:'white',borderRadius:5,marginLeft:'auto',marginRight:30,boxShadow:'1px 1px 4px 2px gray'}}>
                    <div style={{width:'90%',margin:'auto'}}>
{
    [1,2,3,4].map((v,i)=>(

                    <Grid container>
                        <Grid item lg={6} md={6} mt={8} sm={6} xs={6}>
                            <img src={profilepicture} className='chiTownImg'  width={'85%'} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6} textAlign='left'>
                            <h2 className='CHitownTxt' style={{fontWeight:600,fontSize:30}}>ChiTown Movies Present- The Notebook</h2>
                        </Grid>

    <Grid container className='chiDateDiv'>
        <Grid item md={2.5} sm={2} xs={2}>
            <img src={CalenderIcon} height={20} width={20} className='eventDetailsCalIcon' />
        </Grid>
        <Grid item  textAlign='left' md={9.5} sm={10} pl={1} xs={10}>
            <span style={{color:'#757575',fontSize:20}} className='chiDateTxt'>Fri, Feb 11 at 9:00 PM - 11:00 PM</span>
        </Grid>
    </Grid>


    <Grid container mt={1.5} className='chiMovDiv'>
        <Grid item md={2.5} sm={2} xs={2}>
            <img src={MapPin} height={23} width={23} className='eventDetailsMapIcon' />
        </Grid>
        <Grid item textAlign='left' md={9.5} sm={10} xs={10} pl={1}>
            <span style={{color:'#757575',fontSize:20}} className='chiMovTxt'>ChiTowm Movies</span>
        </Grid>
    </Grid>
    
    <Grid container mt={1.5}  className='chiPriDiv'>
        <Grid item md={2.5} sm={2} xs={2}>
            <img src={GroupIcon} height={12} width={20} className='eventDetailsGroupIcon' />
        </Grid>
        <Grid item textAlign='left' md={9.5} sm={10} xs={10} pl={1}>
            <span style={{color:'#757575',fontSize:20}} className='chiPriTxt'>$33.00</span>
        </Grid>
    </Grid>
    <Grid md={12} textAlign='center' sm={12} xs={12}>
        <div className='getTicketsBtn'  onClick={()=>handleOpen()}>
            <span>Get Tickets</span>
        </div>
    </Grid>

<Grid item md={12} mt={2} sm={12} xs={12}>
<hr/>
</Grid>
                    </Grid>
    ))
}
                    </div>

                </div>
            </Grid>
        </Grid>

{
    windowWidth<599 &&
    <h2>Find it on map</h2>
}
        </div>
        <FindInMap/>
        <ExploreCity/>

        <div style={{width:'90%',margin:'auto'}}>
            <Grid container>
                <Grid item md={12} xs={12} textAlign='center'>
            <h2>You may like this</h2>
                </Grid>
                <Grid md={12} xs={12} item  textAlign='center'>
                    <hr style={{width:'10%',background:'purple',height:1}} />
                </Grid>
            </Grid>
        <br/><br/><br/>
            <Grid container>
                {
                    [1,2,3,4,5,6,7,8,9].map((v,i)=>(
                        <Grid item md={4} sm={6} xs={12} mt={windowWidth>899 ?  (i>2 ? 5 : 0) : (0)}>
                        <Grid container textAlign={'left'}>
                            <Grid item md={5.5} sm={5.5} xs={5.5}>
                                <img src={CardImg} className='eventDetailsImg' height={110} width={'100%'} />
                            </Grid>
                            <Grid item md={5} sm={5.5} xs={5.5} pl={1} className='eventDetailsCardsDiv'>
                                <h3 style={{marginTop:0,marginBottom:0}}>Very Harry Winter</h3>
                                <h3 style={{marginTop:3,marginBottom:0}}>Pop Up</h3>
                                {
                                   (v%3!=2) &&

                                <h3 style={{marginTop:3,marginBottom:0}}>20$</h3>
                                
                                }
                                {
                                   (v%3==2) &&

                                <h3 style={{marginTop:3,marginBottom:0}}><span style={{textDecoration:'line-through'}}>from 20$</span>15$</h3>
                                
                                }
                                {
                                   (v%3==2) &&
                                <Typography variant="span" className='offPriceInDetails'>
                                    24% Off
                                </Typography>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    ))
                }

            </Grid>
        </div>
        <br/>
    <SelectTIcketModal open={open} handleClose={handleClose} />
        
        <Footer/>
    </div>
  )
}

export default EventDetails
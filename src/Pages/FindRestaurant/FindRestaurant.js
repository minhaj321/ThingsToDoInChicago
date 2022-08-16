import React,{useEffect,useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Grid, Button } from '@mui/material';
import FirstImg from '../../Assets/anton-8eG73NjiHao-unsplash11.png'
import CheeseImg from '../../Assets/cheeseImg1.png'
import IceCream from '../../Assets/iceCream1.png';
import Rating from '@mui/material/Rating';
import FeaturedIn from '../../Components/FeaturedIn/FeaturedIn.js';
import ExploreCity from '../../Components/ExploreCity/ExploreCity'
import PlanTrip from '../../Components/PlanTrip/PlanTrip'
import './FindRestaurant.css'
import hearticon from '../../Assets/hearticon.png';
import Header from './../../Components/Header/Header'
import BreadCrum from '../../Components/BreadCrum/BreadCrum';
import CalenderIcon from '../../Assets/Calendar/Calendar_Days-14.svg';
import ShareIcon from './../../Assets/shareIcon.png';
import LikeIcon from './../../Assets/heartPlusIcon.png';
import InstaIcon from './../../Assets/instaIcon.png';
import FacebookIcon from './../../Assets/fbIcon.png';
import TikTokIcon from './../../Assets/tiktokIcon.png';
import FemaleIcon from '@mui/icons-material/Female';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VidePlayerImg from './../../Assets/video icon.svg';
import  AccordianComp from './../../Components/AccordianComp/AccordianComp.js';
import GoogleMapReact from 'google-map-react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import VineImg from '../../Assets/yutacar-JKMnm3CIncw.jpg';
import Footer from './../../Components/Footer/Footer';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent.js';

var windowWidth =window.outerWidth;


const AnyReactComponent = ({ text }) => (
  <LocationOnSharpIcon style={{color:'red',fontSize:30}}/>
);


const FindRestaurant = () => {

  const [windowWidth,setWindowWidth] = useState(window.outerWidth)

window.onresize=function(){
  setWindowWidth(window.outerWidth)
}

  useEffect(()=>{
    window.scrollTo(0,0);
     },[])
     

  return (
    <div>
<ButtonComponent/>
      <Header/>
      <div className='findRestBackDiv' style={{height:120,width:'100%',background:'#f2f4ff',position:'absolute',zIndex:-1,top:'625px'}}></div>

      
        <Grid container>
          <Grid item lg={7.7} md={8} sm={8}>
            <div className='findRestFirstMain' style={{width:'88%',marginLeft:'auto'}}>
            <BreadCrum
      lst={[ {
        name:'home',
        url:'/'
      } , {
        name:'food&drink',
        url:'/find'
      } , {
        name:'find Restaurants',
        url:'/FindRestaurants'
      } , {
        name:'14 Paris Restaurant & Rhum',
        // url:'/find'
      } 
    ]}
      />


<Grid container>
                    <Grid item md={6} sm={12} xs={12}>
                        <img className='eventDetailsImg eventDetailsImg1 eventDetailsImg11' src={FirstImg} width={'99%'} height={432.5} />
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                        <Grid container>
                            <Grid item md={12} sm={6} xs={6}>
                                <img className='eventDetailsImg eventDetailsImg12' width={'98%'} height={212} src={VineImg} />
                            </Grid>
                            <Grid item md={12} sm={6} xs={6} mt={windowWidth>899 ?  -0.7 : -0.6}>
                                <img  className='eventDetailsImg eventDetailsImg13' width={'98%'} height={212} src={CheeseImg} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12}>
                    <Grid container>
                            <Grid item md={12} sm={6} xs={6}>
                                <img className='eventDetailsImg eventDetailsImg14' width={'98%'} height={212} src={CheeseImg} />
                            </Grid>
                            <Grid item md={12} sm={6} xs={6} mt={windowWidth>899 ?  -0.7 : -0.6}>
                                <img className='eventDetailsImg eventDetailsImg15' width={'98%'} height={212} src={IceCream} />
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            <Grid container>
                <Grid item md={12} xs={12} mt={-3}>
                    {/* <div className='detailsShareAddDiv'> */}
                        <div style={{textAlign:'left',paddingTop:0,paddingBottom:10}}>
                        <h2 style={{fontSize:32,color:'#333333'}} className='forteenParis'>14 Paris Restaurant & Rhum</h2>

                        <Grid container >
                            <Grid item xl={windowWidth>2000 ? 1.1 :windowWidth>1720 ?  1.3 : 1.5} lg={1.8} md={1.8} sm={2.5} xs={windowWidth>320 ? 3 : 4} ml={windowWidth>899 ? 0 : windowWidth>700 ? 0 : 2}>
                                <div className='detailsShareDiv findResShareDiv'>
                                    <img src={ShareIcon} height={25} className='shareIcon'  />
                                    <span className='shareTxt'> Share</span>
                                </div>
                            </Grid>
                            <Grid item xl={windowWidth>2000 ? 2 :windowWidth>1720 ? 2.3 : windowWidth>1720 ? 2.6 : 3} lg={windowWidth>1030 ?  3.5 : 3.3} md={3.6} ml={2} sm={4.5} xs={windowWidth>380 ? 5 : 6.5}>
                            <div className='detailsFavouriteDiv findResFavouriteDiv'>
                                    <img src={LikeIcon} height={25} className='favouriteIcon'  />
                                    <span className='favouriteTxt'> Add to favourites</span>
                                </div>

                            </Grid>
                            <Grid item lg={5} md={5.8}  ml={1} sm={12} xs={12} mt={windowWidth>899 ? 0.4 : 2}>
              <div>
              <img  src={InstaIcon} height={30} width={32} style={{marginLeft:'10px'}} />
              <img  style={{marginLeft:15}} src={FacebookIcon} height={30} width={32} />
              <img  style={{marginLeft:15}} src={TikTokIcon} height={30} width={32} />
              <p className='findRestDiningTxt' style={{color:'#53A9ED',fontWeight:600,marginLeft:23,position:'relative',bottom:13,display:"inline",fontSize:14}}>DINING, ITALIAN</p>
                                </div>

                            </Grid>
                            </Grid>
                        </div>
                    {/* </div> */}
                </Grid>
                </Grid>

                <Grid container mt={2} textAlign='left'>
                    <Grid item lg={1.6} md={2.6} sm={2.7}  xs={6} pl={windowWidth>1030 ? 1 : 0}>
                        <CheckIcon style={{color:'green',height:20,width:20}} />
                        <span className='findRestCheckTxt'>Dine-in</span>
                    </Grid>
                    <Grid item lg={1.5} md={2.6} sm={2.7}  xs={6}>
                    <CheckIcon style={{color:'green',height:20,width:20}} />
                        <span className='findRestCheckTxt'>Takeout</span>
                    </Grid>
                    <Grid item  lg={1.5} md={2.6} sm={2.7}  xs={6}>
                    <CheckIcon style={{color:'green',height:20,width:20}} />
                        <span className='findRestCheckTxt'>Delivery</span>
                    </Grid>
                    <Grid item  lg={1.5} md={2.6} sm={2.7}  xs={6}>
                    <CheckIcon style={{color:'green',height:20,width:20}} />
                        <span className='findRestCheckTxt'>Patlo</span>
                    </Grid>
                </Grid>

            <Grid container>
              <Grid item md={12} xs={12}>
                <hr style={{color:'gray'}}/>
              </Grid>
            </Grid>
            
            <Grid container p={2} pl={0} mt={2} style={{background:'#DAEEF7'}}>
            <Grid item lg={3.5} md={6} sm={6} xs={6}>
            <FemaleIcon  style={{color:'#345F7E',height:20,width:20}} />
              <span className='businessOwnedTxt'>Women Owned business</span>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={6} pl={2}>
            <FavoriteIcon  style={{color:'#345F7E',height:20,width:20}} />
            <span className='businessOwnedTxt'>Minority Owned business</span>

            </Grid>
            </Grid>

            <Grid container mt={2}>
              <Grid item  md={3.3} sm={4} xs={6}>
                <div className='findResViewMoreDiv' style={{height:30,width:'70%',paddingTop:8,background:'#53A9ED',borderRadius:3}}>
                  <span style={{color:'white',fontWeight:600,fontSize:12}}>View More</span>
                </div>
              </Grid>
              <Grid item md={3.3} sm={4} xs={6}>
              <div className='findResViewTableDiv' style={{height:40,width:'70%',paddingTop:5,background:'white',border:'2px solid #53A9ED',borderRadius:3,boxSizing:'border-box'}}>
              <span style={{fontWeight:600,fontSize:12}}>View table</span>
              </div>

              </Grid>
            </Grid>

          <Grid container textAlign={'left'}> 
            <Grid item md={5.6} sm={6} xs={12}>
              <h2 style={{marginBottom:0,fontSize:24}}>Location</h2>
              <p style={{marginBottom:0,marginTop:9,fontWeight:600,fontSize:16}}>136 N. LaSalle St.,Chicago IL 60602</p>
              <p style={{color:'#53A9ED',marginTop:0,fontWeight:600,fontSize:16}}>Get Directions</p>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
            <h2 style={{marginBottom:0,fontSize:24}}>Contact</h2>
            <p style={{color:'#53A9ED',marginBottom:0,marginTop:9,fontWeight:600,fontSize:16}}>www.12345678.com</p>
            <p style={{color:'#53A9ED',marginTop:0,fontWeight:600,fontSize:16}}>((312)696)2024</p>

            </Grid>
          </Grid>

        <Grid container textAlign='left'>
          <Grid item md={12} sm={12} xs={12}>
            <h2 style={{fontSize:24}}>Description</h2>
            <p style={{fontWeight:600,fontSize:14}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </Grid>
        </Grid>


          <Grid container mt={-4}>
            <Grid item md={7}  m='auto'  sm={10} xs={11}>
              <img src={VidePlayerImg} className='videoPlayerImg' style={{height:'400px',width:'100%',marginTop:40,marginBottom:40}} />
            </Grid>
          </Grid>


          <Grid container mt={-1}>
             <Grid item md={11.4} sm={12} xs={11.5}>
           <AccordianComp/>
             </Grid>
           </Grid>

          <Grid container textAlign='left'>
               <Grid item sm={4} xs={7}>
               <h5 style={{color:'#7C7C7C',fontSize:12,fontWeight:'bold',marginBottom:5}}>Follow us</h5>
               <div style={{width:'70px',height:'30px',backgroundColor:'#E62E27',borderRadius:'5px'}}>
               </div>
           </Grid>
           </Grid>
           <Grid container textAlign={'left'} mt={2}>
               <Grid item md={4} sm={3.5} xs={12}>
                   <h5  style={{color:'#7C7C7C',fontWeight:'bold',fontSize:12,marginTop:'10px',marginBottom:3}}>RATING</h5>
                   <Rating name="half-rating-read" style={{marginTop:10}} defaultValue={5} precision={5} readOnly  className=''/>
                   <h5  style={{color:'#7C7C7C',fontWeight:'bold',fontSize:12,marginTop:'10px'}} >4/5 Stars</h5>
         
               </Grid>
           </Grid> 



            </div>

          </Grid>
          <Grid lg={4.2} md={4} sm={4} xs={12}>
          <div className='ConventionsSecondDiv'>

          <div className='ConventionsSecondFirstMainDIv FindRestSecFirstMainDiv' style={{height:200,width:'100%',marginLeft:'7%' , background:'#F2F6FF'}}>
              <br/>
              <div className='ConventionsSecondFirstDIv FindRestSecFirstDiv' style={{width:'45%',margin:'auto',height:40,background:'white',marginTop:20,border:'2px solid #D2A4A9',borderRadius:5}}>
                <Grid container pt={1}>
                  <Grid item md={3} sm={2} xs={2}>
                    <img src={CalenderIcon}  width={'50%'} className='calenderIcon findRestCalIcon' />
                  </Grid>
                  <Grid item md={9} sm={10} xs={10}>
                    <span className='viewMyCalTxt' style={{color:'#A2A2A2',fontSize:14}}>View my Calender</span>
                  </Grid>
                </Grid>
              </div>
              <div  className='ConventionsSecondFirstDIv' style={{width:'45%',margin:'auto',height:40,background:'white',marginTop:20,border:'2px solid #A1D3F4',borderRadius:5}}>

              <Grid container pt={1}>
                  <Grid item md={3} sm={2} xs={2}>
                    <img src={hearticon}  width={'50%'} className='heartIcon findRestHeartIcon' />
                  </Grid>
                  <Grid item md={9} sm={10} xs={10}>
                    <span className='viewMyFavTxt' style={{color:'#A2A2A2',fontSize:14}}>View my Favourites</span>
                  </Grid>
                </Grid>


              </div>
            </div>
            </div>

          <div className='findRestMapDiv' style={{width:'68%',margin:'auto',marginTop:10,height:'400px'}}>

          <GoogleMapReact
    //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
      defaultCenter={{
        lat: 59.955413,
        lng: 30.337844
      }}
      defaultZoom={11}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text=""
      />
    </GoogleMapReact>


      <div style={{width:'100%',height:'30px',marginTop:20,background:'#53A9ED',fontSize:12,paddingTop:12,color:'white',borderRadius:3}}>
        <span>VIEW ALL <b>RESTAURANTS</b></span>
      </div>

          </div>


          </Grid>



        </Grid>


           <div>
               <FeaturedIn/>
               <ExploreCity/>
               <PlanTrip/>
               <Footer/>
           </div>
     </div> 
  )
}

export default FindRestaurant;
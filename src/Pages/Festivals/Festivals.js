import React,{useEffect} from 'react'
import yutagar from '../../Assets/yutacar-JKMnm3CIncw.jpg';
import { Grid, Button } from '@mui/material'
import TwitterIcon from '../../Assets/Group 212.svg';
import messageicon from '../../Assets/Group 213.svg';
import instagramicon from '../../Assets/Group 224.png';
import facebookicon from '../../Assets/Group 210.svg';
import { Form } from 'react-bootstrap'
import homeBg from '../../Assets/homeBg1.png';
import './Festival.css'
import hearticon from '../../Assets/hearticon.png'
import DotSlider from '../DotSlider/DotSlider';
import ExploreCity from '../../Components/ExploreCity/ExploreCity';
import PlanTrip from '../../Components/PlanTrip/PlanTrip';
import Header from '../../Components/Header/Header';
import Mobile from '../../Assets/mobile.png';
import BreadCrum from './../../Components/BreadCrum/BreadCrum.js';
import DotSliders from './../DotSlider/DotSlider.js';
import HeartIcon from '../../Assets/hearticon.png';
import CalenderIcon from '../../Assets/cal icon.svg';
import Footer from './../../Components/Footer/Footer';

const Festivals = () => {

useEffect(()=>{

  window.scrollTo(0,0)

},[])

  return (
    <div>
      <Header/>
       <Grid container>
           <Grid item md={8} sm={8.5} xs={12}>
             <div className='festivalFirstDiv'>
               <div style={{marginLeft:-22}}>
       <BreadCrum
      lst={[ {
        name:'home',
        url:'/'
      } , {
        name:'Festivals',
        url:'/Festivals'
      } ]}
      />
      </div>
            <Grid item lg={12} md={12} sm={12} xs={12}>
         <img src={yutagar} alt='img-1' style={{width:'100%',height:'510px'}} className='yutagar-img1'/>
         <span className='footNote'>photograph: shotterstock</span>
            </Grid>
            <Grid item md={12} sm={12} xs={11.5}>
           <h2 style={{fontWeight:'800',marginLeft:'0px',fontSize:36,marginTop:0,marginBottom:0,color:'#333333'}} className='best-thing-heading'>The Best Things To Do In Chicago</h2>
           <hr style={{width:'100%',marginLeft:'0px',height:'10px',backgroundColor:'#3EB2E2',marginTop:0}} className='festival-hr'/>
           <h5 style={{marginLeft:'0px',color:'#8C8C8C',fontWeight:'normal',fontSize:16,marginTop:20,marginBottom:-5}} className='written-by-heading'>Written by: karen R Tuesday 8 febuary 2022</h5>
        
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={11.5} style={{marginLeft:'-7px',marginTop:20}} className='festivals-icon' >
              <img src={facebookicon} style={{paddingLeft:'5px'}} className='festival-facebook-icon'/>
              <img src={instagramicon} style={{paddingLeft:'5px'}} className='festival-instagram-icon'/>
              <img src={TwitterIcon} style={{paddingLeft:'5px'}} className='festival-twitter-icon'/>
              <img src={messageicon} style={{paddingLeft:'5px'}} className='festival-message-icon'/>
            </Grid>
            <Grid  lg={11} md={11} sm={11} xs={11.5} style={{marginTop:'30px'}}>
                <p style={{color:'#8C8C8C',fontSize:16,fontWeight:400}} className='publisher-paragraph'>Headed to Chicago? You've got a lot of ground to cover . This guide breaks down all the best parts of out city, from our  stunning waterfronts to our bustling neighbourhoods to our vibrant theatre district. Don't leave before you check these must-sees off your list.</p>
            </Grid>
            <Grid lg={12} md={12} sm={11} xs={11.5} style={{marginTop:'40px'}}>
               <h2 className='cheerHearing' style={{fontWeight:'700',marginLeft:'0px',color:'#333333',fontSize:24}}>Cheers to the city's craft beer scene</h2>
            </Grid>
            <Grid lg={12} md={11} sm={11} xs={11.5} style={{marginTop:'0px',marginBottom:25}}>
                <p style={{color:'#8C8C8C',fontSize:16,fontWeight:400,marginTop:-10}} className='publisher-paragraph'>Gourment to street food, italian to indonesian, cheap eats to find dining. The variety of chiacgo's culinary scene is ataunding. We're home to more than 7,000 restaurants, from <span>Michelin star winners </span> and <span>James Bread Award</span> medalists to world-famous cheese burgers and classic deep fist pizza.</p>
                <p style={{color:'#8C8C8C',fontSize:16,fontWeight:400}} className='publisher-paragraph'>Take to culinary tour of Chicago's diverse - and delicious - dining scene. Don't miss hot dining district like "Restaurant Rows" on Randolph Street and Fulton Market in the <span>West loop.</span> The trendy area is home to some of the nation's most celebrated eerefs, including Top Chef alum Stephanie Izard and her many acclaimed spots, like <span>Girl & the Goat.</span></p>
                <p style={{color:'#8C8C8C',fontSize:16,fontWeight:400}} className='publisher-paragraph'>Take to culinary tour of Chicago's diverse - and delicious - dining scene. Don't miss hot dining district like "Restaurant Rows" on Randolph Street and Fulton Market in the <span>West loop.</span> The trendy area is home to some of the nation's most celebrated chefs, including Top Chef alum Stephanie Izard and her many acclaimed spots, like <span>Girl & the Goat.</span></p>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
            <img src={yutagar} alt='img-1' style={{width:'100%',height:'510px'}} className='yutagar-img2'/>
            </Grid>
            <Grid lg={12} mt={8} mb={8}  md={11} sm={11} xs={12} style={{marginTop:60,marginBottom:100}}>
            <p style={{color:'#8C8C8C',fontSize:16,fontWeight:400}} className='publisher-paragraph'>Chicago is America's craft beer capital, home to more breweries than any other city in the country. That means no visit is complete without a trip to a local taproom for a coid one (or two).</p>
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
            <div className='festival-div'>
                <h3 style={{marginBottom:5,paddingTop:'10px',textAlign:'left',paddingLeft:'20px'}} className='save-heading'>Save 50% on admission to must-see attractions.</h3>
                <p style={{marginTop:0,color:'#8C8C8C',textAlign:'left',paddingLeft:'20px'}} className='get-convenient'>Get convenient mobile tickets,valid for 9 days. Chicago CityPASS includes admission to:</p>
            <Grid item md={12} sm={12} xs={12} style={{display:'flex'}}>
                <Grid item lg={8} md={8} xs={8}>
                <ul className='festival-ul'>
                    <li style={{textAlign:'left'}}>Shedd Aquarium</li>
                    <li style={{textAlign:'left'}}>Skydeck Chicago</li>
                    <li style={{textAlign:'left'}}>Fileld Museum</li>
                    <li style={{textAlign:'left'}}>Art institute of Chicago OR Museum of Science and Industry</li>
                    <li style={{textAlign:'left'}}>360 Chicago Observation Deck OR Adler Planetarium<br/>(Temporarily closed)</li>
                </ul>
                <div style={{textAlign:'left'}}>
                <Button variant='outlined' style={{color:'black',fontWeight:600,marginLeft:'20px',width:'180px',height:'40px',backgroundColor:'white'}} className='btn-learn-more'>Learn more</Button>
                </div>
                </Grid>

                
                <Grid item md={4} xs={4}>
                  <img src={Mobile} alt='img' style={{width:'150px',height:'300px'}} className='mobile-img'/>
                </Grid>
            </Grid>
            <Grid item md={12} style={{textAlign:'left'}}>
                <p style={{paddingTop:'40px',paddingLeft:'25px',color:'#8C8C8C',fontSize:16,fontWeight:600}}>Save up to 30% on admission to your choice of 3 top attractions great for a shorter stay.</p>
                <p style={{paddingLeft:'25px',color:'#8C8C8C',fontSize:16,fontWeight:600}} >With Chiacgo c3 by CityPASS, see 3 of the following attractions: Shedd Aquarium, Skydeck Chicago, Museum of Science and Industry, a Shoreline Sightseeing architecture River Tour, or the Centennial wheel at Navy Pire.</p>
                <Button variant='outlined' style={{color:'black',fontWeight:600,marginLeft:'20px',width:'180px',height:'40px',backgroundColor:'white'}} className='btn-learn-more'>Learn more</Button>

            </Grid>
            </div>
            </Grid>
            </div>
           </Grid>
           <Grid item md={4} sm={3.5} xs={12}>
             <div className='festivalSecondDiv'>

            <div className='festivalSecondFirstMainDIv' style={{height:175,width:'92%',margin:'auto' , background:'#F2F6FF',marginTop:40}}>
              <br/>
              <div className='festivalSecondFirstDIv' style={{width:'45%',margin:'auto',height:40,background:'white',marginTop:10,border:'2px solid #D2A4A9',borderRadius:3}}>
                <Grid container pt={1}>
                  <Grid item md={3} sm={2} xs={2}>
                    <img src={CalenderIcon}  width={'50%'} className='calenderIcon' />
                  </Grid>
                  <Grid item md={9} sm={10} xs={10}>
                    <span className='viewMyCalTxt' style={{color:'#A2A2A2',fontSize:14}}>View my Calender</span>
                  </Grid>
                </Grid>
              </div>
              <div  className='festivalSecondFirstDIv' style={{width:'45%',margin:'auto',height:40,background:'white',marginTop:20,border:'2px solid #A1D3F4',borderRadius:3}}>

              <Grid container pt={1}>
                  <Grid item md={3} sm={2} xs={2}>
                    <img src={hearticon}  width={'50%'} className='heartIcon' />
                  </Grid>
                  <Grid item md={9} sm={10} xs={10}>
                    <span className='viewMyFavTxt' style={{color:'#A2A2A2',fontSize:14}}>View my Favourites</span>
                  </Grid>
                </Grid>


              </div>
            </div>

            <h3 style={{color:'#333333',fontSize:23,marginBottom:16}}>FEATURED</h3>
                <DotSliders/>

                <h3 className='' style={{marginTop:100,marginBottom:16,color:'#333333'}}>RECOMMENDED SHOWS</h3>
                <DotSliders/>
                <h3 className='' style={{marginTop:100,color:'#333333',fontSize:23,marginBottom:16}}>GIVEAWAYS</h3>
                <DotSliders/>
                <h3 className='' style={{marginTop:100,color:'#333333',fontSize:23,marginBottom:16}}>THIS WEEK</h3>
                <DotSliders/>
                {/* <img src={} style={{width:'100%',height:300}} /> */}
                </div>
            </Grid>
       </Grid>
    
             <div className='festivals-div1'>
             <Grid item lg={12} md={12} sm={12} xs={12} style={{display:'flex'}}>
               <Grid item lg={4} md={4} sm={3} xs={3} style={{textAlign:'left'}}>
                 <img src={yutagar} alt='img-1' style={{width:'180px',height:'100%',paddingTop:'0px'}} className='festival-image10'/>
               </Grid>
               <Grid item lg={5} md={4} sm={6} xs={3} >
                 <h6 style={{color:'white',marginLeft:'35px',paddingTop:'0px',textAlign:'left',fontSize:'20px',marginTop:10,marginBottom:0}} className='miracle-heading'>MIRACLES IN THE WINDY<br/>CITY</h6>
                 <h6 style={{color:'#4DC4F1',paddingLeft:'30px',fontSize:'14px',marginTop:0,marginBottom:0}} className='see-magic-heading'>SEE MAGIC UP CLOSE & IN PERSON</h6>
                 <p style={{fontSize:'12px',textAlign:'left',marginTop:'0px',marginLeft:'35px',color:'white'}} className='chicago-most-magical'>Chicago most magical night out run 5 shows<br/>weekly in an intimate ballroom at the iconic <br/>Palmer house hotel</p>
               </Grid>
               <Grid item lg={3} md={4} sm={3} xs={6} style={{margin:'auto'}}>
                 <Button variant='outlined' className='btn-explore-more'>Explore More</Button>
               </Grid>
               </Grid>
             </div>
        <div>
        <Grid container mt={3}>
          <Grid item md={12} sm={12} xs={12}>
            <h2 className='youMayLikeFest'>Your May Like This</h2>
          </Grid>
          <div className='findRestaurantsImagesList' style={{width:'84%',margin:'auto'}}>
          <Grid container>
            <Grid item md={3} sm={6} xs={12}>
                <div className='findRestaurant_Image_Div_First find_image_Div festivals_imagesSection1'>
                <p>Mortan Salt Building Transformed into Outdoor Concert Venue The Salt Shed</p>
                    </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <div className='findRestaurant_Image_Div_Second find_image_Div festivals_imagesSection2'>
                <p>50 Black-Owned Businesses and Restaurants in Chicago</p>
                        {/* <span>Mortan Salt Building Transformed into Outdoor Concert Venue The Salt Shed</span> */}
                    </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <div className='findRestaurant_Image_Div_Third find_image_Div festivals_imagesSection3'>
                <p>The Chicago Guide To Heated Outdoor Dining</p>
                        {/* <span>Mortan Salt Building Transformed into Outdoor Concert Venue The Salt Shed</span> */}
                    </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <div className='findRestaurant_Image_Div_Fourth find_image_Div festivals_imagesSection4'>
                <p>The Chicago Guide To Heated Outdoor Dining</p>
                        {/* <span>Mortan Salt Building Transformed into Outdoor Concert Venue The Salt Shed</span> */}
                    </div>
            </Grid>
          </Grid>
          </div>
        </Grid>

          <ExploreCity/>
          <PlanTrip/>
          <Footer/>
        </div>
      
    </div>
  )
}

export default Festivals
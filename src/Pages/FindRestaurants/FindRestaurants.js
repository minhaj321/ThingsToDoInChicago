import React,{useState,useEffect} from 'react'
import './FindRestaurants.css';
import {Form} from 'react-bootstrap';
import {Grid,BasicSwitch} from '@mui/material';
import Header from '../../Components/Header/Header';
import GoogleMapReact from 'google-map-react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import FindRestCard from './../../Components/FindRestCard/FindRestCard.js';
import SearchIcon from './../../Assets/searchicon.png'
import SelectInput from './../../Components/SelectInput/SelectInput.js'
import SwitchComponent from './../../Components/SwitchComponent/SwitchComponent.js';
import DotSliders from './../DotSlider/DotSlider.js';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExploreCity from './../../Components/ExploreCity/ExploreCity.js';
import Footer from './../../Components/Footer/Footer.js';
import PlanTrip from './../../Components/PlanTrip/PlanTrip.js';
import BreadCrum from './../../Components/BreadCrum/BreadCrum.js';
import MyComponent from './../../Components/MyComponent/MyComponent';

const FindRestaurants = () => {

const [open,setOpen] = useState(false)

var windowWidth = window.outerWidth;

useEffect(()=>{

  window.scrollTo(0,0)

  setTimeout(()=>{
      setOpen(true)
  },2000)

},[])
  
  return (
    <div style={{paddingBottom:40}}>
        <Header/>
        <div className='breadCrumFindRestDiv'>
        <BreadCrum
      lst={[ {
        name:'home',
        url:'/'
      } , {
        name:'food&drink',
        url:'/FindRestaurants'
      } , {
        name:'FindRestaurants',
        url:'/FindRestaurants'
      } ]}
      />
      </div>
        <div className='FindRestaurantsHeader'>
            <div className='headerSubDiv'>
            <span className='FindRestaurants_txt'>FIND RESTAURANTS </span>
            <span className='FindRestaurants_txt'>INCHICAGO</span>
            </div>
        </div>
        <Grid container>

            <Grid item lg={2.75} md={3} mt={2.2} sm={5} xs={12}>
              <div  className='findRestMain'>
                <Grid container>
                  <Grid item md={12} sm={12} xs={12} textAlign='left' pl={4}>
                    <h4 style={{marginBottom:0,fontSize:14}}>What are you looking for?</h4>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} textAlign='left' pl={4}>
                    <h4 style={{marginTop:5,fontSize:14,fontWeight:'normal',color:'gray'}}>Search or select categories</h4>
                  </Grid>
                  <Grid item lg={9} md={9.5} sm={9} xs={9} textAlign='center'>
    <Form.Control type="text" placeholder="Search by keyboard" className='findRestSearchInput' />
                  </Grid>
                  <Grid item lg={2} md={1} sm={2} xs={2} textAlign='left'>
                    <img style={{cursor:'pointer'}} src={SearchIcon} height={20} width={20} />
                  </Grid>
                  <Grid item md={12} sm={11} xs={11} textAlign='right'>
                    <hr style={{color:'#3EB2E2',width:'90%',height:2,float:'right',backgroundColor:'#3EB2E2',border:'none'}} />
                  </Grid>
                  <Grid item md={11} sm={12} xs={12} m='auto'>
                    <SelectInput  placeholder='Cuisines' className='cuisineSelector' />
                  </Grid>
                  <Grid item md={12} sm={11} xs={11} textAlign='right'>
                    <hr style={{color:'#b2b8b3',width:'90%',height:1,float:'right',backgroundColor:'#b2b8b3',border:'none'}} />
                  </Grid>
                  <Grid item md={11} sm={12} xs={12} m='auto'>
                    <SelectInput placeholder='Areas' className='areaSelector' />
                  </Grid>
                  <Grid item md={12} sm={11} xs={11} textAlign='right'>
                    <hr style={{color:'#b2b8b3',width:'90%',height:1,float:'right',backgroundColor:'#b2b8b3',border:'none'}} />
                  </Grid>
                  <Grid item md={11} sm={12} xs={12} m='auto'>
                    <SelectInput placeholder='Available Services' className='availableService'/>
                  </Grid>
                  <Grid item md={12} sm={11} xs={11} textAlign='right'>
                    <hr style={{color:'#b2b8b3',width:'90%',height:1,float:'right',backgroundColor:'#b2b8b3',border:'none'}} />
                  </Grid>
                  <Grid item md={8} m='auto' sm={10} xs={12}>
                    <Grid container>
                      <Grid item md={6} sm={6} xs={6}>
                        <span className='findRestAcceTxt'>Accessiblility</span>
                      </Grid>
                      <Grid item md={4} sm={4} mt={-1} xs={4} textAlign='left'>
                      <SwitchComponent />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={11} sm={11} m='auto' xs={10}>
                    <div className='searchNowBtn'>
                      <span>Search Now</span>
                    </div>
                  </Grid>
                  <Grid item md={11} sm={11} m='auto' xs={11}>
                      <h3 className='findRestFeatRestTxt'>FEATURED RESTAURANTS</h3>
                  </Grid>
                  <Grid item md={10} sm={10} m='auto' xs={windowWidth>435 ? 6 : 8}>
                  <DotSliders/>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item lg={3.95} md={4}  mt={1}  sm={7} xs={12}>
              <div style={{width:'97%',margin:'auto',height:706,overflowY:'clip'}}>
              <FindRestCard showChicago={false}/>
              <FindRestCard showChicago={true}/>
              <FindRestCard showChicago={false}/>
              <FindRestCard showChicago={true}/>
              <FindRestCard showChicago={true}/>
              <FindRestCard showChicago={false}/>
              {/* <FindRestCard showChicago={true}/> */}
              </div>
              <Grid container mt={3}>
                <Grid item lg={5.1} md={5.2} sm={5.2} xs={5.2}>
                <div className='searchNowBtn'>
                      <span>Previous</span>
                    </div>
                </Grid>
                <Grid item md={1.6} pl={0.4} sm={1.6} xs={1.6}>
                <div className='searchNowIconBtn'>
                      <span>
                        <KeyboardArrowUpIcon style={{color:'white'}} />
                      </span>
                    </div>
                </Grid>
                <Grid item lg={5.1} md={5.2} pl={0.4} sm={5.2} xs={5.2}>
                <div className='searchNowBtn'>
                      <span>Next</span>
                    </div>
                </Grid>

              </Grid>

            </Grid>

            <Grid item lg={5.3} md={5} mt={2.2}  sm={12} xs={12}>
{
  open &&
    <div className='findRestaurantMapDiv' style={{ height: 770, width: '100%' }}>
    <MyComponent/>
  </div>
}
                
            </Grid>
        </Grid>

        <Grid container mt={3}>
          <Grid item md={12} sm={12} xs={12}>
            <h2>Your Guide to Chicago Restaurants</h2>
          </Grid>
          <div className='findRestaurantsImagesList' style={{width:'84%',margin:'auto'}}>
          <Grid container>
            <Grid item md={3} sm={6} xs={12}>
                <div className='findRestaurant_Image_Div_First find_image_Div'>
                <p>Mortan Salt Building Transformed into Outdoor Concert Venue The Salt Shed</p>
                    </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <div className='findRestaurant_Image_Div_Second find_image_Div'>
                <p>50 Black-Owned Businesses and Restaurants in Chicago</p>
                        {/* <span>Mortan Salt Building Transformed into Outdoor Concert Venue The Salt Shed</span> */}
                    </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <div className='findRestaurant_Image_Div_Third find_image_Div'>
                <p>The Chicago Guide To Heated Outdoor Dining</p>
                        {/* <span>Mortan Salt Building Transformed into Outdoor Concert Venue The Salt Shed</span> */}
                    </div>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <div className='findRestaurant_Image_Div_Fourth find_image_Div'>
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
  )
}

export default FindRestaurants
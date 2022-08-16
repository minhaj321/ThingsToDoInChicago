import React,{useEffect} from 'react'
import {Grid} from '@mui/material';
import './Suburbs.css';
import Header from '../../Components/Header/Header';
import DotSliders from './../DotSlider/DotSlider.js';
import ExploreCity from './../../Components/ExploreCity/ExploreCity.js';
import Footer from './../../Components/Footer/Footer.js';
import PlanTrip from './../../Components/PlanTrip/PlanTrip.js';
import BreadCrum from './../../Components/BreadCrum/BreadCrum.js';
import BeforeImages from './../../Components/BeforeImages/BeforeImages.js';
import ScrollComp from './../../Components/ScrollComp/ScrollComp.js';
import BlueBack from './../../Assets/backward-blue.png'
import BlueFor from './../../Assets/forward-blue.png'
const Suburbs = () => {

    
useEffect(()=>{

    window.scrollTo(0,0)
  
  },[])

  return (
      <>
    <div>
        <Header/>
        <div style={{width:'84%',margin:'auto'}} className='breadcrumDiv'>

        <BreadCrum
      lst={[ {
        name:'home',
        url:'/'
      } , {
        name:'Suburbs',
        url:'/Suburbs'
      } ]}
      />
      </div>
        <div className='suburbHeader'>
            <span className='suburb_txt'>SUBURBS</span>
        </div>
        <div className='suburbDiv'>

        <Grid container>

            <Grid item md={9} sm={9} xs={12} pr={1} textAlign='left'>
 
            {/* discover chicago */}
            <ScrollComp title={'Discover Chicago'} id={'Discover'} />

            {/* see iconic chicago */}
                <ScrollComp title={'See Iconic Chicago'} id={'See'} />

            {/* eat chicago style */}
            <ScrollComp title={'Eat Chicago Style'} id={'Eat'}/>


            {/* Experience shows and events */}
            <ScrollComp title={'Experience Shows and Events'} id={'Experience'}/>

            {/*  Sheep Chicago Style */}
            <ScrollComp title={'Sheep Chicago Style'}  id={'Sheep'}/>


            </Grid>
            
            <Grid item md={2.8} sm={3} xs={12} ml='auto'>
                <h3 style={{color:'#333333',fontSize:18,marginBottom:16,marginTop:33}} className='featured-heading'>FEATURED</h3>
                <DotSliders/>

                <h3  style={{marginTop:75,color:'#333333',marginBottom:16,fontSize:16}}className='featured-heading'>RECOMMENDED SHOWS</h3>
                <DotSliders/>
                <h3  style={{marginTop:75,color:'#333333',fontSize:18,marginBottom:18}}className='featured-heading'>GIVEAWAYS</h3>
                <DotSliders/>
                <h3 style={{marginTop:75,color:'#333333',fontSize:18,marginBottom:16}}className='featured-heading'>THIS WEEK</h3>
                <DotSliders/>
                {/* <img src={} style={{width:'100%',height:300}} /> */}
            </Grid>
         </Grid>
        
        </div>
        
    </div>
    <BeforeImages/>
        
        <ExploreCity/>
        <PlanTrip/>
        <Footer/>
    </>
  )
}

export default Suburbs
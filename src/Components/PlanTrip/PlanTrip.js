import React from 'react'
import {Grid} from '@mui/material';
import './PlanTrip.css';
import Image from './../../Assets/picture.png'
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => (
    <LocationOnSharpIcon style={{color:'red',fontSize:30}}/>
  );
  

const PlanTrip = () => {
  
  var windowWidth  =  window.outerWidth;
  
  return (
    <div style={{background:'#F8FAFF',paddingTop:30,paddingBottom:10}}>
      <div className='planTripMain'>
        <Grid container mb={2}>
            <Grid item lg={2.5} md={2.7}  sm={5.8} xs={12}  >
                <img src={Image} className='plainTripFirstSub' height={250} width={200} 
                style={{border:'3px solid #4DC4F1',borderRadius:3}}
                />
            </Grid>
            <Grid className='officialGrid' mr='auto' item lg={3.7} md={3.2}  sm={5.8} mt={windowWidth>430 ? 4 : 0} mb={windowWidth>430 ? 0 : 6} xs={12}>
                <p style={{fontSize:14,fontWeight:700,color:'#333333'}}>The Official Guide</p>
                <h2 style={{fontWeight:700,letterSpacing:-0.5,fontSize:24}}>PLAN YOUR TRIP TODAY</h2>
                <div className='downloadDiv' style={{
                    width:'37%',
                    background:'white',
                    borderRadius:3,
                    border:'2px solid #4DC4F1',
                    margin:'auto'
                }}>
                    <p style={{margin:5,fontWeight:740,cursor:'pointer',fontSize:14}}>Download</p>
                </div>
            </Grid>
            <Grid item lg={3} md={3} sm={5.8} xs={12}  pl={windowWidth>900 ? 4  : 0} >
            <div className='planTripMapDiv' style={{ height: 250, width: 200,border:'3px solid #4DC4F1',borderRadius:3 }}>
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
  </div>
            </Grid>
            <Grid className='locateDiv' item lg={2.2} md={2.4}  mt={windowWidth>430 ? 4 : 0} sm={5.8} xs={12}>
                <p style={{fontSize:14,fontWeight:700,color:'#333333'}}>Visitor's Map</p>
                <h2 style={{fontWeight:700,fontSize:24}}>LOCATE THE FUN</h2>
                <div className='getTheMapDIv' style={{
                    background:'white',
                    width:'50%',
                    borderRadius:3,
                    border:'2px solid #4DC4F1',
                    margin:'auto'
                }}>
                    <p style={{margin:5,fontWeight:740,cursor:'pointer',fontSize:14}}>Get The Map</p>
                </div>
            </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default PlanTrip
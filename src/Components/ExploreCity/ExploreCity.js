import React from 'react'
import './ExploreCity.css';
import { Grid } from '@mui/material';
import {Form} from 'react-bootstrap';


const ExploreCity = () => {
  return (
    <div>
        <br/>
        <br/>

        <Grid container style={{background:'#F8FAFF',paddingTop:10,paddingBottom:20}}>
            <Grid item md={6} sm={6} xs={12}  textAlign='center'>
                <div style={{paddingLeft:30}} className='exploreCityTxtDiv'>
                <h1 style={{fontSize:48,marginBottom:0,fontWeight:800}}>EXPLORE YOUR CITY</h1>
                <span style={{fontSize:14,color:'#333333',fontWeight:600}}>Subscribe to discover the best in events, experiences, food & more!</span>
                </div>
            </Grid>
            <Grid item md={6}  sm={6} xs={12}>
                <div className='enter_Email'>
    <Form.Control type="email" placeholder="Enter your email address"
    style={{border:'none',
background:'transparent',
width:'98%',
height:'100%'}}
className='explore_input'
    />

                </div>

                <div  className='subscribe_Email'>
                    <span style={{color:'white',fontWeight:500,fontSize:14}} >Subscribe</span>
                </div>
                {/* #4DC4F1 */}
            </Grid>
        </Grid>
        <br/><br/>
    </div>
  )
}

export default ExploreCity
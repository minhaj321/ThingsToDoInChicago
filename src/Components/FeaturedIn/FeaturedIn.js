import React from 'react'
import { Grid, Button } from '@mui/material'
import './FeaturedIn.css';
const FeaturedIn = () => {
  return (
    <div>
        <Grid container style={{background:'#F2F6FF',paddingTop:10,paddingBottom:20}}>
            <Grid md={12} sm={12} xs={12}>
                <h2 className='featuredInHeading' >Featured In</h2>
            </Grid>
        </Grid>
   
    <div className='featuredInMain'>

   <Grid container>
       <Grid item md={4} sm={4} xs={12}>
       <div className='featuredIn_Div featuredIn_image_Div'>
         <p >The Most Romantic Date Ideas This February in Chicago</p>
                    {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    </div>

       </Grid>
       <Grid item md={4} sm={4} xs={12}>
       <div className='featuredIn_Div featuredIn_image_Div'>
         <p >The Most Romantic Date Ideas This February in Chicago</p>
                    {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    </div>

       </Grid>
       <Grid item md={4} sm={4} xs={12}>
       <div className='featuredIn_Div featuredIn_image_Div'>
         <p >The Most Romantic Date Ideas This February in Chicago</p>
                    {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    </div>

       </Grid>

   </Grid>
   </div>
        
    </div>
  )
}

export default FeaturedIn
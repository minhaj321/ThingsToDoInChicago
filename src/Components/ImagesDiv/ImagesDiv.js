import React from 'react'
import { Grid } from '@mui/material'
import './ImagesDiv.css'
import {useNavigate} from 'react-router-dom';

const ImagesDiv = () => {

    var navigate = useNavigate();

  return (
    <div className='imagesDivMain'>
    <Grid container>
        <Grid item md={12} sm={12} xs={12} textAlign='center' >
            <span style={{fontSize:30,fontWeight:700,margin:'auto'}}>your insider's guide to new york</span>
        </Grid>
    </Grid>
        <Grid container>
            <Grid item lg={4.65} md={4.3} xs={4.3}>
                <div className='first_Image_Div image_Div1' onClick={()=>navigate('/LiveChicago')}>
                    {/* <p>FIRST-TIME VISIT</p> */}
                    <p>LOCAL GUIDE</p>
                    {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                </div>
                <div className='second_Image_Div image_Div1' onClick={()=>navigate('/LiveChicago')}>
                    <p>FAMILY FUN</p>
                {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    
                    </div>
                    <div className='third_Image_Div image_Div1' onClick={()=>navigate('/LiveChicago')}>
                    <p>LUXURY</p>
                    {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    </div>

            </Grid>

            <Grid item lg={7.35} md={7.7} xs={7.7}>
            <div className='fourth_Image_Div image_Div1' onClick={()=>navigate('/LiveChicago')}>
                    <p>FIRST-TIME VISIT</p>
                    {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    
                    </div>
                    <Grid container>
                        <Grid item md={6} xs={6}>
                        <div className='fifth_Image_Div image_Div1' onClick={()=>navigate('/LiveChicago')}>
                    <p>COUPLE'S TRIP</p>
                        {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    </div>
                    <div className='sixth_Image_Div image_Div1' onClick={()=>navigate('/LiveChicago')}>
                    <p>WEEKEND</p>
                    {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    
                    </div>
                    <div className='seventh_Image_Div image_Div1' onClick={()=>navigate('/LiveChicago')}>
                    <p>HIDDEN JAM</p>
                    {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    
                    </div>

                        </Grid>
 
                        <Grid item md={6} xs={6}>
                    <div className='eight_Image_Div image_Div1' onClick={()=>navigate('/LiveChicago')}>
                    <p>LGBTQ+</p>
                    {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    
                    </div>
                    <div className='ninth_Image_Div image_Div1' onClick={()=>navigate('/LiveChicago')}>
                    <p>ON A BUDGET</p>
                    {/* <p>The Most Romantic Date Ideas This February in Chicago</p> */}
                    
                    </div>
                    </Grid>
                    </Grid>

            </Grid>
        </Grid>
    </div>
  )
}

export default ImagesDiv
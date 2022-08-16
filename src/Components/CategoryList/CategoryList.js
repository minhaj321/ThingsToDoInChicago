import React from 'react'
import './CategoryList.css';
import {Grid} from '@mui/material';
import FoodDrink from './../../Samples/i1.jpg'
import Attractionsicon from './../../Samples/i3.jpg'
import Activities from './../../Samples/i5.jpg'
import Artsicon from './../../Samples/i4.jpg'
import Entertainmenticon from './../../Samples/i2.jpg'
import Outdooricon from './../../Samples/i6.jpg'
import Musicicon from './../../Samples/i7.jpg'
import Fitnessicon from './../../Samples/i8.jpg'

const CategoryList = () => {
  return (
    <div className='categoryListMain'> 
        <Grid container textAlign='center' style={{color:'#F15F61',fontSize:14}}>
            <Grid item md={2} sm={0}></Grid>
            <Grid item  md={1} sm={3} xs={6}>
                <img  src={FoodDrink} height={'110px'} width={'110px'} className='categoryListImg' />
                <p className='categoryTitle'>Food & Drink</p>
            </Grid>
            <Grid item md={1} sm={3} xs={6}>
            <img src={Activities} height={'110px'} width={'110px'} className='categoryListImg' />
            <p className='categoryTitle'>Activities</p>
            </Grid>
            <Grid item md={1} sm={3} xs={6}>
            <img src={Entertainmenticon} height={'110px'} width={'110px'} className='categoryListImg' />
            <p className='categoryTitle'>Entertainment</p>
            </Grid>
            <Grid item md={1} sm={3} xs={6}>
            <img src={Artsicon} height={'110px'} width={'110px'} className='categoryListImg' />
            <p className='categoryTitle'>Arts & Culture</p>
            </Grid>
            <Grid item md={1} sm={3} xs={6}>
                {/* <img style={{borderRadius:50}} src={FoodDrink} height={'110px'} width={'110px'} className='categoryListImg' /> */}
            <img src={Outdooricon} height={'110px'} width={'110px'} className='categoryListImg' />
            <p className='categoryTitle'>Outdoor <br/> Activities</p>
            </Grid>
            <Grid item md={1} sm={3} xs={6}>
            <img src={Attractionsicon} height={'110px'} width={'110px'} className='categoryListImg' />
            <p className='categoryTitle'>Attractions & <br/> Tours</p>
            </Grid>
            <Grid item md={1} sm={3} xs={6}>
            {/* <img src={Entertainmenticon} height={'110px'} width={'110px'} className='categoryListImg' /> */}
            <img src={Musicicon} height={'110px'} width={'110px'} className='categoryListImg' />
            <p className='categoryTitle'>Music & <br/> Nightlife</p>
            </Grid>
            <Grid item md={1} sm={3} xs={6}>
            {/* <img src={Activities} height={'110px'} width={'110px'} className='categoryListImg' /> */}
            <img src={Fitnessicon} height={'110px'} width={'110px'} className='categoryListImg' />
            <p className='categoryTitle'>Fitness & <br/> Wellness</p>
            </Grid>
            <Grid item md={2} sm={0}></Grid>
        </Grid>
    </div>
  )
}

export default CategoryList
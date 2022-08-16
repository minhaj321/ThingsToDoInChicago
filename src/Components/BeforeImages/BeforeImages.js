import React from 'react'
import {Grid} from '@mui/material';
import './BeforeImages.css';
import iconsdissability1 from './../../Assets/iconsdissability 1.svg'
import kidsicon from './../../Assets/kidsicon.svg'
import restaurantsicon from './../../Assets/restaurantsicon.svg'
import {useNavigate} from 'react-router-dom';

const BeforeImages = () => {

    var navigate= useNavigate();

  return (
    <div className='beforeImagesMain'>
        <Grid container style={{height:'100%'}}>
            <Grid item  lg={3} md={3} sm={3} xs={12} style={{}} >
                <div className='beforeImageDiv beforeImageDiv1' onClick={()=>navigate('/Accessiblility')}>
                    <img src={iconsdissability1} height={'80%'} style={{}} width={'70%'}  />
                    <h3 style={{textAlign:'center',fontSize:20,marginTop:0}}>ACCESSIBILITY</h3>
                </div>
            </Grid>
            <Grid item  lg={3} md={3} sm={3} xs={12} style={{}}>
            <div className='beforeImageDiv beforeImageDiv2'  onClick={()=>navigate('/Kids')}>
                    <img src={kidsicon} height={'80%'} width={'40%'}  />
                    <h3 style={{textAlign:'center',marginTop:0,fontWeight:40,fontSize:20}}>KIDS</h3>
                </div>

            </Grid>
            <Grid item  lg={3} md={3} sm={3} xs={12} style={{}}>
            <div className='beforeImageDiv beforeImageDiv3'  onClick={()=>navigate('/FindRestaurants')}>
                    <img src={restaurantsicon} height={'80%'} width={'30%'}  />
                    <h3 style={{textAlign:'center',marginTop:0,fontWeight:900,fontSize:20}}>RESTAURANTS</h3>
                </div>
            </Grid>
            <Grid item  lg={3}  md={2.3} sm={3} xs={12}>
                <ul className='beforeImagesUl'>
                    <li onClick={()=>navigate('/festivals')}>Festivals</li>
                    <li onClick={()=>navigate('/Conventions')}>Conventions</li>
                    <li>Sports</li>
                    <li onClick={()=>navigate('/Suburbs')}>Suburbs</li>
                    <li onClick={()=>navigate('/shopping')}>Shopping</li>
                    <li>Espanol</li>
                </ul>
            </Grid>
        </Grid>
    </div>
  )
}

export default BeforeImages
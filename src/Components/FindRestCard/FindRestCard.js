import React from 'react'
import {Grid} from '@mui/material';
import './FindRestCard.css';
import VineImg from './../../Assets/yutacar-JKMnm3CIncw-unsplash1.png';
import CheckIcon from '@mui/icons-material/Check';
import CompassImg from './../../Assets/Navigation/Compass.svg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useNavigate } from "react-router-dom";

const FindRestCard = ({showChicago}) => {

    var windowWidth = window.outerWidth;
    var navigate = useNavigate();

  return (
    <div className={showChicago ? 'findRestCardMainChicago' : 'findRestCardMain'} >
        <Grid container textAlign='left' 
                onClick={()=>navigate('/find')}
                >
            <Grid item lg={7} md={6} sm={6} xs={6}>
{
!showChicago &&
<div>
<p style={{color:'blue',fontWeight:600,fontSize:10,marginLeft:10,marginBottom:0}}>CARIBBEAN</p>
<p style={{fontWeight:600,marginTop:3,fontSize:12,marginLeft:8,marginBottom:0}}>14 Prish Restaurant & Rhum Bar</p>
<p style={{marginTop:1,fontSize:10,marginLeft:8,color:'gray',marginBottom:3}}>1644 E. 53rd St.</p>
                <Grid container>
                    <Grid item lg={3} md={6} sm={6}  xs={6} pl={windowWidth>1030 ? 1 : 0.7}>
                        <CheckIcon style={{color:'green',height:10,width:10}} />
                        <span className='findRestCardCheckTxt'>Dine-in</span>
                    </Grid>
                    <Grid item lg={3} md={6} sm={6}  xs={6}>
                        <CheckIcon style={{color:'green',height:10,width:10}} />
                        <span className='findRestCardCheckTxt'>Takeout</span>
                    </Grid>
                    <Grid item  lg={3} md={6} sm={6}  xs={6} pl={windowWidth>1199 ? 0 : 0.7}>
                        <CheckIcon style={{color:'green',height:10,width:10}} />
                        <span className='findRestCardCheckTxt'>Delivery</span>
                    </Grid>
                    <Grid item  lg={3} md={6} sm={6}  xs={6}>
                        <CheckIcon style={{color:'green',height:10,width:10}} />
                        <span className='findRestCardCheckTxt'>Patlo</span>
                    </Grid>
                </Grid>
                <Grid container mt={-0.2}>
                    <Grid item lg={6} md={12} pl={0.5}  sm={12} xs={12}>
                        <FemaleOutlinedIcon style={{marginTop:4,width:17,height:17,color:'gray'}} />
                        <span className='findRestCardWomenTxt'>Women Owned</span>
                    </Grid>

                    <Grid item lg={6} md={12} className='findrestCardFavDiv' sm={12} xs={12} ml={windowWidth>1030 ? -1.6 : 0.5}>
                        <FavoriteOutlinedIcon style={{marginTop:4,width:17,height:17,color:'gray'}} />
                        <span className='findRestCardMajorityTxt'>Matority Owned</span>
                    </Grid>
                </Grid>
                </div>
}

{
    showChicago &&
    <div>
        <p style={{fontWeight:600,marginTop:30,fontSize:12,marginLeft:8,marginBottom:0}}>14 Prish Restaurant & Rhum Bar</p>
<p style={{marginTop:3,fontSize:10,marginLeft:8,color:'gray',marginBottom:2}}>1644 E. 53rd St.</p>

    </div>
}

            </Grid>
            <Grid item md={1} sm={1} xs={1} pt={1}>
                <img src={CompassImg} className='compassImg' style={{height:18,width:18,cursor:'pointer'}} />
                <FavoriteBorderOutlinedIcon className='redHeartImg' style={{height:18,width:18,color:'red',cursor:'pointer'}} />
            </Grid>
            <Grid item lg={4} md={5} sm={5} xs={5}>
                <img className='FindRestViewImg' src={VineImg} style={{cursor:'pointer'}} width={'100%'} height={150}  />
            </Grid>
        </Grid>
    </div>
  )
}

export default FindRestCard
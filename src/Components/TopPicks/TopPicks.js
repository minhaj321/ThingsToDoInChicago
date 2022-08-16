import React from 'react'
import './TopPicks.css';
import {Grid} from '@mui/material';
import CardComponent from './../../Components/Card/Card';
import BackIcon from './../../Assets/backward.png';
import ForwardIcon from './../../Assets/forward.png';
import BurnImg from './../../Assets/bruno-emmanuelle-ZpNBwBR38fA-unsplash1.png'
import GameImg from './../../Assets/amy-tran-GOsvNr-q2ko-unsplash1.png'
import AliceImg from './../../Assets/ruth-paradis-HUgKHsNumeQ-unsplash1.png'
import VineImg from './../../Assets/yutacar-JKMnm3CIncw-unsplash1.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TopPicks = () => {

  var windowWidth = window.outerWidth;

  return (
    <div className='cookingClassMain'>
        <Grid container>
            <Grid item md={12} sm={12} xs={12} textAlign='center' className='topPicTxtDiv'>
                <span style={{fontSize:30,fontWeight:650,marginLeft:60}} className='topPickTxt'>Top Picks</span>

                <span className='showAllTxt' style={{cursor:'pointer',float:'right',marginRight:30,marginTop:10,color:'#EF6F6F',fontWeight:620,fontSize:18}}>Show all</span>
            </Grid>
        </Grid>
        <Grid container mt={2} className='topCardAntiMobile'>
          <Grid item md={3} sm={6} xs={10} m='auto' className='topPickCard'>
            <CardComponent w={windowWidth>770 ? 290 : '100%'} image={BurnImg} 
            txt={'Big Game Viewing Party'}
            showDis={false}
            price={'700$'}
            />
          </Grid>
          <Grid item md={3} sm={6} xs={10} m='auto'  className='topPickCard'>
            <CardComponent w={windowWidth>770 ? 290 : '100%'} image={VineImg} 
                        txt={'The Great Gatsby Party'}
            showDis={{show:true,
            dis:24}}
            price={{from:true,
              prev:125,
              new:95}}
/>
          </Grid>
          <Grid item md={3} sm={6} xs={10} m='auto' className='topPickCard thirdTopPickCard'>
            <CardComponent w={windowWidth>770 ? 290 : '100%'} image={GameImg} 
            txt={'NYC Snow Tubing & Brewery Trip'}
            showDis={false}
            price={'149$'}
            />
          </Grid>
          <Grid item md={3} sm={6} xs={10} m='auto' className='topPickCard fourthTopPickCard'>
            <CardComponent w={windowWidth>770 ? 290 : '100%'} image={AliceImg} 
            txt={'Alice in wonderland'}
            showDis={false}
            price={'700$'}
            />
          </Grid>
        </Grid>
        <div className='topCardMobile'>
          <div style={{minWidth:'60%'}}>
          <CardComponent w={windowWidth>770 ? 290 : '100%'} image={BurnImg} 
            txt={'Big Game Viewing Party'}
            showDis={false}
            price={'700$'}
            />
          </div>
          <div style={{minWidth:'60%'}}>
          <CardComponent w={windowWidth>770 ? 290 : '100%'} image={VineImg} 
                        txt={'The Great Gatsby Party'}
            showDis={{show:true,
            dis:24}}
            price={{from:true,
              prev:125,
              new:95}}
/>
          </div>
          <div style={{minWidth:'60%'}}>
          <CardComponent w={windowWidth>770 ? 290 : '100%'} image={GameImg} 
            txt={'NYC Snow Tubing & Brewery Trip'}
            showDis={false}
            price={'149$'}
            />                      
          </div>
          <div style={{minWidth:'60%'}}>
          <CardComponent w={windowWidth>770 ? 290 : '100%'} image={AliceImg} 
            txt={'Alice in wonderland'}
            showDis={false}
            price={'700$'}
            />                      
          </div>
        </div>

        <Grid container mt={5} mb={2} className='topCardAntiMobile'>
          <Grid item md={6} sm={6} textAlign='right' className='topPickMoveIcon' pr={3} xs={6}>
            <img src={BackIcon} className='topPickBackIcon' height={40} width={40} />
          </Grid>
          <Grid item md={6} sm={6} textAlign='left' xs={6}>
          <img src={ForwardIcon} className='topPickForIcon' height={40} width={40} />
          </Grid>
        </Grid>
    </div>
  )
}

export default TopPicks
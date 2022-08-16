import React from 'react'
import './CookingClass.css';
import {Grid} from '@mui/material';
import CardComponent  from './../../Components/Card/Card';
import BackIcon from './../../Assets/backward.png';
import ForwardIcon from './../../Assets/forward.png';
import IceCream from './../../Assets/iceCream.png';
import Cheese from './../../Assets/cheeseImg.png';
import Flour from './../../Assets/anton-8eG73NjiHao-unsplash1.png';
import Sweet from './../../Assets/sweetImg.png';

const CookingClass = () => {

  var windowWidth = window.outerWidth;


  return (
    <div className='cookingClassMain'>
        <Grid container >
        <Grid item md={12} sm={12} xs={12} textAlign='center' className='topPicTxtDiv'>
            <span style={{fontSize:30,fontWeight:650,marginLeft:60}} className='topPickTxt'>cooking class</span>

            <span className='showAllTxt' style={{cursor:'pointer',float:'right',marginRight:30,marginTop:10,color:'#EF6F6F',fontWeight:620,fontSize:18}}>Show all</span>
            </Grid>
        </Grid>
        <Grid container mt={2} className='topCardAntiMobile'>
          <Grid item md={3}  sm={6} xs={10}  m='auto' className='topPickCard'>
            <CardComponent  w={windowWidth>770 ? 230 : '100%'} image={Flour}
             txt={'Big Game Viewing Party'}
            showDis={{show:true,
            dis:5}}
            price={{from:true,
              prev:59,
              new:56}} />
          </Grid>
          <Grid item md={3} sm={6} xs={10} m='auto' className='cookingCard'>
            <CardComponent  w={windowWidth>770 ? 230 : '100%'} image={IceCream}
            exc={true}
             txt={'The Great Gatsby Party'}
             showDis={{show:true,
              dis:5}}
            price={{from:true,
              prev:59,
              new:56}}  />
          </Grid>
          <Grid item md={3} sm={6} xs={10} m='auto' className='cookingCard thirdCookingCard'>
            <CardComponent w={windowWidth>770 ? 230 : '100%'}  image={Cheese}
             txt={'NYC Snow Tubing & Brewery Trip'}
            showDis={false}
            price={'149$'}  />
          </Grid>
          <Grid item md={3} sm={6} xs={10} m='auto' className='cookingCard fourthCookingCard'>
            <CardComponent  w={windowWidth>770 ? 230 : '100%'} image={Sweet}
             txt={'Sushi Making Class'}
            showDis={false}
            price={'700$'} />
          </Grid>
        </Grid>
        <div className='topCardMobile'>
          <div style={{minWidth:'60%'}}>

          <CardComponent  w={windowWidth>770 ? 230 : '100%'} image={Flour}
             txt={'Big Game Viewing Party'}
            showDis={{show:true,
            dis:5}}
            price={{from:true,
              prev:59,
              new:56}} />
          </div>
          <div style={{minWidth:'60%'}}>
          <CardComponent  w={windowWidth>770 ? 230 : '100%'} image={IceCream}
            exc={true}
             txt={'The Great Gatsby Party'}
             showDis={{show:true,
              dis:5}}
            price={{from:true,
              prev:59,
              new:56}}  />
          </div>
          <div style={{minWidth:'60%'}}>
          <CardComponent w={windowWidth>770 ? 230 : '100%'}  image={Cheese}
             txt={'NYC Snow Tubing & Brewery Trip'}
            showDis={false}
            price={'149$'}  />                       
          </div>
          <div style={{minWidth:'60%'}}>
          <CardComponent  w={windowWidth>770 ? 230 : '100%'} image={Sweet}
             txt={'Sushi Making Class'}
            showDis={false}
            price={'700$'} />                      
          </div>
        </div>
        <Grid container mt={5} mb={2} className='topCardAntiMobile'>
          <Grid  item md={6} sm={6} textAlign='right' className='topPickMoveIcon' pr={3} xs={6}>
            <img src={BackIcon} className='cookingBackIcon' height={40} width={40} />
          </Grid>
          <Grid item md={6} sm={6} textAlign='left' xs={6}>
          <img src={ForwardIcon}  className='cookingForIcon' height={40} width={40} />
          </Grid>
        </Grid>
    </div>
  )
}

export default CookingClass
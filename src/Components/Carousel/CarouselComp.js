import React, { Component,useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Grid} from '@mui/material';
import './CarouselComp.css';
import Img1 from './../../Assets/pedro-lastra-Nyvq2juw4_o-unsplash 1.png';
import Img2 from './../../Assets/bing-hao-_wqj9tC0WSE-unsplash 1.png';
import Img4 from './../../Assets/carouselMiddle.jpg';
import backArrow from './../../Assets/sliderbuttonleft.png';
import forArrow from './../../Assets/sliderbuttonright.png';

const CarouselComp = () => {

    const [imgCount,setImgCount] = useState(1)



        // var interval = setInterval(()=>{
        //     console.log('yyy==>')
        //     handleCarousel('forw')
        // },5000)

    var windowWidth = window.outerWidth;

    const handleCarousel =(type)=>{
        if(type=='back'){
            if(imgCount==0){
                setImgCount(4)
            }else{
                setImgCount(imgCount-1)
            }
        }else{
            if(imgCount==4){
                setImgCount(0)
            }else{
                setImgCount(imgCount+1)
            }
        }
    }

  return (
      <div style={{position:'relative',height:440}} className='carouselMainDIv'>
      <div style={{width:'100%',margin:'auto'}}>
<Grid container  className='carouselControllerDiv' style={{position:'absolute',zIndex:1}}>
    <Grid item md={2} sm={1} xs={1} textAlign='right'>
        <img src={backArrow} className='carBackwardArrow' style={{height:35,width:35,cursor:'pointer'}}
        onClick={()=>handleCarousel('back')}
        />
    </Grid>
    <Grid item md={8}  sm={10} xs={10}>
        <h2 className='carouselTxt' style={{width:'55%',marginTop:-10,color:'white',margin:'auto'}}>The Most Romantic date ideas This Febuary in Chicago</h2>
        <div className='readArticleCarousel'>
                <span>Read Article</span>
        </div>
    </Grid>
    <Grid item md={2} sm={1} xs={1} textAlign='left'>
    <img src={forArrow} className='carForwardArrow' style={{height:35,width:35,cursor:'pointer'}} 
            onClick={()=>handleCarousel('forw')}
            />
    </Grid>
</Grid>
    <Carousel
    centerSlidePercentage={windowWidth>770 ? 60 : windowWidth>430 ? 80 : 100}
    centerMode={true}
    nu
    autoPlay={true}
    interval={5000}
    // axis='horizontal'
    // dynamicHeight={true}
    selectedItem={imgCount}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    width={'100%'}
    swipeable={true}
    showIndicators={false}
    infiniteLoop={true}
    // showThumbs={false}
    >
    <div>
        <img src={Img1} className='carouselImg' style={{height:420,width:'100%',padding:'0%',margin:'0%'}} />
        {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
    <img src={Img2} className='carouselImg' style={{height:420,width:'100%',padding:'0%',margin:'0%'}} />
        {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
    <img src={Img4} className='carouselImg' style={{height:420,width:'100%',padding:'0%',margin:'0%'}} />
        {/* <p className="legend">Legend 3</p> */}
    </div>
</Carousel>
</div>
</div>
  )
}

export default CarouselComp
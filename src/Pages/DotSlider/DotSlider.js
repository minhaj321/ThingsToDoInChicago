import React from 'react'
import {Grid} from '@mui/material';
import './DotSlider.css';
import FirstImg from './../../Assets/slider1.png';
import SecondImg from './../../Assets/slider2.png';
import ThirdImg from './../../Assets/slider3.png';
import FourthImg from './../../Assets/slider4.png';
import FifthImg from './../../Assets/slider5.png';
import SixthImg from './../../Assets/slider1.png';
import SeventhImg from './../../Assets/slider2.png';
import EightImg from './../../Assets/slider3.png';
import NinthImg from './../../Assets/slider4.png';
import TenthImg from './../../Assets/slider5.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';  
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';


const DotSlider = ({arrow}) => {

var windowWidth = window.outerWidth;

    const settings = {
        dots: true,
        arrows: arrow,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,        
        appendDots: dots => {
          return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={windowWidth>430 ? 30 : 20} />;
        }
      };

  return (
    <div>
        <Grid container mt={-1}>
            <Grid item md={12} sm={12} xs={12}>

            <Slider {...settings} autoplaySpeed={6000} autoplay={true}>
        <div className='sliderBookImages'>
        <img src={FirstImg} style={{height:'100%',width:'100%'}} />
        </div>
        <div className='sliderBookImages'>
        <img src={SecondImg} style={{height:298,width:270}} />
        </div>
        <div className='sliderBookImages'>
        <img src={ThirdImg} style={{height:298,width:270}} />
        </div>
        <div className='sliderBookImages'>
        <img src={FourthImg} style={{height:298,width:270}} />
        </div>
        <div className='sliderBookImages'>
        <img src={FifthImg} style={{height:298,width:270}} />
        </div>
        <div className='sliderBookImages'>
        <img src={SixthImg} style={{height:298,width:270}} />
        </div>
        <div className='sliderBookImages'>
        <img src={SeventhImg} style={{height:298,width:270}} />
        </div>
        <div className='sliderBookImages'>
        <img src={EightImg} style={{height:298,width:270}} />
        </div>
        <div className='sliderBookImages'>
        <img src={NinthImg} style={{height:298,width:270}} />
        </div>
        <div className='sliderBookImages'>
        <img src={TenthImg} style={{height:298,width:270}} />
        </div>
      </Slider>

            </Grid>
        </Grid>
    </div>
  )
}

export default DotSlider
import React,{useEffect} from 'react'
import './Home.css';
import {Grid} from '@mui/material';
import Header from './../../Components/Header/Header.js';
import CategoryList from './../../Components/CategoryList/CategoryList.js';
import TopPicks from './../../Components/TopPicks/TopPicks.js';
import CardComponent from './../../Components/Card/Card.js';
import CookingClass from './../../Components/CookingClass/CookingClass.js';
import NycValentine from './../../Components/NycValentine/NycValentine.js';
import BeforeImages from './../../Components/BeforeImages/BeforeImages.js';
import ImagesDiv from './../../Components/ImagesDiv/ImagesDiv.js';
import ExploreCity from './../../Components/ExploreCity/ExploreCity.js';
import Footer from './../../Components/Footer/Footer.js';
import PlanTrip from './../../Components/PlanTrip/PlanTrip.js';
import CarouselComp from '../../Components/Carousel/CarouselComp';


const Home = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div>
      <Header />
        
        <CarouselComp/>
        <CategoryList />
        <TopPicks/>
        <CookingClass/>
        <NycValentine/>
        <BeforeImages/>
        <ImagesDiv/>
        <ExploreCity/>
        <PlanTrip/>
        <br/>
      <Footer/> 
    </div>
  )
}

export default Home
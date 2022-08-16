import React,{useEffect} from 'react'
import './Footer.css';
import {Grid} from '@mui/material'
import HeaderImg from './../../Assets/ThingsToDoinChicagoLogoFull1.png'
import FooterFb from './../../Assets/Group 209.svg';
import footerInsta from './../../Assets/Group 208.svg';
import footerTiktok from './../../Assets/Group 207.svg';
import { useNavigate } from "react-router-dom";



const Footer = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  var navigate = useNavigate();

    return (
    <div style={{backgroundColor:'#F8FAFF',marginTop:20,paddingTop:10,paddingBottom:10}}>
        <Grid container>
            <Grid item md={4} sm={4} xs={12}>
            <img src={HeaderImg} className='footer_icon' height={'130px'} width={'306px'} />
            </Grid>
            
            <Grid item md={3.6} textAlign='left'  sm={4} xs={12}> 
                <div className='footer_support'>
                <p style={{color:'#EF6F6F',fontSize:24,fontWeight:800,fontFamily:'sans-serif'}}>Support</p>
                <p style={{fontWeight:500,fontSize:20,color:'#333333'}}>Privacy policy</p>
                <p style={{fontWeight:500,fontSize:20,color:'#333333'}}>Terms Of Use</p>
                <p className='follow_us_txt'>Follow Us</p>
                </div>
                <div className='footer_img_div'>
                <img src={FooterFb} className='footer_img_div_img' height={52} width={52} />
                <img src={footerInsta} className='footer_img_div_img' height={52} width={52} />
                <img src={footerTiktok} className='footer_img_div_img' height={52} width={52} />

                </div>
            </Grid>

            <Grid item md={4.4} textAlign='left' sm={4} xs={12}>
            <div className='footer_support footer_support1'>
                <p style={{color:'#EF6F6F',fontSize:24,fontWeight:800,fontFamily:'sans-serif'}}>Company</p>
                <p style={{fontWeight:500,fontSize:20,color:'#333333'}}>About Us</p>
                <p style={{fontWeight:500,fontSize:20,color:'#333333'}}>Careers</p>
                <p style={{fontWeight:500,fontSize:20,color:'#333333'}}
                onClick={()=>navigate('/PaymentPage')}
                >Creators</p>
                <p style={{fontWeight:500,fontSize:20,color:'#333333'}}
                onClick={()=>navigate('/working-with-us')}
          >Partner with us</p>
                </div>

            </Grid>
        </Grid>
    </div>
  )
}

export default Footer
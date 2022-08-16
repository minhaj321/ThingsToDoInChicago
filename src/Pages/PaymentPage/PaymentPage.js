import React from 'react'
import './PaymentMain.css';
import PaypalIcon from './../../Assets/payPalTxt.svg';
import PIcon from './../../Assets/pIcon.svg';
import CardIcon from './../../Assets/creditcard.png';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ExploreCity from '../../Components/ExploreCity/ExploreCity';
import PlanTrip from '../../Components/PlanTrip/PlanTrip';
import { Grid, Button } from '@mui/material'
const PaymentPage = () => {

    return (
    <div>
        <Header/>

        <Grid container>
        <div className='working-with-us-img'>
          <Grid md={12} sm={12} xs={12}>
            <h1 style={{ color: 'white', paddingTop: '20px',fontSize:42 }} className='working-with-us-heading'>WORK WITH US!</h1>
            <h5 style={{ color: 'white',fontWeight:'normal', paddingTop: '20px',fontSize:18 }} className='working-with-us-paragraph'> Bucket Listers is the leading digital media brand for everyday explorers We help brands, event producers, experience providers, restaurants and other local businesses grow through customized branded social compaigns that drive tangible business results.</h5>
            <h3 style={{ color: 'white', paddingTop: '15px',fontSize:22,marginBottom:0,marginTop:-20 }}>FILL OUT THE FORM OR EMAIL US</h3>
            <h3 style={{ color: 'white',paddingBottom:5,marginTop:5,fontSize:22,letterSpacing:1.5 }}>www.12345678@gmail.com</h3>
          </Grid>
          </div>
        </Grid>

        <div className='paymentMain'>
            <div className='firstPayment payemntDiv'>
                <div className='firstPaymentSubDiv paymentSubDiv'>
                <div className='paymentFirst'>                
                <h2>Package 1</h2>
                <h4>THE ONE</h4>
                </div>                
            <div className='secondSubDiv'>
            <ul className='paymentUlList paymentUlListFirst'>
                <li>
                Enim commodo velit in Lorem laborum ea esse enim pariatur in amet reprehenderit enim pariatur in amet reprehenderit.
                </li>
                <li>
                Enim commodo velit in Lorem laborum ea esse enim pariatur in amet .
                </li>
                <li>
                Enim commodo velit in Lorem laborum ea.
                </li>
                <li>
                Enim esse enim pariatur in amet .
                </li>
                </ul>
                <div className='yellowBtnPayemnt'>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img src={PaypalIcon} className='paypalIcon' height={'80%'} width={60} />
                        <span>Subscribe</span>
                    </div>
                </div>
                <div className='blueBtnPayemnt'>
                <div  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img src={PIcon} height={'80%'} width={20} style={{marginRight:5}} />
                        <span>PayPal <span style={{fontStyle:'italic',fontWeight:'bold'}}>CREDIT</span> Subscribe</span>
                    </div>
                </div>
                <div className='blackBtnPayemnt'>
                <div  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img src={CardIcon} height={'80%'} width={20} style={{marginRight:5}} />
                        <span>Debit or Credit Card</span>
                </div>

                </div>
                <div className='blackBtnPayemnt' style={{background:'white'}}>
                <div  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <p style={{color:'#333333'}}>Sponsered by</p>
                <img src={PaypalIcon} className='paypalIcon' height={'80%'} style={{marginLeft:10}} width={60} />
                </div>
                </div>

            </div>
                </div>
            </div>
            <div className='secondPayment payemntDiv'>
            <div className='secondPaymentSubDiv paymentSubDiv'>
            <div className='paymentSecond'>                
            <h2>Package 2</h2>
            <h4>THE TWO</h4>
            </div>
            <div className='secondSubDiv'>
                <ul className='paymentUlList paymentUlListSecond'>
                <li>
                Enim commodo velit in Lorem laborum ea esse enim pariatur in amet reprehenderit enim pariatur in amet reprehenderit.
                </li>
                <li>
                Enim commodo velit in Lorem laborum ea esse enim pariatur in amet .
                </li>
                <li>
                Enim commodo velit in Lorem laborum ea.
                </li>
                <li>
                Enim esse enim pariatur in amet .
                </li>
                </ul>
                <div className='yellowBtnPayemnt'>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img src={PaypalIcon} className='paypalIcon'  height={'80%'} width={60} />
                        <span>Subscribe</span>
                    </div>
                </div>
                <div className='blueBtnPayemnt'>
                <div  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img src={PIcon} height={'80%'} width={20} style={{marginRight:5}} />
                        <span>PayPal <span style={{fontStyle:'italic',fontWeight:'bold'}}>CREDIT</span> Subscribe</span>
                    </div>
                </div>
                <div className='blackBtnPayemnt'>
                <div  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img src={CardIcon} height={'80%'} width={20} style={{marginRight:5}} />
                        <span>Debit or Credit Card</span>
                </div>
                </div>
                <div className='blackBtnPayemnt' style={{background:'white'}}>
                <div  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <p style={{color:'#333333'}}>Sponsered by</p>
                <img src={PaypalIcon} className='paypalIcon'  height={'80%'} style={{marginLeft:10}} width={60} />
                </div>
                </div>

            </div>
            </div>

            </div>
            <div className='thirdPayment payemntDiv'>
            <div className='thirdPaymentSubDiv paymentSubDiv'>
            <div className='paymentThird'>                
            <h2>Package 3</h2>
            <h4>THE THREE</h4>
            </div>
            <div className='secondSubDiv'>
            <ul className='paymentUlList paymentUlListThird'>
                <li>
                Enim commodo velit in Lorem laborum ea esse enim pariatur in amet reprehenderit enim pariatur in amet reprehenderit.
                </li>
                <li>
                Enim commodo velit in Lorem laborum ea esse enim pariatur in amet .
                </li>
                <li>
                Enim commodo velit in Lorem laborum ea.
                </li>
                <li>
                Enim esse enim pariatur in amet .
                </li>
                </ul>
                <div className='yellowBtnPayemnt'>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img src={PaypalIcon} className='paypalIcon'  height={'80%'} width={60} />
                        <span>Subscribe</span>
                    </div>
                </div>
                <div className='blueBtnPayemnt'>
                <div  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img src={PIcon} height={'80%'} width={20} style={{marginRight:5}} />
                        <span>PayPal <span style={{fontStyle:'italic',fontWeight:'bold'}}>CREDIT</span> Subscribe</span>
                    </div>
                </div>
                <div className='blackBtnPayemnt'>
                <div  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <img src={CardIcon} height={'80%'} width={20} style={{marginRight:5}} />
                        <span>Debit or Credit Card</span>
                </div>

                </div>
                <div className='blackBtnPayemnt' style={{background:'white'}}>
                <div  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <p style={{color:'#333333'}}>Sponsered by</p>
                <img src={PaypalIcon} className='paypalIcon'  height={'80%'} style={{marginLeft:10}} width={60} />
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        <ExploreCity/>
        <PlanTrip/>

        <Footer/>
    </div>
    )
}

export default PaymentPage
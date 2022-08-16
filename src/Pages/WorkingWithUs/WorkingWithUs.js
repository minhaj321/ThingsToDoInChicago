import React,{useEffect,useState} from 'react';
import { Grid, Button } from '@mui/material'
import './WorkingWithUs.css';
import { Form } from 'react-bootstrap'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import homeBg from '../../Assets/CityPASS-MobileTIicket-Phone.png';
import Header from '../../Components/Header/Header';
import DotSliders from '../DotSlider/DotSlider';
import ExploreCity from '../../Components/ExploreCity/ExploreCity';
import Footer from '../../Components/Footer/Footer';
import PlanTrip from '../../Components/PlanTrip/PlanTrip';
import BreadCrum from '../../Components/BreadCrum/BreadCrum';
import Checkbox from "react-custom-checkbox";
import ArrowDropDownIcon from './../../Assets/Vector dropdown.svg';
import CheckIcon from '@mui/icons-material/Check';

const WorkingWithUs = () => {

const [firstCheck,setFirstCheck] = useState(false)
const [secondCheck,setSecondCheck] = useState(false)
const [thirdCheck,setThirdCheck] = useState(false)
const [fourthCheck,setFourthCheck] = useState(false)
const [fifthCheck,setFifthCheck] = useState(false)
const [sixthCheck,setSixthCheck] = useState(false)

useEffect(()=>{
// window.scrollTo(0,0)
},[])

// var a = document.getElementById('asd').offsetHeight;
// console.log('yes==',a)

return (
    <div>
  
 <Header/>

 <div className='workingBreadcrum' style={{width:'85%',margin:'auto'}}>
<BreadCrum
      lst={[ {
        name:'Home',
        url:'/'
      } ]}
      detailsPage={true}
      />
</div>

    <div>
     
        <Grid container>
        <div className='working-with-us-img'>
          <Grid md={12} sm={12} xs={12}>
            <h1 style={{ color: 'white', paddingTop: '20px',fontSize:42 }} className='working-with-us-heading'>WORK WITH US!</h1>
            <h5 style={{ color: 'white',fontWeight:'normal', paddingTop: '20px',fontSize:18 }}className='working-with-us-paragraph'> Bucket Listers is the leading digital media brand for everyday explorers We help brands, event producers, experience providers, restaurants and other local businesses grow through customized branded social compaigns that drive tangible business results.</h5>
            <h3 style={{ color: 'white', paddingTop: '15px',fontSize:22,marginBottom:0,marginTop:-20 }}>FILL OUT THE FORM OR EMAIL US</h3>
            <h3 style={{ color: 'white',paddingBottom:5,marginTop:5,fontSize:22,letterSpacing:1.5 }}>www.12345678@gmail.com</h3>
          </Grid>
          </div>
        </Grid>

      <div className='working-form-section'>
        <div className='working_form_sub'>
        <Grid container>
          <Grid item lg={3} md={4} sm={3} xs={6} style={{ paddingTop: '20px' }} className='submit-checkbox'>
            {/* <input type='checkbox' style={{height:18,width:18,position:'relative',top:3,backgroundColor:'yellow',accentColor:'cyan',color:'green'}} className='submit-checkbox1'></input> */}


<Checkbox
        checked={firstCheck}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#3EB2E2",
              // alignSelf: "stretch",
            }}
          >
            <CheckIcon color="white" size={20} style={{color:'#fff',fontSize:18,position:'relative',top:-2,left:-2}} />
          </div>
        }
        borderColor='#3EB2E2'
        // borderWidth={0}
        borderRadius={3}
        onChange={()=>setFirstCheck(!firstCheck)}
        style={{ overflow: "hidden" }}
        size={14}
        label="Submit an event"
      />

            {/* <label style={{ paddingLeft: '10px', fontSize: '14px' }} className='submit-event-label'>Submit an event</label> */}
          </Grid>
          <Grid item lg={3} md={4} sm={4} xs={6} style={{ paddingTop: '20px' }} className='submit-checkbox'>

          <Checkbox
        checked={secondCheck}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#3EB2E2",
            }}
            
          >
            <CheckIcon color="white" size={20} style={{color:'#fff',fontSize:18,position:'relative',top:-2,left:-2}} />
          </div>
        }
        borderColor='#3EB2E2' 
        // borderWidth={0}
        borderRadius={3}
        style={{ overflow: "hidden" }}
        onChange={()=>setSecondCheck(!secondCheck)}
        size={14}
        label="List my business"
        
      />
       {/* <label style={{ paddingLeft: '10px', fontSize: '14px' }} className='list-business-label'>List my bussiness</label> */}
          </Grid>
          <Grid item lg={6} md={4} sm={5} xs={11}style={{ paddingTop: '20px', fontSize: '14px' }} className='submit-checkbox'>

          <Checkbox
        checked={thirdCheck}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#3EB2E2",
            }}
          >
            <CheckIcon color="white" size={20} style={{color:'#fff',fontSize:18,position:'relative',top:-2,left:-2}} />
          </div>
        }
        onChange={()=>setThirdCheck(!thirdCheck)}
        borderColor='#3EB2E2' 
        // borderWidth={0}
        borderRadius={3}
        style={{ overflow: "hidden" ,fontSize:5}}
        size={14}
        label="Submit an event and List my business"
      />


            {/* <label style={{ paddingLeft: '10px' }} className='submit-label'>Submit an event and list my bussiness</label> */}
          </Grid>
        </Grid>
        <Grid container>

          <Grid lg={6} md={6} sm={6} xs={12}  style={{  paddingTop: '40px'}} >
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="First Name*" style={{ width: '90%', height: '45px' }} className='first-name-textfield'/>
              </Form.Group>
            </Form>
          </Grid>
          <Grid lg={6}  md={6} sm={6} xs={12}  textAlign='left' style={{ paddingTop: '40px' }} className='grid-lastname-textfield'>
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Last Name" className='last-name-textfield'/>
              </Form.Group>
            </Form>
          </Grid>
        </Grid>
        <Grid container>

          <Grid md={6}  sm={6} xs={12} style={{paddingTop: '30px' }} >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" style={{ width: '90%', height: '45px' }} className='email-textfield' />
              </Form.Group>
            </Form>
          </Grid>
          <Grid md={6} xs={12}  sm={6} textAlign='left' style={{ paddingTop: '30px' }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Phone Number" style={{ width: '90%', height: '45px' }} className='phone-textfield'  />
              </Form.Group>
            </Form>
          </Grid>
        </Grid>
        <Grid container>

          <Grid md={6}  sm={6} xs={12} style={{ paddingTop: '30px' }} className='grid-business-name-textfield'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Business Name" style={{ width: '90%', height: '45px' }} className='business-textfield' />
              </Form.Group>
            </Form>
          </Grid>
          <Grid md={6}  sm={6} xs={12} textAlign='left' style={{ paddingTop: '30px' }} >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Event Title" style={{ width: '90%', height: '45px' }} className='event-textfield' />
              </Form.Group>
            </Form>
          </Grid>
        </Grid>
        <Grid container>

          <Grid md={6} xs={12} sm={6}  style={{ paddingTop: '30px' }}>
            <Form.Select aria-label="Default select example" style={{ width: '94%', height: '45px',color:'#CECECE'}} className='event-type'>
              <option>Event Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <div style={{width:'100%',textAlign:'right'}}>
            <img className='firstDropDownIcon' src={ArrowDropDownIcon} style={{height:17,width:16,position:'relative',right:22,top:-29}} />
            </div>
          </Grid>
          <Grid md={6} textAlign='left' sm={6} xs={12} style={{ paddingTop: '30px' }} >
            <Form.Select aria-label="Default select example" style={{ width: '95%', height: '45px',color:'#CECECE' }} className='business-type'>
              <option style={{color:'red'}}>Type of Business</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <div style={{width:'100%',textAlign:'right'}}>
            <img className='secondDropDownIcon' src={ArrowDropDownIcon} style={{height:17,width:16,position:'relative',right:32,top:-29}} />
            </div>

          </Grid>
        </Grid>
        <Grid container>
          <Grid md={12} xs={12} style={{ paddingTop: '10px',paddingRight:10 }} >
            <Form >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Business Address" style={{ width: '95%', height: '45px'}} className='business-address' />
              </Form.Group>
            </Form>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={12} xs={12} style={{ paddingRight: '10px', paddingTop: '40px' }} className='grid-detail-description'>
            <Form.Control
              as="textarea"
              placeholder="Detail Description of event"
              style={{ height: '150px',  width: '95%' }}
              className='detail-description'
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <hr style={{ width:'94%' }} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={3.5} md={4} xs={12} textAlign='left' pl={1} className='tickWebLinKMain'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p style={{ color: '#55BAE4' ,fontWeight:750,fontSize:11,marginBottom:5,marginTop:5}}>WEBSITE LINK</p>
                <Form.Control type="email" placeholder="Enter email" style={{ height: '30px',width:'95%' }} className='website-link-textfield'/>
              </Form.Group>
            </Form>
          </Grid>
          <Grid item lg={3.5} md={4} xs={12} textAlign='left' ml={2} className='tickWebLinKMain'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <p style={{ color: '#55BAE4',fontWeight:750,fontSize:11,marginBottom:5,marginTop:5}} className='ticket-website-link-label'>TICKETS WEBSITE LINK</p>
                <Form.Control type="email" placeholder="Enter email" style={{ height: '30px',width:'95%'}} className='ticket-website-link-textfield' />
              </Form.Group>
            </Form>
          </Grid>
        </Grid>
        <Grid container textAlign='left'>
          <Grid item lg={2.4} md={4} sm={4} xs={6}>
            <h6 style={{color: '#55BAE4',marginBottom:0,fontSize:10}}>INSTAGRAM ITEM</h6>
            {/* <h6 className='workingUnderline' style={{color: '#838383',marginTop:0,marginBottom:3}}>https://www.123.com</h6> */}
            <input type='email' placeholder='https://www.123.com' className='instaLink' />

            {/* <hr style={{width:'96%',height:'3px',backgroundColor:'#99D3EB',marginTop:0}} className='instagram-hr'/> */}
          </Grid>
          <Grid item lg={2.4} md={4} sm={4} xs={6}>
            <h6 style={{color: '#55BAE4',marginBottom:0,fontSize:10}}>FACEBOOK LINK</h6>
            {/* <h6 className='workingUnderline' style={{color: '#838383',marginTop:0,marginBottom:3}}>https://www.123.com</h6> */}
            <input type='email' placeholder='https://www.123.com' className='instaLink' />
            {/* <hr style={{width:'96%',height:'3px',backgroundColor:'#99D3EB',marginTop:0}} className='facebook-hr'/> */}
          </Grid>
          <Grid item lg={2.4} md={4} sm={4} xs={6}>
            <h6 style={{color: '#55BAE4',marginBottom:0,fontSize:10}}>GOOGLE REVIEW LINK,</h6>
            {/* <h6 className='workingUnderline' style={{color: '#838383',marginTop:0,marginBottom:3}}>https://www.123.com</h6> */}
            <input type='email' placeholder='https://www.123.com' className='instaLink' />
            {/* <hr style={{width:'96%',height:'3px',backgroundColor:'#99D3EB',marginTop:0}} className='google-review-hr'/> */}
          </Grid>
          <Grid item lg={2.4} md={4} sm={4} xs={6}>
            <h6 style={{color: '#55BAE4',marginBottom:0,fontSize:10}}>YELP LINK</h6>
            {/* <h6 className='workingUnderline' style={{color: '#838383',marginTop:0,marginBottom:3}}>https://www.123.com</h6> */}
            <input type='email' placeholder='https://www.123.com' className='instaLink' />
            {/* <hr style={{width:'96%',height:'3px',backgroundColor:'#99D3EB',marginTop:0}} className='trip-advisor-hr'/> */}
          </Grid>
          <Grid item lg={2.4} md={4} sm={4} xs={6}>
            <h6 style={{color: '#55BAE4',marginBottom:0,fontSize:10}}>TRIP ADVISOR LINK</h6>
            {/* <h6 className='workingUnderline' style={{color: '#838383',marginTop:0,marginBottom:3}}>https://www.123.com</h6> */}
            <input type='email' placeholder='https://www.123.com' className='instaLink' />
            {/* <hr style={{width:'96%',height:'3px',backgroundColor:'#99D3EB',marginTop:0}} className='trip-advisor-hr'/> */}
          </Grid>
        
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
          <FormControl variant="standard" sx={{ m: 0, minWidth: '100%' } }>
        <InputLabel id="demo-simple-select-standard-label" style={{color:'#55BAE4'}}>Ticket Price</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Ticket price"
          className='ticket-price-select'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div style={{width:'100%',textAlign:'right'}}>

      <img src={ArrowDropDownIcon} style={{height:17,width:16,position:'relative',right:4,top:-24}} />
      </div>

          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} textAlign='left' md={12} sm={12} xs={12} style={{paddingTop:'25px'}} className='submit-checkbox1'>
          <Checkbox style={{color:'red'}}
        checked={fourthCheck}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#3EB2E2",
              // alignSelf: "stretch",
            }}
          >
            <CheckIcon color="white" size={20} style={{color:'#fff',fontSize:18,position:'relative'}} />
          </div>
        }
        borderColor='#3EB2E2'
        // borderWidth={0}
        borderRadius={3}
        onChange={()=>setFourthCheck(!fourthCheck)}
        style={{ overflow: "hidden" }}
        size={14}
        label="I'm intersted in also being promoted on social Media Channels"
      />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} textAlign='left' md={12} sm={12} xs={12}  style={{paddingTop:'10px'}} className='submit-checkbox1'>

          <Checkbox
        checked={fifthCheck}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#3EB2E2",
              // alignSelf: "stretch",
            }}
          >
            <CheckIcon color="white" size={20} style={{color:'#fff',fontSize:18,position:'relative'}} />
          </div>
        }
        borderColor='#3EB2E2'
        // borderWidth={0}
        borderRadius={3}
        onChange={()=>setFifthCheck(!fifthCheck)}
        style={{ overflow: "hidden" }}
        size={14}
        label="I'm intersted in also recieving professional photos"
      />

            {/* <input type='checkbox'/>
            <label style={{paddingLeft:'10px',color: '#838383'}} className='working-label1'>I'm intersted in also being promoted on social Media Channels</label> */}
          </Grid>
        </Grid>
        <Grid container>
          <Grid lg={12} textAlign='left' md={12} sm={12} xs={12}  style={{paddingTop:'10px'}} className='submit-checkbox1'>
          <Checkbox
        checked={sixthCheck}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#3EB2E2",
              // alignSelf: "stretch",
            }}
          >
            <CheckIcon color="white" size={20} style={{color:'#fff',fontSize:18,position:'relative'}} />
          </div>
        }
        borderColor= '#3EB2E2'
        // borderWidth={0}
        borderRadius={3}
        onChange={()=>setSixthCheck(!sixthCheck)}
        style={{ overflow: "hidden" }}
        size={14}
        label="I'm intersted in being listed on the official Guide of Things To Do in Chicago."
      />
            {/* <label style={{paddingLeft:'10px',color: '#838383'}} className='working-label1'>I'm intersted in also being promoted on social Media Channels</label> */}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} sm={11} xs={11} >
            <Button variant='contained' style={{float:'right',marginTop:'10px',width:'150px',backgroundColor:'#3EB2E2'}}>Submit</Button>
          </Grid>
        </Grid>



      </div>
      </div>
      
      {/* <div style={{width:'100%',height:'40px'}}> */}
        
        <ExploreCity/>
        <PlanTrip/>
        <Footer/>
    {/* </div> */}
 
    </div>
    </div>
  )
}

export default WorkingWithUs
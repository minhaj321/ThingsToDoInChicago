import React from 'react'
import './Profile.css';
import { Grid } from '@mui/material';
import Sidebar from '../../Components/Sidebar/Sidebar';
import {Form} from 'react-bootstrap';
import ProfileImg from './../../Assets/profilepicture.png'
import OverlaySidebar from './../../Components/Sidebar/OverlaySidebar';
import AddIcon from '@mui/icons-material/Add';

const Profile = () => {

  var windowWidth = window.outerWidth;
  // var a =document.getElementById('as').offsetTop;
  // console.log('yes==>',a)
  return (
    <div>
        <Grid container>
            <Grid item xl={1} lg={1.3} md={1.6} sm={2} xs={1}>
              {
                windowWidth>599 &&
                <Sidebar type='profile' />
              }
              {
                windowWidth<600 &&
                <OverlaySidebar/>
              }
            </Grid>
            <Grid item xl={11} lg={10.7} md={10.4} sm={10} xs={11}>

    <div className='profileMain'>
      <Grid container>
          <Grid item md={12} mt={10} sm={12} xs={12}>
            {/* <img src={} height={150} width={150} /> */}
            <div className='profilePicMainDiv' style={{ backgroundImage: `url(${ProfileImg})` ,height:150,width:150,borderRadius:90,margin:'auto'}}>

              <div style={{height:75,width:150,background:'transparent',borderTopRightRadius:100,borderTopLeftRadius:100}}>
              </div>

              <div className='plusDiv' style={{height:75,width:150,background:'transparent',borderBottomRightRadius:100,borderBottomLeftRadius:100,margin:'auto'}}>
                  <AddIcon className='profileAddIcon' style={{color:'white',margin:'auto',width:'100%',marginTop:20}} />
              </div>

            </div>
 
          </Grid>


          <Grid item md={12} sm={12} xs={12}>
            <p style={{color:'#4D4D4D',fontWeight:500,fontSize:23}}>Profile Picture</p>
          </Grid>
          <Grid item md={12} sm={12} textAlign='left' xs={12}>
            <p style={{color:'#4D4D4D',fontSize:21,fontWeight:600}}>Profile Fields</p>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
    <Form.Control type="email" placeholder="First Name" className='profileinput' />
          </Grid>
          <Grid item md={12} mt={3} sm={12} xs={12}>
    <Form.Control type="email" placeholder="Last Name" className='profileinput' />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
          <div  className='NamesaveBtn'>
                    <span style={{color:'white',fontWeight:500,fontSize:16}} >Save</span>
                </div>

          </Grid>

          <Grid item md={12} sm={12} xs={12} textAlign='left'>
            <p style={{color:'#4D4D4D',fontSize:21,fontWeight:600}}>Change Password</p>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
    <Form.Control type="email" placeholder="Current Password" className='profileinput' />
          </Grid>
          <Grid item md={12} mt={3} sm={12} xs={12}>
    <Form.Control type="email" placeholder="New Password" className='profileinput' />
          </Grid>
          <Grid item md={12} mt={3} sm={12} xs={12}>
    <Form.Control type="email" placeholder="Confirm Password" className='profileinput' />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
          <div  className='NamesaveBtn' id='as'>
                    <span style={{color:'white',fontWeight:500,fontSize:16}} >Submit</span>
                </div>

          </Grid>

      </Grid>
    </div>

            </Grid>
        </Grid>
    </div>
  )
}

export default Profile
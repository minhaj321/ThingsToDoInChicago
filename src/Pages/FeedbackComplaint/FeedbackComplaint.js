import React,{useState} from 'react'
import './FeedbackComplaint.css';
import {Grid} from '@mui/material';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Form } from 'react-bootstrap';
import OverlaySidebar from './../../Components/Sidebar/OverlaySidebar';

const FeedbackComplaint = () => {

    const [type,setType] = useState(true)
    var windowWidth = window.outerWidth;

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

            <Grid item md={10} sm={10} xs={11}>

                <div className='feedbackComlaintMain'>
                    <Grid container>
                    <Grid item md={12} sm={12} xs={12} textAlign='right'>
                        <div className='feedbackComplaintBtnGroup'>

          <div onClick={()=>setType(!type)}  className={'feedbackBtn'  }>
          <div className='subDivComp'>
                    <span className={type ? 'firstComp' : 'firstCompToggle' } style={{fontWeight:500,fontSize:16}}>Complaint</span>
                    <span className={type ? 'firstFeed' : 'firstFeedToggle' } style={{fontWeight:500,fontSize:16}} >Feedback</span>
          </div>
                </div>

                <div onClick={()=>setType(!type)}  className={  'complaintBtn' }>
                    <span className={type ? 'secondFeed' : 'secondFeedToggle'} style={{fontWeight:500,fontSize:16}} >Feedback</span>
                    <span className={type ? 'complaintTxt secondComp' :'complaintTxt secondCompToggle' } style={{fontWeight:500,fontSize:16}} >Complaint</span>
                </div>
                
                </div>
          </Grid>
                        <Grid item md={12} sm={12} xs={12}>
    <Form.Control type="email" placeholder="Email" className='feedbackinput' />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
    <Form.Control type="email" placeholder="Subject" className='feedbackinput'  />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
    <Form.Control as="textarea" rows={20} cols={10} placeholder='Message' className='feedbackinput message'  />
                        </Grid>
                        <Grid item md={12}  sm={12} xs={12}>
          <div  className='feedbackSubmitBtn'>
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

export default FeedbackComplaint
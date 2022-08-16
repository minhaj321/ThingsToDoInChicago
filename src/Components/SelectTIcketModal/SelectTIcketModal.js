import React,{useState} from 'react'
import './SelectTIcketModal.css';
import {Grid,Divider} from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from './../../Assets/Close_SM-1.png'
import Icon from './../../Assets/MaskGroup.png';
import {Form} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


var windowWidth = window.outerWidth;

const style = {
  position: 'absolute',
  top: '52%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  borderRadius:1,
  bgcolor: 'background.paper',
  // overflow:'scroll',
//   border: '2px solid #000',
  boxShadow: 24,
  p0: 4,
  p0: 4,
  pt: 0,
  // pb: 4,
};

const SelectTIcketModal = ({open,handleClose}) => {
  
  let navigate = useNavigate();

    return (
 <div style={{fontFamily:'poppins'}}>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modalBox' sx={style}>
            <Grid container pb={2} className='modalFirstContainer'>
                <Grid item md={1} sm={2} xs={1.5}>
                    <img  src={Icon} className='modalHeaderIcon' style={{height:80,width:80,borderRadius:50,position:'relative',bottom:40,left:30}} />
                </Grid>
                <Grid item md={10} sm={9} xs={9} textAlign='center'>
                    <p style={{fontWeight:500,fontSize:20}}>ChiTown Movies Present The Notebook</p>
                    <span style={{cursor:'pointer',color:'#8E76F4',fontWeight:600,fontSize:12,borderRight:'1px solid black',paddingRight:10}}>SELECT TICKETS</span>
                    <span style={{cursor:'pointer',fontSize:12,borderRight:'1px solid black',borderLeft:'1px solid black',paddingRight:10,paddingLeft:10}}>TICKET INFO</span>
                    <span style={{cursor:'pointer',fontSize:12,borderLeft:'1px solid black',paddingLeft:10}}>PAYMENT INFO</span>
                </Grid>
                <Grid item md={1} sm={1} xs={1.5} textAlign='right'>
                    <img src={CloseIcon} onClick={handleClose} style={{height:30,width:30,position:'relative',top:5,right:10}} />
                </Grid>
            </Grid>
<div className='modalMailDiv' style={{overflowY:'scroll',minHeight:'40vh',maxHeight:'70vh'}}>

            <Grid container>
            <Grid item md={7} sm={7} xs={12} className='modalFirstPartDiv' style={{height:'100%'}}>
                    <div className='modalFirstPartSubDiv'>
                <Grid container>
                  <Grid item md={12} sm={12} xs={12}>
                    <p style={{fontSize:15,marginTop:20,marginBottom:20,fontFamily:'poppins'}}>SELECT TICKETS</p>
                  </Grid>
                  <Grid item md={12} mt={-1} sm={12} xs={12} mb={0}>
                    <hr/>
                  </Grid>
                  <Grid item md={5} sm={4} xs={4}>
                  <p style={{fontSize:13,fontFamily:'poppins'}}>Date</p>
                  </Grid>
                  <Grid item md={6} sm={8} xs={8} textAlign='right'> 
                  <span style={{fontSize:13,fontFamily:'poppins'}}>Fri, Feb 11</span>
                  <p style={{fontSize:13,fontFamily:'poppins',color:'#afafaf'}}>7:00 PM - 8:40 PM CST</p>
                  </Grid>
                  <Grid item md={12} sm={12} mt={-1} xs={12}>
                    <hr/>
                  </Grid>
                  <Grid item md={8} sm={8} xs={12}>
                    <p style={{fontSize:13,fontFamily:'poppins'}}>Green- Cars and small SUV's only-A,B,C</p>
                  </Grid>
                  <Grid item md={1} sm={1.5} xs={4} textAlign='right'>
                    <p style={{fontSize:13,fontFamily:'poppins'}}>33$</p>
                  </Grid>
                  <Grid item md={2} sm={2.5} xs={4} textAlign='right' alignContent={'right'} >
  <Form.Select className='ticketModalSelectInput' style={{width:'50%',background:'white',paddingLeft:5,fontSize:15,marginTop:10,margin:'auto',height:40,borderRadius:5}}>
    <option style={{background:'#fff'}}>0</option>
    <option style={{background:'#fff'}}>0</option>
    <option style={{background:'#fff'}}>0</option>
  </Form.Select>
                  </Grid>
                  <Grid item md={12} mt={0} sm={12} xs={12}>
                    <hr/>
                  </Grid>
                  <Grid item md={8} sm={8} xs={12}>
                    <p style={{fontSize:13,fontFamily:'poppins'}}>Purple- Any Vehicle-D,E</p>
                  </Grid>
                  <Grid item md={1} sm={1.5} xs={4} textAlign='right'>
                    <p style={{fontSize:13,fontFamily:'poppins'}}>33$</p>
                  </Grid>
                  <Grid item md={2} sm={2.5} xs={4} textAlign='right' alignContent={'right'} >
  <Form.Select className='ticketModalSelectInput' style={{width:'50%',background:'white',paddingLeft:5,fontSize:15,marginTop:10,margin:'auto',height:40,borderRadius:5}}>
  <option style={{background:'#fff'}}>0</option>
    <option style={{background:'#fff'}}>0</option>
    <option style={{background:'#fff'}}>0</option>
  </Form.Select>
                  </Grid>
                  <Grid item md={12} mt={0} sm={12} xs={12}>
                    <hr/>
                  </Grid>
                  <Grid item md={8} sm={8} xs={12}>
                  <p style={{fontSize:13,fontFamily:'poppins'}}>Red- Any Vehicle-F,G</p>
                  </Grid>
                  <Grid item md={1} sm={1.5} xs={4} textAlign='right'>
                    <p style={{fontSize:13,fontFamily:'poppins'}}>33$</p>
                  </Grid>
                  <Grid item md={2} sm={2.5} xs={4} textAlign='right' alignContent={'right'} >
  <Form.Select className='ticketModalSelectInput' style={{width:'50%',background:'white',paddingLeft:5,fontSize:15,marginTop:10,margin:'auto',height:40,borderRadius:5}}>
  <option style={{background:'#fff'}}>0</option>
    <option style={{background:'#fff'}}>0</option>
    <option style={{background:'#fff'}}>0</option>
  </Form.Select>
                  </Grid>
                  <Grid item md={12} mt={0} sm={12} xs={12}>
                    <hr/>
                  </Grid>
                  <Grid item md={8} sm={8} xs={12}>
                    <p style={{fontSize:13,fontFamily:'poppins'}}>Red- Any Vehicle-F,G</p>
                  </Grid>
                  <Grid item md={1} sm={1.5} xs={4} textAlign='right'>
                    <p style={{fontSize:13,fontFamily:'poppins'}}>33$</p>
                  </Grid>
                  <Grid item md={2} sm={2.5} xs={4} textAlign='right' alignContent={'right'} >
  <Form.Select className='ticketModalSelectInput' style={{width:'50%',background:'white',paddingLeft:5,fontSize:15,marginTop:10,margin:'auto',height:40,borderRadius:5}}>
  <option style={{background:'#fff'}}>0</option>
    <option style={{background:'#fff'}}>0</option>
    <option style={{background:'#fff'}}>0</option>
  </Form.Select>
                  </Grid>
                  <Grid item md={12} mt={0} sm={12} xs={12}>
                    <hr/>
                  </Grid>
                  <Grid item md={12} sm={12} xs={12} mt={5}>
                  <div className='DiscountCodeModalBtn'>
                            <span style={{color:'white'}}>Discount Code</span>
                          </div>
                  </Grid>

                </Grid>
                    </div>
                </Grid>
                <Grid item md={5} sm={5} xs={12} className='modalSecondPartDiv'>
                    <div className='modalSecondPartSubDiv'>
                      <Grid container>
                        <Grid item md={12} sm={12} xs={12}>
                          <p style={{fontSize:18,marginLeft:10,color:'#333333',fontFamily:'poppins'}}>Your Order</p>
                        </Grid>
                        <Grid item md={8} sm={7} xs={12}>
                        <Form.Control type="text"  style={{fontFamily:'poppins',fontSize:12,fontWeight:600}} placeholder="Discount Code" className='discountCodeInput' />
                        </Grid>
                        <Grid item md={4} sm={5} xs={12}>
                          <div className='modalApplyDiv'>
                            <span style={{color:'white',fontSize:14}}>Apply</span>
                          </div>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                          <p className='modalChooseTxt'  style={{fontFamily:'poppins',fontSize:12}}>Please choose a time and ticket type to continue.</p>
                        </Grid>
                      </Grid>
                    </div>
                </Grid>
            </Grid>
            </div>

        </Box>
      </Modal>
    </div>  )
}

export default SelectTIcketModal
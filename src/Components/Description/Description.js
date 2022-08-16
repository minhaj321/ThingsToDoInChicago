import React from 'react'
import './Description.css';
import {Grid} from '@mui/material';
import ParkingImg from './../../Assets/bBHlVjT2.png'

const Description = () => {
  return (
    <div style={{textAlign:'left',marginTop:-20}}>
        <Grid container>
            <Grid item md={12}>
                <h2 style={{marginBottom:30,fontSize:26,color:'#333333',marginTop:30}}>Description</h2>
                <p style={{marginBottom:0,color:'#333333',fontSize:16}}>Prrem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br/> Aenean massa. Cum  sociis natoque penatibus et magnis dis parturient montes, nascetur<br/> ridiculus mus. Donec</p>
            </Grid>
            <Grid item md={12}>
            <h2 style={{marginBottom:30,fontSize:26,color:'#333333',marginTop:30}}>Good to know</h2>
                <p style={{color:'#333333',fontSize:16}}>Prrem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.<br/> Aenean massa. Cum  sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
            </Grid>
            <Grid item md={12}>
                <ul className='descriptionList'>
                    <li>Prrem ipsum dolor sit amet, consect</li>
                    <li>Prrem ipsum dolor sit amet, consect</li>
                    <li>Mrrem ipsum dolor sit amet, consect</li>
                    <li>Arrem ipsum dolor sit amet, consect</li>
                    <li>Nrrem ipsum dolor sit amet, consect</li>
                </ul>
            </Grid>
            <Grid item md={12}>
                <img src={ParkingImg} className='DescParkingImg' />
            </Grid>
        </Grid>
    </div>
  )
}

export default Description
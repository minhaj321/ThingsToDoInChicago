import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Grid} from '@mui/material';
import './CardComponent.css';
import HeartIcon from './../../Assets/hearticon.png';
import { useNavigate } from "react-router-dom";
import Exclusive from './../../Assets/Exclusive.svg';
import BestPrice from './../../Assets/bestPrice.svg';

export default function CardComponent({showHeart,image,w,txt,showDis,price,best,exc}) {

  var navigate = useNavigate();

  return (
      <Grid container textAlign={'left'}>
          <Card sx={{ minWidth: '93%',maxWidth:'93%' }} disableRipple  className='cardMain' style={{paddingTop:10,paddingLeft: 0,paddingRight:0,position:'relative'}}>
    
        <div style={{overflow:'hidden',marginLeft:10,marginRight:10,borderRadius:5}}>
        <CardMedia
        className='card_Img'
          component="img"
          height={w}
          image={image ? image : "data:image/jpeg;base64,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"}
          alt="green iguana"
          onClick={()=>navigate('EventDetails')}
        />     
        {
          exc &&
        <img src={Exclusive} style={{position:'absolute',right:0,bottom:150}} />
        }    
        {
          best &&
        <img src={BestPrice} style={{position:'absolute',right:0,bottom:150}} />
        }
        </div>
 
        <CardContent style={{marginBottom:10}}>
          <Typography gutterBottom variant="h7" component="div" className='card_heading'>
            {txt}
          </Typography>
          
          <Typography variant="span" className='card_price'>
                {
                  price.from &&
                  <span>
                    from <span style={{color:'#7C7C7C',textDecoration:'line-through'}}>{price.prev}$</span>  {price.new}$
                  </span>
                }
                {
                  !price.from &&
                  price
                }
          </Typography>
          {
            showDis.show &&
          <Typography variant="span" className='card_off_price'>
                {showDis.dis}% Off
          </Typography>
          }
          {
            showHeart &&
            <img src={HeartIcon} height={22} width={25} className='card_heart_icon' />
          }
        </CardContent>
    </Card>
          </Grid>

  );
}

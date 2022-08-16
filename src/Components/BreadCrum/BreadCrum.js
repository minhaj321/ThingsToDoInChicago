import './BreadCrum.css';
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";


export default function BreadCrum({lst,detailsPage}) {

    var navigate = useNavigate();

  return (
      <div style={detailsPage ? {height:30,marginTop:5,marginBottom:5} : {height:30,marginLeft:30,marginTop:5,marginBottom:5}}>
    <Stack spacing={2}>
      {
        !detailsPage &&
      <Breadcrumbs separator="" aria-label="breadcrumb" style={{fontSize:15,marginTop:5}} > 
        {
            lst.map((v,i)=>(
                
    <Typography key="3" 
    style={i==lst.length-1 ? {marginLeft:-5,fontSize:15} : {cursor:'pointer',marginLeft:-5,fontSize:15,color:'#3FB3E4',fontWeight:'bold'}}
    onClick={()=>navigate(v.url)}
    >
    {v.name}
    {
        i!=lst.length-1 &&
        <span style={{marginLeft:10}}>{` >> `}</span>
    }

  </Typography>
            ))
        }
      </Breadcrumbs>
      }
      {
        detailsPage &&
        
        <Breadcrumbs separator="" aria-label="breadcrumb" style={{fontSize:15,marginTop:5}} > 
                
    <Typography key="3" 
    style={{cursor:'pointer',marginLeft:-5,fontSize:15,color:'#3FB3E4',fontWeight:'bold'}}
    onClick={()=>navigate(lst[0].url)}
    >
        <span style={{marginLeft:10}}>{` << `}</span>
    {lst[0].name}

  </Typography>
    </Breadcrumbs>


      }
    </Stack>
    </div>
  );
}
import React from 'react'
import {Grid} from '@mui/material';
import './FindInMap.css';
import GoogleMapReact from 'google-map-react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';



const AnyReactComponent = ({ text }) => (
  <LocationOnSharpIcon style={{color:'red',fontSize:30}}/>
);

const FindInMap = () => {

  return (
    <div>
        <Grid container>
            <Grid item md={12} sm={12} xs={12}>
                <div className='DetailsMapDiv'>
                <GoogleMapReact
    //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
      defaultCenter={{
        lat: 59.955413,
        lng: 30.337844
      }}
      defaultZoom={11}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text=""
      />
    </GoogleMapReact>

                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default FindInMap
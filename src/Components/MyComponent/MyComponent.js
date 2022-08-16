import React,{useState,useEffect} from 'react'
import { GoogleMap, useJsApiLoader ,Marker,InfoBox,InfoWindow} from '@react-google-maps/api';
import './MyComponent.css';
import CloseIcon from '@mui/icons-material/Close';
const containerStyle = {
  width: '98%',
  height: '100%',
  marginLeft:'1%',
  borderRadius:'5px'
};

const center = {
  lat: -8.6465822,
  lng: 116.5441072
};



export default function MyComponent() {

    const [hand,setHand] = useState(false)
    const [open1,setOpen1] = useState(false);
    const [open2,setOpen2] = useState(false);
    const [open3,setOpen3] = useState(false);
    const [open4,setOpen4] = useState(false);

    
    useEffect(()=>{
        setTimeout(()=>{
            setHand(true)
        },2000)
    },[])

    const handleOpen1 = ()=>{
     setOpen1(!open1) 
     setOpen2(false) 
     setOpen3(false) 
     setOpen4(false) 
    }

    const handleOpen2 = ()=>{
      setOpen2(!open2) 
      setOpen1(false) 
      setOpen3(false) 
      setOpen4(false) 
      }
     
    const handleOpen3 = ()=>{
      setOpen3(!open3) 
      setOpen2(false) 
      setOpen1(false) 
      setOpen4(false) 
      }
     
    const handleOpen4 = ()=>{
      setOpen4(!open4) 
      setOpen2(false) 
      setOpen3(false) 
      setOpen1(false) 
      }

    const handleClose = ()=>{
      setOpen1(false) 
      setOpen2(false) 
      setOpen3(false) 
      setOpen4(false) 
    }

      const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCynBZZ9s3-726-LF3cwyJ-_s_yocevg6I"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

// details div
  const Details =()=>{
    return(
      <>
      <div className='myComponentInfoDiv'>
      <CloseIcon onClick={handleClose} style={{color:'white',height:25,width:25,marginRight:10,marginTop:7,cursor:'pointer'}} />
      </div>
      <h3 style={{textAlign:'left',marginTop:0,marginBottom:0}}>312 Chicago</h3>
      <p style={{textAlign:'left',marginTop:4,fontSize:11,marginBottom:0}}>136 N.LaSalle St.</p>
      <p style={{textAlign:'left',marginTop:15}}>learn more</p>
      </>
    )
  }
  

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
            lat:59.925413,
            lng:30.307844
            }}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          <Marker 
          position={{
              lat:59.425413,
              lng:30.707844
          }}
          onClick={handleOpen1}
          >
          {
            open1 &&

          <InfoWindow >
            <div  className='infoDiv'>
              <Details />
            </div>
          </InfoWindow>
          }
            </Marker>
          <Marker 
          position={{
              lat:59.205413,
              lng:30.327844
          }}
          onClick={handleOpen2}
          >
          {
            open2 &&

          <InfoWindow >
            <div  className='infoDiv'>
              <Details />
            </div>
          </InfoWindow>
          }
            </Marker>
          <Marker 
          position={{
              lat:59.955413,
              lng:30.397844
          }}
          onClick={handleOpen3}
          >
            {
              open3 &&

            <InfoWindow >
              <div  className='infoDiv'>
                <Details />
              </div>
            </InfoWindow>
            }
            </Marker>
          <Marker 
          position={{
              lat:59.855413,
              lng:30.167844
          }}
          onClick={handleOpen4}

          >
          {
            open4 &&

          <InfoWindow >
            <div  className='infoDiv'>
              <Details />
            </div>
          </InfoWindow>
          }
            </Marker>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
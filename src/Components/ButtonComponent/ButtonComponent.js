import React from 'react'
import './ButtonComponent.css';

const ButtonComponent = ({handleOpen}) => {
  return (
    <div className='buttonMain'>
        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>

    <p style={{color:'#3e80e2'}}>$50</p>
    <div className='bookBtn' onClick={()=>handleOpen()} >
        <p className='bookTxt'>book</p>
    </div>
        </div>
    </div>
    )
}

export default ButtonComponent
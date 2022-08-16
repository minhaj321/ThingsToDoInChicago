import React from 'react'
import './SelectInput.css';
import ArrowDropDownIcon from './../../Assets/Media/Play.svg';
const SelectInput = ({placeholder,color}) => {


  return (
    
<div >
    <select className='selectInput'
   
    >
        <option>{placeholder}</option>
        <option>2</option>
        <option>3</option>
    </select>
    <img src={ArrowDropDownIcon} style={{height:15,width:15,fontSize:30,position:'relative',right:20,top:2}} />
</div>
  )
}

export default SelectInput
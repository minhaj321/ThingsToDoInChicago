import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Grid} from '@mui/material';
import backArrow from './../../Assets/sliderbuttonleft.png';
import forArrow from './../../Assets/sliderbuttonright.png';
import './ImageModal.css';
import { Carousel } from 'react-responsive-carousel';
import Img1 from './../../Assets/yutacar-JKMnm3CIncw.jpg';
import Img2 from './../../Assets/anton-8eG73NjiHao-unsplash11.png';
import Img3 from './../../Assets/cheeseImg1.png';
import Img4 from './../../Assets/iceCream1.png';


const style = {
  position: 'absolute',
  top: '50%',
  width:'100%',
  height:'100%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'transparent',
  boxShadow: 24,
  border:'none',
  outline:'none',
  p: 4,
};

const ImageModal = ({open,setOpen,handleClose,handleOpen,imgCount,setImgCount}) => {

    var {img,setImg} = useState(imgCount)
    const handleCarousel =(type)=>{
        if(type=='back'){
            if(imgCount==0){
                setImgCount(4)
            }else{
                setImgCount(imgCount-1)
            }
        }else{
            if(imgCount==4){
                setImgCount(0)
            }else{
                setImgCount(imgCount+1)
            }
        }
    }

    return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
        {/* <div> */}
        <div className={imgCount==0 ?'one' : imgCount==1 ? 'three' : imgCount==2 ? 'two' : ' four'}>
        <div onClick={handleClose} style={{cursor:'pointer',width:'5vw',height:'5vw',marginTop:'15vh',background:'transparent',justifyContent:'center',alignItems:'center',display:'flex',marginLeft:'auto'}}>
            <p style={{color:"#fff",marginTop:'-28vh'}} className='closeX'>X</p>
        </div>
    <div style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'space-between',alignContent:'center',height:'60vh'}} className='modalImgMaindiv'>
    <img src={backArrow} 
    onClick={()=>handleCarousel('back')}
    className='' style={{height:45,width:45,cursor:'pointer',borderRadius:50,marginLeft:10}}/>

{/* <div className='imageModalImageDiv'>

</div>     */}

    <img src={forArrow} 
    onClick={()=>handleCarousel('forw')}
    className='' style={{height:45,width:45,cursor:'pointer',borderRadius:50,marginRight:10}}/>
    </div>
    </div>
    </Box>
  </Modal>
    )
}

export default ImageModal
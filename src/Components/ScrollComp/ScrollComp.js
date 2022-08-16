import React,{useState} from 'react'
import BlueBack from './../../Assets/backward-blue.png'
import BlueFor from './../../Assets/forward-blue.png'

const ScrollComp = ({title,id}) => {

    var [scrollWidth,setScrollWidth] = useState(0)

    const move=(type)=>{
        
        var item = document.getElementById(id)
        console.log('as=<',item.clientWidth)
        console.log('asdasd=>',item.offsetWidth)
        if(type=='backward'){
            if(scrollWidth>0){
                scrollWidth=scrollWidth-(item.clientWidth/3)
            }
            setScrollWidth(scrollWidth)
            item.scrollLeft=scrollWidth;
        }else{
            if(window.outerWidth>599){
                if(scrollWidth<item.clientWidth+40){
                    scrollWidth=scrollWidth+(item.clientWidth/3)
                }
            }else{
                if(scrollWidth<item.clientWidth*2){
                    scrollWidth=scrollWidth+(item.clientWidth/3)
                }
            }

            setScrollWidth(scrollWidth)
            item.scrollLeft=scrollWidth;
        }
        console.log(item.clientWidth*2)
        console.log(scrollWidth)
    }

  return (
    <div>
                <div className='discoverChicago'><span>{title}</span>
                <div>
                <img src={BlueBack} className='blueBackIcon' height={28} width={28}
                onClick={()=>move('backward')}
                />
                <img src={BlueFor} className='blueForIcon' height={28} width={28} 
                onClick={()=>move('forward')}
                />

                </div>
                </div>        
    <div style={{flexDirection:'row',display:'flex',overflowX:'scroll'}} id={id}>
    {/* <Grid item md={4} sm={4} xs={12}> */}
    <div className='first_chicago_Image_Div image_Div1Chacgo'>
            <p>Mortan Salt Building Transformed into Outdoor Concert Venue The Salt Shed</p>
        </div>
    {/* </Grid> */}
    {/* <Grid item md={4} sm={4} xs={12}> */}
    <div className='second_chicago_Image_Div image_Div1Chacgo'>
            <p>50 Black-Owned Businessed and Restaurants in Chicago</p>
        </div>
    {/* </Grid>                 */}
    {/* <Grid item md={4} sm={4} xs={12}> */}
    <div className='third_chicago_Image_Div image_Div1Chacgo'>
            <p >The Chicago Guide To Heated Outdoor Dining</p>
        </div>
    {/* <Grid item md={4} sm={4} xs={12}> */}
    <div className='first_chicago_Image_Div image_Div1Chacgo' style={{marginLeft:'2%'}}>
            <p>Mortan Salt Building Transformed into Outdoor Concert Venue The Salt Shed</p>
        </div>
    {/* <Grid item md={4} sm={4} xs={12}> */}
        <div className='second_chicago_Image_Div image_Div1Chacgo'>
            <p>50 Black-Owned Businessed and Restaurants in Chicago</p>
        </div>

    {/* </Grid> */}
    <div className='third_chicago_Image_Div image_Div1Chacgo'>
            <p >The Chicago Guide To Heated Outdoor Dining</p>
        </div>

</div>
</div>
    )
}

export default ScrollComp
import React,{useState} from 'react'
import './CalenderComp.css';
import { Grid } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Forward from './../../Assets/Group229.png';
import Backward from './../../Assets/Group228.png';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Img1 from './../../Assets/homeBg1.png';
import CalImg from './../../Assets/Calendar/Calendar_Days-14.svg';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const CalenderComp = () => {

    const [value, onChange] = useState(new Date());
    var [dispMonth,setDispMonth] = useState(moment().toDate())
    var [currentMonth,setCurrentMonth] = useState(new Date().getMonth())
    var [currentYear,setCurrentYear] = useState(new Date().getFullYear())
    var [eventDate,setEventDate] = useState('')
    var [eventName,setEventName] = useState('')
    var [eventType,setEventType] = useState('')
    var [eventAddress,setEventAddress] = useState('')
    var [currentDate,setCurrentDate]=useState(1)

    var monthsArray =[
{name:'January',val:'Jan',num:0},{name:'Febuary',val:'Feb',num:1},{name:'March',val:'Mar',num:2},{name:'April',val:'Apr',num:3},
{name:'May',val:'May',num:4},{name:'June',val:'Jun',num:5},{name:'July',val:'Jul',num:6},{name:'August',val:'Aug',num:7},
{name:'September',val:'Sep',num:8},{name:'October',val:'Oct',num:9},{name:'November',val:'Nov',num:10},{name:'December',val:'Dec',num:11}
] 

const eventsList=[
    {date:moment().subtract(20,'days'),name:'Birthday Party',address:'Street # 02' , type:'Enjoyment'},
    {date:moment().subtract(15,'days'),name:'Birthday Party',address:'Street # 02' , type:'Enjoyment'},
    {date:moment().subtract(7,'days'),name:'Birthday Party',address:'Street # 02' , type:'Enjoyment'},
    {date:moment().add(1,'days'),name:'Birthday Party',address:'Street # 02' , type:'Enjoyment'},
    {date:moment().add(6,'days'),name:'Wedding Party',address:'Chicago East' , type:'Enjoyment'},
    {date:moment().add(1,'months'),name:'Promotion Party',address:'Chicago West' , type:'Appreciation'},
]

const handleAddMonth =()=>{

// var thisMonth = dispMonth.getMonth()
dispMonth=moment(dispMonth).add(1,'months').toDate()
    setDispMonth(dispMonth)
    
    if(currentMonth==11){
        setCurrentMonth(0);
        setCurrentYear(currentYear+1)
    }else{
        setCurrentMonth(currentMonth+1)
    }

}

const handleSubMonth=()=>{
    dispMonth=moment(dispMonth).subtract(1,'months').toDate()
    setDispMonth(dispMonth)

    if(currentMonth==0){
        setCurrentMonth(11);
        setCurrentYear(currentYear-1)
    }else{
        setCurrentMonth(currentMonth-1)
    }
}

const handleMonthChange =(val)=>{
    var obj = JSON.parse(val.target.value)
    var arr=dispMonth+'';
    arr = arr.split(' ');
    var newDate=arr[0]+' '+obj.val+' '+arr[2]+' '+arr[3]+' '+arr[4]+' '+arr[5]+' '+arr[6]+' '+arr[7]+' '+arr[8]
    dispMonth = moment(newDate).toDate();
    setDispMonth(dispMonth)
    setCurrentMonth(obj.num)
}

const handleYearChange=(val)=>{
    var arr=dispMonth+'';
    arr = arr.split(' ');
    var newDate=arr[0]+' '+arr[1]+' '+arr[2]+' '+val.target.value+' '+arr[4]+' '+arr[5]+' '+arr[6]+' '+arr[7]+' '+arr[8]
    dispMonth = moment(newDate).toDate();
    setDispMonth(dispMonth)
    setCurrentYear(val.target.value)
}

const [anchorEl, setAnchorEl] = React.useState(null);

const handleClick = (event,data,currentEventDate) => {

    setEventName(data.name);
    setEventType(data.type);
    var splittedDate = currentEventDate+'';
    splittedDate = splittedDate.split(' ');
    setEventDate(splittedDate[1]+' ' + splittedDate[2]+' ' + splittedDate[3]);
    setCurrentDate(event.pageY);
    // console.log(event.pageY)
    setEventAddress(data.address);
  setAnchorEl(anchorEl ? null : event.currentTarget);
};
const open = Boolean(anchorEl);
const id = open ? 'simple-popper' : undefined;

var windowWidth = window.outerWidth;


return(
        <div style={{width:'90%',margin:'auto',position:'relative'}} className='calenderMainDiv'>

{/* popover start */}
<Popper id={id} open={open} 
anchorEl={anchorEl} onMouseLeave={()=>setAnchorEl(null)}>
        <Box sx={{  p: 1}} className='popOverBox'>
            <Grid container>
                <Grid item md={7.5} sm={7.5} xs={7.5}>
                    <Grid container>
                        <Grid item md={1} pt={0.5}  sm={1} xs={1}>
                            <img className='tabPopCalIcon' src={CalImg} style={{cursor:'pointer',width:17,height:17}} />
                        </Grid>
                        <Grid item md={5.5} sm={5.5} xs={6.8}>
                            <span style={{fontSize:13}} className='tabPopCalTxt'>
                            Google Calender
                            </span>
                        </Grid>
                        <Grid item md={1} pt={0.2} sm={1} xs={1}>
                            <CalendarTodayOutlinedIcon className='tabPopCalIcon2' style={{cursor:'pointer',width:17,height:17}} />
                        </Grid>
                        <Grid item md={3} sm={3} xs={1.7} className='tabPopCalTxt2'>
                            ICal
                        </Grid>
                    </Grid>
                    <p className='popUpEventName' >{eventName}</p>
                    <p className='popUpEventDate' >{eventDate}</p>
                    <p className='popUpEventAddress' >{eventAddress}</p>
                    <p className='popUpEventType' >{eventType}</p>
                </Grid>
                <Grid item md={4.5} sm={4.5} xs={4.5}>
                    <img src={Img1} height={180} width={'100%'} />
                </Grid>
            </Grid>
        </Box>
      </Popper>

{/* popover end */}
            <Grid container mt={5} >

                <Grid item md={4} sm={5} xs={7} textAlign='left' style={{marginLeft:'6%'}} className='calFirstDiv'  pl={windowWidth>899 ? 0 : 2} pb={windowWidth>430 ? 0 : 3}>
                <select className='monthSelect' onChange={handleMonthChange} id='call'>
                    {
                        monthsArray.map((v,i)=>{
                            return(
                                <option key={v.num} selected={v.num===currentMonth} value={JSON.stringify(v)}>
                                    {v.name}
                                </option>
                            )
                        })
                    }
                </select>
                <select className='monthSelect yearSelect' onChange={handleYearChange} id='call'>
                    {
                        [...Array(100)].map((v,i)=>(
                            <option  key={i} selected={ (2021+i)==currentYear} >{2021+i}</option>
                        ))
                    }
                </select>
                {
                    windowWidth>430 &&
                <img src={Forward} height={25} width={25}  onClick={handleAddMonth} style={{marginLeft:10,position:'absolute',cursor:'pointer'}} />
                }

                </Grid>
                <Grid item  md={windowWidth>1184 ? 3 : 2.7} sm={2} xs={0} textAlign='center'  pr={0} pb={windowWidth>430 ? 0 : 3}>
                </Grid>
                <Grid item md={windowWidth>2030 ? 4 : 3.8} ml={windowWidth>599 ? 4 : 2} style={{float:'right'}} sm={3.6} xs={3.8} textAlign='right'>
                {
                    !(currentMonth==0 && currentYear==2021) && 
                    <img src={Backward} height={25} onClick={handleSubMonth} width={25} style={{marginRight:20,cursor:'pointer'}} />
                }
                <img src={Forward} height={25} width={25} onClick={handleAddMonth} style={{marginRight:0,cursor:'pointer'}} />
                </Grid>

                <Grid item md={12} mt={4} xs={12}>
{/* extr */}
{
    open &&
<Box sx={{p: 1}}  className='popOverBox popOverBox1' style={{width:'60%',marginLeft:'35%',position:'absolute',zIndex:2,marginTop:currentDate-700}}>
            <Grid container>
                <Grid item md={7.5} sm={7.5} xs={7.5}>
                    <Grid container>
                        <Grid item md={1} pt={0.5}  sm={1} xs={windowWidth>480 ? 0.2 : windowWidth>420 ?  0.5 : 1}>
                            <img className='calIconModal' src={CalImg} style={{cursor:'pointer',width:17,height:17}} />
                        </Grid>
                        <Grid item md={5.5} sm={5.5} xs={6.8}>
                            <span style={{fontSize:13}} className='googleCalTxt'>
                            Google Calender
                            </span>
                        </Grid>
                        <Grid item md={1} pt={0.2} sm={1} xs={1}>
                            <CalendarTodayOutlinedIcon className='calIconModal' style={{cursor:'pointer',width:15,height:15}} />
                        </Grid>
                        <Grid item md={3} sm={3} xs={1.7} className='iCALTxt'>
                            ICal
                        </Grid>
                    </Grid>
                    <p className='popUpEventName' style={{textAlign:'left'}}>{eventName}</p>
                    <p className='popUpEventDate' style={{textAlign:'left'}} >{eventDate}</p>
                    <p className='popUpEventAddress' style={{textAlign:'left'}}  >{eventAddress}</p>
                    <p className='popUpEventType'  style={{textAlign:'left'}} >{eventType}</p>
                </Grid>
                <Grid item md={4.5} sm={4.5} xs={4.5}>
                    <img src={Img1} height={180} width={'100%'} />
                </Grid>
            </Grid>
</Box>
}

                <Calendar onChange={onChange} value={value}
                className='calenderMain'
                maxDetail='month'
                showNavigation={false}
                activeStartDate={dispMonth}
                onActiveStartDateChange={()=>dispMonth}
                        // showNavigation={false}
                view={'month'}
                prev2Label={false}
                next2Label={false}
                tileClassName={
                    ({ date, view }) =>{ if(true){
                                for(let i=0;i<eventsList.length;i++){

                                    var calDate= moment(date).toDate()
                                    var eventDate= moment(eventsList[i].date).toDate()

                                    if( moment(calDate).format('ddd DD MM yyyy') ==  moment(eventDate).format('ddd DD MM yyyy') ){
                                        return 'eventTitle normalDay';
                                    }else if((date.getDay() === 0 || date.getDay() === 6)&& (date.getMonth() != currentMonth)){
                                        return 'otherMonthsweekend normalDay';
                                    }else if((date.getDay() === 0 || date.getDay() === 6)&& (date.getMonth() == currentMonth ) ){
                                        return 'weekend normalDay';
                                    }else if(date.getMonth() != currentMonth){
                                        return 'notThisMonth normalDay'
                                    }
                                }
                            }
                    }
                }
                tileContent={
                    ({ date, view }) => 
                    {
                        for(let i=0;i<eventsList.length;i++){
                            var calDate= moment(date).toDate()
                            var eventDate= moment(eventsList[i].date).toDate()
                            // console.log(moment(calDate).format('ddd DD MM yyyy') ==  moment(eventDate).format('ddd DD MM yyyy'))
                            // console.log(moment(calDate).format('ddd DD MM yyyy') ,'==' , moment(eventDate).format('ddd DD MM yyyy'))

                            if( moment(calDate).format('ddd DD MM yyyy') ==  moment(eventDate).format('ddd DD MM yyyy') ){
                                return (
                                <div className='eventDiv' onClick={(e)=>handleClick(e , eventsList[i] , date )}>
                                    <p className='eventName'>{eventsList[i].name}</p>
                                    <p className='eventAddress'>{eventsList[i].address}</p>
                                    <p className='eventType'>{eventsList[i].type}</p>
                                </div>
                                )
                            }
                        }
                    }
                }
                />
                </Grid>

            </Grid>
        </div>
    )

}

export default CalenderComp;
import React,{useState} from 'react'
import {Grid} from '@mui/material';
import './Login.css';
import EmailIcon from './../../Assets/regpageicon/Vector.png'
import PasswordIcon from './../../Assets/regpageicon/Vector-1.png'
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import {Form} from 'react-bootstrap';
import GoogleLoginIcon from './../../Assets/googleIcon.png'
import FacebookLoginIcon from './../../Assets/facebookLoginIcon.png'
import UserIcon from './../../Assets/regpageicon/User_fill.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useNavigate,useLocation,useParams} from 'react-router-dom';

const Login = () => {

  var navigate = useNavigate();
  var location = useLocation();
  var params=useParams()
  console.log(location)
  const [open,setOpen] = useState(false);
  const [showPass,setShowPass] = useState(false);
  const [showConfPass,setShowConfPass] = useState(false);


  console.log(open)
  const handleRegisterInputs=()=>{
    setOpen(true)
  }

  const handleLogin =()=>{
    localStorage.setItem('logedIn',1);
    navigate('/')
  }

    return (
    <div className={open ? 'mainLogin mainLogin2' : 'mainLogin'}>
      {
        open &&
        <Grid container textAlign={'left'}>
          <Grid item md={11} pl={10} pt={2} xs={11} pb={7} className='backBtnlOGIN'>
            <KeyboardBackspaceIcon style={{cursor:'pointer',height:40,width:40,color:'white'}}
            onClick={()=>{setOpen(false)}}
             />
          </Grid>
        </Grid>
      }
      <div className={open ? 'showLoginSecondary' : 'loginSecondary' } >
        <Grid container>

          <Grid item md={12} xs={12}>
{
  // open &&
          <div className={open ? 'showFName' : 'fname_div' } >
              <Grid container>
                <Grid item md={1} sm={1} xs={2}>
                  <img  src={UserIcon} height={30} width={30} />
                </Grid>
                <Grid item md={10} sm={10} xs={10}>
    <Form.Control type="text" placeholder="First Name" className='fNameInput loginInput' />
                </Grid>
              </Grid>
            </div>

}
{
  // open &&

            <div className={open ? 'showLName' :'lname_div'}>
              <Grid container>
                <Grid item sm={1} xs={2}>
                  <img  src={UserIcon} height={30} width={30} />
                </Grid>
                <Grid item sm={10} xs={10}>
    <Form.Control type="text" placeholder="Last Name" className='lNameInput loginInput' />
                </Grid>
              </Grid>
            </div>
}
            <div className={open ? 'showEmail' :'email_div'}>
              <Grid container>
                <Grid item md={1} sm={1} xs={2}>
                  <img  src={EmailIcon} height={24} width={30} />
                </Grid>
                <Grid item md={10} sm={10} xs={10}> 
    <Form.Control type="email" placeholder="Email" className='emailInput loginInput' />
                </Grid>
              </Grid>
            </div>
            <div className={open ? 'showPass' :'password_div'}>
            <Grid container>
                <Grid item sm={1} xs={2}>
                  <img  src={PasswordIcon} height={25} width={25} />
                </Grid>
                <Grid item sm={10} xs={8}>
    <Form.Control  type={showPass ? 'text' : "password"} placeholder="Password"  className='passwordInput loginInput' />
                </Grid>
                <Grid item sm={1} xs={2}>
                  <RemoveRedEyeSharpIcon  onClick={()=>setShowPass(!showPass)} style={{cursor:'pointer',height:25,width:25}} />
                  {/* <img  src={} height={25} width={30} /> */}
                </Grid>
              </Grid>
            </div>
            {
  // open &&

            <div className={open ? 'showConfirmPass' :'confirm_password_div'}>
            <Grid container>
                <Grid item sm={1} xs={2}>
                  <img  src={PasswordIcon} height={25} width={25} />
                </Grid>
                <Grid item sm={10} xs={8}>
    <Form.Control type={showConfPass ? 'text' : "password"} placeholder="Confirm Password"  className='confirmPasswordInput loginInput' />
                </Grid>
                <Grid item sm={1} xs={2}>
                  <RemoveRedEyeSharpIcon  onClick={()=>setShowConfPass(!showConfPass)}  style={{cursor:'pointer',height:25,width:25}} />
                  {/* <img  src={} height={25} width={30} /> */}
                </Grid>
              </Grid>
            </div>
}

          </Grid>
          
        </Grid>

        <Grid container mt={8}>
        {
            // !open &&
              <>
          <Grid item sm={1} xs={1.5} className={open ? 'showForget' : 'forgetPass'}>
            <input type={'checkbox'} className='rememberMeCheck' />
          </Grid>
          <Grid item sm={5} xs={4.5} textAlign='left' className={open ? 'showForget' : 'forgetPass'}>
            <span style={{color:'white',marginLeft:-20,fontWeight:700}}>Remember me</span>
          </Grid>
          <Grid item sm={6} xs={6} textAlign='right' className={open ? 'showForget' : 'forgetPass'}>
          <span style={{color:'#6358DC',cursor:'pointer',fontWeight:600}}>Forget Password?</span>
          </Grid>
          </> }

          <Grid item sm={12} mt={1} xs={12} >
          <div  className={open ? 'login_Me registerMe' : 'login_Me '} onClick={handleLogin}>
                    <span style={{color:'white',fontWeight:500,fontSize:18}} >{open ? 'Register' : 'Login'}</span>
                </div>
          </Grid>
          {
            // !open &&
          <Grid item sm={12} xs={12} textAlign='right' className={open ? 'showDontHaveAcnt' : 'dontHaveAcnt'}>
            <p style={{color:'white',cursor:'pointer'}}
            onClick={handleRegisterInputs}
            >Don't have an account?<span style={{color:'#6358DC',fontWeight:600}}> Register</span></p>
          </Grid>
          }

        </Grid>
        {

  // !open &&
        <Grid container className= {open ? 'showOr' : 'or'}>
          <Grid item sm={5} xs={5}>
            <hr/>
          </Grid>
          <Grid item sm={2} xs={2}>
            <span style={{color:'white'}}>OR</span>
          </Grid>
          <Grid item sm={5} xs={5}>
          <hr/>
          </Grid>
        </Grid>
      }

{
  // !open &&      
        <div className={open ? 'showGoogleDiv' : 'googleLoginDiv' }>
              <Grid container>
                <Grid item sm={12} xs={12}>
                  <img src={GoogleLoginIcon} style={{height:25,width:25}} />
                  <span style={{position:'relative',bottom:8,left:20}}>
                    Login with Google
                  </span>
                </Grid>
              </Grid>
            </div>
}        
{
  // !open &&

            <div className={open ? 'showFbDiv' : 'facebookLoginDiv'}>
              <Grid container>
                <Grid item sm={12} xs={12}>
                  <img src={FacebookLoginIcon} style={{height:25,width:25,}} />
                  <span style={{position:'relative',bottom:8,left:20}}>
                    Login with Facebook
                  </span>
                </Grid>
              </Grid>
            </div>
}

      </div>
    </div>
  )

}

export default Login
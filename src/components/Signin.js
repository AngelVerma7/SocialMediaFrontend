import React from 'react'
import { useState } from 'react'
import axios from 'axios';
export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [message,setMessage]=useState("")
  const [otp,setOtp]=useState(0)
  const [isOtpSent,setIsOtpSent]=useState(false);

  const sendOtp=()=>{
    const url=process.env.REACT_APP_BACKEND_URL+"/login/otp"
    console.log("otp generation started")
    axios
    .post(url,{
      "email":email
    })
    .then((res) => {
      setIsOtpSent(true)
    }).catch((err)=>{

    })

  }
  const createUser=()=>{
    const url=process.env.REACT_APP_BACKEND_URL+"/login/createuser"
    console.log("otp generation started")
    axios
    .post(url,{
      "email":email,
      "username":username,
      "password":password,
      "otp":Number(otp)

    })
    .then((res) => {

    }).catch((err)=>{
      console.log(err)
    })


  }
  return (

    <div className='flexCenter pabsolute lg-cnt'>

    <div className=' flexCenter lg-cn1'>
 
      <div className='w35 flexVC '>
        <form className='lg-bx1 flexVC borderBlack w100' 
        // onSubmit={login}
        style={{display:isOtpSent===false?"flex":"none"}}
        >
          <div className="lg-logo">
            Social Network
          </div>
          <div className='flexVC lg-wd1' >
            <div className='w100 textS'
            >Enter username</div>
            <input type="text " className='w100 lg-in br-rd4'

              // onChange={(e) => setUsername(e.target.value)}
              // value={username}
            />
          </div>
          <div className='flexVC lg-wd1' >
            <div className='w100 textS'
            >Enter Email</div>
            <input type="text " className='w100 lg-in br-rd4'

              // onChange={(e) => setUsername(e.target.value)}
              // value={username}
            />
          </div>
          <div className='flexVC lg-wd1'>
            <div className='w100 textS '>Password</div>
            <input type="text " className='w100 lg-in br-rd4'
              // onChange={(e) => setPassword(e.target.value)}
              // value={password}
            />
          </div>
          <button className='lg-btn lg-ft1 br-rd4'>
            Generate OTP</button>


        </form>
        <form className='lg-bx1 flexVC borderBlack w100' 
        // onSubmit={login}
        style={{display:isOtpSent===true?"flex":"none"}}
        >
          <div className="lg-logo">
            Social Network
          </div>
          <div className='flexVC lg-wd1' >
            <div className='w100 textS'
            >Enter OTP</div>
            <input type="number " className='w100 lg-in br-rd4'

              // onChange={(e) => setUsername(e.target.value)}
              // value={username}
            />
          </div>
          

          <button className='lg-btn lg-ft1 br-rd4'>
            Generate OTP</button>


        </form>
        <div className='flexCenter lg-bx2 w100 borderBlack'
        >
          Already have  account?

        </div>
      </div>
      <div className='w65 h100'>
        <img src={require('../assets/images/loginlogo.png')} className="imgFull" alt="" />
      </div>
    </div>




    <div>
    < div style={{backgroundColor:"white",display:isOtpSent===false?"block":"none"}}>
      <input type="email" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <input type="username" placeholder='username'value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
      <input type="password" placeholder='password'value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <br />
      <button onClick={sendOtp}>
        Send OTP
      </button>
      <br />  
      {message}
      </div>
      <br /><br />
      <div style={{display:isOtpSent===true?"block":"none"}}>
        otp
        <input type="number" placeholder='otp' value={otp} onChange={(e)=>{setOtp(e.target.value)}}/>
        <button onClick={createUser}>
          Create user
        </button>
      </div>

    
    </div>

  </div>
   
  )
}

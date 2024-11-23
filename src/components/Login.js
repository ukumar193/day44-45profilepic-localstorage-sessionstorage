import React, { useEffect, useRef } from 'react'
import {  useNavigate } from 'react-router-dom'

function Login() {
     let emailInputRef =useRef();
     let PasswordInputRef =useRef();
     let Navigate =useNavigate();
     let validlogin =()=>{
          let email=emailInputRef.current.value;
          let password =PasswordInputRef.current.value;
          if(email ==="kumar@gmail.com" && password ==="kumar@1234"){ 
              localStorage.setItem("emailid",email) ;
              localStorage.setItem("password",password);

              sessionStorage.setItem("emailid",email);
              sessionStorage.setItem("password",password);
               Navigate("/profile")}
          else{alert("Invalid email/ password")}
     }
    useEffect(()=>{
     emailInputRef.current.value =localStorage.getItem("emailid");
     PasswordInputRef.current.value=localStorage.getItem("password");
   if(localStorage.getItem("emailid") && localStorage.getItem("password") ){validlogin(); }
     
    })
  return (
    <div>
     <form className='cs1'>
      <div>
      <label>Email</label>
      <input type='email'ref={emailInputRef} ></input>
      </div>
      <div>
     <label>Password</label>
     <input type='password'ref={PasswordInputRef}></input>
      </div>

      <div >
     <button className="nl1" to="/profile" onClick={()=>{
       validlogin();   
     }}>Login</button>
      </div>
     </form>
    </div>
  )
}

export default Login
import React from 'react'
import { NavLink } from 'react-router-dom';
import {SiDtube} from "react-icons/si";
function Login() {
  return (
    <>
          <div className="container-login">
             <div className="login-container-form">
             <div className="login-form-header">
              <div  className="login-Fp-header"><SiDtube className='login-logo'/></div>
              <p className='heading-login' >LogIn</p>
              </div>
              <label className="label" for="input">Email adress</label>
              <input className="input-lg" type="email" placeholder="Enter Email"/>
              <label className="label" for="input">Password</label>
              <input className="input-lg" type="password" placeholder="************"/>
              <div class="input-check-btn">
                <input className="input-checkbox" type="checkbox"/>
                <h4>Remember me</h4>
                <span  className="frg-paswrd"> Forgot your Password?</span>
              </div>
              <NavLink to ="/"><a className="Login-btn">Login</a></NavLink>
              <div className="login-create-acc">
              <NavLink to = "/SignIn"><button className='create-new-acc'>Create New Account</button></NavLink>
              </div>
              </div>
        </div>
    </>
  )
}

export default Login
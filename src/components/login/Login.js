import React from 'react'
import { NavLink } from 'react-router-dom';
import {RiLoginCircleLine} from "react-icons/ri";
function Login() {
  return (
    <>
          <div className="container-login">
             <div className="login-container-form">
             <div className="login-form-header">
              <div  className="login-Fp-header"><RiLoginCircleLine/></div>
              <p className='heading-login' >LogIn</p>
              </div>
              <label className="label" for="input">Email adress</label>
              <input className="input-lg" type="email" placeholder="Enter Email"/>
              <label className="label" for="input">Password</label>
              <input className="input-lg" type="password" placeholder="************"/>
              <div class="input-check-btn">
                <input className="input-checkbox" type="checkbox"/>
                <h3>Remember me</h3>
                <span className="frg-paswrd"> Forgot your Password?</span>
              </div>
              <NavLink to ="/"><a className="Login-btn">Login</a></NavLink>
              <div className="login-create-acc">
              <NavLink to = "/signIn"><button className='create-new-acc'>Create New Account</button></NavLink>
              </div>
              </div>
        </div>
    </>
  )
}

export default Login
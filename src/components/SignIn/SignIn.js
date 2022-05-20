import React from 'react';
import {FcBusinessman} from "react-icons/fc";
import { NavLink } from 'react-router-dom';


const SignIn = () => {
    return (
        <>
            <div className="container-login">
                <div className="login-container-form">
                    
                    <div className="login-Fp-header"><FcBusinessman  className='login-logo'/></div>
                    <label className="lable" for="input">FirstName</label>
                    <input className="input-lg" type="text" placeholder="Confirm-First-name" />
                    <label className="lable" for="input">LastName</label>
                    <input className="input-lg" type="text" placeholder="Confirm-Second-name" />
                    <label className="lable" for="input">Email adress</label>
                    <input className="input-lg" type="email" placeholder="Enter Email" />
                    <label className="lable" for="input">Password</label>
                    <input className="input-lg" type="password" placeholder="************" />
                    <label className="lable" for="input">Password</label>
                    <input className="input-lg" type="password" placeholder="Confirm-Password" />
                    <div className="input-check-btn">
                        <input className="input-checkbox" type="checkbox" />
                        <h3 className='heading-signin'>I accept all the term & conditions</h3>
                    </div>
                    <a className="Login-btn" >Create New Account</a>
                    <div className="login-create-acc">
                    <NavLink to="/login"><button  className='create-new-acc'>Already have an Account</button></NavLink> 
                    </div>
                </div>
            </div>
        </>
    )
};



export default SignIn
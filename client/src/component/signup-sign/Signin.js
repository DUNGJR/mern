import React, { useState } from 'react'
import './Signup.css'
import { NavLink } from 'react-router-dom';
const Signin = () => {
    
        const [logdata,setData] = useState({
            email:"",
            password:"",
        })
 
 
        console.log(logdata);

        const adddata = (e)=>{
            const { name,value } = e.target;

            setData(()=>{
                return{
                    ...logdata,
                    [name]:value
                }
            })
            
        }

        

    return (
    <section>
        
        <div class="form-box">
        <div action="">
            <h1>Login</h1>
            <div class="form-group">
                <ion-icon name="person-outline"></ion-icon>
                <input type="text" onChange={adddata} value={logdata.email}  class="form-input" placeholder=" " id="email" name="email"/>
                <label for="" class="form-label" >User Name </label>
            </div>
            <div class="form-group">
                <ion-icon name="keypad-outline"></ion-icon>
                <input type="password"  onChange={adddata} value={logdata.password}  class="form-input" placeholder=" "id="password" name="password"/>
                <label for="" class="form-label" >Password</label>
            </div>
            <div class="remember-checkbox">
                <label for=""><input type="checkbox"/>Remember Me</label>
                <NavLink to=''>Forgot your password?</NavLink>
            </div>
            <div class="button-login" >
                
                <button id="login-btn" >
                    Login
                    <ion-icon name="log-in"></ion-icon>
                </button>
            </div>
            

            <div class="Register">
                <p>Don't have an account ? <NavLink to='/Register'>Register Now</NavLink></p>
            </div>  
        </div>
        </div>
        
    </section>
  )
}

export default Signin

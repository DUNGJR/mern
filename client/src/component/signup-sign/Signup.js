import React,  { useState } from 'react'
import './Signup.css'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


    

const Signup = () => {
  
    const [udata, setUdata] = useState({     
        email: "",
        password: "",
        cpassword: ""
    });


    console.log(udata);

    const adddata = (e) => {
        const { name, value } = e.target;
        console.log(name,value);

        setUdata((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    };

    const senddata = async (e) => {
        e.preventDefault();

        const {email, password, cpassword } = udata;
        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                     email, password, cpassword
                })
            });

            const data = await res.json();
            // console.log(data);

            if (res.status === 422 || !data) {
                toast.error("Invalid Details 👎!", {
                    position: "top-center"
                });
            } else {
                setUdata({
                    ...udata,  email: "", password: "", cpassword: ""
                });
                toast.success("Registration Successfully done 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log("front end ka catch error hai" + error.message);
        }
    }


    return (

    <section>
    <div class="form-box">
    <div action="">
        <h1>Register</h1>
        <div class="form-group">
            <ion-icon name="person-outline"></ion-icon>
            <input type="text" 
            
            onChange={adddata} value={udata.email} 

            class="form-input" placeholder=" " id="email" name="email"/>
            <label for="" class="form-label" >User Name </label>
        </div>
        <div class="form-group">
            <ion-icon name="keypad-outline"></ion-icon>
            <input type="password" 
            
            onChange={adddata} value={udata.password} 
            
            class="form-input" placeholder=" " id="password" name="password"/>
            <label for="" class="form-label" >Password</label>
        </div>
        <div class="form-group">
            <ion-icon name="repeat-outline"></ion-icon>
            <input type="password" 
            
            onChange={adddata} value={udata.cpassword} 
            
            class="form-input" placeholder=" " id="cpassword" name="cpassword"/>
            <label for="" class="form-label" >Confirm Your Password</label>
        </div>
        
        <div class="button-register">
            
            <button id="register-btn">
                Register
                <ion-icon name="log-in"></ion-icon>
            </button>
        </div>
        <div class="Register">
            <p>Have an account ? <NavLink to='/login'>Login Now</NavLink></p>
        </div>
    </div>
</div>
</section>
  )
}

export default Signup

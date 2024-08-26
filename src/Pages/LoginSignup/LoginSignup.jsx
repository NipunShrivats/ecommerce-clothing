import React from 'react';
import "./LoginSignup.css";

import { Link } from "react-router-dom"

export default function LoginSignup() {
    return (
        <>
            <div className='loginSignup container'>
                <div className='loginSignup-container'>
                    <h1>Sign up</h1>
                    <div className='loginSignup-fields'>
                        <form action="" >
                            <input type="text" placeholder='Please Enter Name...' />
                            <input type="email" placeholder='Please Enter Email...' />
                            <input type="password" placeholder='Please Enter Password...' />

                            <button className='btn signupbtn' type='submit'>Sign up</button>

                            <p className='loginsignup-login'>Already have an account? <Link><b> Login here. </b></Link></p>

                            <div className='loginsignup-agree'>
                                <input type="checkbox" name='' id='' />
                                <p>By continuing, I agree to the terms of use & privacy policy.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

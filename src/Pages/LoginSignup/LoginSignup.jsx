import React, { useEffect, useState } from 'react'
import "./LoginSignup.css";

import { Link } from "react-router-dom"
import { Sugar } from 'react-preloaders';

export default function LoginSignup() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    return (
        <>
            {
                loading ?
                    <div className='loader-cover'>
                        <Sugar />
                    </div>
                    :
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
            }
        </>
    )
}

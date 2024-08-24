import React from 'react';
import "./NewsLetter.css";

export default function NewsLetter() {
    return (
        <>
            <div className='newsLetter container'>
                <div className='newsBox'>
                    <h1>Get exclusive offers on your Email</h1>
                    <p>Subscribe to our newsletter and stay updated</p>

                    <div>
                        <input type="email" placeholder='Enter Email' />
                        <button className='btn'>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

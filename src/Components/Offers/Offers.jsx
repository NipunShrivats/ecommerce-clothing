import React from 'react'
import "./Offers.css"
import exclusive from "../../assets/Frontend_Assets/exclusive.png"
export default function Offers() {
    return (
        <>
            <div className='offers container'>
                <div>
                    <img src={exclusive} alt="" />
                    <button className='offer-btn btn'>check now</button>
                </div>
            </div>
        </>
    )
}

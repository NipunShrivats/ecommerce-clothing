import React, { useState } from 'react'
import "./Item.css";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

export default function Item(props) {
    const { image, name, new_price, old_price } = props
    return (
        <>
            <div className='item'>
                <div className='images-holder'>
                    <img src={image} alt="" className='img' />
                    <div className='layer1'>
                        {/* <div className='options'> */}
                        <div className='top'>
                            <span><FaHeart /></span>
                            <span><FaShoppingCart /></span>
                        </div>
                        <div className='bottom'>
                            <button>View Product</button>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <p>{name}</p>
                <div className='item-prices'>
                    <div className='item-price-new'>
                        ₹{new_price}/-
                    </div>
                    <div className='item-price-old'>
                        ₹{old_price}
                    </div>
                </div>
            </div>
        </>
    )
}

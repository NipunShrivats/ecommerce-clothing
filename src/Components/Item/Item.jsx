import React, { useState } from 'react'
import "./Item.css";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom"

export default function Item(props) {
    const { image, name, new_price, old_price } = props
    return (
        <>
            <div className='item'>
                <div className='images-holder'>
                    <img src={image} alt="" className='img' />
                    <div className='layer1'>
                        <div className='top'>
                            <span><FaHeart /></span>
                            <span><FaShoppingCart /></span>
                        </div>
                        <div className='bottom'>
                            <Link to={`/product/${props.id}`}>
                                <button>View Product</button>
                            </Link>
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

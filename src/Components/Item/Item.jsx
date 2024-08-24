import React, { useState } from 'react'
import "./Item.css";
export default function Item(props) {
    const { image, name, new_price, old_price } = props
    return (
        <>
            <div className='item'>
                <img src={image} alt="" />
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

import React from 'react'
import './ProductDisplay.css'

export default function ProductDisplay(props) {
    return (
        <>
            <div className="productDisplay">

                <div className='productDisplay-Left'>
                    <img src={products.image} alt="" />
                    <img src={products.image} alt="" />
                    <img src={products.image} alt="" />
                    <img src={products.image} alt="" />
                </div>
                <div className='productDisplayImage'>
                    <img src={product.image} alt="" className='productDisplay-main-img' />
                </div>

                <div className='productDisplay-Right'>
                    <h1>{product.name}</h1>
                    <div className='productDisplay-right-star'></div>
                </div>
            </div>
        </>
    )
}

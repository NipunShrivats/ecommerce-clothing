import React, { useState } from 'react'
import './ProductDisplay.css'

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function ProductDisplay(props) {
    const { product } = props

    const [value, setValue] = useState(4);
    return (
        <>
            <div className="productDisplay container">

                <div className='productDisplay-Left'>
                    <div className='productDisplay-img-list'>
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className='productDisplay-img'>
                    <img src={product.image} alt="" className='productDisplay-main-img' />
                </div>

                <div className='productDisplay-Right'>
                    <h1 className='heading'>{product.name}</h1>
                    <div className='productDisplay-right-star'>
                        <Box sx={{ '& > legend': { mt: 2 } }} className="box">
                            {/* <Typography component="legend">Read only</Typography> */}
                            <Rating name="read-only" value={value} readOnly />
                            <p>(122)</p>
                        </Box>
                    </div>
                    <div className="productDisplay-Right-Prices">
                        <div className="productDisplay-right-price-old">₹{product.old_price}</div>
                        <div className="productDisplay-right-price-new">₹{product.new_price}/-</div>
                    </div>

                    <div className='productDisplay-right-description'>
                        {product.description}
                    </div>
                    <div className='productDisplay-right-size'>
                        <h1>Select Size</h1>
                        <div className='productDisplay-right-size'>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button>ADD TO CART</button>
                    <p className='productDisplay-right-category'> <span>Category: </span> Woman, T-shirt, Crop Top</p>
                    <p className='productDisplay-right-category'> <span>Tags: </span>Modern, Latest</p>
                </div>
            </div>
        </>
    )
}

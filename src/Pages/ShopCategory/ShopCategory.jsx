import React, { useContext } from 'react'
import "./ShopCategory.css"
import { ShopContext } from '../../Context/ShopContext';

export default function ShopCategory(props) {

    const { all_product } = useContext(ShopContext);
    const { banner } = props;
    return (
        <>
            <div className='shop-category'>
                <img src={banner} alt="" />
            </div>
        </>
    )
}

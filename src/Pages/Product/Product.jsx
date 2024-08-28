import React, { useContext } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext'
import BreadCrums from '../../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';

export default function Product() {
    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId))
    return (
        <>
            <div>
                <BreadCrums product={product} />
                <ProductDisplay product={product} />
            </div>
        </>
    )
}

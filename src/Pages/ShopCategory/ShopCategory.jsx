import React, { useContext } from 'react'
import "./ShopCategory.css"

import { ShopContext } from '../../Context/ShopContext';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import all_products from "../../assets/Frontend_Assets/all_product"
import Item from "../../Components/Item/Item"

export default function ShopCategory(props) {

    const { all_product } = useContext(ShopContext);
    const { banner } = props;
    return (
        <>
            <div className='shop-category container'>
                <img className='shopcategory-banner' src={banner} alt="" />
                <div className="shopcategory-indexSort">
                    <p>
                        <span>Showing 1-12</span> out of 36 products
                    </p>
                    <div className='shopcategory-sort'>
                        <btn className="btn-transparent">sort by <span> <IoIosArrowDropdownCircle /></span></btn>
                    </div>
                </div>
                <div className='shopcategory-products'>
                    {all_products.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price} />
                        }
                        else {
                            return null
                        }
                    })}
                </div>

                <div className='loadmore-div'>
                    <button className='shopcategory-showmore btn-transparent'>Show More</button>
                </div>


            </div>
        </>
    )
}

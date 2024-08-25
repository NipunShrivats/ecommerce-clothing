import React from 'react'
import "./Popular.css"
import data_product from "../../assets/Frontend_Assets/data"
import Item from "../../Components/Item/Item"

export default function Popular() {
    return (
        <>
            <div className='popular container'>
                <div className='popular-title'>
                    <h1>popular in women</h1>
                    <div className='title-line'></div>
                </div>
                <div className='popular-item'>
                    {
                        data_product.map((item, i) => {
                            return <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
